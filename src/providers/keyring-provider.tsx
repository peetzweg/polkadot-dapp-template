import { Keyring } from "@polkadot/keyring"
import { KeyringPair } from "@polkadot/keyring/types"
import { mnemonicGenerate } from "@polkadot/util-crypto"
import { createContext, useContext, useEffect, useState } from "react"
import { useApi } from "./api-provider"
interface KeyringProviderProps {
  children: React.ReactNode
}

interface KeyringProviderState {
  pair?: KeyringPair
}

const initialState: KeyringProviderState = {}

const KeyringProviderContext = createContext<KeyringProviderState>(initialState)

export function KeyringProvider({ children, ...props }: KeyringProviderProps) {
  const { api, state } = useApi()
  const [pair, setPair] = useState<KeyringPair | undefined>()

  useEffect(() => {
    if (state !== "connected") return

    const keyring = new Keyring({ type: "sr25519", ss58Format: 0 })

    const mnemonic = mnemonicGenerate()
    const pair = keyring.addFromUri(
      "//Alice",
      { name: "apply-pair" },
      "sr25519",
    )

    setPair(pair)
  }, [state])

  const value: KeyringProviderState = {
    pair,
  }
  return (
    <KeyringProviderContext.Provider {...props} value={value}>
      {children}
    </KeyringProviderContext.Provider>
  )
}

export const useKeyring = () => {
  const context = useContext(KeyringProviderContext)

  if (context === undefined)
    throw new Error("useKeyring must be used within a KeyringProvider")

  return context
}
