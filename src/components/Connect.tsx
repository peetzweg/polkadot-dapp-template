import { useWeb3 } from "../providers/web3-provider"
import { Button } from "./ui/button"

export const Connect: React.FC = () => {
  const { connect } = useWeb3()

  return <Button onClick={() => connect()}>Connect to DApp</Button>
}
