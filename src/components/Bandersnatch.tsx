import { mnemonicGenerate, mnemonicToEntropy } from "@polkadot/util-crypto"
import { useMutation } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import { useApi } from "../providers/api-provider.js"
import { useQueryMemberKey } from "../queries/useQueryMemberKey.js"
import { useQueryRootMembers } from "../queries/useQueryRootMembers.js"
import { useVerifiable } from "../queries/useVerifiable.js"
import { ProofResults } from "../queries/verifiable-worker.js"
import { useKeyringStore } from "../state/keyring.js"
import { Button } from "./ui/button.js"
import { Input } from "./ui/input.js"
import { Textarea } from "./ui/textarea.js"

export const Bandersnatch: React.FC = () => {
  // TODO how to use generated pair as entropy and not mnemonic directly
  // TODO use comlinks advanced feature to transfer or just proxy certain values

  const { api } = useApi()
  const { mnemonic } = useKeyringStore()
  const { data: members } = useQueryRootMembers()
  const { data: me } = useQueryMemberKey()

  const { verifiable, isReady } = useVerifiable()

  const {
    data,
    mutate: generateProof,
    isPending,
  } = useMutation({
    mutationKey: [mnemonic],
    mutationFn: async () => {
      const memberVec = api.createType("MembersVec", members)
      console.log({ memberVec, me, isReady })
      return verifiable.generateProof(
        me!,
        memberVec.toU8a(),
        Uint8Array.from([4, 3, 2, 1]),
        Uint8Array.from([1, 2, 3, 4]),
      )
    },
    onSuccess: () => {
      setTimeout(
        () =>
          window.scrollTo({
            behavior: "smooth",
            top: Number.MAX_SAFE_INTEGER,
          }),
        200,
      )
    },
  })
  console.log({ data, isPending })

  const { data: validationData, mutate: validate } = useMutation({
    onError: (error) => {
      console.error(error)
    },
    mutationFn: (results: ProofResults) => {
      return verifiable.validate(
        results.proof,
        results.members,
        results.context,
        results.message,
      )
    },
    onSuccess: () => {
      setTimeout(
        () =>
          window.scrollTo({
            behavior: "smooth",
            top: Number.MAX_SAFE_INTEGER,
          }),
        200,
      )
    },
    mutationKey: [],
  })

  return (
    <div className="relative flex max-w-full flex-col gap-6 rounded-md border p-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:p-6 lg:p-6">
      <>
        <div className="space-y-2">
          <h2 className="text-3xl font-extrabold leading-6 tracking-tight">
            Bandersnatch
          </h2>
          <p className="mt-1 break-all font-mono text-sm text-gray-500">
            Using <code>small-ring</code>
          </p>
        </div>

        <div>
          <h2 className="text-xl font-extrabold leading-6 tracking-tight">
            Me
          </h2>
          <p className="break-all font-mono text-sm text-gray-500">
            My member public key
          </p>
          <div className="flex font-mono text-sm">
            {api.createType("Member", me).toHex().toString()}
          </div>
        </div>
        {members !== undefined && (
          <div>
            <h2 className="text-xl font-extrabold leading-6 tracking-tight">
              {`Members (${members.length})`}
            </h2>
            <p className="break-all font-mono text-sm text-gray-500">
              Public keys of members in set
            </p>
            <div className="w-full max-w-full overflow-auto">
              <div className="flex flex-col font-mono text-sm">
                {members
                  .map((m) => api.createType("Member", m).toHex())
                  .map((m) => (
                    <div className="" key={m}>
                      {m}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
        <div>
          <Button
            className="w-full"
            disabled={isPending}
            onClick={() => generateProof()}
          >
            Generate Proof
          </Button>
        </div>

        {data && (
          <div className="-mx-4 -mb-4 flex flex-col gap-4 rounded-b-sm border-t border-dashed bg-muted p-4 md:-mx-6 md:-mb-6 md:p-6 lg:p-6">
            <div>
              <h2 className="text-xl font-extrabold leading-6 tracking-tight">
                Alias
              </h2>
              <p className="break-all font-mono text-sm text-gray-500"></p>
              <div className="flex">
                <Input
                  className="w-full font-mono"
                  readOnly
                  value={api.createType("Alias", data.alias).toHex()}
                />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-extrabold leading-6 tracking-tight">
                Proof
              </h2>
              <p className="break-all font-mono text-sm text-gray-500"></p>
              <div className="flex">
                <Textarea
                  rows={10}
                  className="w-full font-mono"
                  readOnly
                  value={api.createType("Proof", data.proof).toHex()}
                />
              </div>
            </div>
          </div>
        )}

        {data && (
          <div className=" flex flex-col gap-4 border-dashed  p-4 md:-mx-6 md:-mb-6 md:p-6 lg:p-6">
            <div>
              <h2 className="text-xl font-extrabold leading-6 tracking-tight">
                Validate Proof
              </h2>
              <p className="break-all font-mono text-sm text-gray-500"></p>
            </div>
            <Button onClick={() => validate(data)}>Validate Proof</Button>
            {validationData && (
              <div className="flex flex-col">
                <Input
                  className="w-full font-mono"
                  readOnly
                  value={api.createType("Alias", validationData.alias).toHex()}
                />
                <div className="flex flex-col items-center justify-center text-sm text-muted-foreground">
                  {api.createType("Alias", validationData.alias).toHex() ==
                  api.createType("Alias", data.alias).toHex()
                    ? "ALIASES EQUAL => Proof Valid"
                    : "ALIASES NOT EQUAL => Proof Invalid"}
                </div>
              </div>
            )}
          </div>
        )}
      </>
    </div>
  )
}
