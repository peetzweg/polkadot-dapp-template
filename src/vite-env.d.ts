/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DEFAULT_RPC: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
