import { useQuery } from "@tanstack/react-query"
import { formatBalance } from "../lib/formatBalance.js"
import { useApi } from "../providers/api-provider.js"
import { useKeyringStore } from "../state/keyring.js"
import { Button } from "./ui/button.js"
import { Textarea } from "./ui/textarea.js"

export const AccountInfo: React.FC = () => {
  const { api, decimals } = useApi()
  const { pair, mnemonic, clear } = useKeyringStore()

  const { data } = useQuery({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: ["system.account", pair?.address],
    queryFn: async () => {
      return (await api.query.system.account(pair!.address)).data
    },
    enabled: !!pair,
  })

  if (!pair) return null

  return (
    <div className="relative flex w-auto flex-col gap-4 rounded-md border p-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:p-6 lg:p-6">
      <>
        <div className="space-y-2">
          <h2 className="text-3xl font-extrabold leading-6 tracking-tight">
            {pair.meta.name}
          </h2>
          <p className="mt-1 break-all font-mono text-sm text-gray-500">
            {pair.address}
          </p>
        </div>

        <div className="flex flex-row justify-around">
          <div className="flex flex-1 flex-col items-end justify-center space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
            <div className="text-2xl font-bold tabular-nums">
              {data ? formatBalance(data.free.toBigInt(), { decimals }) : "n/a"}
            </div>
            <p className="text-xs text-muted-foreground">Free</p>
          </div>
          <div className=" flex flex-1 flex-col items-end justify-center space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
            <div className="text-2xl font-bold tabular-nums">
              {data && formatBalance(data.reserved.toBigInt(), { decimals })}
            </div>
            <p className="text-xs text-muted-foreground">Reserved</p>
          </div>
          <div className=" flex flex-1 flex-col items-end justify-center space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
            <div className="text-2xl font-bold tabular-nums">
              {data && formatBalance(data.frozen.toBigInt(), { decimals })}
            </div>
            <p className="text-xs text-muted-foreground">Frozen</p>
          </div>
        </div>
        <div>
          <Textarea readOnly className="text-sm" value={mnemonic} />
        </div>
        <div className="flex flex-row justify-end">
          <Button variant={"destructive"} onClick={clear}>
            Forget
          </Button>
        </div>
      </>
    </div>
  )
}
