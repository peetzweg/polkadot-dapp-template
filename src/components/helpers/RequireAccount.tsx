import { useWeb3 } from "../../providers/web3-provider"

interface RequireAccountProps {
  fallback: React.ReactNode
  children: React.ReactNode
}
export const RequireAccount: React.FC<RequireAccountProps> = ({
  fallback,
  children,
}) => {
  const { currentAccount } = useWeb3()
  if (!currentAccount) {
    return <>{fallback}</>
  }
  return <>{children}</>
}
