// TODO replace with @polkadot/typegen
import "@polkadot/api-augment"
import "@polkadot/api-base"
import "./global.css"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import { APIProvider } from "./providers/api-provider.tsx"
import { ThemeProvider } from "./providers/theme-provider.tsx"
import { Web3Provider } from "./providers/web3-provider.tsx"

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
      <QueryClientProvider client={queryClient}>
        <APIProvider>
          <Web3Provider>
            <App />
          </Web3Provider>
        </APIProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
