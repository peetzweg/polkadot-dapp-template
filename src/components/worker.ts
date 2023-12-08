import init, { one_shot } from "../wasm/pkg/verifiable.js"

let isRunning = false

self.onmessage = (e: MessageEvent<Uint8Array[]>) => {
  console.log({ data: e.data })
  if (isRunning) {
    postMessage("Already Running")
  }

  init().then(() => {
    console.log("stuff ready")
    postMessage("starting")
    isRunning = true
    try {
      let result = one_shot(e.data[0], e.data[1])
      postMessage(result)
    } catch (error) {
      postMessage("Error :(")
    } finally {
      isRunning = false
    }
  })
}

export {}
