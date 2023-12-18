import { PersonIcon, ShadowInnerIcon } from "@radix-ui/react-icons"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { handleApiError } from "../lib/handleApiError.js"
import { cn } from "../lib/utils.js"
import { useApi } from "../providers/api-provider.js"
import { useQueryCandidateState } from "../queries/useQueryCandidateState.js"
import { useKeyringStore } from "../state/keyring.js"
import { Button } from "./ui/button.js"
import { initSync } from "../wasm/pkg/verifiable.js"
import { useVerifiable } from "../queries/useVerifiable.js"
import { mnemonicToEntropy } from "@polkadot/util-crypto"
import { Input } from "./ui/input.js"
import { Label } from "./ui/label.js"

interface RegisterProps {
  className?: string
}

export const Register: React.FC<RegisterProps> = ({ className }) => {
  const { api } = useApi()
  const { pair, mnemonic } = useKeyringStore()
  const queryClient = useQueryClient()
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
    mutationKey: ["proofOfInk", "apply", pair?.address],
    mutationFn: () => {
      if (!meMember) throw Error("Member not calculated")
      const call = api.tx.proofOfInk.register(meMember)

      return new Promise((resolve, reject) => {
        call
          .signAndSend(pair!, (event) => {
            if (event.isCompleted) {
              void queryClient.invalidateQueries({ queryKey: ["proofOfInk"] })
              resolve(event)
            }
            if (event.isError) {
              reject(event)
            }
          })
          .catch((error) => {
            handleApiError(error)
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
        <div className="space-y-2">
          <h2 className="text-3xl font-extrabold leading-6 tracking-tight">
            Register as Person
          </h2>
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
