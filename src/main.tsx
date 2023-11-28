import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import { ThemeProvider } from "./providers/theme-provider.tsx"
import "./global.css"
import { Web3Provider } from "./providers/web3-provider.tsx"

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        <Web3Provider>
          <App />
        </Web3Provider>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
