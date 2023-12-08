import { ApiPromise, WsProvider } from "@polkadot/api"
import "@polkadot/api-augment"
import { cryptoWaitReady } from "@polkadot/util-crypto"
import { createContext, useContext, useEffect, useMemo, useState } from "react"
interface APIProviderProps {
  children: React.ReactNode
}

interface APIProviderState {
  api: ApiPromise
  decimals: number
  state: "connected" | "disconnected" | "error"
  error?: Error
  isError: boolean
  rpcURL: string
  symbol?: string
}

const initialState: APIProviderState = {
  api: {} as ApiPromise,
  state: "disconnected",
  decimals: 0,
  isError: false,
  rpcURL: "",
  symbol: undefined,
}

interface ApiConfig {
  name: string
  rpcs: string[]
}

export const createAPIProvider = ({ name, rpcs }: ApiConfig) => {
  const APIProviderContext = createContext<APIProviderState | null>(null)

  function APIProvider({ children, ...props }: APIProviderProps) {
    const [api, setApi] = useState<APIProviderState>(initialState)

    const [wsProvider, rpcURL] = useMemo(() => {
      const rpcURL = rpcs[0]
      return [new WsProvider(rpcURL), rpcURL]
    }, [])

    useEffect(() => {
      const _api = new ApiPromise({ provider: wsProvider })
      _api.on("connected", async () => {
        await _api.isReady
        // (when using the API and waiting on `isReady` this is done automatically)
        await cryptoWaitReady()

        const [decimals] = _api.registry.chainDecimals
        const [symbol] = _api.registry.chainTokens

        setApi({
          api: _api,
          isError: false,
          state: "connected",
          rpcURL,
          decimals: decimals,
          symbol: symbol?.toString(),
        })
      })

      _api.on("error", (e: Event) => {
        console.error("API Error", e)
        // todo turn event into error

        setApi({
          api: {} as ApiPromise,
          decimals: 0,
          error: Error("API Error: connection lost"),
          isError: true,
          rpcURL,
          state: "error",
          symbol: undefined,
        })
      })
      _api.on("disconnected", () => {
        console.error("API Disconnected")
        setApi({
          api: {} as ApiPromise,
          decimals: 0,
          error: Error("API Error: connection lost"),
          isError: true,
          rpcURL,
          state: "disconnected",
          symbol: undefined,
        })
      })
    }, [rpcURL, wsProvider])

    return (
      <APIProviderContext.Provider {...props} value={api}>
        {children}
      </APIProviderContext.Provider>
    )
  }

  const useApi = () => {
    const context = useContext(APIProviderContext)

    if (context === undefined)
      throw new Error("useAPI must be used within a APIProvider")

    if (context === null) throw new Error("Not initialized yet")

    return context
  }

  return { APIProvider, useApi }
}