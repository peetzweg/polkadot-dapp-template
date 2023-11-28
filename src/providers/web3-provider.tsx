import {
  web3Accounts,
  web3Enable,
  web3FromSource,
} from "@polkadot/extension-dapp"
import { useMutation } from "@tanstack/react-query"
import { createContext, useContext } from "react"
import { mutationWeb3Enable } from "../api/mutationWeb3Enable"

type InjectedAccountWithMeta = Awaited<ReturnType<typeof web3Accounts>>[0]
type InjectedExtensions = Awaited<ReturnType<typeof web3Enable>>[0]

interface Web3ProviderProps {
  children: React.ReactNode
}

interface Web3ProviderState {
  accounts: InjectedAccountWithMeta[]
  currentAccount: InjectedAccountWithMeta | null
  connect: () => void
  extensions: InjectedExtensions[]
  injector: InjectedExtensions | null
  isConnected: boolean
  selectAccount: (accountAddress: string) => void
}

const initialState: Web3ProviderState = {
  accounts: [],
  currentAccount: null,
  connect: () => null,
  extensions: [],
  injector: null,
  isConnected: false,
  selectAccount: () => null,
}

const Web3ProviderContext = createContext<Web3ProviderState>(initialState)

export function Web3Provider({ children, ...props }: Web3ProviderProps) {
  const {
    mutate: connect,
    data: connectResult,
    isSuccess,
  } = useMutation({
    mutationFn: mutationWeb3Enable,
  })

  const { data: selectResult, mutate: selectAccount } = useMutation({
    mutationFn: async (account: string) => {
      const selectedAccount = connectResult?.accounts.find(
        (acc) => acc.address === account,
      )
      if (!selectedAccount) throw new Error("Account not available")

      return {
        currentAccount: selectedAccount,
        injector: await web3FromSource(selectedAccount.meta.source),
      }
    },
  })

  const value = {
    accounts: connectResult?.accounts ?? [],
    connect,
    extensions: connectResult?.extensions ?? [],
    injector: selectResult?.injector ?? null,
    currentAccount: selectResult?.currentAccount ?? null,
    isConnected: isSuccess,
    selectAccount,
  }

  return (
    <Web3ProviderContext.Provider {...props} value={value}>
      {children}
    </Web3ProviderContext.Provider>
  )
}

export const useWeb3 = () => {
  const context = useContext(Web3ProviderContext)

  if (context === undefined)
    throw new Error("useWeb3 must be used within a ThemeProvider")

  return context
}
