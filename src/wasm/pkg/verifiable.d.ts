/* tslint:disable */
/* eslint-disable */
/**
* @param {Uint8Array} entropy
* @param {Uint8Array} members
* @returns {object}
*/
export function one_shot_trivial(entropy: Uint8Array, members: Uint8Array): object;
/**
* @param {Uint8Array} entropy_input
* @returns {Uint8Array}
*/
export function new_secret_trivial(entropy_input: Uint8Array): Uint8Array;
/**
* @param {Uint8Array} secret_input
* @returns {Uint8Array}
*/
export function member_from_secret_trivial(secret_input: Uint8Array): Uint8Array;
/**
* @param {Uint8Array} member_input
* @param {Uint8Array} members_input
* @returns {object}
*/
export function open_trivial(member_input: Uint8Array, members_input: Uint8Array): object;
/**
* @param {Uint8Array} commitment
* @param {Uint8Array} secret
* @param {Uint8Array} context
* @param {Uint8Array} message
*/
export function create_trivial(commitment: Uint8Array, secret: Uint8Array, context: Uint8Array, message: Uint8Array): void;
/**
* @param {Uint8Array} proof
* @param {Uint8Array} members
* @param {Uint8Array} context
* @param {Uint8Array} message
*/
export function validate_trivial(proof: Uint8Array, members: Uint8Array, context: Uint8Array, message: Uint8Array): void;
/**
* @param {Uint8Array} entropy
* @param {Uint8Array} members
* @param {Uint8Array} context
* @param {Uint8Array} message
* @returns {object}
*/
export function one_shot(entropy: Uint8Array, members: Uint8Array, context: Uint8Array, message: Uint8Array): object;
/**
* @param {Uint8Array} proof
* @param {Uint8Array} members
* @param {Uint8Array} context
* @param {Uint8Array} message
* @returns {Uint8Array}
*/
export function validate(proof: Uint8Array, members: Uint8Array, context: Uint8Array, message: Uint8Array): Uint8Array;
/**
* @param {Uint8Array} entropy_input
* @returns {Uint8Array}
*/
export function new_secret(entropy_input: Uint8Array): Uint8Array;
/**
* @param {Uint8Array} entropy
* @returns {Uint8Array}
*/
export function member_from_entropy(entropy: Uint8Array): Uint8Array;
/**
* @param {Uint8Array} secret_input
* @returns {Uint8Array}
*/
export function member_from_secret(secret_input: Uint8Array): Uint8Array;
/**
* @param {Uint8Array} member_input
* @param {Uint8Array} members_input
* @returns {object}
*/
export function open(member_input: Uint8Array, members_input: Uint8Array): object;
/**
* @param {Uint8Array} commitment
* @param {Uint8Array} secret
* @param {Uint8Array} context
* @param {Uint8Array} message
*/
export function create(commitment: Uint8Array, secret: Uint8Array, context: Uint8Array, message: Uint8Array): void;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly one_shot_trivial: (a: number, b: number) => number;
  readonly new_secret_trivial: (a: number) => number;
  readonly member_from_secret_trivial: (a: number) => number;
  readonly open_trivial: (a: number, b: number) => number;
  readonly create_trivial: (a: number, b: number, c: number, d: number) => void;
  readonly validate_trivial: (a: number, b: number, c: number, d: number) => void;
  readonly one_shot: (a: number, b: number, c: number, d: number) => number;
  readonly validate: (a: number, b: number, c: number, d: number) => number;
  readonly new_secret: (a: number) => number;
  readonly member_from_entropy: (a: number) => number;
  readonly member_from_secret: (a: number) => number;
  readonly open: (a: number, b: number) => number;
  readonly create: (a: number, b: number, c: number, d: number) => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_exn_store: (a: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
