import { mnemonicToEntropy } from "@polkadot/util-crypto"
import { IdCardIcon, PersonIcon, ShadowInnerIcon } from "@radix-ui/react-icons"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { handleApiError } from "../lib/handleApiError.js"
import { cn } from "../lib/utils.js"
import { useApi } from "../providers/api-provider.js"
import { useVerifiable } from "../queries/useVerifiable.js"
import { useKeyringStore } from "../state/keyring.js"
import { Button } from "./ui/button.js"
import { Input } from "./ui/input.js"
import { Label } from "./ui/label.js"

interface RegisterAliasProps {
  className?: string
}

export const RegisterAlias: React.FC<RegisterAliasProps> = ({ className }) => {
  const { api } = useApi()
  const { pair, mnemonic } = useKeyringStore()
  const queryClient = useQueryClient()
  const { verifiable, isReady } = useVerifiable()

  const { mutate: setAlias, isPending } = useMutation({
    mutationKey: ["people", "setAlias", pair?.address],
    onError: (error) => console.error(error),
    mutationFn: async () => {
      const { proof, alias } = await verifiable.generateProof(
        mnemonicToEntropy(mnemonic!),
        api.createType("MembersVec", new Uint8Array()).toU8a(),
      )
      console.log({ proof, alias })
      const setAlias = api.tx.people.setAliasAccount(pair!.address)
      const call = api.tx.people.underAlias(setAlias)

      return new Promise((resolve, reject) => {
        call
          .signAndSend(pair!, (event) => {
            if (event.isCompleted) {
              void queryClient.invalidateQueries()
              resolve(event)
            }
            if (event.isError) {
              reject(event)
            }
            if (event.dispatchError) {
              reject(event.dispatchError)
            }
            console.log({ event })
            // TODO get hold of personal ID to push to root
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
      )}
    >
      <>
        <div className="space-y-2">
          <h2 className="text-3xl font-extrabold leading-6 tracking-tight">
            Set Alias
          </h2>
        </div>
        <div className="flex h-full flex-col  justify-center gap-4">
          <Label>Account</Label>
          <Input disabled value={pair?.address} />

          <Label>Context</Label>
          <Input disabled value="context" />

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
