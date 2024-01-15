import { ApiPromise, WsProvider } from "@polkadot/api"
import { create } from "zustand"

const Chains = {
  Rococo: {
    pjs: "https://polkadot.js.org/apps/?rpc=wss://pop-testnet.parity-lab.parity.io/9942#/explorer",
    rpc: "wss://pop-testnet.parity-lab.parity.io:443/9942",
  },
  BridgeHub: {
    pjs: "https://polkadot.js.org/apps/?rpc=wss://pop-testnet.parity-lab.parity.io/8943#/explorer",
    rpc: "wss://pop-testnet.parity-lab.parity.io:443/8943",
  },
  People: {
    pjs: "https://polkadot.js.org/apps/?rpc=wss://pop-testnet.parity-lab.parity.io/9910#/explorer",
    rpc: "wss://pop-testnet.parity-lab.parity.io:443/9910",
  },
  Bulletin: {
    pjs: "https://polkadot.js.org/apps/?rpc=wss://pop-testnet.parity-lab.parity.io/10000#/explorer",
    rpc: "wss://pop-testnet.parity-lab.parity.io:443/10000",
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
