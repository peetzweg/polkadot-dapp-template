import { Connect } from "./components/Connect"
import { useTheme } from "./providers/theme-provider"
import { Button } from "./components/ui/button"
import { useWeb3 } from "./providers/web3-provider"

function App() {
  const { setTheme, theme } = useTheme()
  const { isConnected } = useWeb3()
  return (
    <div className="v-screen flex h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-2xl">Hello from Polkadot Dapp Template</h1>
      <Button
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark")
        }}
      >
        Toggle Theme
      </Button>
      {!isConnected && <Connect />}
    </div>
  )
}

export default App
