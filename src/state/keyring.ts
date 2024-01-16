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

export const useKeyringStore = create<KeyringState>()((
  set,
  get,
): KeyringState => {
  // todo ss58 prefix probably not correct!
  const keyring = new Keyring({ type: "sr25519", ss58Format: 0 })
  return {
    keyring,
    pair: undefined,
    mnemonic: undefined,
    clear: () => {
      set({ mnemonic: undefined, pair: undefined })
      localStorage.clear()
    },
    createFromMnemonic: (mnemonic, name, derivation?: string) => {
      //TODO test if valid mnemonic
      set({
        mnemonic,
        pair: get().keyring.addFromUri(
          `${mnemonic.trim()}` + (derivation ? `//${derivation}` : ""),
          { name },
          "sr25519",
        ),
      })
    },
    create: (name) => {
      const freshMnemonic = mnemonicGenerate(24)

      set({
        mnemonic: freshMnemonic,
        pair: get().keyring.addFromUri(`${freshMnemonic}`, { name }, "sr25519"),
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
    // TODO add member key calculation to keyring
  }
})
