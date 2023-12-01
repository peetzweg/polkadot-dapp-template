import { ApiPromise, WsProvider } from "@polkadot/api"
import "@polkadot/api-augment"
import { createContext, useContext, useEffect, useMemo, useState } from "react"

interface APIProviderProps {
  children: React.ReactNode
}

interface APIProviderState {
  api: ApiPromise
  rpcURL: string
  error?: Error
  isError: boolean
}

const initialState: APIProviderState = {
  api: {} as ApiPromise,
  rpcURL: "",
  isError: false,
}

const APIProviderContext = createContext<APIProviderState | null>(null)

export function APIProvider({ children, ...props }: APIProviderProps) {
  const [api, setApi] = useState<APIProviderState>(initialState)

  const [wsProvider, rpcURL] = useMemo(() => {
    const urlRPC = new URLSearchParams(window.location.search).get("rpc")
    const rpcURL = urlRPC ?? import.meta.env.VITE_DEFAULT_RPC
    return [new WsProvider(rpcURL), rpcURL]
  }, [])

  useEffect(() => {
    const _api = new ApiPromise({ provider: wsProvider })
    _api.on("connected", async () => {
      await _api.isReady
      setApi({ api: _api, isError: false, rpcURL })
    })

    _api.on("ready", () => {
      console.log("api ready")
    })

    _api.on("error", (e: Event) => {
      console.error(e)
      // todo turn event into error

      setApi({
        isError: true,
        error: Error("API Error: connection lost"),
        api: {} as ApiPromise,
        rpcURL,
      })
    })
    _api.on("disconnected", () => {
      // TODO handle disconnect
    })
  }, [rpcURL, wsProvider])

  return (
    <APIProviderContext.Provider {...props} value={api}>
      {children}
    </APIProviderContext.Provider>
  )
}

export const useApi = () => {
  const context = useContext(APIProviderContext)

  if (context === undefined)
    throw new Error("useAPI must be used within a APIProvider")

  if (context === null) throw new Error("Not initialized yet")

  return context
}
