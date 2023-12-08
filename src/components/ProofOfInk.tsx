import { useState } from "react"
import { Apply } from "./pop/Apply"
import { Commit } from "./pop/Commit"
import { SubmitEvidence } from "./pop/SubmitEvidence"

export const ProofOfInk: React.FC = () => {
  const [state, setState] = useState<"apply" | "commit" | "evidence" | "case">(
    "commit",
  )

  return (
    <div className="relative flex w-auto flex-col space-y-2 rounded-md border p-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:p-6 lg:p-6">
      <div className="space-y-2">
        <h3 className="text-3xl font-extrabold leading-6 tracking-tight">
          Proof of Ink
        </h3>
        <p className="mt-1 break-words font-mono text-sm text-gray-500">
          Acquire{" "}
          <a href="" className="text-pink-500">
            Polkadot Citizenship
          </a>{" "}
          through the Proof of Ink Protocol.
        </p>
        <div className="flex w-full flex-row justify-between">
          <div>Apply</div>
          <div>→</div>
          <div>Commit</div>
          <div>→</div>
          <div>Evidence</div>
          <div>→</div>
          <div>Citizenship</div>
        </div>
      </div>

      {state === "case" ? (
        <div>case</div>
      ) : state === "commit" ? (
        <Commit onSuccess={() => setState("evidence")} />
      ) : state === "evidence" ? (
        <SubmitEvidence />
      ) : (
        <Apply
          onSuccess={() => {
            setState("commit")
          }}
        />
      )}
    </div>
  )
}
