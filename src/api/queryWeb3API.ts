import { ApiPromise, WsProvider } from "@polkadot/api"

export const queryWeb3API = async (endpoint: string) => {
  const wsProvider = new WsProvider(endpoint)

  return await ApiPromise.create({ provider: wsProvider })
}
