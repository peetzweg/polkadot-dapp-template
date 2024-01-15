// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/lookup';

import type { Bytes, Compact, Enum, Null, Option, Result, Struct, Text, U8aFixed, Vec, u32, u64, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, Call, H256, MultiAddress } from '@polkadot/types/interfaces/runtime';
import type { Event } from '@polkadot/types/interfaces/system';

declare module '@polkadot/types/lookup' {
  /** @name FrameSystemAccountInfo (3) */
  interface FrameSystemAccountInfo extends Struct {
    readonly nonce: u32;
    readonly consumers: u32;
    readonly providers: u32;
    readonly sufficients: u32;
    readonly data: Null;
  }

  /** @name FrameSupportDispatchPerDispatchClassWeight (6) */
  interface FrameSupportDispatchPerDispatchClassWeight extends Struct {
    readonly normal: SpWeightsWeightV2Weight;
    readonly operational: SpWeightsWeightV2Weight;
    readonly mandatory: SpWeightsWeightV2Weight;
  }

  /** @name SpWeightsWeightV2Weight (7) */
  interface SpWeightsWeightV2Weight extends Struct {
    readonly refTime: Compact<u64>;
    readonly proofSize: Compact<u64>;
  }

  /** @name SpRuntimeDigest (12) */
  interface SpRuntimeDigest extends Struct {
    readonly logs: Vec<SpRuntimeDigestDigestItem>;
  }

  /** @name SpRuntimeDigestDigestItem (14) */
  interface SpRuntimeDigestDigestItem extends Enum {
    readonly isOther: boolean;
    readonly asOther: Bytes;
    readonly isConsensus: boolean;
    readonly asConsensus: ITuple<[U8aFixed, Bytes]>;
    readonly isSeal: boolean;
    readonly asSeal: ITuple<[U8aFixed, Bytes]>;
    readonly isPreRuntime: boolean;
    readonly asPreRuntime: ITuple<[U8aFixed, Bytes]>;
    readonly isRuntimeEnvironmentUpdated: boolean;
    readonly type: 'Other' | 'Consensus' | 'Seal' | 'PreRuntime' | 'RuntimeEnvironmentUpdated';
  }

  /** @name FrameSystemEventRecord (17) */
  interface FrameSystemEventRecord extends Struct {
    readonly phase: FrameSystemPhase;
    readonly event: Event;
    readonly topics: Vec<H256>;
  }

  /** @name FrameSystemEvent (19) */
  interface FrameSystemEvent extends Enum {
    readonly isExtrinsicSuccess: boolean;
    readonly asExtrinsicSuccess: {
      readonly dispatchInfo: FrameSupportDispatchDispatchInfo;
    } & Struct;
    readonly isExtrinsicFailed: boolean;
    readonly asExtrinsicFailed: {
      readonly dispatchError: SpRuntimeDispatchError;
      readonly dispatchInfo: FrameSupportDispatchDispatchInfo;
    } & Struct;
    readonly isCodeUpdated: boolean;
    readonly isNewAccount: boolean;
    readonly asNewAccount: {
      readonly account: AccountId32;
    } & Struct;
    readonly isKilledAccount: boolean;
    readonly asKilledAccount: {
      readonly account: AccountId32;
    } & Struct;
    readonly isRemarked: boolean;
    readonly asRemarked: {
      readonly sender: AccountId32;
      readonly hash_: H256;
    } & Struct;
    readonly type: 'ExtrinsicSuccess' | 'ExtrinsicFailed' | 'CodeUpdated' | 'NewAccount' | 'KilledAccount' | 'Remarked';
  }

  /** @name FrameSupportDispatchDispatchInfo (20) */
  interface FrameSupportDispatchDispatchInfo extends Struct {
    readonly weight: SpWeightsWeightV2Weight;
    readonly class: FrameSupportDispatchDispatchClass;
    readonly paysFee: FrameSupportDispatchPays;
  }

  /** @name FrameSupportDispatchDispatchClass (21) */
  interface FrameSupportDispatchDispatchClass extends Enum {
    readonly isNormal: boolean;
    readonly isOperational: boolean;
    readonly isMandatory: boolean;
    readonly type: 'Normal' | 'Operational' | 'Mandatory';
  }

  /** @name FrameSupportDispatchPays (22) */
  interface FrameSupportDispatchPays extends Enum {
    readonly isYes: boolean;
    readonly isNo: boolean;
    readonly type: 'Yes' | 'No';
  }

  /** @name SpRuntimeDispatchError (23) */
  interface SpRuntimeDispatchError extends Enum {
    readonly isOther: boolean;
    readonly isCannotLookup: boolean;
    readonly isBadOrigin: boolean;
    readonly isModule: boolean;
    readonly asModule: SpRuntimeModuleError;
    readonly isConsumerRemaining: boolean;
    readonly isNoProviders: boolean;
    readonly isTooManyConsumers: boolean;
    readonly isToken: boolean;
    readonly asToken: SpRuntimeTokenError;
    readonly isArithmetic: boolean;
    readonly asArithmetic: SpArithmeticArithmeticError;
    readonly isTransactional: boolean;
    readonly asTransactional: SpRuntimeTransactionalError;
    readonly isExhausted: boolean;
    readonly isCorruption: boolean;
    readonly isUnavailable: boolean;
    readonly isRootNotAllowed: boolean;
    readonly type: 'Other' | 'CannotLookup' | 'BadOrigin' | 'Module' | 'ConsumerRemaining' | 'NoProviders' | 'TooManyConsumers' | 'Token' | 'Arithmetic' | 'Transactional' | 'Exhausted' | 'Corruption' | 'Unavailable' | 'RootNotAllowed';
  }

  /** @name SpRuntimeModuleError (24) */
  interface SpRuntimeModuleError extends Struct {
    readonly index: u8;
    readonly error: U8aFixed;
  }

  /** @name SpRuntimeTokenError (25) */
  interface SpRuntimeTokenError extends Enum {
    readonly isFundsUnavailable: boolean;
    readonly isOnlyProvider: boolean;
    readonly isBelowMinimum: boolean;
    readonly isCannotCreate: boolean;
    readonly isUnknownAsset: boolean;
    readonly isFrozen: boolean;
    readonly isUnsupported: boolean;
    readonly isCannotCreateHold: boolean;
    readonly isNotExpendable: boolean;
    readonly isBlocked: boolean;
    readonly type: 'FundsUnavailable' | 'OnlyProvider' | 'BelowMinimum' | 'CannotCreate' | 'UnknownAsset' | 'Frozen' | 'Unsupported' | 'CannotCreateHold' | 'NotExpendable' | 'Blocked';
  }

  /** @name SpArithmeticArithmeticError (26) */
  interface SpArithmeticArithmeticError extends Enum {
    readonly isUnderflow: boolean;
    readonly isOverflow: boolean;
    readonly isDivisionByZero: boolean;
    readonly type: 'Underflow' | 'Overflow' | 'DivisionByZero';
  }

  /** @name SpRuntimeTransactionalError (27) */
  interface SpRuntimeTransactionalError extends Enum {
    readonly isLimitReached: boolean;
    readonly isNoLayer: boolean;
    readonly type: 'LimitReached' | 'NoLayer';
  }

  /** @name PalletOffencesEvent (28) */
  interface PalletOffencesEvent extends Enum {
    readonly isOffence: boolean;
    readonly asOffence: {
      readonly kind: U8aFixed;
      readonly timeslot: Bytes;
    } & Struct;
    readonly type: 'Offence';
  }

  /** @name PalletValidatorSetEvent (30) */
  interface PalletValidatorSetEvent extends Enum {
    readonly isValidatorAdded: boolean;
    readonly asValidatorAdded: AccountId32;
    readonly isValidatorRemoved: boolean;
    readonly asValidatorRemoved: AccountId32;
    readonly type: 'ValidatorAdded' | 'ValidatorRemoved';
  }

  /** @name PalletSessionEvent (31) */
  interface PalletSessionEvent extends Enum {
    readonly isNewSession: boolean;
    readonly asNewSession: {
      readonly sessionIndex: u32;
    } & Struct;
    readonly type: 'NewSession';
  }

  /** @name PalletImOnlineEvent (32) */
  interface PalletImOnlineEvent extends Enum {
    readonly isHeartbeatReceived: boolean;
    readonly asHeartbeatReceived: {
      readonly authorityId: PalletImOnlineSr25519AppSr25519Public;
    } & Struct;
    readonly isAllGood: boolean;
    readonly isSomeOffline: boolean;
    readonly asSomeOffline: {
      readonly offline: Vec<ITuple<[AccountId32, AccountId32]>>;
    } & Struct;
    readonly type: 'HeartbeatReceived' | 'AllGood' | 'SomeOffline';
  }

  /** @name PalletImOnlineSr25519AppSr25519Public (33) */
  interface PalletImOnlineSr25519AppSr25519Public extends SpCoreSr25519Public {}

  /** @name SpCoreSr25519Public (34) */
  interface SpCoreSr25519Public extends U8aFixed {}

  /** @name PalletGrandpaEvent (37) */
  interface PalletGrandpaEvent extends Enum {
    readonly isNewAuthorities: boolean;
    readonly asNewAuthorities: {
      readonly authoritySet: Vec<ITuple<[SpConsensusGrandpaAppPublic, u64]>>;
    } & Struct;
    readonly isPaused: boolean;
    readonly isResumed: boolean;
    readonly type: 'NewAuthorities' | 'Paused' | 'Resumed';
  }

  /** @name SpConsensusGrandpaAppPublic (40) */
  interface SpConsensusGrandpaAppPublic extends SpCoreEd25519Public {}

  /** @name SpCoreEd25519Public (41) */
  interface SpCoreEd25519Public extends U8aFixed {}

  /** @name PalletTransactionStorageEvent (42) */
  interface PalletTransactionStorageEvent extends Enum {
    readonly isStored: boolean;
    readonly asStored: {
      readonly index: u32;
    } & Struct;
    readonly isRenewed: boolean;
    readonly asRenewed: {
      readonly index: u32;
    } & Struct;
    readonly isProofChecked: boolean;
    readonly isAccountAuthorized: boolean;
    readonly asAccountAuthorized: {
      readonly who: AccountId32;
      readonly transactions: u32;
      readonly bytes: u64;
    } & Struct;
    readonly isPreimageAuthorized: boolean;
    readonly asPreimageAuthorized: {
      readonly hash_: U8aFixed;
      readonly maxSize: u64;
    } & Struct;
    readonly isExpiredAccountAuthorizationRemoved: boolean;
    readonly asExpiredAccountAuthorizationRemoved: {
      readonly who: AccountId32;
    } & Struct;
    readonly isExpiredPreimageAuthorizationRemoved: boolean;
    readonly asExpiredPreimageAuthorizationRemoved: {
      readonly hash_: U8aFixed;
    } & Struct;
    readonly type: 'Stored' | 'Renewed' | 'ProofChecked' | 'AccountAuthorized' | 'PreimageAuthorized' | 'ExpiredAccountAuthorizationRemoved' | 'ExpiredPreimageAuthorizationRemoved';
  }

  /** @name PalletRelayerSetEvent (43) */
  interface PalletRelayerSetEvent extends Enum {
    readonly isRelayerAdded: boolean;
    readonly asRelayerAdded: AccountId32;
    readonly isRelayerRemoved: boolean;
    readonly asRelayerRemoved: AccountId32;
    readonly type: 'RelayerAdded' | 'RelayerRemoved';
  }

  /** @name PalletBridgeGrandpaEvent (44) */
  interface PalletBridgeGrandpaEvent extends Enum {
    readonly isUpdatedBestFinalizedHeader: boolean;
    readonly asUpdatedBestFinalizedHeader: {
      readonly number: u32;
      readonly hash_: H256;
      readonly grandpaInfo: BpHeaderChainHeaderFinalityInfo;
    } & Struct;
    readonly type: 'UpdatedBestFinalizedHeader';
  }

  /** @name BpHeaderChainHeaderFinalityInfo (45) */
  interface BpHeaderChainHeaderFinalityInfo extends Struct {
    readonly finalityProof: BpHeaderChainJustificationGrandpaJustification;
    readonly newVerificationContext: Option<BpHeaderChainAuthoritySet>;
  }

  /** @name BpHeaderChainJustificationGrandpaJustification (46) */
  interface BpHeaderChainJustificationGrandpaJustification extends Struct {
    readonly round: u64;
    readonly commit: FinalityGrandpaCommit;
    readonly votesAncestries: Vec<SpRuntimeHeader>;
  }

  /** @name SpRuntimeHeader (47) */
  interface SpRuntimeHeader extends Struct {
    readonly parentHash: H256;
    readonly number: Compact<u32>;
    readonly stateRoot: H256;
    readonly extrinsicsRoot: H256;
    readonly digest: SpRuntimeDigest;
  }

  /** @name FinalityGrandpaCommit (49) */
  interface FinalityGrandpaCommit extends Struct {
    readonly targetHash: H256;
    readonly targetNumber: u32;
    readonly precommits: Vec<FinalityGrandpaSignedPrecommit>;
  }

  /** @name SpConsensusGrandpaAppSignature (50) */
  interface SpConsensusGrandpaAppSignature extends SpCoreEd25519Signature {}

  /** @name SpCoreEd25519Signature (51) */
  interface SpCoreEd25519Signature extends U8aFixed {}

  /** @name FinalityGrandpaSignedPrecommit (54) */
  interface FinalityGrandpaSignedPrecommit extends Struct {
    readonly precommit: FinalityGrandpaPrecommit;
    readonly signature: SpConsensusGrandpaAppSignature;
    readonly id: SpConsensusGrandpaAppPublic;
  }

  /** @name FinalityGrandpaPrecommit (55) */
  interface FinalityGrandpaPrecommit extends Struct {
    readonly targetHash: H256;
    readonly targetNumber: u32;
  }

  /** @name BpHeaderChainAuthoritySet (57) */
  interface BpHeaderChainAuthoritySet extends Struct {
    readonly authorities: Vec<ITuple<[SpConsensusGrandpaAppPublic, u64]>>;
    readonly setId: u64;
  }

  /** @name PalletBridgeParachainsEvent (59) */
  interface PalletBridgeParachainsEvent extends Enum {
    readonly isUntrackedParachainRejected: boolean;
    readonly asUntrackedParachainRejected: {
      readonly parachain: u32;
    } & Struct;
    readonly isMissingParachainHead: boolean;
    readonly asMissingParachainHead: {
      readonly parachain: u32;
    } & Struct;
    readonly isIncorrectParachainHeadHash: boolean;
    readonly asIncorrectParachainHeadHash: {
      readonly parachain: u32;
      readonly parachainHeadHash: H256;
      readonly actualParachainHeadHash: H256;
    } & Struct;
    readonly isRejectedObsoleteParachainHead: boolean;
    readonly asRejectedObsoleteParachainHead: {
      readonly parachain: u32;
      readonly parachainHeadHash: H256;
    } & Struct;
    readonly isRejectedLargeParachainHead: boolean;
    readonly asRejectedLargeParachainHead: {
      readonly parachain: u32;
      readonly parachainHeadHash: H256;
      readonly parachainHeadSize: u32;
    } & Struct;
    readonly isUpdatedParachainHead: boolean;
    readonly asUpdatedParachainHead: {
      readonly parachain: u32;
      readonly parachainHeadHash: H256;
    } & Struct;
    readonly type: 'UntrackedParachainRejected' | 'MissingParachainHead' | 'IncorrectParachainHeadHash' | 'RejectedObsoleteParachainHead' | 'RejectedLargeParachainHead' | 'UpdatedParachainHead';
  }

  /** @name PalletBridgeMessagesEvent (61) */
  interface PalletBridgeMessagesEvent extends Enum {
    readonly isMessageAccepted: boolean;
    readonly asMessageAccepted: {
      readonly laneId: BpMessagesLaneId;
      readonly nonce: u64;
    } & Struct;
    readonly isMessagesReceived: boolean;
    readonly asMessagesReceived: Vec<BpMessagesReceivedMessages>;
    readonly isMessagesDelivered: boolean;
    readonly asMessagesDelivered: {
      readonly laneId: BpMessagesLaneId;
      readonly messages: BpMessagesDeliveredMessages;
    } & Struct;
    readonly type: 'MessageAccepted' | 'MessagesReceived' | 'MessagesDelivered';
  }

  /** @name BpMessagesLaneId (62) */
  interface BpMessagesLaneId extends U8aFixed {}

  /** @name BpMessagesReceivedMessages (64) */
  interface BpMessagesReceivedMessages extends Struct {
    readonly lane: BpMessagesLaneId;
    readonly receiveResults: Vec<ITuple<[u64, BpMessagesReceivalResult]>>;
  }

  /** @name BridgeRuntimeCommonMessagesXcmExtensionXcmBlobMessageDispatchResult (65) */
  interface BridgeRuntimeCommonMessagesXcmExtensionXcmBlobMessageDispatchResult extends Enum {
    readonly isInvalidPayload: boolean;
    readonly isDispatched: boolean;
    readonly isNotDispatched: boolean;
    readonly type: 'InvalidPayload' | 'Dispatched' | 'NotDispatched';
  }

  /** @name BpMessagesReceivalResult (68) */
  interface BpMessagesReceivalResult extends Enum {
    readonly isDispatched: boolean;
    readonly asDispatched: BpRuntimeMessagesMessageDispatchResult;
    readonly isInvalidNonce: boolean;
    readonly isTooManyUnrewardedRelayers: boolean;
    readonly isTooManyUnconfirmedMessages: boolean;
    readonly type: 'Dispatched' | 'InvalidNonce' | 'TooManyUnrewardedRelayers' | 'TooManyUnconfirmedMessages';
  }

  /** @name BpRuntimeMessagesMessageDispatchResult (69) */
  interface BpRuntimeMessagesMessageDispatchResult extends Struct {
    readonly unspentWeight: SpWeightsWeightV2Weight;
    readonly dispatchLevelResult: BridgeRuntimeCommonMessagesXcmExtensionXcmBlobMessageDispatchResult;
  }

  /** @name BpMessagesDeliveredMessages (70) */
  interface BpMessagesDeliveredMessages extends Struct {
    readonly begin: u64;
    readonly end: u64;
  }

  /** @name PalletSudoEvent (71) */
  interface PalletSudoEvent extends Enum {
    readonly isSudid: boolean;
    readonly asSudid: {
      readonly sudoResult: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isKeyChanged: boolean;
    readonly asKeyChanged: {
      readonly oldSudoer: Option<AccountId32>;
    } & Struct;
    readonly isSudoAsDone: boolean;
    readonly asSudoAsDone: {
      readonly sudoResult: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly type: 'Sudid' | 'KeyChanged' | 'SudoAsDone';
  }

  /** @name FrameSystemPhase (74) */
  interface FrameSystemPhase extends Enum {
    readonly isApplyExtrinsic: boolean;
    readonly asApplyExtrinsic: u32;
    readonly isFinalization: boolean;
    readonly isInitialization: boolean;
    readonly type: 'ApplyExtrinsic' | 'Finalization' | 'Initialization';
  }

  /** @name FrameSystemLastRuntimeUpgradeInfo (78) */
  interface FrameSystemLastRuntimeUpgradeInfo extends Struct {
    readonly specVersion: Compact<u32>;
    readonly specName: Text;
  }

  /** @name FrameSystemCall (81) */
  interface FrameSystemCall extends Enum {
    readonly isRemark: boolean;
    readonly asRemark: {
      readonly remark: Bytes;
    } & Struct;
    readonly isSetHeapPages: boolean;
    readonly asSetHeapPages: {
      readonly pages: u64;
    } & Struct;
    readonly isSetCode: boolean;
    readonly asSetCode: {
      readonly code: Bytes;
    } & Struct;
    readonly isSetCodeWithoutChecks: boolean;
    readonly asSetCodeWithoutChecks: {
      readonly code: Bytes;
    } & Struct;
    readonly isSetStorage: boolean;
    readonly asSetStorage: {
      readonly items: Vec<ITuple<[Bytes, Bytes]>>;
    } & Struct;
    readonly isKillStorage: boolean;
    readonly asKillStorage: {
      readonly keys_: Vec<Bytes>;
    } & Struct;
    readonly isKillPrefix: boolean;
    readonly asKillPrefix: {
      readonly prefix: Bytes;
      readonly subkeys: u32;
    } & Struct;
    readonly isRemarkWithEvent: boolean;
    readonly asRemarkWithEvent: {
      readonly remark: Bytes;
    } & Struct;
    readonly type: 'Remark' | 'SetHeapPages' | 'SetCode' | 'SetCodeWithoutChecks' | 'SetStorage' | 'KillStorage' | 'KillPrefix' | 'RemarkWithEvent';
  }

  /** @name FrameSystemLimitsBlockWeights (85) */
  interface FrameSystemLimitsBlockWeights extends Struct {
    readonly baseBlock: SpWeightsWeightV2Weight;
    readonly maxBlock: SpWeightsWeightV2Weight;
    readonly perClass: FrameSupportDispatchPerDispatchClassWeightsPerClass;
  }

  /** @name FrameSupportDispatchPerDispatchClassWeightsPerClass (86) */
  interface FrameSupportDispatchPerDispatchClassWeightsPerClass extends Struct {
    readonly normal: FrameSystemLimitsWeightsPerClass;
    readonly operational: FrameSystemLimitsWeightsPerClass;
    readonly mandatory: FrameSystemLimitsWeightsPerClass;
  }

  /** @name FrameSystemLimitsWeightsPerClass (87) */
  interface FrameSystemLimitsWeightsPerClass extends Struct {
    readonly baseExtrinsic: SpWeightsWeightV2Weight;
    readonly maxExtrinsic: Option<SpWeightsWeightV2Weight>;
    readonly maxTotal: Option<SpWeightsWeightV2Weight>;
    readonly reserved: Option<SpWeightsWeightV2Weight>;
  }

  /** @name FrameSystemLimitsBlockLength (89) */
  interface FrameSystemLimitsBlockLength extends Struct {
    readonly max: FrameSupportDispatchPerDispatchClassU32;
  }

  /** @name FrameSupportDispatchPerDispatchClassU32 (90) */
  interface FrameSupportDispatchPerDispatchClassU32 extends Struct {
    readonly normal: u32;
    readonly operational: u32;
    readonly mandatory: u32;
  }

  /** @name SpWeightsRuntimeDbWeight (91) */
  interface SpWeightsRuntimeDbWeight extends Struct {
    readonly read: u64;
    readonly write: u64;
  }

  /** @name SpVersionRuntimeVersion (92) */
  interface SpVersionRuntimeVersion extends Struct {
    readonly specName: Text;
    readonly implName: Text;
    readonly authoringVersion: u32;
    readonly specVersion: u32;
    readonly implVersion: u32;
    readonly apis: Vec<ITuple<[U8aFixed, u32]>>;
    readonly transactionVersion: u32;
    readonly stateVersion: u8;
  }

  /** @name FrameSystemError (98) */
  interface FrameSystemError extends Enum {
    readonly isInvalidSpecName: boolean;
    readonly isSpecVersionNeedsToIncrease: boolean;
    readonly isFailedToExtractRuntimeVersion: boolean;
    readonly isNonDefaultComposite: boolean;
    readonly isNonZeroRefCount: boolean;
    readonly isCallFiltered: boolean;
    readonly type: 'InvalidSpecName' | 'SpecVersionNeedsToIncrease' | 'FailedToExtractRuntimeVersion' | 'NonDefaultComposite' | 'NonZeroRefCount' | 'CallFiltered';
  }

  /** @name SpConsensusBabeAppPublic (101) */
  interface SpConsensusBabeAppPublic extends SpCoreSr25519Public {}

  /** @name SpConsensusBabeDigestsNextConfigDescriptor (104) */
  interface SpConsensusBabeDigestsNextConfigDescriptor extends Enum {
    readonly isV1: boolean;
    readonly asV1: {
      readonly c: ITuple<[u64, u64]>;
      readonly allowedSlots: SpConsensusBabeAllowedSlots;
    } & Struct;
    readonly type: 'V1';
  }

  /** @name SpConsensusBabeAllowedSlots (106) */
  interface SpConsensusBabeAllowedSlots extends Enum {
    readonly isPrimarySlots: boolean;
    readonly isPrimaryAndSecondaryPlainSlots: boolean;
    readonly isPrimaryAndSecondaryVRFSlots: boolean;
    readonly type: 'PrimarySlots' | 'PrimaryAndSecondaryPlainSlots' | 'PrimaryAndSecondaryVRFSlots';
  }

  /** @name SpConsensusBabeDigestsPreDigest (110) */
  interface SpConsensusBabeDigestsPreDigest extends Enum {
    readonly isPrimary: boolean;
    readonly asPrimary: SpConsensusBabeDigestsPrimaryPreDigest;
    readonly isSecondaryPlain: boolean;
    readonly asSecondaryPlain: SpConsensusBabeDigestsSecondaryPlainPreDigest;
    readonly isSecondaryVRF: boolean;
    readonly asSecondaryVRF: SpConsensusBabeDigestsSecondaryVRFPreDigest;
    readonly type: 'Primary' | 'SecondaryPlain' | 'SecondaryVRF';
  }

  /** @name SpConsensusBabeDigestsPrimaryPreDigest (111) */
  interface SpConsensusBabeDigestsPrimaryPreDigest extends Struct {
    readonly authorityIndex: u32;
    readonly slot: u64;
    readonly vrfSignature: SpCoreSr25519VrfVrfSignature;
  }

  /** @name SpCoreSr25519VrfVrfSignature (112) */
  interface SpCoreSr25519VrfVrfSignature extends Struct {
    readonly output: U8aFixed;
    readonly proof: U8aFixed;
  }

  /** @name SpConsensusBabeDigestsSecondaryPlainPreDigest (113) */
  interface SpConsensusBabeDigestsSecondaryPlainPreDigest extends Struct {
    readonly authorityIndex: u32;
    readonly slot: u64;
  }

  /** @name SpConsensusBabeDigestsSecondaryVRFPreDigest (114) */
  interface SpConsensusBabeDigestsSecondaryVRFPreDigest extends Struct {
    readonly authorityIndex: u32;
    readonly slot: u64;
    readonly vrfSignature: SpCoreSr25519VrfVrfSignature;
  }

  /** @name SpConsensusBabeBabeEpochConfiguration (116) */
  interface SpConsensusBabeBabeEpochConfiguration extends Struct {
    readonly c: ITuple<[u64, u64]>;
    readonly allowedSlots: SpConsensusBabeAllowedSlots;
  }

  /** @name PalletBabeCall (120) */
  interface PalletBabeCall extends Enum {
    readonly isReportEquivocation: boolean;
    readonly asReportEquivocation: {
      readonly equivocationProof: SpConsensusSlotsEquivocationProof;
      readonly keyOwnerProof: SpSessionMembershipProof;
    } & Struct;
    readonly isReportEquivocationUnsigned: boolean;
    readonly asReportEquivocationUnsigned: {
      readonly equivocationProof: SpConsensusSlotsEquivocationProof;
      readonly keyOwnerProof: SpSessionMembershipProof;
    } & Struct;
    readonly isPlanConfigChange: boolean;
    readonly asPlanConfigChange: {
      readonly config: SpConsensusBabeDigestsNextConfigDescriptor;
    } & Struct;
    readonly type: 'ReportEquivocation' | 'ReportEquivocationUnsigned' | 'PlanConfigChange';
  }

  /** @name SpConsensusSlotsEquivocationProof (121) */
  interface SpConsensusSlotsEquivocationProof extends Struct {
    readonly offender: SpConsensusBabeAppPublic;
    readonly slot: u64;
    readonly firstHeader: SpRuntimeHeader;
    readonly secondHeader: SpRuntimeHeader;
  }

  /** @name SpSessionMembershipProof (122) */
  interface SpSessionMembershipProof extends Struct {
    readonly session: u32;
    readonly trieNodes: Vec<Bytes>;
    readonly validatorCount: u32;
  }

  /** @name PalletBabeError (123) */
  interface PalletBabeError extends Enum {
    readonly isInvalidEquivocationProof: boolean;
    readonly isInvalidKeyOwnershipProof: boolean;
    readonly isDuplicateOffenceReport: boolean;
    readonly isInvalidConfiguration: boolean;
    readonly type: 'InvalidEquivocationProof' | 'InvalidKeyOwnershipProof' | 'DuplicateOffenceReport' | 'InvalidConfiguration';
  }

  /** @name PalletTimestampCall (124) */
  interface PalletTimestampCall extends Enum {
    readonly isSet: boolean;
    readonly asSet: {
      readonly now: Compact<u64>;
    } & Struct;
    readonly type: 'Set';
  }

  /** @name SpStakingOffenceOffenceDetails (125) */
  interface SpStakingOffenceOffenceDetails extends Struct {
    readonly offender: ITuple<[AccountId32, AccountId32]>;
    readonly reporters: Vec<AccountId32>;
  }

  /** @name PalletValidatorSetValidator (128) */
  interface PalletValidatorSetValidator extends Struct {
    readonly minSetKeysBlock: u32;
  }

  /** @name PalletValidatorSetError (129) */
  interface PalletValidatorSetError extends Enum {
    readonly isDuplicate: boolean;
    readonly isNotAValidator: boolean;
    readonly isTooManyValidators: boolean;
    readonly type: 'Duplicate' | 'NotAValidator' | 'TooManyValidators';
  }

  /** @name PolkadotBulletinChainRuntimeOpaqueSessionKeys (132) */
  interface PolkadotBulletinChainRuntimeOpaqueSessionKeys extends Struct {
    readonly babe: SpConsensusBabeAppPublic;
    readonly grandpa: SpConsensusGrandpaAppPublic;
    readonly imOnline: PalletImOnlineSr25519AppSr25519Public;
  }

  /** @name SpCoreCryptoKeyTypeId (135) */
  interface SpCoreCryptoKeyTypeId extends U8aFixed {}

  /** @name PalletSessionCall (136) */
  interface PalletSessionCall extends Enum {
    readonly isSetKeys: boolean;
    readonly asSetKeys: {
      readonly keys_: PolkadotBulletinChainRuntimeOpaqueSessionKeys;
      readonly proof: Bytes;
    } & Struct;
    readonly isPurgeKeys: boolean;
    readonly type: 'SetKeys' | 'PurgeKeys';
  }

  /** @name PalletSessionError (137) */
  interface PalletSessionError extends Enum {
    readonly isInvalidProof: boolean;
    readonly isNoAssociatedValidatorId: boolean;
    readonly isDuplicatedKey: boolean;
    readonly isNoKeys: boolean;
    readonly isNoAccount: boolean;
    readonly type: 'InvalidProof' | 'NoAssociatedValidatorId' | 'DuplicatedKey' | 'NoKeys' | 'NoAccount';
  }

  /** @name PalletImOnlineCall (141) */
  interface PalletImOnlineCall extends Enum {
    readonly isHeartbeat: boolean;
    readonly asHeartbeat: {
      readonly heartbeat: PalletImOnlineHeartbeat;
      readonly signature: PalletImOnlineSr25519AppSr25519Signature;
    } & Struct;
    readonly type: 'Heartbeat';
  }

  /** @name PalletImOnlineHeartbeat (142) */
  interface PalletImOnlineHeartbeat extends Struct {
    readonly blockNumber: u32;
    readonly sessionIndex: u32;
    readonly authorityIndex: u32;
    readonly validatorsLen: u32;
  }

  /** @name PalletImOnlineSr25519AppSr25519Signature (143) */
  interface PalletImOnlineSr25519AppSr25519Signature extends SpCoreSr25519Signature {}

  /** @name SpCoreSr25519Signature (144) */
  interface SpCoreSr25519Signature extends U8aFixed {}

  /** @name PalletImOnlineError (145) */
  interface PalletImOnlineError extends Enum {
    readonly isInvalidKey: boolean;
    readonly isDuplicatedHeartbeat: boolean;
    readonly type: 'InvalidKey' | 'DuplicatedHeartbeat';
  }

  /** @name PalletGrandpaStoredState (146) */
  interface PalletGrandpaStoredState extends Enum {
    readonly isLive: boolean;
    readonly isPendingPause: boolean;
    readonly asPendingPause: {
      readonly scheduledAt: u32;
      readonly delay: u32;
    } & Struct;
    readonly isPaused: boolean;
    readonly isPendingResume: boolean;
    readonly asPendingResume: {
      readonly scheduledAt: u32;
      readonly delay: u32;
    } & Struct;
    readonly type: 'Live' | 'PendingPause' | 'Paused' | 'PendingResume';
  }

  /** @name PalletGrandpaStoredPendingChange (147) */
  interface PalletGrandpaStoredPendingChange extends Struct {
    readonly scheduledAt: u32;
    readonly delay: u32;
    readonly nextAuthorities: Vec<ITuple<[SpConsensusGrandpaAppPublic, u64]>>;
    readonly forced: Option<u32>;
  }

  /** @name PalletGrandpaCall (150) */
  interface PalletGrandpaCall extends Enum {
    readonly isReportEquivocation: boolean;
    readonly asReportEquivocation: {
      readonly equivocationProof: SpConsensusGrandpaEquivocationProof;
      readonly keyOwnerProof: SpSessionMembershipProof;
    } & Struct;
    readonly isReportEquivocationUnsigned: boolean;
    readonly asReportEquivocationUnsigned: {
      readonly equivocationProof: SpConsensusGrandpaEquivocationProof;
      readonly keyOwnerProof: SpSessionMembershipProof;
    } & Struct;
    readonly isNoteStalled: boolean;
    readonly asNoteStalled: {
      readonly delay: u32;
      readonly bestFinalizedBlockNumber: u32;
    } & Struct;
    readonly type: 'ReportEquivocation' | 'ReportEquivocationUnsigned' | 'NoteStalled';
  }

  /** @name SpConsensusGrandpaEquivocationProof (151) */
  interface SpConsensusGrandpaEquivocationProof extends Struct {
    readonly setId: u64;
    readonly equivocation: SpConsensusGrandpaEquivocation;
  }

  /** @name SpConsensusGrandpaEquivocation (152) */
  interface SpConsensusGrandpaEquivocation extends Enum {
    readonly isPrevote: boolean;
    readonly asPrevote: FinalityGrandpaEquivocationPrevote;
    readonly isPrecommit: boolean;
    readonly asPrecommit: FinalityGrandpaEquivocationPrecommit;
    readonly type: 'Prevote' | 'Precommit';
  }

  /** @name FinalityGrandpaEquivocationPrevote (153) */
  interface FinalityGrandpaEquivocationPrevote extends Struct {
    readonly roundNumber: u64;
    readonly identity: SpConsensusGrandpaAppPublic;
    readonly first: ITuple<[FinalityGrandpaPrevote, SpConsensusGrandpaAppSignature]>;
    readonly second: ITuple<[FinalityGrandpaPrevote, SpConsensusGrandpaAppSignature]>;
  }

  /** @name FinalityGrandpaPrevote (154) */
  interface FinalityGrandpaPrevote extends Struct {
    readonly targetHash: H256;
    readonly targetNumber: u32;
  }

  /** @name FinalityGrandpaEquivocationPrecommit (156) */
  interface FinalityGrandpaEquivocationPrecommit extends Struct {
    readonly roundNumber: u64;
    readonly identity: SpConsensusGrandpaAppPublic;
    readonly first: ITuple<[FinalityGrandpaPrecommit, SpConsensusGrandpaAppSignature]>;
    readonly second: ITuple<[FinalityGrandpaPrecommit, SpConsensusGrandpaAppSignature]>;
  }

  /** @name PalletGrandpaError (158) */
  interface PalletGrandpaError extends Enum {
    readonly isPauseFailed: boolean;
    readonly isResumeFailed: boolean;
    readonly isChangePending: boolean;
    readonly isTooSoon: boolean;
    readonly isInvalidKeyOwnershipProof: boolean;
    readonly isInvalidEquivocationProof: boolean;
    readonly isDuplicateOffenceReport: boolean;
    readonly type: 'PauseFailed' | 'ResumeFailed' | 'ChangePending' | 'TooSoon' | 'InvalidKeyOwnershipProof' | 'InvalidEquivocationProof' | 'DuplicateOffenceReport';
  }

  /** @name PalletTransactionStorageAuthorizationScope (159) */
  interface PalletTransactionStorageAuthorizationScope extends Enum {
    readonly isAccount: boolean;
    readonly asAccount: AccountId32;
    readonly isPreimage: boolean;
    readonly asPreimage: U8aFixed;
    readonly type: 'Account' | 'Preimage';
  }

  /** @name PalletTransactionStorageAuthorization (160) */
  interface PalletTransactionStorageAuthorization extends Struct {
    readonly extent: PalletTransactionStorageAuthorizationExtent;
    readonly expiration: u32;
  }

  /** @name PalletTransactionStorageAuthorizationExtent (161) */
  interface PalletTransactionStorageAuthorizationExtent extends Struct {
    readonly transactions: u32;
    readonly bytes: u64;
  }

  /** @name PalletTransactionStorageTransactionInfo (163) */
  interface PalletTransactionStorageTransactionInfo extends Struct {
    readonly chunkRoot: H256;
    readonly contentHash: H256;
    readonly size_: u32;
    readonly blockChunks: u32;
  }

  /** @name PalletTransactionStorageCall (165) */
  interface PalletTransactionStorageCall extends Enum {
    readonly isStore: boolean;
    readonly asStore: {
      readonly data: Bytes;
    } & Struct;
    readonly isRenew: boolean;
    readonly asRenew: {
      readonly block: u32;
      readonly index: u32;
    } & Struct;
    readonly isCheckProof: boolean;
    readonly asCheckProof: {
      readonly proof: SpTransactionStorageProofTransactionStorageProof;
    } & Struct;
    readonly isAuthorizeAccount: boolean;
    readonly asAuthorizeAccount: {
      readonly who: AccountId32;
      readonly transactions: u32;
      readonly bytes: u64;
    } & Struct;
    readonly isAuthorizePreimage: boolean;
    readonly asAuthorizePreimage: {
      readonly hash_: U8aFixed;
      readonly maxSize: u64;
    } & Struct;
    readonly isRemoveExpiredAccountAuthorization: boolean;
    readonly asRemoveExpiredAccountAuthorization: {
      readonly who: AccountId32;
    } & Struct;
    readonly isRemoveExpiredPreimageAuthorization: boolean;
    readonly asRemoveExpiredPreimageAuthorization: {
      readonly hash_: U8aFixed;
    } & Struct;
    readonly type: 'Store' | 'Renew' | 'CheckProof' | 'AuthorizeAccount' | 'AuthorizePreimage' | 'RemoveExpiredAccountAuthorization' | 'RemoveExpiredPreimageAuthorization';
  }

  /** @name SpTransactionStorageProofTransactionStorageProof (166) */
  interface SpTransactionStorageProofTransactionStorageProof extends Struct {
    readonly chunk: Bytes;
    readonly proof: Vec<Bytes>;
  }

  /** @name PalletTransactionStorageError (167) */
  interface PalletTransactionStorageError extends Enum {
    readonly isBadContext: boolean;
    readonly isBadDataSize: boolean;
    readonly isTooManyTransactions: boolean;
    readonly isRenewedNotFound: boolean;
    readonly isUnexpectedProof: boolean;
    readonly isInvalidProof: boolean;
    readonly isMissingStateData: boolean;
    readonly isDoubleCheck: boolean;
    readonly isAuthorizationNotFound: boolean;
    readonly isAuthorizationNotExpired: boolean;
    readonly type: 'BadContext' | 'BadDataSize' | 'TooManyTransactions' | 'RenewedNotFound' | 'UnexpectedProof' | 'InvalidProof' | 'MissingStateData' | 'DoubleCheck' | 'AuthorizationNotFound' | 'AuthorizationNotExpired';
  }

  /** @name PalletRelayerSetRelayer (168) */
  interface PalletRelayerSetRelayer extends Struct {
    readonly minBridgeTxBlock: u32;
  }

  /** @name PalletRelayerSetError (169) */
  interface PalletRelayerSetError extends Enum {
    readonly isDuplicate: boolean;
    readonly isNotARelayer: boolean;
    readonly type: 'Duplicate' | 'NotARelayer';
  }

  /** @name BpRuntimeHeaderId (170) */
  interface BpRuntimeHeaderId extends ITuple<[u32, H256]> {}

  /** @name BpHeaderChainStoredHeaderData (171) */
  interface BpHeaderChainStoredHeaderData extends Struct {
    readonly number: u32;
    readonly stateRoot: H256;
  }

  /** @name PalletBridgeGrandpaStorageTypesStoredAuthoritySet (172) */
  interface PalletBridgeGrandpaStorageTypesStoredAuthoritySet extends Struct {
    readonly authorities: Vec<ITuple<[SpConsensusGrandpaAppPublic, u64]>>;
    readonly setId: u64;
  }

  /** @name BpRuntimeBasicOperatingMode (174) */
  interface BpRuntimeBasicOperatingMode extends Enum {
    readonly isNormal: boolean;
    readonly isHalted: boolean;
    readonly type: 'Normal' | 'Halted';
  }

  /** @name PalletBridgeGrandpaCall (175) */
  interface PalletBridgeGrandpaCall extends Enum {
    readonly isSubmitFinalityProof: boolean;
    readonly asSubmitFinalityProof: {
      readonly finalityTarget: SpRuntimeHeader;
      readonly justification: BpHeaderChainJustificationGrandpaJustification;
    } & Struct;
    readonly isInitialize: boolean;
    readonly asInitialize: {
      readonly initData: BpHeaderChainInitializationData;
    } & Struct;
    readonly isSetOwner: boolean;
    readonly asSetOwner: {
      readonly newOwner: Option<AccountId32>;
    } & Struct;
    readonly isSetOperatingMode: boolean;
    readonly asSetOperatingMode: {
      readonly operatingMode: BpRuntimeBasicOperatingMode;
    } & Struct;
    readonly type: 'SubmitFinalityProof' | 'Initialize' | 'SetOwner' | 'SetOperatingMode';
  }

  /** @name BpHeaderChainInitializationData (176) */
  interface BpHeaderChainInitializationData extends Struct {
    readonly header: SpRuntimeHeader;
    readonly authorityList: Vec<ITuple<[SpConsensusGrandpaAppPublic, u64]>>;
    readonly setId: u64;
    readonly operatingMode: BpRuntimeBasicOperatingMode;
  }

  /** @name PalletBridgeGrandpaError (177) */
  interface PalletBridgeGrandpaError extends Enum {
    readonly isInvalidJustification: boolean;
    readonly isInvalidAuthoritySet: boolean;
    readonly isOldHeader: boolean;
    readonly isUnsupportedScheduledChange: boolean;
    readonly isNotInitialized: boolean;
    readonly isAlreadyInitialized: boolean;
    readonly isTooManyAuthoritiesInSet: boolean;
    readonly isBridgeModule: boolean;
    readonly asBridgeModule: BpRuntimeOwnedBridgeModuleError;
    readonly type: 'InvalidJustification' | 'InvalidAuthoritySet' | 'OldHeader' | 'UnsupportedScheduledChange' | 'NotInitialized' | 'AlreadyInitialized' | 'TooManyAuthoritiesInSet' | 'BridgeModule';
  }

  /** @name BpRuntimeOwnedBridgeModuleError (178) */
  interface BpRuntimeOwnedBridgeModuleError extends Enum {
    readonly isHalted: boolean;
    readonly type: 'Halted';
  }

  /** @name BpParachainsParaInfo (179) */
  interface BpParachainsParaInfo extends Struct {
    readonly bestHeadHash: BpParachainsBestParaHeadHash;
    readonly nextImportedHashPosition: u32;
  }

  /** @name BpParachainsBestParaHeadHash (180) */
  interface BpParachainsBestParaHeadHash extends Struct {
    readonly atRelayBlockNumber: u32;
    readonly headHash: H256;
  }

  /** @name PalletBridgeParachainsCall (184) */
  interface PalletBridgeParachainsCall extends Enum {
    readonly isSubmitParachainHeads: boolean;
    readonly asSubmitParachainHeads: {
      readonly atRelayBlock: ITuple<[u32, H256]>;
      readonly parachains: Vec<ITuple<[u32, H256]>>;
      readonly parachainHeadsProof: BpPolkadotCoreParachainsParaHeadsProof;
    } & Struct;
    readonly isSetOwner: boolean;
    readonly asSetOwner: {
      readonly newOwner: Option<AccountId32>;
    } & Struct;
    readonly isSetOperatingMode: boolean;
    readonly asSetOperatingMode: {
      readonly operatingMode: BpRuntimeBasicOperatingMode;
    } & Struct;
    readonly type: 'SubmitParachainHeads' | 'SetOwner' | 'SetOperatingMode';
  }

  /** @name BpPolkadotCoreParachainsParaHeadsProof (187) */
  interface BpPolkadotCoreParachainsParaHeadsProof extends Vec<Bytes> {}

  /** @name PalletBridgeParachainsError (188) */
  interface PalletBridgeParachainsError extends Enum {
    readonly isUnknownRelayChainBlock: boolean;
    readonly isInvalidRelayChainBlockNumber: boolean;
    readonly isHeaderChainStorageProof: boolean;
    readonly asHeaderChainStorageProof: BpHeaderChainHeaderChainError;
    readonly isBridgeModule: boolean;
    readonly asBridgeModule: BpRuntimeOwnedBridgeModuleError;
    readonly type: 'UnknownRelayChainBlock' | 'InvalidRelayChainBlockNumber' | 'HeaderChainStorageProof' | 'BridgeModule';
  }

  /** @name BpHeaderChainHeaderChainError (189) */
  interface BpHeaderChainHeaderChainError extends Enum {
    readonly isUnknownHeader: boolean;
    readonly isStorageProof: boolean;
    readonly asStorageProof: BpRuntimeStorageProofError;
    readonly type: 'UnknownHeader' | 'StorageProof';
  }

  /** @name BpRuntimeStorageProofError (190) */
  interface BpRuntimeStorageProofError extends Enum {
    readonly isDuplicateNodesInProof: boolean;
    readonly isUnusedNodesInTheProof: boolean;
    readonly isStorageRootMismatch: boolean;
    readonly isStorageValueUnavailable: boolean;
    readonly isStorageValueEmpty: boolean;
    readonly isStorageValueDecodeFailed: boolean;
    readonly type: 'DuplicateNodesInProof' | 'UnusedNodesInTheProof' | 'StorageRootMismatch' | 'StorageValueUnavailable' | 'StorageValueEmpty' | 'StorageValueDecodeFailed';
  }

  /** @name BpRuntimeStrippableError (191) */
  type BpRuntimeStrippableError = Null;

  /** @name BpMessagesMessagesOperatingMode (192) */
  interface BpMessagesMessagesOperatingMode extends Enum {
    readonly isBasic: boolean;
    readonly asBasic: BpRuntimeBasicOperatingMode;
    readonly isRejectingOutboundMessages: boolean;
    readonly type: 'Basic' | 'RejectingOutboundMessages';
  }

  /** @name BpMessagesInboundLaneData (193) */
  interface BpMessagesInboundLaneData extends Struct {
    readonly relayers: Vec<BpMessagesUnrewardedRelayer>;
    readonly lastConfirmedNonce: u64;
  }

  /** @name BpMessagesUnrewardedRelayer (195) */
  interface BpMessagesUnrewardedRelayer extends Struct {
    readonly relayer: AccountId32;
    readonly messages: BpMessagesDeliveredMessages;
  }

  /** @name BpMessagesOutboundLaneData (196) */
  interface BpMessagesOutboundLaneData extends Struct {
    readonly oldestUnprunedNonce: u64;
    readonly latestReceivedNonce: u64;
    readonly latestGeneratedNonce: u64;
  }

  /** @name BpMessagesMessageKey (197) */
  interface BpMessagesMessageKey extends Struct {
    readonly laneId: BpMessagesLaneId;
    readonly nonce: u64;
  }

  /** @name PalletBridgeMessagesCall (199) */
  interface PalletBridgeMessagesCall extends Enum {
    readonly isSetOwner: boolean;
    readonly asSetOwner: {
      readonly newOwner: Option<AccountId32>;
    } & Struct;
    readonly isSetOperatingMode: boolean;
    readonly asSetOperatingMode: {
      readonly operatingMode: BpMessagesMessagesOperatingMode;
    } & Struct;
    readonly isReceiveMessagesProof: boolean;
    readonly asReceiveMessagesProof: {
      readonly relayerIdAtBridgedChain: AccountId32;
      readonly proof: BridgeRuntimeCommonMessagesTargetFromBridgedChainMessagesProof;
      readonly messagesCount: u32;
      readonly dispatchWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isReceiveMessagesDeliveryProof: boolean;
    readonly asReceiveMessagesDeliveryProof: {
      readonly proof: BridgeRuntimeCommonMessagesSourceFromBridgedChainMessagesDeliveryProof;
      readonly relayersState: BpMessagesUnrewardedRelayersState;
    } & Struct;
    readonly type: 'SetOwner' | 'SetOperatingMode' | 'ReceiveMessagesProof' | 'ReceiveMessagesDeliveryProof';
  }

  /** @name BridgeRuntimeCommonMessagesTargetFromBridgedChainMessagesProof (200) */
  interface BridgeRuntimeCommonMessagesTargetFromBridgedChainMessagesProof extends Struct {
    readonly bridgedHeaderHash: H256;
    readonly storageProof: Vec<Bytes>;
    readonly lane: BpMessagesLaneId;
    readonly noncesStart: u64;
    readonly noncesEnd: u64;
  }

  /** @name BridgeRuntimeCommonMessagesSourceFromBridgedChainMessagesDeliveryProof (201) */
  interface BridgeRuntimeCommonMessagesSourceFromBridgedChainMessagesDeliveryProof extends Struct {
    readonly bridgedHeaderHash: H256;
    readonly storageProof: Vec<Bytes>;
    readonly lane: BpMessagesLaneId;
  }

  /** @name BpMessagesUnrewardedRelayersState (202) */
  interface BpMessagesUnrewardedRelayersState extends Struct {
    readonly unrewardedRelayerEntries: u64;
    readonly messagesInOldestEntry: u64;
    readonly totalMessages: u64;
    readonly lastDeliveredNonce: u64;
  }

  /** @name PalletBridgeMessagesError (203) */
  interface PalletBridgeMessagesError extends Enum {
    readonly isNotOperatingNormally: boolean;
    readonly isInactiveOutboundLane: boolean;
    readonly isMessageDispatchInactive: boolean;
    readonly isMessageRejectedByChainVerifier: boolean;
    readonly asMessageRejectedByChainVerifier: BpMessagesVerificationError;
    readonly isMessageRejectedByLaneVerifier: boolean;
    readonly asMessageRejectedByLaneVerifier: BpMessagesVerificationError;
    readonly isMessageRejectedByPallet: boolean;
    readonly asMessageRejectedByPallet: BpMessagesVerificationError;
    readonly isFailedToWithdrawMessageFee: boolean;
    readonly isTooManyMessagesInTheProof: boolean;
    readonly isInvalidMessagesProof: boolean;
    readonly isInvalidMessagesDeliveryProof: boolean;
    readonly isInvalidUnrewardedRelayersState: boolean;
    readonly isInsufficientDispatchWeight: boolean;
    readonly isMessageIsNotYetSent: boolean;
    readonly isReceivalConfirmation: boolean;
    readonly asReceivalConfirmation: PalletBridgeMessagesOutboundLaneReceivalConfirmationError;
    readonly isBridgeModule: boolean;
    readonly asBridgeModule: BpRuntimeOwnedBridgeModuleError;
    readonly type: 'NotOperatingNormally' | 'InactiveOutboundLane' | 'MessageDispatchInactive' | 'MessageRejectedByChainVerifier' | 'MessageRejectedByLaneVerifier' | 'MessageRejectedByPallet' | 'FailedToWithdrawMessageFee' | 'TooManyMessagesInTheProof' | 'InvalidMessagesProof' | 'InvalidMessagesDeliveryProof' | 'InvalidUnrewardedRelayersState' | 'InsufficientDispatchWeight' | 'MessageIsNotYetSent' | 'ReceivalConfirmation' | 'BridgeModule';
  }

  /** @name BpMessagesVerificationError (204) */
  interface BpMessagesVerificationError extends Enum {
    readonly isEmptyMessageProof: boolean;
    readonly isHeaderChain: boolean;
    readonly asHeaderChain: BpHeaderChainHeaderChainError;
    readonly isInboundLaneStorage: boolean;
    readonly asInboundLaneStorage: BpRuntimeStorageProofError;
    readonly isInvalidMessageWeight: boolean;
    readonly isMessagesCountMismatch: boolean;
    readonly isMessageStorage: boolean;
    readonly asMessageStorage: BpRuntimeStorageProofError;
    readonly isMessageTooLarge: boolean;
    readonly isOutboundLaneStorage: boolean;
    readonly asOutboundLaneStorage: BpRuntimeStorageProofError;
    readonly isStorageProof: boolean;
    readonly asStorageProof: BpRuntimeStorageProofError;
    readonly isOther: boolean;
    readonly type: 'EmptyMessageProof' | 'HeaderChain' | 'InboundLaneStorage' | 'InvalidMessageWeight' | 'MessagesCountMismatch' | 'MessageStorage' | 'MessageTooLarge' | 'OutboundLaneStorage' | 'StorageProof' | 'Other';
  }

  /** @name PalletBridgeMessagesOutboundLaneReceivalConfirmationError (205) */
  interface PalletBridgeMessagesOutboundLaneReceivalConfirmationError extends Enum {
    readonly isFailedToConfirmFutureMessages: boolean;
    readonly isEmptyUnrewardedRelayerEntry: boolean;
    readonly isNonConsecutiveUnrewardedRelayerEntries: boolean;
    readonly isTryingToConfirmMoreMessagesThanExpected: boolean;
    readonly type: 'FailedToConfirmFutureMessages' | 'EmptyUnrewardedRelayerEntry' | 'NonConsecutiveUnrewardedRelayerEntries' | 'TryingToConfirmMoreMessagesThanExpected';
  }

  /** @name PalletSudoCall (206) */
  interface PalletSudoCall extends Enum {
    readonly isSudo: boolean;
    readonly asSudo: {
      readonly call: Call;
    } & Struct;
    readonly isSudoUncheckedWeight: boolean;
    readonly asSudoUncheckedWeight: {
      readonly call: Call;
      readonly weight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isSetKey: boolean;
    readonly asSetKey: {
      readonly new_: MultiAddress;
    } & Struct;
    readonly isSudoAs: boolean;
    readonly asSudoAs: {
      readonly who: MultiAddress;
      readonly call: Call;
    } & Struct;
    readonly type: 'Sudo' | 'SudoUncheckedWeight' | 'SetKey' | 'SudoAs';
  }

  /** @name PalletSudoError (211) */
  interface PalletSudoError extends Enum {
    readonly isRequireSudo: boolean;
    readonly type: 'RequireSudo';
  }

  /** @name SpRuntimeMultiSignature (213) */
  interface SpRuntimeMultiSignature extends Enum {
    readonly isEd25519: boolean;
    readonly asEd25519: SpCoreEd25519Signature;
    readonly isSr25519: boolean;
    readonly asSr25519: SpCoreSr25519Signature;
    readonly isEcdsa: boolean;
    readonly asEcdsa: SpCoreEcdsaSignature;
    readonly type: 'Ed25519' | 'Sr25519' | 'Ecdsa';
  }

  /** @name SpCoreEcdsaSignature (214) */
  interface SpCoreEcdsaSignature extends U8aFixed {}

  /** @name FrameSystemExtensionsCheckNonZeroSender (217) */
  type FrameSystemExtensionsCheckNonZeroSender = Null;

  /** @name FrameSystemExtensionsCheckSpecVersion (218) */
  type FrameSystemExtensionsCheckSpecVersion = Null;

  /** @name FrameSystemExtensionsCheckTxVersion (219) */
  type FrameSystemExtensionsCheckTxVersion = Null;

  /** @name FrameSystemExtensionsCheckGenesis (220) */
  type FrameSystemExtensionsCheckGenesis = Null;

  /** @name FrameSystemExtensionsCheckNonce (223) */
  interface FrameSystemExtensionsCheckNonce extends Compact<u32> {}

  /** @name FrameSystemExtensionsCheckWeight (224) */
  type FrameSystemExtensionsCheckWeight = Null;

  /** @name PolkadotBulletinChainRuntimeValidateSigned (225) */
  type PolkadotBulletinChainRuntimeValidateSigned = Null;

  /** @name PolkadotBulletinChainRuntimeBridgeRejectObsoleteHeadersAndMessages (226) */
  type PolkadotBulletinChainRuntimeBridgeRejectObsoleteHeadersAndMessages = Null;

  /** @name PolkadotBulletinChainRuntimeRuntime (227) */
  type PolkadotBulletinChainRuntimeRuntime = Null;

} // declare module
