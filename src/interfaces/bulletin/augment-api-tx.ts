// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/submittable';

import type { ApiTypes, AugmentedSubmittable, SubmittableExtrinsic, SubmittableExtrinsicFunction } from '@polkadot/api-base/types';
import type { Bytes, Compact, Option, U8aFixed, Vec, u32, u64 } from '@polkadot/types-codec';
import type { AnyNumber, IMethod, ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, Call, H256, MultiAddress } from '@polkadot/types/interfaces/runtime';

export type __AugmentedSubmittable = AugmentedSubmittable<() => unknown>;
export type __SubmittableExtrinsic<ApiType extends ApiTypes> = SubmittableExtrinsic<ApiType>;
export type __SubmittableExtrinsicFunction<ApiType extends ApiTypes> = SubmittableExtrinsicFunction<ApiType>;

declare module '@polkadot/api-base/types/submittable' {
  interface AugmentedSubmittables<ApiType extends ApiTypes> {
    babe: {
      /**
       * See [`Pallet::plan_config_change`].
       **/
      planConfigChange: AugmentedSubmittable<(config: SpConsensusBabeDigestsNextConfigDescriptor | { V1: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpConsensusBabeDigestsNextConfigDescriptor]>;
      /**
       * See [`Pallet::report_equivocation`].
       **/
      reportEquivocation: AugmentedSubmittable<(equivocationProof: SpConsensusSlotsEquivocationProof | { offender?: any; slot?: any; firstHeader?: any; secondHeader?: any } | string | Uint8Array, keyOwnerProof: SpSessionMembershipProof | { session?: any; trieNodes?: any; validatorCount?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpConsensusSlotsEquivocationProof, SpSessionMembershipProof]>;
      /**
       * See [`Pallet::report_equivocation_unsigned`].
       **/
      reportEquivocationUnsigned: AugmentedSubmittable<(equivocationProof: SpConsensusSlotsEquivocationProof | { offender?: any; slot?: any; firstHeader?: any; secondHeader?: any } | string | Uint8Array, keyOwnerProof: SpSessionMembershipProof | { session?: any; trieNodes?: any; validatorCount?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpConsensusSlotsEquivocationProof, SpSessionMembershipProof]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    bridgePolkadotGrandpa: {
      /**
       * See [`Pallet::initialize`].
       **/
      initialize: AugmentedSubmittable<(initData: BpHeaderChainInitializationData | { header?: any; authorityList?: any; setId?: any; operatingMode?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [BpHeaderChainInitializationData]>;
      /**
       * See [`Pallet::set_operating_mode`].
       **/
      setOperatingMode: AugmentedSubmittable<(operatingMode: BpRuntimeBasicOperatingMode | 'Normal' | 'Halted' | number | Uint8Array) => SubmittableExtrinsic<ApiType>, [BpRuntimeBasicOperatingMode]>;
      /**
       * See [`Pallet::set_owner`].
       **/
      setOwner: AugmentedSubmittable<(newOwner: Option<AccountId32> | null | Uint8Array | AccountId32 | string) => SubmittableExtrinsic<ApiType>, [Option<AccountId32>]>;
      /**
       * See [`Pallet::submit_finality_proof`].
       **/
      submitFinalityProof: AugmentedSubmittable<(finalityTarget: SpRuntimeHeader | { parentHash?: any; number?: any; stateRoot?: any; extrinsicsRoot?: any; digest?: any } | string | Uint8Array, justification: BpHeaderChainJustificationGrandpaJustification | { round?: any; commit?: any; votesAncestries?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpRuntimeHeader, BpHeaderChainJustificationGrandpaJustification]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    bridgePolkadotMessages: {
      /**
       * See [`Pallet::receive_messages_delivery_proof`].
       **/
      receiveMessagesDeliveryProof: AugmentedSubmittable<(proof: BridgeRuntimeCommonMessagesSourceFromBridgedChainMessagesDeliveryProof | { bridgedHeaderHash?: any; storageProof?: any; lane?: any } | string | Uint8Array, relayersState: BpMessagesUnrewardedRelayersState | { unrewardedRelayerEntries?: any; messagesInOldestEntry?: any; totalMessages?: any; lastDeliveredNonce?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [BridgeRuntimeCommonMessagesSourceFromBridgedChainMessagesDeliveryProof, BpMessagesUnrewardedRelayersState]>;
      /**
       * See [`Pallet::receive_messages_proof`].
       **/
      receiveMessagesProof: AugmentedSubmittable<(relayerIdAtBridgedChain: AccountId32 | string | Uint8Array, proof: BridgeRuntimeCommonMessagesTargetFromBridgedChainMessagesProof | { bridgedHeaderHash?: any; storageProof?: any; lane?: any; noncesStart?: any; noncesEnd?: any } | string | Uint8Array, messagesCount: u32 | AnyNumber | Uint8Array, dispatchWeight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, BridgeRuntimeCommonMessagesTargetFromBridgedChainMessagesProof, u32, SpWeightsWeightV2Weight]>;
      /**
       * See [`Pallet::set_operating_mode`].
       **/
      setOperatingMode: AugmentedSubmittable<(operatingMode: BpMessagesMessagesOperatingMode | { Basic: any } | { RejectingOutboundMessages: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [BpMessagesMessagesOperatingMode]>;
      /**
       * See [`Pallet::set_owner`].
       **/
      setOwner: AugmentedSubmittable<(newOwner: Option<AccountId32> | null | Uint8Array | AccountId32 | string) => SubmittableExtrinsic<ApiType>, [Option<AccountId32>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    bridgePolkadotParachains: {
      /**
       * See [`Pallet::set_operating_mode`].
       **/
      setOperatingMode: AugmentedSubmittable<(operatingMode: BpRuntimeBasicOperatingMode | 'Normal' | 'Halted' | number | Uint8Array) => SubmittableExtrinsic<ApiType>, [BpRuntimeBasicOperatingMode]>;
      /**
       * See [`Pallet::set_owner`].
       **/
      setOwner: AugmentedSubmittable<(newOwner: Option<AccountId32> | null | Uint8Array | AccountId32 | string) => SubmittableExtrinsic<ApiType>, [Option<AccountId32>]>;
      /**
       * See [`Pallet::submit_parachain_heads`].
       **/
      submitParachainHeads: AugmentedSubmittable<(atRelayBlock: ITuple<[u32, H256]> | [u32 | AnyNumber | Uint8Array, H256 | string | Uint8Array], parachains: Vec<ITuple<[u32, H256]>> | ([u32 | AnyNumber | Uint8Array, H256 | string | Uint8Array])[], parachainHeadsProof: BpPolkadotCoreParachainsParaHeadsProof) => SubmittableExtrinsic<ApiType>, [ITuple<[u32, H256]>, Vec<ITuple<[u32, H256]>>, BpPolkadotCoreParachainsParaHeadsProof]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    grandpa: {
      /**
       * See [`Pallet::note_stalled`].
       **/
      noteStalled: AugmentedSubmittable<(delay: u32 | AnyNumber | Uint8Array, bestFinalizedBlockNumber: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      /**
       * See [`Pallet::report_equivocation`].
       **/
      reportEquivocation: AugmentedSubmittable<(equivocationProof: SpConsensusGrandpaEquivocationProof | { setId?: any; equivocation?: any } | string | Uint8Array, keyOwnerProof: SpSessionMembershipProof | { session?: any; trieNodes?: any; validatorCount?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpConsensusGrandpaEquivocationProof, SpSessionMembershipProof]>;
      /**
       * See [`Pallet::report_equivocation_unsigned`].
       **/
      reportEquivocationUnsigned: AugmentedSubmittable<(equivocationProof: SpConsensusGrandpaEquivocationProof | { setId?: any; equivocation?: any } | string | Uint8Array, keyOwnerProof: SpSessionMembershipProof | { session?: any; trieNodes?: any; validatorCount?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpConsensusGrandpaEquivocationProof, SpSessionMembershipProof]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    imOnline: {
      /**
       * See [`Pallet::heartbeat`].
       **/
      heartbeat: AugmentedSubmittable<(heartbeat: PalletImOnlineHeartbeat | { blockNumber?: any; sessionIndex?: any; authorityIndex?: any; validatorsLen?: any } | string | Uint8Array, signature: PalletImOnlineSr25519AppSr25519Signature | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletImOnlineHeartbeat, PalletImOnlineSr25519AppSr25519Signature]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    session: {
      /**
       * See [`Pallet::purge_keys`].
       **/
      purgeKeys: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::set_keys`].
       **/
      setKeys: AugmentedSubmittable<(keys: PolkadotBulletinChainRuntimeOpaqueSessionKeys | { babe?: any; grandpa?: any; imOnline?: any } | string | Uint8Array, proof: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PolkadotBulletinChainRuntimeOpaqueSessionKeys, Bytes]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    sudo: {
      /**
       * See [`Pallet::set_key`].
       **/
      setKey: AugmentedSubmittable<(updated: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * See [`Pallet::sudo`].
       **/
      sudo: AugmentedSubmittable<(call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call]>;
      /**
       * See [`Pallet::sudo_as`].
       **/
      sudoAs: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Call]>;
      /**
       * See [`Pallet::sudo_unchecked_weight`].
       **/
      sudoUncheckedWeight: AugmentedSubmittable<(call: Call | IMethod | string | Uint8Array, weight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call, SpWeightsWeightV2Weight]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    system: {
      /**
       * See [`Pallet::kill_prefix`].
       **/
      killPrefix: AugmentedSubmittable<(prefix: Bytes | string | Uint8Array, subkeys: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, u32]>;
      /**
       * See [`Pallet::kill_storage`].
       **/
      killStorage: AugmentedSubmittable<(keys: Vec<Bytes> | (Bytes | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Bytes>]>;
      /**
       * See [`Pallet::remark`].
       **/
      remark: AugmentedSubmittable<(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * See [`Pallet::remark_with_event`].
       **/
      remarkWithEvent: AugmentedSubmittable<(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * See [`Pallet::set_code`].
       **/
      setCode: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * See [`Pallet::set_code_without_checks`].
       **/
      setCodeWithoutChecks: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * See [`Pallet::set_heap_pages`].
       **/
      setHeapPages: AugmentedSubmittable<(pages: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64]>;
      /**
       * See [`Pallet::set_storage`].
       **/
      setStorage: AugmentedSubmittable<(items: Vec<ITuple<[Bytes, Bytes]>> | ([Bytes | string | Uint8Array, Bytes | string | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[Bytes, Bytes]>>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    timestamp: {
      /**
       * See [`Pallet::set`].
       **/
      set: AugmentedSubmittable<(now: Compact<u64> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u64>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    transactionStorage: {
      /**
       * See [`Pallet::authorize_account`].
       **/
      authorizeAccount: AugmentedSubmittable<(who: AccountId32 | string | Uint8Array, transactions: u32 | AnyNumber | Uint8Array, bytes: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u32, u64]>;
      /**
       * See [`Pallet::authorize_preimage`].
       **/
      authorizePreimage: AugmentedSubmittable<(hash: U8aFixed | string | Uint8Array, maxSize: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [U8aFixed, u64]>;
      /**
       * See [`Pallet::check_proof`].
       **/
      checkProof: AugmentedSubmittable<(proof: SpTransactionStorageProofTransactionStorageProof | { chunk?: any; proof?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpTransactionStorageProofTransactionStorageProof]>;
      /**
       * See [`Pallet::remove_expired_account_authorization`].
       **/
      removeExpiredAccountAuthorization: AugmentedSubmittable<(who: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * See [`Pallet::remove_expired_preimage_authorization`].
       **/
      removeExpiredPreimageAuthorization: AugmentedSubmittable<(hash: U8aFixed | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [U8aFixed]>;
      /**
       * See [`Pallet::renew`].
       **/
      renew: AugmentedSubmittable<(block: u32 | AnyNumber | Uint8Array, index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      /**
       * See [`Pallet::store`].
       **/
      store: AugmentedSubmittable<(data: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
  } // AugmentedSubmittables
} // declare module
