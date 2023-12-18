import { useQuery } from "@tanstack/react-query"
import { useApi } from "../providers/api-provider"

export const QUERY_KEY_PEOPLE_STATE = ["proofOfInk", "people"]

export const useQueryPeopleState = () => {
  const { api } = useApi()

  return useQuery({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: [...QUERY_KEY_PEOPLE_STATE],
    queryFn: async () => {
      const people = await api.query.people.root()

      return people
    },
  })
}
