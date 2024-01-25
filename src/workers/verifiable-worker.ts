import init, {
  one_shot,
  validate,
  member_from_entropy,
} from "./verifiable/verifiable.js"

import * as Comlink from "comlink"

export interface ProofResults {
  member: Uint8Array
  members: Uint8Array
  proof: Uint8Array
  alias: Uint8Array
  context: Uint8Array
  message: Uint8Array
}

interface ValidateResults {
  alias: Uint8Array
}

type GenerateProofArguments = Parameters<typeof one_shot>

const verifiable: {
  init: () => Promise<void>
  generateProof: (...args: GenerateProofArguments) => ProofResults
  validate: (...args: Parameters<typeof validate>) => ValidateResults
  memberFromEntropy: (
    ...args: Parameters<typeof member_from_entropy>
  ) => Uint8Array
} = {
  init: async () => {
    await init()
  },
  generateProof: (
    entropy: Uint8Array,
    members: Uint8Array,
    context: Uint8Array,
    message: Uint8Array,
  ): ProofResults => {
    return one_shot(entropy, members, context, message) as ProofResults
  },
  validate: (
    proof: Uint8Array,
    members: Uint8Array,
    context: Uint8Array,
    message: Uint8Array,
  ): ValidateResults => {
    const alias = validate(proof, members, context, message)
    return {
      alias,
    } as ValidateResults
  },
  memberFromEntropy: (entropy: Uint8Array): Uint8Array => {
    return member_from_entropy(entropy)
  },
}

export type VerifiableWorker = typeof verifiable

Comlink.expose(verifiable)
