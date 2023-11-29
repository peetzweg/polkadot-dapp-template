import { web3Accounts, web3Enable } from "@polkadot/extension-dapp"

type InjectedAccountWithMeta = Awaited<ReturnType<typeof web3Accounts>>[0]

export const mutationTransferBalance = async () => {
  const extensions = await web3Enable("Polkadot Dapp Template")
  let accounts: InjectedAccountWithMeta[] = []
  if (extensions.length !== 0) {
    accounts = await web3Accounts()
  }
  return { extensions, accounts }
}
