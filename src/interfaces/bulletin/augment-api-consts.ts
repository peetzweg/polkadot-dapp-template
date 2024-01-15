// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/consts';

import type { ApiTypes, AugmentedConst } from '@polkadot/api-base/types';
import type { Text, U8aFixed, u16, u32, u64 } from '@polkadot/types-codec';
import type { Codec } from '@polkadot/types-codec/types';
import type { FrameSystemLimitsBlockLength, FrameSystemLimitsBlockWeights, SpVersionRuntimeVersion, SpWeightsRuntimeDbWeight } from '@polkadot/types/lookup';

export type __AugmentedConst<ApiType extends ApiTypes> = AugmentedConst<ApiType>;

declare module '@polkadot/api-base/types/consts' {
  interface AugmentedConsts<ApiType extends ApiTypes> {
    babe: {
      /**
       * The amount of time, in slots, that each epoch should last.
       * NOTE: Currently it is not possible to change the epoch duration after
       * the chain has started. Attempting to do so will brick block production.
       **/
      epochDuration: u64 & AugmentedConst<ApiType>;
      /**
       * The expected average block time at which BABE should be creating
       * blocks. Since BABE is probabilistic it is not trivial to figure out
       * what the expected average block time should be based on the slot
       * duration and the security parameter `c` (where `1 - c` represents
       * the probability of a slot being empty).
       **/
      expectedBlockTime: u64 & AugmentedConst<ApiType>;
      /**
       * Max number of authorities allowed
       **/
      maxAuthorities: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    bridgePolkadotGrandpa: {
      /**
       * Maximal number of finalized headers to keep in the storage.
       * 
       * The setting is there to prevent growing the on-chain state indefinitely. Note
       * the setting does not relate to block numbers - we will simply keep as much items
       * in the storage, so it doesn't guarantee any fixed timeframe for finality headers.
       * 
       * Incautious change of this constant may lead to orphan entries in the runtime storage.
       **/
      headersToKeep: u32 & AugmentedConst<ApiType>;
      /**
       * Maximal number of "free" mandatory header transactions per block.
       * 
       * To be able to track the bridged chain, the pallet requires all headers that are
       * changing GRANDPA authorities set at the bridged chain (we call them mandatory).
       * So it is a common good deed to submit mandatory headers to the pallet. However, if the
       * bridged chain gets compromised, its validators may generate as many mandatory headers
       * as they want. And they may fill the whole block (at this chain) for free. This constants
       * limits number of calls that we may refund in a single block. All calls above this
       * limit are accepted, but are not refunded.
       **/
      maxFreeMandatoryHeadersPerBlock: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    bridgePolkadotMessages: {
      /**
       * Gets the chain id value from the instance.
       **/
      bridgedChainId: U8aFixed & AugmentedConst<ApiType>;
      /**
       * Maximal encoded size of the outbound payload.
       **/
      maximalOutboundPayloadSize: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    bridgePolkadotParachains: {
      /**
       * Maximal number of single parachain heads to keep in the storage.
       * 
       * The setting is there to prevent growing the on-chain state indefinitely. Note
       * the setting does not relate to parachain block numbers - we will simply keep as much
       * items in the storage, so it doesn't guarantee any fixed timeframe for heads.
       * 
       * Incautious change of this constant may lead to orphan entries in the runtime storage.
       **/
      headsToKeep: u32 & AugmentedConst<ApiType>;
      /**
       * Maximal size (in bytes) of the SCALE-encoded parachain head data
       * (`bp_parachains::ParaStoredHeaderData`).
       * 
       * Keep in mind that the size of any tracked parachain header data must not exceed this
       * value. So if you're going to track multiple parachains, one of which is using large
       * hashes, you shall choose this maximal value.
       * 
       * There's no mandatory headers in this pallet, so it can't stall if there's some header
       * that exceeds this bound.
       **/
      maxParaHeadDataSize: u32 & AugmentedConst<ApiType>;
      /**
       * Name of the original `paras` pallet in the `construct_runtime!()` call at the bridged
       * chain.
       * 
       * Please keep in mind that this should be the name of the `runtime_parachains::paras`
       * pallet from polkadot repository, not the `pallet-bridge-parachains`.
       **/
      parasPalletName: Text & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    grandpa: {
      /**
       * Max Authorities in use
       **/
      maxAuthorities: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of entries to keep in the set id to session index mapping.
       * 
       * Since the `SetIdSession` map is only used for validating equivocations this
       * value should relate to the bonding duration of whatever staking system is
       * being used (if any). If equivocation handling is not enabled then this value
       * can be zero.
       **/
      maxSetIdSessionEntries: u64 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    imOnline: {
      /**
       * A configuration for base priority of unsigned transactions.
       * 
       * This is exposed so that it can be tuned for particular runtime, when
       * multiple pallets send unsigned transactions.
       **/
      unsignedPriority: u64 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    relayerSet: {
      /**
       * Number of cooldown blocks after a bad bridge transaction signed by a relayer. The
       * relayer is blocked from submitting bridge transactions during the cooldown period.
       **/
      bridgeTxFailCooldownBlocks: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    system: {
      /**
       * Maximum number of block number to block hash mappings to keep (oldest pruned first).
       **/
      blockHashCount: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum length of a block (in bytes).
       **/
      blockLength: FrameSystemLimitsBlockLength & AugmentedConst<ApiType>;
      /**
       * Block & extrinsics weights: base values and limits.
       **/
      blockWeights: FrameSystemLimitsBlockWeights & AugmentedConst<ApiType>;
      /**
       * The weight of runtime database operations the runtime can invoke.
       **/
      dbWeight: SpWeightsRuntimeDbWeight & AugmentedConst<ApiType>;
      /**
       * The designated SS58 prefix of this chain.
       * 
       * This replaces the "ss58Format" property declared in the chain spec. Reason is
       * that the runtime should know about the prefix in order to make use of it as
       * an identifier of the chain.
       **/
      ss58Prefix: u16 & AugmentedConst<ApiType>;
      /**
       * Get the chain's current version.
       **/
      version: SpVersionRuntimeVersion & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    timestamp: {
      /**
       * The minimum period between blocks. Beware that this is different to the *expected*
       * period that the block production apparatus provides. Your chosen consensus system will
       * generally work with this to determine a sensible block time. e.g. For Aura, it will be
       * double this period on default settings.
       **/
      minimumPeriod: u64 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    transactionStorage: {
      /**
       * Authorizations expire after this many blocks.
       **/
      authorizationPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * Maximum number of indexed transactions in a block.
       **/
      maxBlockTransactions: u32 & AugmentedConst<ApiType>;
      /**
       * Maximum data set in a single transaction in bytes.
       **/
      maxTransactionSize: u32 & AugmentedConst<ApiType>;
      /**
       * Longevity of unsigned transactions to remove expired authorizations.
       **/
      removeExpiredAuthorizationLongevity: u64 & AugmentedConst<ApiType>;
      /**
       * Priority of unsigned transactions to remove expired authorizations.
       **/
      removeExpiredAuthorizationPriority: u64 & AugmentedConst<ApiType>;
      /**
       * Storage period for data in blocks. Should match
       * [`DEFAULT_STORAGE_PERIOD`](sp_transaction_storage_proof::DEFAULT_STORAGE_PERIOD) for
       * block authoring.
       **/
      storagePeriod: u32 & AugmentedConst<ApiType>;
      /**
       * Longevity of store/renew transactions.
       **/
      storeRenewLongevity: u64 & AugmentedConst<ApiType>;
      /**
       * Priority of store/renew transactions.
       **/
      storeRenewPriority: u64 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    validatorSet: {
      /**
       * Maximum number of validators.
       **/
      maxAuthorities: u32 & AugmentedConst<ApiType>;
      /**
       * Minimum number of blocks between [`set_keys`](pallet_session::Pallet::set_keys) calls
       * by a validator.
       **/
      setKeysCooldownBlocks: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
  } // AugmentedConsts
} // declare module
