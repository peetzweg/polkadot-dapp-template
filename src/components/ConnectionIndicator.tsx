import { cx } from "class-variance-authority"
import { useApi } from "../providers/api-provider"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card"
import { useQuery } from "@tanstack/react-query"

const IndicatorBubble = ({ isError }: { isError: boolean }) => {
  return (
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
  )
}

export const ConnectionIndicator: React.FC = () => {
  const { api, isError, error, rpcURL } = useApi()

  const { data } = useQuery({
    queryKey: ["rpc.chain.getBlockNumber"],
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
        <IndicatorBubble isError={isError} />
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="flex flex-row items-start">
          <div className="flex flex-col gap-2">
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

            <div className="space-y-1">
              <h4 className="text-sm font-semibold">Used RPC</h4>
              <p className="text-sm">{rpcURL}</p>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
