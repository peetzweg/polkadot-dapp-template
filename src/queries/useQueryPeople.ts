import { useQuery } from "@tanstack/react-query"
import { useApi } from "../providers/api-provider"

export const QUERY_KEY = ["people", "people"]

export const useQueryPeople = () => {
  const { api } = useApi()

  return useQuery({
    queryKey: [...QUERY_KEY],
    queryFn: async () => {
      return api.query.people.people.entries()
    },
  })
}
