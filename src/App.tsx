/* eslint-disable no-console */
import { AccountInfo } from "./components/AccountInfo"
import { Apply } from "./components/Apply"
import { Bandersnatch } from "./components/Bandersnatch"
import { CandidateState } from "./components/CandidateState"
import { ChainStatus } from "./components/ChainStatus"
import { Commit } from "./components/Commit"
import { ConnectionIndicator } from "./components/ConnectionIndicator"
import { DeveloperConsole } from "./components/DeveloperConsole"
import { Evidence } from "./components/Evidence"
import { Faucet } from "./components/Faucet"
import { MobRuleState } from "./components/MobRuleState"
import { NewAccount } from "./components/NewAccount"
import { PeopleState } from "./components/PeopleState"
import { Register } from "./components/Register"
import { RegisterAlias } from "./components/RegisterAlias"
import { ThemeToggle } from "./components/ThemeToggle"
import { RequireApi } from "./components/helpers/RequireApi"
import { useQueryPersonalId } from "./hooks/useQueryPersonalId"
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
        <main className="relative mx-auto w-full py-6 sm:py-2">
          <RequireApi fallback={null}>
            {!pair ? (
              <div className="flex flex-col gap-4 px-4 py-2">
                <NewAccount />
              </div>
            ) : (
              <AppWithPair />
            )}
          </RequireApi>
        </main>
      </div>
    </div>
  )
}

const AppWithPair = () => {
  const { data: personalId } = useQueryPersonalId()
  return (
    <div className="flex flex-col gap-4 px-4 py-2">
      <div className="auto-rows grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <DeveloperConsole />
        <ChainStatus />
        <Faucet />
        <AccountInfo />
        {personalId === undefined ? (
          <>
            <CandidateState />
            <Apply />
            <Commit />
            <Evidence />
            <MobRuleState />
            <Register />
          </>
        ) : (
          <>
            <CandidateState />
            <PeopleState />
            <RegisterAlias />
          </>
        )}
      </div>

      {personalId !== undefined && (
        <>
          <hr className="my-10" />
          <Bandersnatch />
        </>
      )}
    </div>
  )
}

export default App
