import { mnemonicToEntropy } from "@polkadot/util-crypto"
import { PersonIcon, ShadowInnerIcon } from "@radix-ui/react-icons"
import { useMutation, useQuery } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { handleApiError } from "../lib/handleApiError.js"
import { cn } from "../lib/utils.js"
import { useApi } from "../providers/api-provider.js"
import { useQueryCandidateState } from "../queries/useQueryCandidateState.js"
import { useVerifiable } from "../queries/useVerifiable.js"
import { useKeyringStore } from "../state/keyring.js"
import { Button } from "./ui/button.js"
import { Input } from "./ui/input.js"
import { Label } from "./ui/label.js"

interface RegisterProps {
  className?: string
}

export const Register: React.FC<RegisterProps> = ({ className }) => {
  const { api } = useApi()
  const { pair, mnemonic } = useKeyringStore()
  const { verifiable, isReady } = useVerifiable()

  const { data: candidate, isLoading } = useQueryCandidateState()

  const { data: meMember } = useQuery({
    queryKey: ["member", pair?.address, mnemonic],
    queryFn: async () => {
      return verifiable.memberFromEntropy(mnemonicToEntropy(mnemonic!))
    },
    enabled: isReady,
  })

  const { mutate: register, isPending } = useMutation({
    mutationKey: ["proofOfInk", "register", pair?.address],
    onError: handleApiError,
    onSuccess: (data) => {
      console.log({ data })
      toast.success("Success!")
    },
    mutationFn: () => {
      if (!meMember) throw Error("Member not calculated")
      const call = api.tx.proofOfInk.register(meMember)

      return new Promise((resolve, reject) => {
        call
          .signAndSend(
            pair!,
            ({ status, events, dispatchError, dispatchInfo }) => {
              if (dispatchError) reject(dispatchError)

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
                        reject(error)
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
        {
          "pointer-events-none opacity-25": !candidate?.isProven,
          "outline-none ring-2 ring-ring ring-offset-2 ring-offset-background":
            candidate?.isProven,
        },
      )}
    >
      <>
        <div className="flex flex-col space-y-2">
          <h2 className="text-3xl font-extrabold leading-6 tracking-tight">
            Register as Person
          </h2>
          <code className="break-words">
            ProofOfInk::register(GenerateVerifiable::member_from_secret())
          </code>
        </div>
        <div className="flex h-full flex-col  justify-center gap-4">
          <Label>Member</Label>
          <Input disabled value={api.createType("Member", meMember).toHex()} />

          <Button disabled={isPending} onClick={() => register()}>
            Become a Person
            {isPending ? (
              <ShadowInnerIcon className="ml-2 animate-spin" />
            ) : (
              <PersonIcon className="ml-2" />
            )}
          </Button>
        </div>
      </>
    </div>
  )
}
