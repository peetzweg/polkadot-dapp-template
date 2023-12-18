import { useQuery } from "@tanstack/react-query"
import { useApi } from "../providers/api-provider"
import { useKeyringStore } from "../state/keyring"

export const QUERY_KEY_MOB_RULE_STATE = ["proofOfInk", "candidates"]

// 0. Not Applied
// 1. Applied
// 2. Selected
// 3. Being Judged => check selected fields
// 4. Proved

export const useQueryMobRuleState = () => {
  const { api } = useApi()
  const { pair } = useKeyringStore()

  return useQuery({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: [...QUERY_KEY_CANDIDATE_STATE, pair?.address],
    queryFn: async () => {
      const state = await api.query.proofOfInk.candidates(pair!.address)
      if (state.isNone) return undefined

      // TODO resolve typescript issue here, typehelper `Some<returntype typeof proofOfInk.candidates>`
      return state.unwrap()
    },
    enabled: !!pair,
  })
}
