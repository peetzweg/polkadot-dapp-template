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
  if (!pair) throw "No pair"
  return useExtrinsicAs(fn, pair!)
}

export const useExtrinsicAs = <
  TExtrinsicFn extends SubmittableExtrinsicFunction<"promise">,
>(
  extrinsicFn: TExtrinsicFn,
  addressOrPair: AddressOrPair,
): UseMutationResult<void, Error, Parameters<TExtrinsicFn>, void> => {
  const { api } = useApi()
  return useMutation({
    mutationKey: [addressOrPair, extrinsicFn.meta.name],
    onSuccess: () => {
      toast.success(
        `Success: ${extrinsicFn.section}::${extrinsicFn.meta.name}`,
        { position: "bottom-center" },
      )
      console.log("success")
    },
    onError: (error: Error) => {
      toast.error(JSON.stringify(error.message))
      console.log("error", error)
    },
    mutationFn: (args): Promise<void> => {
      const call = extrinsicFn(...args)

      return new Promise((resolve, reject) => {
        call
          .signAndSend(addressOrPair, ({ status, events, dispatchError }) => {
            // Reject on Errors
            if (dispatchError) reject(dispatchError)

            // Resolve on Success
            if (status.isInBlock || status.isFinalized) {
              const successEvents = events
                // find/filter for failed events
                .filter(({ event }) =>
                  api.events.system.ExtrinsicSuccess.is(event),
                )
              if (successEvents.length > 0) {
                resolve()
              }
            }
          })
          .catch((error) => reject(error))
      })
    },
  })
}
