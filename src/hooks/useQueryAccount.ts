import { useQuery } from "@tanstack/react-query"
import { useApi } from "../providers/api-provider"

export const QUERY_KEY = ["system", "account"]

export const useQueryAccount = (address: string | undefined) => {
  const { api } = useApi()

  return useQuery({
    queryKey: [...QUERY_KEY, address],
    queryFn: async () => {
      return (await api.query.system.account(address!)).data
    },
    enabled: !!address,
  })
}
