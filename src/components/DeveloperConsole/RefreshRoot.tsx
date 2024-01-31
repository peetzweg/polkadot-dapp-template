/* eslint-disable no-console */
import { Button } from "@/components/ui/button.js"
import { useAliceKeyPair } from "@/hooks/useAliceKeyPair.js"
import { useExtrinsicAs } from "@/lib/useExtrinsic.js"
import { useChain } from "@/state/chains.js"
import { ShadowInnerIcon } from "@radix-ui/react-icons"

export const RefreshRoot: React.FC = () => {
  const { People } = useChain()

  const aliceKeyPair = useAliceKeyPair()
  const { mutateAsync: refreshRoot, isPending } = useExtrinsicAs(
    People.api.tx.people.refreshRoot,
    aliceKeyPair,
  )

  return (
    <div className="flex w-full flex-row gap-2">
      <Button className="w-1/3" type="submit" onClick={() => refreshRoot([])}>
        Refresh
        {isPending && <ShadowInnerIcon className="ml-2 animate-spin" />}
      </Button>
      <Button
        className="w-1/3"
        type="submit"
        onClick={() => {
          console.log("NOT IMPLEMENTED")
        }}
      >
        Push
        {isPending && <ShadowInnerIcon className="ml-2 animate-spin" />}
      </Button>
      <Button
        className="w-1/3"
        type="submit"
        onClick={() => {
          console.log("NOT IMPLEMENTED")
        }}
      >
        Bake
        {isPending && <ShadowInnerIcon className="ml-2 animate-spin" />}
      </Button>
    </div>
  )
}
