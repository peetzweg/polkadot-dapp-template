import { useQuery } from "@tanstack/react-query"
import { useApi } from "../providers/api-provider"
import { useQueryCandidateState } from "./useQueryCandidateState"

export const QUERY_KEY_MOB_RULE_STATE = ["mobRule", "cases"]

export const useQueryMobRuleState = () => {
  const { api } = useApi()

  const { data: candidate } = useQueryCandidateState()

  return useQuery({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: [
      ...QUERY_KEY_MOB_RULE_STATE,
      candidate?.isSelected
        ? candidate?.asSelected.judging.unwrapOrDefault()
        : undefined,
    ],
    queryFn: async () => {
      const judgingId = candidate?.asSelected.judging.unwrapOrDefault()
      if (!judgingId) throw Error("No judging available")

      const mobRuleCase = await api.query.mobRule.cases(judgingId)
      if (mobRuleCase.isNone) return undefined

      return mobRuleCase.unwrap()
    },
    enabled: !!candidate?.isSelected && candidate.asSelected.judging.isSome,
  })
}
