import { Keyring } from "@polkadot/keyring"
import { KeyringPair } from "@polkadot/keyring/types"
import { mnemonicGenerate } from "@polkadot/util-crypto"
import { create } from "zustand"

const MNEMONIC =
  "bottom drive obey lake curtain smoke basket hold race lonely fit walk"

interface KeyringState {
  keyring: Keyring
  pair: null | KeyringPair
  mnemonic: string
  store: () => void
  create: (name: string, derivation?: string) => void
  createFromMnemonic: (
    mnemonic: string,
    name: string,
    derivation?: string,
  ) => void
  restore: () => string | null
}

type WholeState = KeyringState

export const useKeyringStore = create<WholeState>((set, get): KeyringState => {
  const keyring = new Keyring({ type: "sr25519", ss58Format: 0 })
  return {
    keyring,
    pair: null,
    mnemonic: MNEMONIC,
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
      localStorage.setItem("mnemonic", get().mnemonic)
    },
    restore: () => {
      const mnemonic = localStorage.getItem("mnemonic")
      return mnemonic
    },
  }
})
