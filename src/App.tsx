/* eslint-disable no-console */
import { AccountInfo } from "./components/AccountInfo"
import { Bandersnatch } from "./components/Bandersnatch"
import { ConnectionIndicator } from "./components/ConnectionIndicator"
import { Faucet } from "./components/Faucet"
import { ImportMnemonic } from "./components/ImportMnemonic"
import { ThemeToggle } from "./components/ThemeToggle"
import { RequireApi } from "./components/helpers/RequireApi"
import { useKeyringStore } from "./state/keyring"

function App() {
  const { pair } = useKeyringStore()
  return (
    <div className="relative flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 items-center justify-end gap-3 px-3">
          <div className="flex flex-row items-center gap-4">
            <ThemeToggle />
            <ConnectionIndicator />
          </div>
        </div>
      </header>
      <div className="flex-1">
        <main className="relative col-auto mx-auto grid w-full py-6 sm:py-2">
          <RequireApi fallback={null}>
            <div className="grid items-start justify-center gap-6 md:p-6 lg:grid-cols-1 xl:grid-cols-1">
              {!pair && <ImportMnemonic />}
              {pair && (
                <>
                  <Faucet />
                  <AccountInfo />
                  <Bandersnatch />
                </>
              )}

              {/* <ProofOfInk /> */}
              {/* <AddDesignFamily /> */}
            </div>
          </RequireApi>
        </main>
      </div>
    </div>
  )
}

export default App
