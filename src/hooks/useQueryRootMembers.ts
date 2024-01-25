/* eslint-disable no-console */
import { useQuery } from "@tanstack/react-query"
import { useApi } from "../providers/api-provider"

export const QUERY_KEY = ["people", "root"]

export const useQueryRootMembers = () => {
  const { api } = useApi()

  return useQuery({
    queryKey: [...QUERY_KEY],
    queryFn: async () => {
      const root = await api.query.people.root()
      if (root.isNone) return undefined

      const [, revision, pages] = root.unwrap()

      const memberKeys = []
      for (let page = 0; page < pages.toNumber(); page++) {
        const pageOfKeys = await api.query.people.rootKeys([revision, page])
        memberKeys.push(...pageOfKeys)
      }

      return memberKeys
    },
  })
}
