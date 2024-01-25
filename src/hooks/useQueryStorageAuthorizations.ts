/* eslint-disable no-console */
import { useQuery } from "@tanstack/react-query"
import { useChain } from "../state/chains"
import { useKeyringStore } from "../state/keyring"

export const QUERY_KEY = ["bulletin", "transactionStorage", "authorizations"]

export const useQueryStorageAuthorizations = () => {
  const { Bulletin } = useChain()
  const { pair } = useKeyringStore()

  return useQuery({
    queryKey: [...QUERY_KEY],
    queryFn: async () => {
      const auths = Bulletin.api.query.transactionStorage.authorizations({
        Account: Bulletin.api.createType("AccountId", pair?.address),
      })
      return auths
    },
  })
}