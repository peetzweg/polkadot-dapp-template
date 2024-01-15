import { mnemonicToEntropy } from "@polkadot/util-crypto"
import { PersonIcon, ShadowInnerIcon } from "@radix-ui/react-icons"
import { useQuery } from "@tanstack/react-query"
import { useCallback } from "react"
import { useExtrinsic } from "../lib/useExtrinsic.js"
import { cn } from "../lib/utils.js"
import { useApi } from "../providers/api-provider.js"
import { useQueryCandidateState } from "../queries/useQueryCandidateState.js"
import { useVerifiable } from "../queries/useVerifiable.js"
import { useKeyringStore } from "../state/keyring.js"
import { Button } from "./ui/button.js"
import { Input } from "./ui/input.js"
import { Label } from "./ui/label.js"
import { u8aToHex } from "@polkadot/util"
interface RegisterProps {
  className?: string
}

export const Register: React.FC<RegisterProps> = ({ className }) => {
  const { api } = useApi()
  const { pair, mnemonic } = useKeyringStore()
  const { verifiable, isReady } = useVerifiable()

  const { data: candidate } = useQueryCandidateState()

  const { data: meMember } = useQuery({
    queryKey: ["member", pair?.address, mnemonic],
    queryFn: async () => {
      return verifiable.memberFromEntropy(mnemonicToEntropy(mnemonic!))
    },
    enabled: isReady,
  })

  const { mutateAsync: register, isPending } = useExtrinsic(
    api.tx.proofOfInk.register,
  )

  const onClick = useCallback(() => {
    if (!meMember) return
    const member = api.createType("Member", meMember)
    const call = api.tx.proofOfInk.register(member.toHex())
    const u8a = call.method.toU8a()

    const encodedCall = u8aToHex(u8a)
    console.log("Register Call Data", encodedCall)
    register([member.toHex()])
  }, [api, meMember, register])

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

          <Button disabled={isPending} onClick={onClick}>
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
