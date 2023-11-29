import { BellIcon, EyeNoneIcon, PersonIcon } from "@radix-ui/react-icons"
import { useQuery } from "@tanstack/react-query"
import { formatBalance } from "../lib/formatBalance"
import { useApi } from "../providers/api-provider"
import { useWeb3 } from "../providers/web3-provider"

export const AccountProfile: React.FC = () => {
  const { api } = useApi()
  const { currentAccount } = useWeb3()

  const { data, isLoading, error, isError } = useQuery({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: ["system.account", currentAccount?.address],
    queryFn: async () => {
      return (await api.query.system.account(currentAccount!.address)).data
    },
    enabled: !!currentAccount,
  })

  return (
    <div className="relative flex w-auto flex-col space-y-2 rounded-md border p-6 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
      {isLoading ? (
        <div>Loading...</div>
      ) : data ? (
        <>
          <div className="space-y-2">
            <h2 className="text-4xl font-extrabold leading-6 tracking-tight">
              {currentAccount?.meta.name}
            </h2>
            <p className="mt-1 font-mono text-sm text-gray-500">
              {currentAccount?.address}
            </p>
          </div>

          <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
            <BellIcon className="mt-px h-5 w-5" />
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">
                {formatBalance(data.free.toBigInt())}
              </p>
              <p className="text-sm text-muted-foreground">Free Balance</p>
            </div>
          </div>

          <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
            <PersonIcon className="mt-px h-5 w-5" />
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">
                {formatBalance(data.reserved.toBigInt())}
              </p>
              <p className="text-sm text-muted-foreground">Reserved Balance</p>
            </div>
          </div>

          <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
            <EyeNoneIcon className="mt-px h-5 w-5" />
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">
                {formatBalance(data.frozen.toBigInt())}
              </p>
              <p className="text-sm text-muted-foreground">Frozen Balance</p>
            </div>
          </div>
        </>
      ) : null}
    </div>
  )
}
