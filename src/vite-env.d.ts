/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_RPC_ROCOCO: string
  readonly VITE_RPC_BRIDGE_HUB: string
  readonly VITE_RPC_PEOPLE: string
  readonly VITE_RPC_BULLETIN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
