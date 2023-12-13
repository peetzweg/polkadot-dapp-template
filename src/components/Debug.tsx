import { mnemonicGenerate, mnemonicToEntropy } from "@polkadot/util-crypto"
import { useQuery } from "@tanstack/react-query"
import * as Comlink from "comlink"
import { useEffect, useMemo } from "react"
import { formatBalance } from "../lib/formatBalance"
import { useApi } from "../providers/api-provider"
import { useKeyring } from "../providers/keyring-provider"
import { VerifiableWorker } from "./verifiable-worker.js"
import verifiableWorkerUrl from "./verifiable-worker?worker&url"

export const Debug: React.FC = () => {
  const { api, decimals } = useApi()
  const { pair } = useKeyring()

  // TODO how to use generated pair as entropy
  // TODO why are the verifiable calls happening more than once
  // TODO use comlinks advanced feature to transfer or just proxy certain values

  const verifiable: Comlink.Remote<VerifiableWorker> = useMemo(() => {
    const rawWorker = new Worker(verifiableWorkerUrl, { type: "module" })
    return Comlink.wrap(rawWorker)
  }, [])

  useEffect(() => {
    if (!verifiable) return
    if (!api) return
    console.log("init verifiable")

    verifiable
      .init()
      .then(() => {
        const myEntropy = api.createType(
          "Entropy",
          mnemonicToEntropy(mnemonicGenerate(24)),
        )

        const entropies = new Array(12)
          .fill(1)
          .map(() => mnemonicGenerate(24))
          .map((mnemonic) => mnemonicToEntropy(mnemonic))
          .map((entropy) => api.createType("Entropy", entropy))

        Promise.all(
          entropies.map((entropy) =>
            verifiable.memberFromEntropy(entropy.toU8a()),
          ),
        ).then((raw_members) => {
          console.log({ entropies, myEntropy, raw_members })

          const membersVec = api.createType("MembersVec", raw_members)

          verifiable
            .generateProof(myEntropy.toU8a(), membersVec.toU8a())
            .then((proof) => {
              console.log({ verifiable: proof })

              verifiable
                .validate(
                  proof.proof,
                  proof.members,
                  proof.context!,
                  proof.message!,
                )
                .then((validateResults) => {
                  console.log({ validateResults })
                  if (validateResults.alias == proof.alias) {
                    console.log("proof is valid")
                  }
                })
                .catch((validationError) => {
                  console.log({ validationError })
                })
            })
            .catch((error) => {
              console.error(error)
            })
        })
      })
      .catch((error) => {
        console.log("Error during init", error)
      })
  }, [api, verifiable])

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
