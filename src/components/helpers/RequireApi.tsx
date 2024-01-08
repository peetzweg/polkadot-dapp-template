import { useApi } from "../../providers/api-provider"

interface RequireAccountProps {
  fallback: React.ReactNode
  children: React.ReactNode
}
export const RequireApi: React.FC<RequireAccountProps> = ({
  fallback,
  children,
}) => {
  const { state } = useApi()

  if (state !== "connected") {
    return <>{fallback}</>
  }
  return <>{children}</>
}
