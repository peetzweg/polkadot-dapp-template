import { useMemo } from "react"
import { useKeyringStore } from "../state/keyring"

export const useAliceKeyPair = () => {
  const { keyring } = useKeyringStore()
  return useMemo(() => {
    return keyring.createFromUri("//Alice")
  }, [keyring])
}
