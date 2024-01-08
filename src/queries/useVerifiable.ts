import * as Comlink from "comlink"
import { useEffect, useMemo, useState } from "react"
import { VerifiableWorker } from "./verifiable-worker.js"
import verifiableWorkerUrl from "./verifiable-worker?worker&url"

export const useVerifiable = () => {
  const [isReady, setReady] = useState(false)
  const verifiable: Comlink.Remote<VerifiableWorker> = useMemo(() => {
    const rawWorker = new Worker(verifiableWorkerUrl, { type: "module" })
    return Comlink.wrap(rawWorker)
  }, [])

  useEffect(() => {
    verifiable
      .init()
      .then(() => setReady(true))
      .catch((error) => {
        console.error("Error during init of verifiable", error)
      })
  }, [verifiable])

  return { isReady, verifiable }
}
