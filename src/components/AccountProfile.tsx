import { useQuery } from "@tanstack/react-query"
import { formatBalance } from "../lib/formatBalance"
import { useApi } from "../providers/api-provider"
import { useWeb3 } from "../providers/web3-provider"

export const AccountProfile: React.FC = () => {
  const { api, decimals } = useApi()
  const { currentAccount } = useWeb3()

  const { data } = useQuery({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: ["system.account", currentAccount?.address],
    queryFn: async () => {
      return (await api.query.system.account(currentAccount!.address)).data
    },
    enabled: !!currentAccount,
  })

  return (
    <div className="relative flex w-auto flex-col space-y-2 rounded-md border p-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:p-6 lg:p-6">
      {data && (
        <>
          <div className="space-y-2">
            <h2 className="text-4xl font-extrabold leading-6 tracking-tight">
              {currentAccount?.meta.name}
            </h2>
            <p className="mt-1 break-all font-mono text-sm text-gray-500">
              {currentAccount?.address}
            </p>
          </div>

          <div className="flex flex-row justify-around">
            <div className="flex flex-1 flex-col items-end justify-center space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
              <div className="text-2xl font-bold tabular-nums">
                {formatBalance(data.free.toBigInt(), { decimals })}
              </div>
              <p className="text-xs text-muted-foreground">Free</p>
            </div>
            <div className=" flex flex-1 flex-col items-end justify-center space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
              <div className="text-2xl font-bold tabular-nums">
                {formatBalance(data.reserved.toBigInt(), { decimals })}
              </div>
              <p className="text-xs text-muted-foreground">Reserved</p>
            </div>
            <div className=" flex flex-1 flex-col items-end justify-center space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
              <div className="text-2xl font-bold tabular-nums">
                {formatBalance(data.frozen.toBigInt(), { decimals })}
              </div>
              <p className="text-xs text-muted-foreground">Frozen</p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
