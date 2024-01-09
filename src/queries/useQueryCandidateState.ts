import { useQuery } from "@tanstack/react-query"
import { useApi } from "../providers/api-provider"
import { useKeyringStore } from "../state/keyring"

export const QUERY_KEY = ["proofOfInk", "candidates"]

// 0. Not Applied
// 1. Applied
// 2. Selected
// 3. Being Judged => check selected fields
// 4. Proved

export const useQueryCandidateState = () => {
  const { api } = useApi()
  const { pair } = useKeyringStore()

  return useQuery({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: [...QUERY_KEY, pair?.address],
    queryFn: async () => {
      const state = await api.query.proofOfInk.candidates(pair!.address)
      if (state.isNone) return undefined

      return state.unwrap()
    },
    enabled: !!pair,
  })
}
