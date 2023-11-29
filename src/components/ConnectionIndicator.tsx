import { cx } from "class-variance-authority"
import { useApi } from "../providers/api-provider"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card"
import { useQuery } from "@tanstack/react-query"

export const ConnectionIndicator: React.FC = () => {
  const { api, isError, error } = useApi()

  const { data } = useQuery({
    queryKey: ["blockNumber"],
    queryFn: async () => {
      const latestBlock = await api.rpc.chain.getBlock()
      return latestBlock.block.header.number.toNumber()
    },
    refetchInterval: 2000,
    enabled: !!api.isConnected,
  })

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <span className="relative flex h-3 w-3">
          <span
            className={cx([
              "absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75",
              { "animate-ping bg-red-400": isError },
            ])}
          ></span>
          <span
            className={cx([
              "relative inline-flex h-3 w-3 rounded-full bg-sky-500",
              { "bg-red-500": isError },
            ])}
          ></span>
        </span>
      </HoverCardTrigger>
      {}
      <HoverCardContent>
        <div className="flex justify-between space-x-4">
          {isError ? (
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">API Issue</h4>
              <p className="text-sm">{JSON.stringify(error)}</p>
            </div>
          ) : (
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">
                Everything working as expected
              </h4>
              <p className="text-sm">{`#${data}`}</p>
            </div>
          )}
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
