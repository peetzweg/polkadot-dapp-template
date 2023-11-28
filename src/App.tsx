import { Connect } from "./components/Connect"
import { useTheme } from "./providers/theme-provider"
import { Button } from "./components/ui/button"
import { useWeb3 } from "./providers/web3-provider"
import { AccountSelect } from "./components/AccountSelect"

function App() {
  const { setTheme, theme } = useTheme()
  const { isConnected } = useWeb3()
  return (
    <div className="relative flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 items-center">
          <div className="flex justify-end p-4">
            {!isConnected ? <Connect /> : <AccountSelect />}
          </div>
        </div>
      </header>
      <div className="v-screen flex h-screen flex-col items-center justify-center gap-4">
        <h1 className="text-2xl">Hello from Polkadot Dapp Template</h1>
        <Button
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark")
          }}
        >
          Toggle Theme
        </Button>
      </div>
    </div>
  )
}

export default App
