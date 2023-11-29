import { AccountSelect } from "./components/AccountSelect"
import { Connect } from "./components/Connect"
import { ThemeToggle } from "./components/ThemeToggle"
import { TransferValue } from "./components/TransferValue"
import { useWeb3 } from "./providers/web3-provider"

function App() {
  const { isConnected } = useWeb3()

  return (
    <div className="relative flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 items-center justify-between px-3">
          <div className="flex justify-end">
            {!isConnected ? <Connect /> : <AccountSelect />}
          </div>
          <ThemeToggle />
        </div>
      </header>
      <div className="flex-1">
        <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
          <aside>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Hello from Polkadot Dapp Template
            </h1>
          </aside>
          <main className="relative mx-auto w-full py-6">
            <TransferValue />
          </main>
        </div>
      </div>
    </div>
  )
}

export default App
