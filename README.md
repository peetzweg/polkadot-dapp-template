# Polkadot DApp Template (WIP)

## Todo

- ~~fix api types~~
- use [`@polkadot/typegen`](https://polkadot.js.org/docs/api/examples/promise/typegen) instead of `@polkadot/api-augment`
- allow for passing status callback?
- ~~context guards which assure `api`, `currentAccount` etc is set~~
- eager connect?
- rotate RPCs
- ~~RPC from url~~
- check if pallet is available
- describe decisions in README
_ license

## Goals

(**Note: Work in Progress**)

- don't use centralized services
- don't require a deployed backend
- production ready settings
- decentralized deployment possible
- runnable locally
- best typescript experience possible
- light client first
- use state for art tools for DApps in the Polkadot Ecosystem


## Stack

- typescript
- vite
- tailwindcss
- shadcn/ui
- react-query
- polkadotjs/api
- (polkadotjs/api-augment)

## Built in Components

- `<Web3Provider />`
- `<ApiProvider />`
