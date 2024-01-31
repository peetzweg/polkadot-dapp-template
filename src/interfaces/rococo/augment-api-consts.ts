// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/consts';

import type { ApiTypes, AugmentedConst } from '@polkadot/api-base/types';
import type { Bytes, Option, Vec, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { Codec, ITuple } from '@polkadot/types-codec/types';
import type { Permill, Perquintill } from '@polkadot/types/interfaces/runtime';
import type { FrameSupportPalletId, FrameSystemLimitsBlockLength, FrameSystemLimitsBlockWeights, PalletReferendaTrackInfo, SpVersionRuntimeVersion, SpWeightsRuntimeDbWeight, SpWeightsWeightV2Weight } from '@polkadot/types/lookup';

export type __AugmentedConst<ApiType extends ApiTypes> = AugmentedConst<ApiType>;

declare module '@polkadot/api-base/types/consts' {
  interface AugmentedConsts<ApiType extends ApiTypes> {
    assignedSlots: {
      /**
       * The max number of temporary slots to be scheduled per lease periods.
       **/
      maxTemporarySlotPerLeasePeriod: u32 & AugmentedConst<ApiType>;
      /**
       * The number of lease periods a permanent parachain slot lasts.
       **/
      permanentSlotLeasePeriodLength: u32 & AugmentedConst<ApiType>;
      /**
       * The number of lease periods a temporary parachain slot lasts.
       **/
      temporarySlotLeasePeriodLength: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    auctions: {
      /**
       * The number of blocks over which an auction may be retroactively ended.
       **/
      endingPeriod: u32 & AugmentedConst<ApiType>;
      leasePeriodsPerSlot: u32 & AugmentedConst<ApiType>;
      /**
       * The length of each sample to take during the ending period.
       * 
       * `EndingPeriod` / `SampleLength` = Total # of Samples
       **/
      sampleLength: u32 & AugmentedConst<ApiType>;
      slotRangeCount: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
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
       * The maximum number of nominators for each validator.
       **/
      maxNominators: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    balances: {
      /**
       * The minimum amount required to keep an account open. MUST BE GREATER THAN ZERO!
       * 
       * If you *really* need it to be zero, you can enable the feature `insecure_zero_ed` for
       * this pallet. However, you do so at your own risk: this will open up a major DoS vector.
       * In case you have multiple sources of provider references, you may also get unexpected
       * behaviour if you set this to zero.
       * 
       * Bottom line: Do yourself a favour and make it at least one!
       **/
      existentialDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The maximum number of individual freeze locks that can exist on an account at any time.
       **/
      maxFreezes: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of holds that can exist on an account at any time.
       **/
      maxHolds: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of locks that should exist on an account.
       * Not strictly enforced, but used for weight estimation.
       **/
      maxLocks: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of named reserves that can exist on an account.
       **/
      maxReserves: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    beefy: {
      /**
       * The maximum number of authorities that can be added.
       **/
      maxAuthorities: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of nominators for each validator.
       **/
      maxNominators: u32 & AugmentedConst<ApiType>;
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
    bounties: {
      /**
       * The amount held on deposit for placing a bounty proposal.
       **/
      bountyDepositBase: u128 & AugmentedConst<ApiType>;
      /**
       * The delay period for which a bounty beneficiary need to wait before claim the payout.
       **/
      bountyDepositPayoutDelay: u32 & AugmentedConst<ApiType>;
      /**
       * Bounty duration in blocks.
       **/
      bountyUpdatePeriod: u32 & AugmentedConst<ApiType>;
      /**
       * Minimum value for a bounty.
       **/
      bountyValueMinimum: u128 & AugmentedConst<ApiType>;
      /**
       * Maximum amount of funds that should be placed in a deposit for making a proposal.
       **/
      curatorDepositMax: Option<u128> & AugmentedConst<ApiType>;
      /**
       * Minimum amount of funds that should be placed in a deposit for making a proposal.
       **/
      curatorDepositMin: Option<u128> & AugmentedConst<ApiType>;
      /**
       * The curator deposit is calculated as a percentage of the curator fee.
       * 
       * This deposit has optional upper and lower bounds with `CuratorDepositMax` and
       * `CuratorDepositMin`.
       **/
      curatorDepositMultiplier: Permill & AugmentedConst<ApiType>;
      /**
       * The amount held on deposit per byte within the tip report reason or bounty description.
       **/
      dataDepositPerByte: u128 & AugmentedConst<ApiType>;
      /**
       * Maximum acceptable reason length.
       * 
       * Benchmarks depend on this value, be sure to update weights file when changing this value
       **/
      maximumReasonLength: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    childBounties: {
      /**
       * Minimum value for a child-bounty.
       **/
      childBountyValueMinimum: u128 & AugmentedConst<ApiType>;
      /**
       * Maximum number of child bounties that can be added to a parent bounty.
       **/
      maxActiveChildBountyCount: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    claims: {
      prefix: Bytes & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    convictionVoting: {
      /**
       * The maximum number of concurrent votes an account may have.
       * 
       * Also used to compute weight, an overly large value can lead to extrinsics with large
       * weight estimation: see `delegate` for instance.
       **/
      maxVotes: u32 & AugmentedConst<ApiType>;
      /**
       * The minimum period of vote locking.
       * 
       * It should be no shorter than enactment period to ensure that in the case of an approval,
       * those successful voters are locked into the consequences that their votes entail.
       **/
      voteLockingPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    crowdloan: {
      /**
       * The minimum amount that may be contributed into a crowdloan. Should almost certainly be
       * at least `ExistentialDeposit`.
       **/
      minContribution: u128 & AugmentedConst<ApiType>;
      /**
       * `PalletId` for the crowdloan pallet. An appropriate value could be
       * `PalletId(*b"py/cfund")`
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * Max number of storage keys to remove per extrinsic call.
       **/
      removeKeysLimit: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    fellowshipReferenda: {
      /**
       * Quantization level for the referendum wakeup scheduler. A higher number will result in
       * fewer storage reads/writes needed for smaller voters, but also result in delays to the
       * automatic referendum status changes. Explicit servicing instructions are unaffected.
       **/
      alarmInterval: u32 & AugmentedConst<ApiType>;
      /**
       * Maximum size of the referendum queue for a single track.
       **/
      maxQueued: u32 & AugmentedConst<ApiType>;
      /**
       * The minimum amount to be used as a deposit for a public referendum proposal.
       **/
      submissionDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * Information concerning the different referendum tracks.
       **/
      tracks: Vec<ITuple<[u16, PalletReferendaTrackInfo]>> & AugmentedConst<ApiType>;
      /**
       * The number of blocks after submission that a referendum must begin being decided by.
       * Once this passes, then anyone may cancel the referendum.
       **/
      undecidingTimeout: u32 & AugmentedConst<ApiType>;
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
       * The maximum number of nominators for each validator.
       **/
      maxNominators: u32 & AugmentedConst<ApiType>;
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
    identity: {
      /**
       * The amount held on deposit for a registered identity
       **/
      basicDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The amount held on deposit per encoded byte for a registered identity.
       **/
      byteDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * Maxmimum number of registrars allowed in the system. Needed to bound the complexity
       * of, e.g., updating judgements.
       **/
      maxRegistrars: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of sub-accounts allowed per identified account.
       **/
      maxSubAccounts: u32 & AugmentedConst<ApiType>;
      /**
       * The amount held on deposit for a registered subaccount. This should account for the fact
       * that one storage item's value will increase by the size of an account ID, and there will
       * be another trie item whose value is the size of an account ID plus 32 bytes.
       **/
      subAccountDeposit: u128 & AugmentedConst<ApiType>;
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
    indices: {
      /**
       * The deposit needed for reserving an index.
       **/
      deposit: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    messageQueue: {
      /**
       * The size of the page; this implies the maximum message size which can be sent.
       * 
       * A good value depends on the expected message sizes, their weights, the weight that is
       * available for processing them and the maximal needed message size. The maximal message
       * size is slightly lower than this as defined by [`MaxMessageLenOf`].
       **/
      heapSize: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of stale pages (i.e. of overweight messages) allowed before culling
       * can happen. Once there are more stale pages than this, then historical pages may be
       * dropped, even if they contain unprocessed overweight messages.
       **/
      maxStale: u32 & AugmentedConst<ApiType>;
      /**
       * The amount of weight (if any) which should be provided to the message queue for
       * servicing enqueued items.
       * 
       * This may be legitimately `None` in the case that you will call
       * `ServiceQueues::service_queues` manually.
       **/
      serviceWeight: Option<SpWeightsWeightV2Weight> & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    multisig: {
      /**
       * The base amount of currency needed to reserve for creating a multisig execution or to
       * store a dispatch call for later.
       * 
       * This is held for an additional storage item whose value size is
       * `4 + sizeof((BlockNumber, Balance, AccountId))` bytes and whose key size is
       * `32 + sizeof(AccountId)` bytes.
       **/
      depositBase: u128 & AugmentedConst<ApiType>;
      /**
       * The amount of currency needed per unit threshold when creating a multisig execution.
       * 
       * This is held for adding 32 bytes more into a pre-existing storage value.
       **/
      depositFactor: u128 & AugmentedConst<ApiType>;
      /**
       * The maximum amount of signatories allowed in the multisig.
       **/
      maxSignatories: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    nis: {
      /**
       * The base period for the duration queues. This is the common multiple across all
       * supported freezing durations that can be bid upon.
       **/
      basePeriod: u32 & AugmentedConst<ApiType>;
      /**
       * Portion of the queue which is free from ordering and just a FIFO.
       * 
       * Must be no greater than `MaxQueueLen`.
       **/
      fifoQueueLen: u32 & AugmentedConst<ApiType>;
      /**
       * The number of blocks between consecutive attempts to dequeue bids and create receipts.
       * 
       * A larger value results in fewer storage hits each block, but a slower period to get to
       * the target.
       **/
      intakePeriod: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum amount of bids that can consolidated into receipts in a single intake. A
       * larger value here means less of the block available for transactions should there be a
       * glut of bids.
       **/
      maxIntakeWeight: SpWeightsWeightV2Weight & AugmentedConst<ApiType>;
      /**
       * Maximum number of items that may be in each duration queue.
       * 
       * Must be larger than zero.
       **/
      maxQueueLen: u32 & AugmentedConst<ApiType>;
      /**
       * The minimum amount of funds that may be placed in a bid. Note that this
       * does not actually limit the amount which may be represented in a receipt since bids may
       * be split up by the system.
       * 
       * It should be at least big enough to ensure that there is no possible storage spam attack
       * or queue-filling attack.
       **/
      minBid: u128 & AugmentedConst<ApiType>;
      /**
       * The minimum amount of funds which may intentionally be left remaining under a single
       * receipt.
       **/
      minReceipt: Perquintill & AugmentedConst<ApiType>;
      /**
       * The treasury's pallet id, used for deriving its sovereign account ID.
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * Number of duration queues in total. This sets the maximum duration supported, which is
       * this value multiplied by `Period`.
       **/
      queueCount: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum proportion which may be thawed and the period over which it is reset.
       **/
      thawThrottle: ITuple<[Perquintill, u32]> & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    nisCounterpartBalances: {
      /**
       * The minimum amount required to keep an account open. MUST BE GREATER THAN ZERO!
       * 
       * If you *really* need it to be zero, you can enable the feature `insecure_zero_ed` for
       * this pallet. However, you do so at your own risk: this will open up a major DoS vector.
       * In case you have multiple sources of provider references, you may also get unexpected
       * behaviour if you set this to zero.
       * 
       * Bottom line: Do yourself a favour and make it at least one!
       **/
      existentialDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The maximum number of individual freeze locks that can exist on an account at any time.
       **/
      maxFreezes: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of holds that can exist on an account at any time.
       **/
      maxHolds: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of locks that should exist on an account.
       * Not strictly enforced, but used for weight estimation.
       **/
      maxLocks: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of named reserves that can exist on an account.
       **/
      maxReserves: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    onDemandAssignmentProvider: {
      /**
       * The default value for the spot traffic multiplier.
       **/
      trafficDefaultValue: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    paras: {
      unsignedPriority: u64 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    proxy: {
      /**
       * The base amount of currency needed to reserve for creating an announcement.
       * 
       * This is held when a new storage item holding a `Balance` is created (typically 16
       * bytes).
       **/
      announcementDepositBase: u128 & AugmentedConst<ApiType>;
      /**
       * The amount of currency needed per announcement made.
       * 
       * This is held for adding an `AccountId`, `Hash` and `BlockNumber` (typically 68 bytes)
       * into a pre-existing storage value.
       **/
      announcementDepositFactor: u128 & AugmentedConst<ApiType>;
      /**
       * The maximum amount of time-delayed announcements that are allowed to be pending.
       **/
      maxPending: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum amount of proxies allowed for a single account.
       **/
      maxProxies: u32 & AugmentedConst<ApiType>;
      /**
       * The base amount of currency needed to reserve for creating a proxy.
       * 
       * This is held for an additional storage item whose value size is
       * `sizeof(Balance)` bytes and whose key size is `sizeof(AccountId)` bytes.
       **/
      proxyDepositBase: u128 & AugmentedConst<ApiType>;
      /**
       * The amount of currency needed per proxy added.
       * 
       * This is held for adding 32 bytes plus an instance of `ProxyType` more into a
       * pre-existing storage value. Thus, when configuring `ProxyDepositFactor` one should take
       * into account `32 + proxy_type.encode().len()` bytes of data.
       **/
      proxyDepositFactor: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    recovery: {
      /**
       * The base amount of currency needed to reserve for creating a recovery configuration.
       * 
       * This is held for an additional storage item whose value size is
       * `2 + sizeof(BlockNumber, Balance)` bytes.
       **/
      configDepositBase: u128 & AugmentedConst<ApiType>;
      /**
       * The amount of currency needed per additional user when creating a recovery
       * configuration.
       * 
       * This is held for adding `sizeof(AccountId)` bytes more into a pre-existing storage
       * value.
       **/
      friendDepositFactor: u128 & AugmentedConst<ApiType>;
      /**
       * The maximum amount of friends allowed in a recovery configuration.
       * 
       * NOTE: The threshold programmed in this Pallet uses u16, so it does
       * not really make sense to have a limit here greater than u16::MAX.
       * But also, that is a lot more than you should probably set this value
       * to anyway...
       **/
      maxFriends: u32 & AugmentedConst<ApiType>;
      /**
       * The base amount of currency needed to reserve for starting a recovery.
       * 
       * This is primarily held for deterring malicious recovery attempts, and should
       * have a value large enough that a bad actor would choose not to place this
       * deposit. It also acts to fund additional storage item whose value size is
       * `sizeof(BlockNumber, Balance + T * AccountId)` bytes. Where T is a configurable
       * threshold.
       **/
      recoveryDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    referenda: {
      /**
       * Quantization level for the referendum wakeup scheduler. A higher number will result in
       * fewer storage reads/writes needed for smaller voters, but also result in delays to the
       * automatic referendum status changes. Explicit servicing instructions are unaffected.
       **/
      alarmInterval: u32 & AugmentedConst<ApiType>;
      /**
       * Maximum size of the referendum queue for a single track.
       **/
      maxQueued: u32 & AugmentedConst<ApiType>;
      /**
       * The minimum amount to be used as a deposit for a public referendum proposal.
       **/
      submissionDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * Information concerning the different referendum tracks.
       **/
      tracks: Vec<ITuple<[u16, PalletReferendaTrackInfo]>> & AugmentedConst<ApiType>;
      /**
       * The number of blocks after submission that a referendum must begin being decided by.
       * Once this passes, then anyone may cancel the referendum.
       **/
      undecidingTimeout: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    registrar: {
      /**
       * The deposit to be paid per byte stored on chain.
       **/
      dataDepositPerByte: u128 & AugmentedConst<ApiType>;
      /**
       * The deposit to be paid to run a on-demand parachain.
       * This should include the cost for storing the genesis head and validation code.
       **/
      paraDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    scheduler: {
      /**
       * The maximum weight that may be scheduled per block for any dispatchables.
       **/
      maximumWeight: SpWeightsWeightV2Weight & AugmentedConst<ApiType>;
      /**
       * The maximum number of scheduled calls in the queue for a single block.
       * 
       * NOTE:
       * + Dependent pallets' benchmarks might require a higher limit for the setting. Set a
       * higher limit under `runtime-benchmarks` feature.
       **/
      maxScheduledPerBlock: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    slots: {
      /**
       * The number of blocks to offset each lease period by.
       **/
      leaseOffset: u32 & AugmentedConst<ApiType>;
      /**
       * The number of blocks over which a single period lasts.
       **/
      leasePeriod: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    society: {
      /**
       * The number of blocks between membership challenges.
       **/
      challengePeriod: u32 & AugmentedConst<ApiType>;
      /**
       * The number of blocks on which new candidates can claim their membership and be the
       * named head.
       **/
      claimPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of strikes before a member gets funds slashed.
       **/
      graceStrikes: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of bids at once.
       **/
      maxBids: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum duration of the payout lock.
       **/
      maxLockDuration: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of payouts a member may have waiting unclaimed.
       **/
      maxPayouts: u32 & AugmentedConst<ApiType>;
      /**
       * The societies's pallet id
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * The amount of incentive paid within each period. Doesn't include VoterTip.
       **/
      periodSpend: u128 & AugmentedConst<ApiType>;
      /**
       * The number of blocks on which new candidates should be voted on. Together with
       * `ClaimPeriod`, this sums to the number of blocks between candidate intake periods.
       **/
      votingPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    stateTrieMigration: {
      /**
       * Maximal number of bytes that a key can have.
       * 
       * FRAME itself does not limit the key length.
       * The concrete value must therefore depend on your storage usage.
       * A [`frame_support::storage::StorageNMap`] for example can have an arbitrary number of
       * keys which are then hashed and concatenated, resulting in arbitrarily long keys.
       * 
       * Use the *state migration RPC* to retrieve the length of the longest key in your
       * storage: <https://github.com/paritytech/substrate/issues/11642>
       * 
       * The migration will halt with a `Halted` event if this value is too small.
       * Since there is no real penalty from over-estimating, it is advised to use a large
       * value. The default is 512 byte.
       * 
       * Some key lengths for reference:
       * - [`frame_support::storage::StorageValue`]: 32 byte
       * - [`frame_support::storage::StorageMap`]: 64 byte
       * - [`frame_support::storage::StorageDoubleMap`]: 96 byte
       * 
       * For more info see
       * <https://www.shawntabrizi.com/substrate/querying-substrate-storage-via-rpc/>
       **/
      maxKeyLen: u32 & AugmentedConst<ApiType>;
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
       * The minimum period between blocks.
       * 
       * Be aware that this is different to the *expected* period that the block production
       * apparatus provides. Your chosen consensus system will generally work with this to
       * determine a sensible block time. For example, in the Aura pallet it will be double this
       * period on default settings.
       **/
      minimumPeriod: u64 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    transactionPayment: {
      /**
       * A fee multiplier for `Operational` extrinsics to compute "virtual tip" to boost their
       * `priority`
       * 
       * This value is multiplied by the `final_fee` to obtain a "virtual tip" that is later
       * added to a tip component in regular `priority` calculations.
       * It means that a `Normal` transaction can front-run a similarly-sized `Operational`
       * extrinsic (with no tip), by including a tip value greater than the virtual tip.
       * 
       * ```rust,ignore
       * // For `Normal`
       * let priority = priority_calc(tip);
       * 
       * // For `Operational`
       * let virtual_tip = (inclusion_fee + tip) * OperationalFeeMultiplier;
       * let priority = priority_calc(tip + virtual_tip);
       * ```
       * 
       * Note that since we use `final_fee` the multiplier applies also to the regular `tip`
       * sent with the transaction. So, not only does the transaction get a priority bump based
       * on the `inclusion_fee`, but we also amplify the impact of tips applied to `Operational`
       * transactions.
       **/
      operationalFeeMultiplier: u8 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    treasury: {
      /**
       * Percentage of spare funds (if any) that are burnt per spend period.
       **/
      burn: Permill & AugmentedConst<ApiType>;
      /**
       * The maximum number of approvals that can wait in the spending queue.
       * 
       * NOTE: This parameter is also used within the Bounties Pallet extension if enabled.
       **/
      maxApprovals: u32 & AugmentedConst<ApiType>;
      /**
       * The treasury's pallet id, used for deriving its sovereign account ID.
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * The period during which an approved treasury spend has to be claimed.
       **/
      payoutPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * Fraction of a proposal's value that should be bonded in order to place the proposal.
       * An accepted proposal gets these back. A rejected proposal does not.
       **/
      proposalBond: Permill & AugmentedConst<ApiType>;
      /**
       * Maximum amount of funds that should be placed in a deposit for making a proposal.
       **/
      proposalBondMaximum: Option<u128> & AugmentedConst<ApiType>;
      /**
       * Minimum amount of funds that should be placed in a deposit for making a proposal.
       **/
      proposalBondMinimum: u128 & AugmentedConst<ApiType>;
      /**
       * Period between successive spends.
       **/
      spendPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    utility: {
      /**
       * The limit on the number of batched calls.
       **/
      batchedCallsLimit: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    vesting: {
      maxVestingSchedules: u32 & AugmentedConst<ApiType>;
      /**
       * The minimum amount transferred to call `vested_transfer`.
       **/
      minVestedTransfer: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
  } // AugmentedConsts
} // declare module
