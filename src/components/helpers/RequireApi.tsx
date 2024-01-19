import { useApi } from "../../providers/api-provider"

interface Props {
  fallback: React.ReactNode
  children: React.ReactNode
}
export const RequireApi: React.FC<Props> = ({ fallback, children }) => {
  const { state } = useApi()

  if (state !== "connected") {
    return <>{fallback}</>
  }
  return <>{children}</>
}
