import { useQuery } from "@tanstack/react-query"
import { useApi } from "../providers/api-provider"
import { useKeyringStore } from "../state/keyring"

export const QUERY_KEY_CANDIDATE_STATE = ["proofOfInk", "designFamilies"]

export const useQueryDesignFamilies = () => {
  const { api } = useApi()
  const { pair } = useKeyringStore()

  return useQuery({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: [...QUERY_KEY_CANDIDATE_STATE, pair?.address],
    queryFn: async () => {
      const designs = await api.query.proofOfInk.designFamilies(null)

      return designs.toPrimitive()
    },
    enabled: !!pair,
  })
}
