// TODO replace with @polkadot/typegen
// import "@polkadot/api-augment"
// import "@polkadot/api-base"
import "./interfaces/augment-api"
import "./interfaces/augment-types"
import "./global.css"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from "react-hot-toast"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import { APIProvider } from "./providers/api-provider.tsx"
import { ThemeProvider } from "./providers/theme-provider.tsx"

import { KeyringProvider } from "./providers/keyring-provider.tsx"

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
      <QueryClientProvider client={queryClient}>
        <APIProvider>
          <KeyringProvider>
            <App />
          </KeyringProvider>
        </APIProvider>
        <Toaster />
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
