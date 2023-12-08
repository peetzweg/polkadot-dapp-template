import { mnemonicGenerate, mnemonicToEntropy } from "@polkadot/util-crypto"
import { useQuery } from "@tanstack/react-query"
import { useEffect, useMemo } from "react"
import { formatBalance } from "../lib/formatBalance"
import { useApi } from "../providers/api-provider"
import { useKeyring } from "../providers/keyring-provider"
import init, { member_from_entropy } from "../wasm/pkg/verifiable.js"
import myWorkerUrl from "./worker?worker&url"

export const Debug: React.FC = () => {
  const { api, decimals } = useApi()
  const { pair } = useKeyring()
  const worker: Worker = useMemo(() => {
    const innerWorker = new Worker(myWorkerUrl, { type: "module" })
    innerWorker.addEventListener("message", (ev) => {
      console.log({ message: ev.data })
    })
    return innerWorker
  }, [])

  useEffect(() => {
    if (!worker) return
    init()
      .then(() => {
        //
        // const mnemonic = mnemonicGenerate(24)
        // const entropy = mnemonicToEntropy(mnemonic)
        // const member = member_from_entropy(entropy)

        const myEntropy = api.createType(
          "Entropy",
          mnemonicToEntropy(mnemonicGenerate(24)),
        )

        const entropies = new Array(12)
          .fill(1)
          .map(() => mnemonicGenerate(24))
          .map((mnemonic) => mnemonicToEntropy(mnemonic))
          .map((entropy) => api.createType("Entropy", entropy))

        // // We get this from chain
        const raw_members = entropies.map((entropy) =>
          member_from_entropy(entropy.toU8a()),
        )
        console.log({ entropies, myEntropy, raw_members })

        const membersVec = api.createType("MembersVec", raw_members)

        console.log({ membersVec, myEntropy })
        worker.postMessage([myEntropy.toU8a(), membersVec.toU8a()])

        // one_shot_promise(myEntropy.toU8a(), membersVec.toU8a())
        //   .then((result) => {
        //     console.log(result)
        //   })
        //   .catch((error) => console.error(error))

        // let result = one_shot(myEntropy.toU8a(), membersVec.toU8a())

        // // via API (recommended)
        // api.createType("EntropyVec", members)

        // console.log(members)

        // const members_input = Uint8Array.from(new Array(320).fill(1))
        // const entropy = Uint8Array.from(new Array(32).fill(42))
        // console.log({ members_input, entropy })

        // console.log("wasm initialized")

        // const secret = new_secret(entropy)

        // console.log({ secret })
        // const member = member_from_secret(secret)

        // console.log({ member })

        // const commitment = open(member, members_input)
        // console.log({ commitment })

        // const outcome = one_shot(entropy, members_input)
        // console.log({ outcome })
      })
      .catch((error) => {
        console.log({ error })
      })
  }, [worker])

  const { data } = useQuery({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: ["system.account", pair?.address],
    queryFn: async () => {
      return (await api.query.system.account(pair!.address)).data
    },
    enabled: !!pair,
  })

  return (
    <div className="relative flex w-auto flex-col space-y-2 rounded-md border p-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:p-6 lg:p-6">
      {data && (
        <>
          <div className="space-y-2">
            <h2 className="text-4xl font-extrabold leading-6 tracking-tight">
              {pair?.meta.name}
            </h2>
            <p className="mt-1 break-all font-mono text-sm text-gray-500">
              {pair?.address}
            </p>
          </div>

          <div className="flex flex-row justify-around">
            <div className="flex flex-1 flex-col items-end justify-center space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
              <div className="text-2xl font-bold tabular-nums">
                {formatBalance(data.free.toBigInt(), { decimals })}
              </div>
              <p className="text-xs text-muted-foreground">Free</p>
            </div>
            <div className=" flex flex-1 flex-col items-end justify-center space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
              <div className="text-2xl font-bold tabular-nums">
                {formatBalance(data.reserved.toBigInt(), { decimals })}
              </div>
              <p className="text-xs text-muted-foreground">Reserved</p>
            </div>
            <div className=" flex flex-1 flex-col items-end justify-center space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
              <div className="text-2xl font-bold tabular-nums">
                {formatBalance(data.frozen.toBigInt(), { decimals })}
              </div>
              <p className="text-xs text-muted-foreground">Frozen</p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
