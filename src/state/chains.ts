import { ApiPromise, WsProvider } from "@polkadot/api"
import { create } from "zustand"

const createPJSAppsLink = (rpc: string) =>
  `https://polkadot.js.org/apps/?rpc=wss://${rpc}#/explorer`

const Chains = {
  Rococo: {
    pjs: createPJSAppsLink(import.meta.env.VITE_RPC_ROCOCO),
    rpc: `wss://${import.meta.env.VITE_RPC_ROCOCO}`,
  },
  BridgeHub: {
    pjs: createPJSAppsLink(import.meta.env.VITE_RPC_BRIDGE_HUB),
    rpc: `wss://${import.meta.env.VITE_RPC_BRIDGE_HUB}`,
  },
  People: {
    pjs: createPJSAppsLink(import.meta.env.VITE_RPC_PEOPLE),
    rpc: `wss://${import.meta.env.VITE_RPC_PEOPLE}`,
  },
  Bulletin: {
    pjs: createPJSAppsLink(import.meta.env.VITE_RPC_BULLETIN),
    rpc: `wss://${import.meta.env.VITE_RPC_BULLETIN}`,
  },
} as const

type ChainState = Record<
  keyof typeof Chains,
  {
    api: ApiPromise
    pjs: string
  }
>

export const useChain = create<ChainState>()(() => {
  const state: Partial<ChainState> = {}
  Object.entries(Chains).map(async ([key, value]) => {
    const api = await ApiPromise.create({ provider: new WsProvider(value.rpc) })
    state[key as keyof ChainState] = { api, pjs: value.pjs }
  })

  return state as ChainState
})
