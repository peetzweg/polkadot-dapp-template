import { mnemonicToEntropy } from "@polkadot/util-crypto"
import { IdCardIcon, ShadowInnerIcon } from "@radix-ui/react-icons"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { handleApiError } from "../lib/handleApiError.js"
import { cn } from "../lib/utils.js"
import { useApi } from "../providers/api-provider.js"
import { useVerifiable } from "../queries/useVerifiable.js"
import { useKeyringStore } from "../state/keyring.js"
import { Button } from "./ui/button.js"
import { Input } from "./ui/input.js"
import { Label } from "./ui/label.js"
import toast from "react-hot-toast"

interface RegisterAliasProps {
  className?: string
}

export const RegisterAlias: React.FC<RegisterAliasProps> = ({ className }) => {
  const { api } = useApi()
  const { pair, mnemonic } = useKeyringStore()
  const queryClient = useQueryClient()
  const { verifiable, isReady } = useVerifiable()
  const context = Uint8Array.from(new Array(32).fill(1))

  const { mutate: setAlias, isPending } = useMutation({
    mutationKey: ["people", "setAlias", pair?.address],
    onError: handleApiError,
    onSuccess: (data) => {
      console.log({ data })
      toast.success("Success!")
    },
    mutationFn: async () => {
      const setAlias = api.tx.people.setAliasAccount(pair!.address)
      const message = setAlias.toU8a()
      //TODO use this context
      // pub const MOB_CONTEXT: Context = *b"pop:polkadot.network/mob-rule   ";
      const { proof, alias } = await verifiable.generateProof(
        mnemonicToEntropy(mnemonic!),
        api.createType("MembersVec", new Uint8Array()).toU8a(),
        context,
        message,
      )
      api.consts.console.log({ proof, alias, context })
      const call = api.tx.people.asPersonalAlias(context, setAlias, proof)

      return new Promise((resolve, reject) => {
        call
          .signAndSend(
            pair!,
            ({ status, events, dispatchError, dispatchInfo }) => {
              if (status.isInBlock || status.isFinalized) {
                const successEvents = events
                  // find/filter for failed events
                  .filter(({ event }) =>
                    api.events.system.ExtrinsicSuccess.is(event),
                  )
                if (successEvents.length > 0) {
                  resolve(successEvents)
                }

                events
                  // find/filter for failed events
                  .filter(({ event }) =>
                    api.events.system.ExtrinsicFailed.is(event),
                  )
                  // we know that data for system.ExtrinsicFailed is
                  // (DispatchError, DispatchInfo)
                  .forEach(
                    ({
                      event: {
                        data: [error, info],
                      },
                    }) => {
                      if (error.isModule) {
                        // for module errors, we have the section indexed, lookup
                        const decoded = api.registry.findMetaError(
                          error.asModule,
                        )
                        const { docs, method, section } = decoded

                        console.log(`${section}.${method}: ${docs.join(" ")}`)
                        reject(`${section}.${method}: ${docs.join(" ")}`)
                      } else {
                        // Other, CannotLookup, BadOrigin, no extra info
                        console.log(error.toString())
                      }
                    },
                  )
              }
            },
          )
          .catch((error) => {
            reject(error)
          })
      })
    },
  })

  return (
    <div
      className={cn(
        "relative col-span-1 flex h-full w-auto flex-col gap-4 rounded-md border p-4 md:p-6 lg:p-6",
        className,
      )}
    >
      <>
        <div className="flex flex-col space-y-2">
          <h2 className="text-3xl font-extrabold leading-6 tracking-tight">
            Set Alias for Context
          </h2>
          <code className="break-words">
            People::as_personal_alias(context, setAliasCall, proof)
          </code>
        </div>
        <div className="flex h-full flex-col  justify-center gap-4">
          <Label>Public Key</Label>
          <Input disabled value={pair?.address} />

          <Label>Context</Label>
          <Input disabled value={`[${context.join(", ")}]`} />

          <Button disabled={isPending || !isReady} onClick={() => setAlias()}>
            Set Account Alias
            {isPending ? (
              <ShadowInnerIcon className="ml-2 animate-spin" />
            ) : (
              <IdCardIcon className="ml-2" />
            )}
          </Button>
        </div>
      </>
    </div>
  )
}
