import { Keyring } from "@polkadot/keyring"
import { KeyringPair } from "@polkadot/keyring/types"
import { mnemonicGenerate } from "@polkadot/util-crypto"
import { create } from "zustand"

interface KeyringState {
  keyring: Keyring
  pair?: KeyringPair
  mnemonic?: string
  store: () => void
  clear: () => void
  create: (name: string, derivation?: string) => void
  createFromMnemonic: (
    mnemonic: string,
    name: string,
    derivation?: string,
  ) => void
  restore: () => boolean
}

type WholeState = KeyringState

export const useKeyringStore = create<WholeState>((set, get): KeyringState => {
  const keyring = new Keyring({ type: "sr25519", ss58Format: 0 })
  return {
    keyring,
    pair: undefined,
    mnemonic: undefined,
    clear: () => {
      set({ mnemonic: undefined, pair: undefined })
      localStorage.clear()
    },
    createFromMnemonic: (mnemonic, name, derivation = "Alice") => {
      //TODO test if valid mnemonic
      set({
        mnemonic,
        pair: get().keyring.addFromUri(
          `${mnemonic.trim()}//${derivation.trim()}`,
          { name },
          "sr25519",
        ),
      })
    },
    create: (name: string, derivation = "Alice") => {
      const freshMnemonic = mnemonicGenerate(24)

      set({
        mnemonic: freshMnemonic,
        pair: get().keyring.addFromUri(
          `${freshMnemonic}//${derivation}`,
          { name },
          "sr25519",
        ),
      })
    },
    store: () => {
      const currentMnemonic = get().mnemonic
      if (!currentMnemonic) return

      localStorage.setItem("mnemonic", currentMnemonic)
    },
    restore: () => {
      const mnemonic = localStorage.getItem("mnemonic")
      if (!mnemonic) return false
      get().createFromMnemonic(mnemonic, "Restored Account")
      return true
    },
  }
})
