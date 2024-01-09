import { useQuery } from "@tanstack/react-query"
import { useApi } from "../providers/api-provider"

export const QUERY_KEY_PEOPLE_STATE = ["proofOfInk", "people"]

export const useQueryPeopleState = () => {
  const { api } = useApi()

  return useQuery({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: [...QUERY_KEY_PEOPLE_STATE],
    queryFn: async () => {
      const root = await api.query.people.root()
      if (root.isNone) return undefined
      const [members, revision, pages] = root.unwrap()

      const noOfKeys = await api.query.people.counterForKeys()
      // TODO paginate over all keys
      let collectedKeys = 0

      // for (let page = 0; page < pages.toNumber(); page++) {
      //   console.log("Fetching page", page, revision.toNumber())
      //   const pageOfKeys = await api.query.people.rootKeys([revision, page])
      //   console.log(pageOfKeys.toPrimitive())
      // }

      // const person = await api.query.people.people(0)
      // console.log(person.toHuman())

      const result = await api.query.people.rootKeys([0, 0])
      console.log({ result })

      const keyEntries = await api.query.people.keys.entries()
      const keys = keyEntries.map(([index, value]) => {
        collectedKeys += 1
        return value.unwrap()
      })

      console.log({ keys, collectedKeys, noOfKeys })
      return { members, revision, pages, noOfKeys, keys }
    },
  })
}
