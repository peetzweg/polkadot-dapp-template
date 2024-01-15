import { useQueries } from "@tanstack/react-query"
import { cn } from "../lib/utils.js"
import { useChain } from "../state/chains.js"
interface ChainStatusProps {
  className?: string
}

export const ChainStatus: React.FC<ChainStatusProps> = ({ className }) => {
  const chains = useChain()

  const results = useQueries({
    queries: Object.entries(chains).map(([name, { api, pjs }]) => ({
      queryKey: [name, "blockNumber"],
      refetchInterval: 10000,
      queryFn: async () => {
        return {
          name,
          link: pjs,
          blockNumber: (
            await api.rpc.chain.getBlock()
          ).block.header.number.toNumber(),
        }
      },
    })),
  })

  return (
    <div
      className={cn(
        "relative col-span-1 flex h-full w-auto flex-col gap-4 rounded-md border p-4 md:p-6 lg:p-6",
        className,
      )}
    >
      <>
        <div className="flex flex-row justify-between">
          <h2 className="text-3xl font-extrabold leading-6 tracking-tight">
            Chain Status
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {results.map((result) => {
            if (!result.data) return null
            return (
              <div
                key={result.data.name}
                className="flex flex-row gap-2 underline"
              >
                <a
                  href={result.data.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {`${result.data.name} #${result.data.blockNumber}`}
                </a>
              </div>
            )
          })}
        </div>
      </>
    </div>
  )
}
