import { AccountProfile } from "./components/AccountProfile"
import { AccountSelect } from "./components/AccountSelect"
import { Connect } from "./components/Connect"
import { ConnectionIndicator } from "./components/ConnectionIndicator"
import { ThemeToggle } from "./components/ThemeToggle"
import { TransferValue } from "./components/TransferValue"
import { RequireAccount } from "./components/helpers/RequireAccount"
import { RequireApi } from "./components/helpers/RequireApi"
import { useWeb3 } from "./providers/web3-provider"

function App() {
  const { isConnected, currentAccount } = useWeb3()

  return (
    <div className="relative flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 items-center justify-between gap-3 px-3">
          <div />
          <div className="flex">
            {isConnected && currentAccount && <AccountSelect />}
          </div>
          <div className="flex flex-row items-center gap-4">
            <ThemeToggle />
            <ConnectionIndicator />
          </div>
        </div>
      </header>
      <div className="flex-1">
        <div className=" flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
          <aside className="p-6">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Hello from Polkadot Dapp Template
            </h1>
          </aside>
          <main className="relative col-auto mx-auto grid w-full py-6 sm:py-2">
            <RequireApi fallback={null}>
              <RequireAccount
                fallback={
                  <div className="relative flex h-96 w-auto flex-row items-center justify-center">
                    <div className="relative flex w-auto flex-col items-center justify-center gap-4 space-y-2">
                      <h3 className="text-lg tracking-tight">
                        Please connect and select an Account first to use this
                        DApp.
                      </h3>
                      <div className="flex">
                        {!isConnected ? <Connect /> : <AccountSelect />}
                      </div>
                    </div>
                  </div>
                }
              >
                <div className="grid items-start justify-center gap-6 md:p-6 lg:grid-cols-2 xl:grid-cols-2">
                  <AccountProfile />
                  <TransferValue />
                </div>
              </RequireAccount>
            </RequireApi>
          </main>
        </div>
      </div>
    </div>
  )
}

export default App
