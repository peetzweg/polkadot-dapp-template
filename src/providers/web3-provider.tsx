import {
  web3Accounts,
  web3Enable,
  web3FromSource,
} from "@polkadot/extension-dapp"
import { UseMutateFunction, useMutation } from "@tanstack/react-query"
import { createContext, useCallback, useContext, useEffect } from "react"
import { mutationWeb3Enable } from "../api/mutationWeb3Enable"

type InjectedAccountWithMeta = Awaited<ReturnType<typeof web3Accounts>>[0]
type InjectedExtensions = Awaited<ReturnType<typeof web3Enable>>[0]

interface Web3ProviderProps {
  children: React.ReactNode
}

interface Web3ProviderState {
  accounts: InjectedAccountWithMeta[]
  connect: UseMutateFunction
  currentAccount: InjectedAccountWithMeta | null
  disconnect: () => void
  extensions: InjectedExtensions[]
  injector: InjectedExtensions | null
  isConnected: boolean
  selectAccount: UseMutateFunction<unknown, unknown, string>
}

const initialState: Web3ProviderState = {
  accounts: [],
  connect: () => null,
  currentAccount: null,
  disconnect: () => null,
  extensions: [],
  injector: null,
  isConnected: false,
  selectAccount: () => null,
}

const Web3ProviderContext = createContext<Web3ProviderState>(initialState)

export function Web3Provider({ children, ...props }: Web3ProviderProps) {
  /* Connect Mutation */
  const {
    mutate: connect,
    data: connectResult,
    isSuccess,
    reset: resetConnect,
  } = useMutation({
    mutationFn: mutationWeb3Enable,
  })

  /* Select Account Mutation */
  const {
    data: selectResult,
    mutate: selectAccount,
    reset: resetSelectAccount,
  } = useMutation({
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

  /* Disconnect */
  const disconnect = useCallback(() => {
    resetConnect()
    resetSelectAccount()
  }, [resetConnect, resetSelectAccount])

  /* Provider State */
  const value: Web3ProviderState = {
    accounts: connectResult?.accounts ?? [],
    connect,
    currentAccount: selectResult?.currentAccount ?? null,
    disconnect,
    extensions: connectResult?.extensions ?? [],
    injector: selectResult?.injector ?? null,
    isConnected: isSuccess,
    selectAccount,
  }

  useEffect(() => {
    connect()
  }, [connect])

  return (
    <Web3ProviderContext.Provider {...props} value={value}>
      {children}
    </Web3ProviderContext.Provider>
  )
}

export const useWeb3 = () => {
  const context = useContext(Web3ProviderContext)

  if (context === undefined)
    throw new Error("useWeb3 must be used within a Web3Provider")

  return context
}
