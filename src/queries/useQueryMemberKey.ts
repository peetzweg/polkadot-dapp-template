import { mnemonicToEntropy } from "@polkadot/util-crypto"
import { useQuery } from "@tanstack/react-query"
import { useKeyringStore } from "../state/keyring"
import { useVerifiable } from "./useVerifiable"

export const QUERY_KEY = ["verifiable", "memberFromEntropy"]

export const useQueryMemberKey = () => {
  const { pair, mnemonic } = useKeyringStore()
  const { verifiable, isReady } = useVerifiable()

  if (!pair || !mnemonic) throw new Error("No pair or mnemonic")

  return useQuery({
    // Fine to disable as address is derived of required menmonic
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: [...QUERY_KEY, pair?.address],
    queryFn: async () => {
      return verifiable.memberFromEntropy(mnemonicToEntropy(mnemonic!))
    },
    enabled: isReady,
  })
}
