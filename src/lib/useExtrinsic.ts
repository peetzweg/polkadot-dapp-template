/* eslint-disable no-console */
import {
  AddressOrPair,
  SubmittableExtrinsicFunction,
} from "@polkadot/api/types"
import { UseMutationResult, useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { useApi } from "../providers/api-provider"
import { useKeyringStore } from "../state/keyring"

// type UseExtrinsic<
//   TExtrinsicFn extends SubmittableExtrinsicFunction<"promise">,
// > = (
//   fn: TExtrinsicFn,
// ) => UseMutationResult<void, Error, Parameters<TExtrinsicFn>, void>

export const useExtrinsic = <
  TExtrinsicFn extends SubmittableExtrinsicFunction<"promise">,
>(
  fn: TExtrinsicFn,
): UseMutationResult<void, Error, Parameters<TExtrinsicFn>, void> => {
  const { pair } = useKeyringStore()
  if (!pair) throw "No KeyPair Available"
  return useExtrinsicAs(fn, pair!)
}

export const useExtrinsicAs = <
  TExtrinsicFn extends SubmittableExtrinsicFunction<"promise">,
>(
  extrinsicFn: TExtrinsicFn,
  addressOrPair: AddressOrPair,
): UseMutationResult<void, Error, Parameters<TExtrinsicFn>, void> => {
  // TODO should not use api here, should use the API from the given extrinsicFn
  const { api } = useApi()
  extrinsicFn.meta.registry.findMetaEvent

  return useMutation({
    mutationKey: [addressOrPair, extrinsicFn.meta.name],
    onSuccess: (...args) => {
      toast.success(`Success: ${extrinsicFn.section}::${extrinsicFn.meta.name}`)
      console.info("Success:", args)
    },
    onError: (error: Error) => {
      toast.error(
        `Error: ${extrinsicFn.section}::${extrinsicFn.meta.name}\n${JSON.stringify(error.message)}`,
      )
      console.error("Error:", error)
    },
    mutationFn: (args): Promise<void> => {
      const call = extrinsicFn(...args)

      return new Promise((resolve, reject) => {
        call
          .signAndSend(addressOrPair, ({ status, events, dispatchError }) => {
            if (dispatchError) {
              if (dispatchError.isModule) {
                const { docs, method, section } =
                  extrinsicFn.meta.registry.findMetaError(
                    dispatchError.asModule,
                  )
                reject(new Error(`${section}.${method}: ${docs.join(" ")}`))
              } else {
                console.error("Unhandled dispatchError", dispatchError)
                reject(dispatchError)
              }
            }

            switch (status.type) {
              // TODO wait for finalization or inform user about it?
              case "InBlock":
                {
                  console.log("Block: ", status.asInBlock.toHex())
                  const successEvents = events.filter(({ event }) =>
                    api.events.system.ExtrinsicSuccess.is(event),
                  )
                  if (successEvents.length > 0) {
                    resolve()
                  } else {
                    // In block or finalized but not successfully
                    reject(new Error("No Success Event"))
                  }
                }
                break

              case "Finalized":
              case "Retracted":
              case "Usurped":
              case "Invalid":
              case "Dropped":
              case "Future":
              case "Ready":
                console.log("Status not handled", { status: status.toHuman() })
                break
              case "Broadcast":
                console.log("Broadcast", status.asBroadcast[0].toHex())
                break
            }
          })
          .catch((error) => reject(error))
      })
    },
  })
}
