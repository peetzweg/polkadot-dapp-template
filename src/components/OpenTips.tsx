import { useQuery } from "@tanstack/react-query"
import { useApi } from "../providers/api-provider"
import { Skeleton } from "./ui/skeleton"

export const OpenTips: React.FC = () => {
  const { api } = useApi()

  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["tips"],
    queryFn: async () => {
      const tips = await api.query.tips.tips.entriesPaged({
        pageSize: 10,
        args: [],
      })
      console.log({ tips })

      return tips
    },
  })

  console.log({ data })
  return (
    <div className="relative flex flex-col items-end space-y-2 rounded-md border p-6 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
      {isLoading ? (
        <Skeleton className="h-14 w-full animate-pulse" />
      ) : (
        data?.map((d, index) => {
          if (d[1]) {
            return <div key={index}>{d[1].isSome()}</div>
          }
          return null
        })
      )}
    </div>
  )
}
