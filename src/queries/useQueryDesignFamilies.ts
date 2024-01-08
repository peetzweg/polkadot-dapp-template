import { useQuery } from "@tanstack/react-query"
import { useApi } from "../providers/api-provider"

export const QUERY_KEY = ["proofOfInk", "designFamilies"]

export const useQueryDesignFamilies = () => {
  const { api } = useApi()

  return useQuery({
    queryKey: [...QUERY_KEY],
    queryFn: async () => {
      const rawDesignEntries =
        await api.query.proofOfInk.designFamilies.entries()
      const designs = rawDesignEntries.map(([_, value]) => {
        return value.unwrap()
      })

      return designs
    },
  })
}
