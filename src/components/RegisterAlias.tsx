/* eslint-disable no-console */
import { mnemonicToEntropy } from "@polkadot/util-crypto"
import { IdCardIcon, ShadowInnerIcon } from "@radix-ui/react-icons"
import { useCallback } from "react"
import { useExtrinsic } from "../lib/useExtrinsic.js"
import { cn } from "../lib/utils.js"
import { useApi } from "../providers/api-provider.js"
import { useQueryRootMembers } from "../queries/useQueryRootMembers.js"
import { useVerifiable } from "../queries/useVerifiable.js"
import { useKeyringStore } from "../state/keyring.js"
import { Button } from "./ui/button.js"
import { Input } from "./ui/input.js"
import { Label } from "./ui/label.js"

interface RegisterAliasProps {
  className?: string
}

// TODO should probably be available on api as it's a constant of the pallet
// pub const MOB_CONTEXT: Context = *b"pop:polkadot.network/mob-rule   ";
// "0x706f703a706f6c6b61646f742e6e6574776f726b2f6d6f622d72756c65202020"
const MOB_RULE_CONTEXT = new Uint8Array([
  112, 111, 112, 58, 112, 111, 108, 107, 97, 100, 111, 116, 46, 110, 101, 116,
  119, 111, 114, 107, 47, 109, 111, 98, 45, 114, 117, 108, 101, 32, 32, 32,
])

export const RegisterAlias: React.FC<RegisterAliasProps> = ({ className }) => {
  const { api } = useApi()
  const { pair, mnemonic } = useKeyringStore()
  const { verifiable, isReady } = useVerifiable()

  const { data: members, isLoading } = useQueryRootMembers()

  // TODO isPending is not enough as proof generation does take quite long, so pregen with Query
  const { mutateAsync: asPersonalAlias, isPending } = useExtrinsic(
    api.tx.people.asPersonalAlias,
  )

  const setAlias = useCallback(async () => {
    const setAlias = api.tx.people.setAliasAccount(pair!.address)
    // TODO broken call data, byte prefix removal
    const message = setAlias.toU8a().slice(2)
    const encodedMembers = api.createType("MembersVec", members).toU8a()

    const { proof, alias } = await verifiable.generateProof(
      mnemonicToEntropy(mnemonic!),
      encodedMembers,
      MOB_RULE_CONTEXT,
      message,
    )
    console.log("alias", alias)

    return asPersonalAlias([MOB_RULE_CONTEXT, message, proof])
  }, [api, asPersonalAlias, members, mnemonic, pair, verifiable])

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
          <Input disabled value={`[${MOB_RULE_CONTEXT.join(", ")}]`} />

          <Button
            disabled={isPending || !isReady || isLoading}
            onClick={setAlias}
          >
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
