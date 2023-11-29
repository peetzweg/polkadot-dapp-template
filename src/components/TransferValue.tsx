import { useMutation } from "@tanstack/react-query"
import { useWeb3 } from "../providers/web3-provider"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { useApi } from "../providers/api-provider"

export const TransferValue: React.FC = () => {
  const { currentAccount, injector } = useWeb3()
  const { api } = useApi()

  const { mutate: transfer } = useMutation({
    mutationFn: (value: number) => {
      if (!api) throw new Error("api is not ready")
      if (!injector) throw new Error("injector is not ready")
      if (!currentAccount) throw new Error("currentAccount is not ready")

      return api.tx.balances
        .transferAllowDeath(
          "5EXDP6GjBRaxwfxeoLKaic7FRWz71nzkhKQyjWWACQ3aSpF1",
          value,
        )
        .signAndSend(
          currentAccount.address,
          { signer: injector.signer },
          (status) => {
            console.log({ status })
          },
        )
    },
  })

  return (
    <div className="relative flex flex-col items-end space-y-2 rounded-md border p-6 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
      <Input placeholder="receiver" />
      <Button onClick={() => transfer(100)}>Transfer</Button>
    </div>
  )
}
