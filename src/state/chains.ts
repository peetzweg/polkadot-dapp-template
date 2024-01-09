import { ApiPromise } from "@polkadot/api"
import { create } from "zustand"

const Chains = {
  Rococo: {
    pjs: "https://polkadot.js.org/apps/?rpc=wss://pop-testnet.parity-lab.parity.io/9942#/explorer",
    rpc: "wss://pop-testnet.parity-lab.parity.io:443/9942",
    key: "Rococo",
  },
  BridgeHub: {
    key: "BridgeHub",
    pjs: "https://polkadot.js.org/apps/?rpc=wss://pop-testnet.parity-lab.parity.io/8943#/explorer",
    rpc: "wss://pop-testnet.parity-lab.parity.io:443/8943",
  },
  People: {
    pjs: "https://polkadot.js.org/apps/?rpc=wss://pop-testnet.parity-lab.parity.io/9910#/explorer",
    rpc: "wss://pop-testnet.parity-lab.parity.io:443/9910",
    key: "People",
  },
  Bulletin: {
    pjs: "https://polkadot.js.org/apps/?rpc=wss://pop-testnet.parity-lab.parity.io/10000#/explorer",
    rpc: "wss://pop-testnet.parity-lab.parity.io:443/10000",
    key: "Bulletin",
  },
} as const

type ChainState = Record<keyof typeof Chains, ApiPromise>

export const useChain = create<ChainState>()(() => {
  const state: Partial<ChainState> = {}
  Object.keys(Chains).forEach((key) => {
    state[key as keyof ChainState] = new ApiPromise()
  })

  return state as ChainState
})
