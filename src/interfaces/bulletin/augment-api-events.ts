// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/events';

import type { ApiTypes, AugmentedEvent } from '@polkadot/api-base/types';
import type { Bytes, Null, Option, Result, U8aFixed, Vec, u32, u64 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, H256 } from '@polkadot/types/interfaces/runtime';

export type __AugmentedEvent<ApiType extends ApiTypes> = AugmentedEvent<ApiType>;

declare module '@polkadot/api-base/types/events' {
  interface AugmentedEvents<ApiType extends ApiTypes> {
    bridgePolkadotGrandpa: {
      /**
       * Best finalized chain header has been updated to the header with given number and hash.
       **/
      UpdatedBestFinalizedHeader: AugmentedEvent<ApiType, [number: u32, hash_: H256, grandpaInfo: BpHeaderChainHeaderFinalityInfo], { number: u32, hash_: H256, grandpaInfo: BpHeaderChainHeaderFinalityInfo }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    bridgePolkadotMessages: {
      /**
       * Message has been accepted and is waiting to be delivered.
       **/
      MessageAccepted: AugmentedEvent<ApiType, [laneId: BpMessagesLaneId, nonce: u64], { laneId: BpMessagesLaneId, nonce: u64 }>;
      /**
       * Messages in the inclusive range have been delivered to the bridged chain.
       **/
      MessagesDelivered: AugmentedEvent<ApiType, [laneId: BpMessagesLaneId, messages: BpMessagesDeliveredMessages], { laneId: BpMessagesLaneId, messages: BpMessagesDeliveredMessages }>;
      /**
       * Messages have been received from the bridged chain.
       **/
      MessagesReceived: AugmentedEvent<ApiType, [Vec<BpMessagesReceivedMessages>]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    bridgePolkadotParachains: {
      /**
       * The caller has provided parachain head hash that is not matching the hash read from the
       * storage proof.
       **/
      IncorrectParachainHeadHash: AugmentedEvent<ApiType, [parachain: u32, parachainHeadHash: H256, actualParachainHeadHash: H256], { parachain: u32, parachainHeadHash: H256, actualParachainHeadHash: H256 }>;
      /**
       * The caller has declared that he has provided given parachain head, but it is missing
       * from the storage proof.
       **/
      MissingParachainHead: AugmentedEvent<ApiType, [parachain: u32], { parachain: u32 }>;
      /**
       * The caller has provided parachain head that exceeds the maximal configured head size.
       **/
      RejectedLargeParachainHead: AugmentedEvent<ApiType, [parachain: u32, parachainHeadHash: H256, parachainHeadSize: u32], { parachain: u32, parachainHeadHash: H256, parachainHeadSize: u32 }>;
      /**
       * The caller has provided obsolete parachain head, which is already known to the pallet.
       **/
      RejectedObsoleteParachainHead: AugmentedEvent<ApiType, [parachain: u32, parachainHeadHash: H256], { parachain: u32, parachainHeadHash: H256 }>;
      /**
       * The caller has provided head of parachain that the pallet is not configured to track.
       **/
      UntrackedParachainRejected: AugmentedEvent<ApiType, [parachain: u32], { parachain: u32 }>;
      /**
       * Parachain head has been updated.
       **/
      UpdatedParachainHead: AugmentedEvent<ApiType, [parachain: u32, parachainHeadHash: H256], { parachain: u32, parachainHeadHash: H256 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    grandpa: {
      /**
       * New authority set has been applied.
       **/
      NewAuthorities: AugmentedEvent<ApiType, [authoritySet: Vec<ITuple<[SpConsensusGrandpaAppPublic, u64]>>], { authoritySet: Vec<ITuple<[SpConsensusGrandpaAppPublic, u64]>> }>;
      /**
       * Current authority set has been paused.
       **/
      Paused: AugmentedEvent<ApiType, []>;
      /**
       * Current authority set has been resumed.
       **/
      Resumed: AugmentedEvent<ApiType, []>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    imOnline: {
      /**
       * At the end of the session, no offence was committed.
       **/
      AllGood: AugmentedEvent<ApiType, []>;
      /**
       * A new heartbeat was received from `AuthorityId`.
       **/
      HeartbeatReceived: AugmentedEvent<ApiType, [authorityId: PalletImOnlineSr25519AppSr25519Public], { authorityId: PalletImOnlineSr25519AppSr25519Public }>;
      /**
       * At the end of the session, at least one validator was found to be offline.
       **/
      SomeOffline: AugmentedEvent<ApiType, [offline: Vec<ITuple<[AccountId32, AccountId32]>>], { offline: Vec<ITuple<[AccountId32, AccountId32]>> }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    offences: {
      /**
       * There is an offence reported of the given `kind` happened at the `session_index` and
       * (kind-specific) time slot. This event is not deposited for duplicate slashes.
       * \[kind, timeslot\].
       **/
      Offence: AugmentedEvent<ApiType, [kind: U8aFixed, timeslot: Bytes], { kind: U8aFixed, timeslot: Bytes }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    relayerSet: {
      /**
       * New relayer added.
       **/
      RelayerAdded: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * Relayer removed.
       **/
      RelayerRemoved: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    session: {
      /**
       * New session has happened. Note that the argument is the session index, not the
       * block number as the type might suggest.
       **/
      NewSession: AugmentedEvent<ApiType, [sessionIndex: u32], { sessionIndex: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    sudo: {
      /**
       * The \[sudoer\] just switched identity; the old key is supplied if one existed.
       **/
      KeyChanged: AugmentedEvent<ApiType, [oldSudoer: Option<AccountId32>], { oldSudoer: Option<AccountId32> }>;
      /**
       * A sudo just took place. \[result\]
       **/
      Sudid: AugmentedEvent<ApiType, [sudoResult: Result<Null, SpRuntimeDispatchError>], { sudoResult: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A sudo just took place. \[result\]
       **/
      SudoAsDone: AugmentedEvent<ApiType, [sudoResult: Result<Null, SpRuntimeDispatchError>], { sudoResult: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    system: {
      /**
       * `:code` was updated.
       **/
      CodeUpdated: AugmentedEvent<ApiType, []>;
      /**
       * An extrinsic failed.
       **/
      ExtrinsicFailed: AugmentedEvent<ApiType, [dispatchError: SpRuntimeDispatchError, dispatchInfo: FrameSupportDispatchDispatchInfo], { dispatchError: SpRuntimeDispatchError, dispatchInfo: FrameSupportDispatchDispatchInfo }>;
      /**
       * An extrinsic completed successfully.
       **/
      ExtrinsicSuccess: AugmentedEvent<ApiType, [dispatchInfo: FrameSupportDispatchDispatchInfo], { dispatchInfo: FrameSupportDispatchDispatchInfo }>;
      /**
       * An account was reaped.
       **/
      KilledAccount: AugmentedEvent<ApiType, [account: AccountId32], { account: AccountId32 }>;
      /**
       * A new account was created.
       **/
      NewAccount: AugmentedEvent<ApiType, [account: AccountId32], { account: AccountId32 }>;
      /**
       * On on-chain remark happened.
       **/
      Remarked: AugmentedEvent<ApiType, [sender: AccountId32, hash_: H256], { sender: AccountId32, hash_: H256 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    transactionStorage: {
      /**
       * An account `who` was authorized to store `bytes` bytes in `transactions` transactions.
       **/
      AccountAuthorized: AugmentedEvent<ApiType, [who: AccountId32, transactions: u32, bytes: u64], { who: AccountId32, transactions: u32, bytes: u64 }>;
      /**
       * An expired account authorization was removed.
       **/
      ExpiredAccountAuthorizationRemoved: AugmentedEvent<ApiType, [who: AccountId32], { who: AccountId32 }>;
      /**
       * An expired preimage authorization was removed.
       **/
      ExpiredPreimageAuthorizationRemoved: AugmentedEvent<ApiType, [hash_: U8aFixed], { hash_: U8aFixed }>;
      /**
       * Authorization was given for a preimage of `hash` (not exceeding `max_size`) to be
       * stored by anyone.
       **/
      PreimageAuthorized: AugmentedEvent<ApiType, [hash_: U8aFixed, maxSize: u64], { hash_: U8aFixed, maxSize: u64 }>;
      /**
       * Storage proof was successfully checked.
       **/
      ProofChecked: AugmentedEvent<ApiType, []>;
      /**
       * Renewed data under specified index.
       **/
      Renewed: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * Stored data under specified index.
       **/
      Stored: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    validatorSet: {
      /**
       * New validator added. Effective in session after next.
       **/
      ValidatorAdded: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * Validator removed. Effective in session after next.
       **/
      ValidatorRemoved: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
  } // AugmentedEvents
} // declare module
