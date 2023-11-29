# Polkadot DApp Template (WIP)

## Todo

+ ~~fix api types~~
+ use [`@polkadot/typegen`](https://polkadot.js.org/docs/api/examples/promise/typegen) instead of `@polkadot/api-augment`
+ allow for passing status callback? Would this be cool?
+ context guards which assure `api`, `currentAccount` etc is set
+ eager connect?
+ rotate RPCs
+ ~~RPC from url~~
+ check if pallet is available


## Goals

+ don't use centralized services
+ don't require a deployed backend
+ production ready settings
+ decentralized deployment possible
+ runnable locally
+ best typescript experience possible
+ light client first

## Stack

+ typescript
+ vite
+ tailwindcss
+ shadcn/ui
+ react-query
+ polkadotjs/api
+ (polkadotjs/api-augment)