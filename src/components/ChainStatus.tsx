/* eslint-disable no-console */

import { ApiPromise, WsProvider } from "@polkadot/api"
import { useQueries } from "@tanstack/react-query"
import { useMemo } from "react"
import { cn } from "../lib/utils.js"
interface ChainStatusProps {
  className?: string
}

const Chains = {
  Rococo: {
    pjs: "https://polkadot.js.org/apps/?rpc=wss://pop-testnet.parity-lab.parity.io/9942#/explorer",
    rpc: "wss://pop-testnet.parity-lab.parity.io:443/9942",
  },
  "Rococo Bridge Hub": {
    pjs: "https://polkadot.js.org/apps/?rpc=wss://pop-testnet.parity-lab.parity.io/8943#/explorer",
    rpc: "wss://pop-testnet.parity-lab.parity.io:443/8943",
  },
  "Rococo People": {
    pjs: "https://polkadot.js.org/apps/?rpc=wss://pop-testnet.parity-lab.parity.io/9910#/explorer",
    rpc: "wss://pop-testnet.parity-lab.parity.io:443/9910",
  },
  "Rococo Bulletin": {
    pjs: "https://polkadot.js.org/apps/?rpc=wss://pop-testnet.parity-lab.parity.io/10000#/explorer",
    rpc: "wss://pop-testnet.parity-lab.parity.io:443/10000",
  },
}

export const ChainStatus: React.FC<ChainStatusProps> = ({ className }) => {
  const apis = useMemo(() => {
    return Object.entries(Chains).map(([, values]) => {
      return new ApiPromise({ provider: new WsProvider(values.rpc) })
    })
  }, [])

  const results = useQueries({
    queries: apis.map((api, index) => ({
      queryKey: ["api", index],
      refetchInterval: 10000,
      queryFn: async () => {
        return (await api.rpc.chain.getBlock()).block.header.number.toNumber()
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
          {Object.entries(Chains).map(([name, values], index) => (
            <div key={name} className="flex flex-row gap-2">
              <a href={values.pjs} target="_blank" rel="noopener noreferrer">
                {name}
              </a>
              {results[index].data && <div># {results[index].data}</div>}
            </div>
          ))}
        </div>
      </>
    </div>
  )
}
