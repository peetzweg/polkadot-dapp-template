import { web3Accounts, web3Enable } from "@polkadot/extension-dapp"
import { useMutation } from "@tanstack/react-query"
import { createContext, useContext } from "react"
import { mutationWeb3Enable } from "../api/mutationWeb3Enable"

type InjectedAccountWithMeta = Awaited<ReturnType<typeof web3Accounts>>[0]
type InjectedExtensions = Awaited<ReturnType<typeof web3Enable>>[0]

interface Web3ProviderProps {
  children: React.ReactNode
  storageKey?: string
}

interface Web3ProviderState {
  accounts: InjectedAccountWithMeta[]
  connect: () => void
  extensions: InjectedExtensions[]
  isConnected: boolean
}

const initialState: Web3ProviderState = {
  accounts: [],
  connect: () => null,
  extensions: [],
  isConnected: false,
}

const Web3ProviderContext = createContext<Web3ProviderState>(initialState)

export function Web3Provider({ children, ...props }: Web3ProviderProps) {
  const {
    mutate: connect,
    data,
    isSuccess,
  } = useMutation({
    mutationFn: mutationWeb3Enable,
  })

  const value = {
    extensions: data?.extensions ?? [],
    accounts: data?.accounts ?? [],
    connect,
    isConnected: isSuccess,
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
