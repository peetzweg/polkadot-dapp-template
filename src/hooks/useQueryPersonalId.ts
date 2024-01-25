import { u8aToHex } from "@polkadot/util"
import { useQuery } from "@tanstack/react-query"
import { useApi } from "../providers/api-provider"
import { useQueryMemberKey } from "./useQueryMemberKey"

export const QUERY_KEY = ["people", "people", "keys"]

export const useQueryPersonalId = () => {
  const { api } = useApi()
  const { data: memberKey } = useQueryMemberKey()

  return useQuery({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: [...QUERY_KEY, memberKey ? u8aToHex(memberKey) : ""],
    queryFn: async () => {
      const personalId = await api.query.people.keys(u8aToHex(memberKey!))

      if (personalId.isNone) {
        return undefined
      } else {
        return personalId.unwrap().toNumber()
      }
    },
    enabled: memberKey !== undefined,
  })
}
