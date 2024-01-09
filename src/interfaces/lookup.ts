// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

/* eslint-disable sort-keys */

export default {
  /**
   * Lookup3: frame_system::AccountInfo<Nonce, AccountData>
   **/
  FrameSystemAccountInfo: {
    nonce: 'u32',
    consumers: 'u32',
    providers: 'u32',
    sufficients: 'u32',
    data: 'Null'
  },
  /**
   * Lookup6: frame_support::dispatch::PerDispatchClass<sp_weights::weight_v2::Weight>
   **/
  FrameSupportDispatchPerDispatchClassWeight: {
    normal: 'SpWeightsWeightV2Weight',
    operational: 'SpWeightsWeightV2Weight',
    mandatory: 'SpWeightsWeightV2Weight'
  },
  /**
   * Lookup7: sp_weights::weight_v2::Weight
   **/
  SpWeightsWeightV2Weight: {
    refTime: 'Compact<u64>',
    proofSize: 'Compact<u64>'
  },
  /**
   * Lookup12: sp_runtime::generic::digest::Digest
   **/
  SpRuntimeDigest: {
    logs: 'Vec<SpRuntimeDigestDigestItem>'
  },
  /**
   * Lookup14: sp_runtime::generic::digest::DigestItem
   **/
  SpRuntimeDigestDigestItem: {
    _enum: {
      Other: 'Bytes',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      Consensus: '([u8;4],Bytes)',
      Seal: '([u8;4],Bytes)',
      PreRuntime: '([u8;4],Bytes)',
      __Unused7: 'Null',
      RuntimeEnvironmentUpdated: 'Null'
    }
  },
  /**
   * Lookup17: frame_system::EventRecord<polkadot_bulletin_chain_runtime::RuntimeEvent, primitive_types::H256>
   **/
  FrameSystemEventRecord: {
    phase: 'FrameSystemPhase',
    event: 'Event',
    topics: 'Vec<H256>'
  },
  /**
   * Lookup19: frame_system::pallet::Event<T>
   **/
  FrameSystemEvent: {
    _enum: {
      ExtrinsicSuccess: {
        dispatchInfo: 'FrameSupportDispatchDispatchInfo',
      },
      ExtrinsicFailed: {
        dispatchError: 'SpRuntimeDispatchError',
        dispatchInfo: 'FrameSupportDispatchDispatchInfo',
      },
      CodeUpdated: 'Null',
      NewAccount: {
        account: 'AccountId32',
      },
      KilledAccount: {
        account: 'AccountId32',
      },
      Remarked: {
        _alias: {
          hash_: 'hash',
        },
        sender: 'AccountId32',
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup20: frame_support::dispatch::DispatchInfo
   **/
  FrameSupportDispatchDispatchInfo: {
    weight: 'SpWeightsWeightV2Weight',
    class: 'FrameSupportDispatchDispatchClass',
    paysFee: 'FrameSupportDispatchPays'
  },
  /**
   * Lookup21: frame_support::dispatch::DispatchClass
   **/
  FrameSupportDispatchDispatchClass: {
    _enum: ['Normal', 'Operational', 'Mandatory']
  },
  /**
   * Lookup22: frame_support::dispatch::Pays
   **/
  FrameSupportDispatchPays: {
    _enum: ['Yes', 'No']
  },
  /**
   * Lookup23: sp_runtime::DispatchError
   **/
  SpRuntimeDispatchError: {
    _enum: {
      Other: 'Null',
      CannotLookup: 'Null',
      BadOrigin: 'Null',
      Module: 'SpRuntimeModuleError',
      ConsumerRemaining: 'Null',
      NoProviders: 'Null',
      TooManyConsumers: 'Null',
      Token: 'SpRuntimeTokenError',
      Arithmetic: 'SpArithmeticArithmeticError',
      Transactional: 'SpRuntimeTransactionalError',
      Exhausted: 'Null',
      Corruption: 'Null',
      Unavailable: 'Null',
      RootNotAllowed: 'Null'
    }
  },
  /**
   * Lookup24: sp_runtime::ModuleError
   **/
  SpRuntimeModuleError: {
    index: 'u8',
    error: '[u8;4]'
  },
  /**
   * Lookup25: sp_runtime::TokenError
   **/
  SpRuntimeTokenError: {
    _enum: ['FundsUnavailable', 'OnlyProvider', 'BelowMinimum', 'CannotCreate', 'UnknownAsset', 'Frozen', 'Unsupported', 'CannotCreateHold', 'NotExpendable', 'Blocked']
  },
  /**
   * Lookup26: sp_arithmetic::ArithmeticError
   **/
  SpArithmeticArithmeticError: {
    _enum: ['Underflow', 'Overflow', 'DivisionByZero']
  },
  /**
   * Lookup27: sp_runtime::TransactionalError
   **/
  SpRuntimeTransactionalError: {
    _enum: ['LimitReached', 'NoLayer']
  },
  /**
   * Lookup28: pallet_offences::pallet::Event
   **/
  PalletOffencesEvent: {
    _enum: {
      Offence: {
        kind: '[u8;16]',
        timeslot: 'Bytes'
      }
    }
  },
  /**
   * Lookup30: pallet_validator_set::pallet::Event<T>
   **/
  PalletValidatorSetEvent: {
    _enum: {
      ValidatorAdded: 'AccountId32',
      ValidatorRemoved: 'AccountId32'
    }
  },
  /**
   * Lookup31: pallet_session::pallet::Event
   **/
  PalletSessionEvent: {
    _enum: {
      NewSession: {
        sessionIndex: 'u32'
      }
    }
  },
  /**
   * Lookup32: pallet_im_online::pallet::Event<T>
   **/
  PalletImOnlineEvent: {
    _enum: {
      HeartbeatReceived: {
        authorityId: 'PalletImOnlineSr25519AppSr25519Public',
      },
      AllGood: 'Null',
      SomeOffline: {
        offline: 'Vec<(AccountId32,AccountId32)>'
      }
    }
  },
  /**
   * Lookup33: pallet_im_online::sr25519::app_sr25519::Public
   **/
  PalletImOnlineSr25519AppSr25519Public: 'SpCoreSr25519Public',
  /**
   * Lookup34: sp_core::sr25519::Public
   **/
  SpCoreSr25519Public: '[u8;32]',
  /**
   * Lookup37: pallet_grandpa::pallet::Event
   **/
  PalletGrandpaEvent: {
    _enum: {
      NewAuthorities: {
        authoritySet: 'Vec<(SpConsensusGrandpaAppPublic,u64)>',
      },
      Paused: 'Null',
      Resumed: 'Null'
    }
  },
  /**
   * Lookup40: sp_consensus_grandpa::app::Public
   **/
  SpConsensusGrandpaAppPublic: 'SpCoreEd25519Public',
  /**
   * Lookup41: sp_core::ed25519::Public
   **/
  SpCoreEd25519Public: '[u8;32]',
  /**
   * Lookup42: pallet_transaction_storage::pallet::Event<T>
   **/
  PalletTransactionStorageEvent: {
    _enum: {
      Stored: {
        index: 'u32',
      },
      Renewed: {
        index: 'u32',
      },
      ProofChecked: 'Null',
      AccountAuthorized: {
        who: 'AccountId32',
        transactions: 'u32',
        bytes: 'u64',
      },
      PreimageAuthorized: {
        _alias: {
          hash_: 'hash',
        },
        hash_: '[u8;32]',
        maxSize: 'u64',
      },
      ExpiredAccountAuthorizationRemoved: {
        who: 'AccountId32',
      },
      ExpiredPreimageAuthorizationRemoved: {
        _alias: {
          hash_: 'hash',
        },
        hash_: '[u8;32]'
      }
    }
  },
  /**
   * Lookup43: pallet_relayer_set::pallet::Event<T>
   **/
  PalletRelayerSetEvent: {
    _enum: {
      RelayerAdded: 'AccountId32',
      RelayerRemoved: 'AccountId32'
    }
  },
  /**
   * Lookup44: pallet_bridge_grandpa::pallet::Event<T, I>
   **/
  PalletBridgeGrandpaEvent: {
    _enum: {
      UpdatedBestFinalizedHeader: {
        _alias: {
          hash_: 'hash',
        },
        number: 'u32',
        hash_: 'H256',
        grandpaInfo: 'BpHeaderChainHeaderFinalityInfo'
      }
    }
  },
  /**
   * Lookup45: bp_header_chain::HeaderFinalityInfo<bp_header_chain::justification::GrandpaJustification<sp_runtime::generic::header::Header<Number, Hash>>, bp_header_chain::AuthoritySet>
   **/
  BpHeaderChainHeaderFinalityInfo: {
    finalityProof: 'BpHeaderChainJustificationGrandpaJustification',
    newVerificationContext: 'Option<BpHeaderChainAuthoritySet>'
  },
  /**
   * Lookup46: bp_header_chain::justification::GrandpaJustification<sp_runtime::generic::header::Header<Number, Hash>>
   **/
  BpHeaderChainJustificationGrandpaJustification: {
    round: 'u64',
    commit: 'FinalityGrandpaCommit',
    votesAncestries: 'Vec<SpRuntimeHeader>'
  },
  /**
   * Lookup47: sp_runtime::generic::header::Header<Number, Hash>
   **/
  SpRuntimeHeader: {
    parentHash: 'H256',
    number: 'Compact<u32>',
    stateRoot: 'H256',
    extrinsicsRoot: 'H256',
    digest: 'SpRuntimeDigest'
  },
  /**
   * Lookup49: finality_grandpa::Commit<primitive_types::H256, N, sp_consensus_grandpa::app::Signature, sp_consensus_grandpa::app::Public>
   **/
  FinalityGrandpaCommit: {
    targetHash: 'H256',
    targetNumber: 'u32',
    precommits: 'Vec<FinalityGrandpaSignedPrecommit>'
  },
  /**
   * Lookup50: sp_consensus_grandpa::app::Signature
   **/
  SpConsensusGrandpaAppSignature: 'SpCoreEd25519Signature',
  /**
   * Lookup51: sp_core::ed25519::Signature
   **/
  SpCoreEd25519Signature: '[u8;64]',
  /**
   * Lookup54: finality_grandpa::SignedPrecommit<primitive_types::H256, N, sp_consensus_grandpa::app::Signature, sp_consensus_grandpa::app::Public>
   **/
  FinalityGrandpaSignedPrecommit: {
    precommit: 'FinalityGrandpaPrecommit',
    signature: 'SpConsensusGrandpaAppSignature',
    id: 'SpConsensusGrandpaAppPublic'
  },
  /**
   * Lookup55: finality_grandpa::Precommit<primitive_types::H256, N>
   **/
  FinalityGrandpaPrecommit: {
    targetHash: 'H256',
    targetNumber: 'u32'
  },
  /**
   * Lookup57: bp_header_chain::AuthoritySet
   **/
  BpHeaderChainAuthoritySet: {
    authorities: 'Vec<(SpConsensusGrandpaAppPublic,u64)>',
    setId: 'u64'
  },
  /**
   * Lookup59: pallet_bridge_parachains::pallet::Event<T, I>
   **/
  PalletBridgeParachainsEvent: {
    _enum: {
      UntrackedParachainRejected: {
        parachain: 'u32',
      },
      MissingParachainHead: {
        parachain: 'u32',
      },
      IncorrectParachainHeadHash: {
        parachain: 'u32',
        parachainHeadHash: 'H256',
        actualParachainHeadHash: 'H256',
      },
      RejectedObsoleteParachainHead: {
        parachain: 'u32',
        parachainHeadHash: 'H256',
      },
      RejectedLargeParachainHead: {
        parachain: 'u32',
        parachainHeadHash: 'H256',
        parachainHeadSize: 'u32',
      },
      UpdatedParachainHead: {
        parachain: 'u32',
        parachainHeadHash: 'H256'
      }
    }
  },
  /**
   * Lookup61: pallet_bridge_messages::pallet::Event<T, I>
   **/
  PalletBridgeMessagesEvent: {
    _enum: {
      MessageAccepted: {
        laneId: 'BpMessagesLaneId',
        nonce: 'u64',
      },
      MessagesReceived: 'Vec<BpMessagesReceivedMessages>',
      MessagesDelivered: {
        laneId: 'BpMessagesLaneId',
        messages: 'BpMessagesDeliveredMessages'
      }
    }
  },
  /**
   * Lookup62: bp_messages::LaneId
   **/
  BpMessagesLaneId: '[u8;4]',
  /**
   * Lookup64: bp_messages::ReceivedMessages<bridge_runtime_common::messages_xcm_extension::XcmBlobMessageDispatchResult>
   **/
  BpMessagesReceivedMessages: {
    lane: 'BpMessagesLaneId',
    receiveResults: 'Vec<(u64,BpMessagesReceivalResult)>'
  },
  /**
   * Lookup65: bridge_runtime_common::messages_xcm_extension::XcmBlobMessageDispatchResult
   **/
  BridgeRuntimeCommonMessagesXcmExtensionXcmBlobMessageDispatchResult: {
    _enum: ['InvalidPayload', 'Dispatched', 'NotDispatched']
  },
  /**
   * Lookup68: bp_messages::ReceivalResult<bridge_runtime_common::messages_xcm_extension::XcmBlobMessageDispatchResult>
   **/
  BpMessagesReceivalResult: {
    _enum: {
      Dispatched: 'BpRuntimeMessagesMessageDispatchResult',
      InvalidNonce: 'Null',
      TooManyUnrewardedRelayers: 'Null',
      TooManyUnconfirmedMessages: 'Null'
    }
  },
  /**
   * Lookup69: bp_runtime::messages::MessageDispatchResult<bridge_runtime_common::messages_xcm_extension::XcmBlobMessageDispatchResult>
   **/
  BpRuntimeMessagesMessageDispatchResult: {
    unspentWeight: 'SpWeightsWeightV2Weight',
    dispatchLevelResult: 'BridgeRuntimeCommonMessagesXcmExtensionXcmBlobMessageDispatchResult'
  },
  /**
   * Lookup70: bp_messages::DeliveredMessages
   **/
  BpMessagesDeliveredMessages: {
    begin: 'u64',
    end: 'u64'
  },
  /**
   * Lookup71: pallet_sudo::pallet::Event<T>
   **/
  PalletSudoEvent: {
    _enum: {
      Sudid: {
        sudoResult: 'Result<Null, SpRuntimeDispatchError>',
      },
      KeyChanged: {
        oldSudoer: 'Option<AccountId32>',
      },
      SudoAsDone: {
        sudoResult: 'Result<Null, SpRuntimeDispatchError>'
      }
    }
  },
  /**
   * Lookup74: frame_system::Phase
   **/
  FrameSystemPhase: {
    _enum: {
      ApplyExtrinsic: 'u32',
      Finalization: 'Null',
      Initialization: 'Null'
    }
  },
  /**
   * Lookup78: frame_system::LastRuntimeUpgradeInfo
   **/
  FrameSystemLastRuntimeUpgradeInfo: {
    specVersion: 'Compact<u32>',
    specName: 'Text'
  },
  /**
   * Lookup81: frame_system::pallet::Call<T>
   **/
  FrameSystemCall: {
    _enum: {
      remark: {
        remark: 'Bytes',
      },
      set_heap_pages: {
        pages: 'u64',
      },
      set_code: {
        code: 'Bytes',
      },
      set_code_without_checks: {
        code: 'Bytes',
      },
      set_storage: {
        items: 'Vec<(Bytes,Bytes)>',
      },
      kill_storage: {
        _alias: {
          keys_: 'keys',
        },
        keys_: 'Vec<Bytes>',
      },
      kill_prefix: {
        prefix: 'Bytes',
        subkeys: 'u32',
      },
      remark_with_event: {
        remark: 'Bytes'
      }
    }
  },
  /**
   * Lookup85: frame_system::limits::BlockWeights
   **/
  FrameSystemLimitsBlockWeights: {
    baseBlock: 'SpWeightsWeightV2Weight',
    maxBlock: 'SpWeightsWeightV2Weight',
    perClass: 'FrameSupportDispatchPerDispatchClassWeightsPerClass'
  },
  /**
   * Lookup86: frame_support::dispatch::PerDispatchClass<frame_system::limits::WeightsPerClass>
   **/
  FrameSupportDispatchPerDispatchClassWeightsPerClass: {
    normal: 'FrameSystemLimitsWeightsPerClass',
    operational: 'FrameSystemLimitsWeightsPerClass',
    mandatory: 'FrameSystemLimitsWeightsPerClass'
  },
  /**
   * Lookup87: frame_system::limits::WeightsPerClass
   **/
  FrameSystemLimitsWeightsPerClass: {
    baseExtrinsic: 'SpWeightsWeightV2Weight',
    maxExtrinsic: 'Option<SpWeightsWeightV2Weight>',
    maxTotal: 'Option<SpWeightsWeightV2Weight>',
    reserved: 'Option<SpWeightsWeightV2Weight>'
  },
  /**
   * Lookup89: frame_system::limits::BlockLength
   **/
  FrameSystemLimitsBlockLength: {
    max: 'FrameSupportDispatchPerDispatchClassU32'
  },
  /**
   * Lookup90: frame_support::dispatch::PerDispatchClass<T>
   **/
  FrameSupportDispatchPerDispatchClassU32: {
    normal: 'u32',
    operational: 'u32',
    mandatory: 'u32'
  },
  /**
   * Lookup91: sp_weights::RuntimeDbWeight
   **/
  SpWeightsRuntimeDbWeight: {
    read: 'u64',
    write: 'u64'
  },
  /**
   * Lookup92: sp_version::RuntimeVersion
   **/
  SpVersionRuntimeVersion: {
    specName: 'Text',
    implName: 'Text',
    authoringVersion: 'u32',
    specVersion: 'u32',
    implVersion: 'u32',
    apis: 'Vec<([u8;8],u32)>',
    transactionVersion: 'u32',
    stateVersion: 'u8'
  },
  /**
   * Lookup98: frame_system::pallet::Error<T>
   **/
  FrameSystemError: {
    _enum: ['InvalidSpecName', 'SpecVersionNeedsToIncrease', 'FailedToExtractRuntimeVersion', 'NonDefaultComposite', 'NonZeroRefCount', 'CallFiltered']
  },
  /**
   * Lookup101: sp_consensus_babe::app::Public
   **/
  SpConsensusBabeAppPublic: 'SpCoreSr25519Public',
  /**
   * Lookup104: sp_consensus_babe::digests::NextConfigDescriptor
   **/
  SpConsensusBabeDigestsNextConfigDescriptor: {
    _enum: {
      __Unused0: 'Null',
      V1: {
        c: '(u64,u64)',
        allowedSlots: 'SpConsensusBabeAllowedSlots'
      }
    }
  },
  /**
   * Lookup106: sp_consensus_babe::AllowedSlots
   **/
  SpConsensusBabeAllowedSlots: {
    _enum: ['PrimarySlots', 'PrimaryAndSecondaryPlainSlots', 'PrimaryAndSecondaryVRFSlots']
  },
  /**
   * Lookup110: sp_consensus_babe::digests::PreDigest
   **/
  SpConsensusBabeDigestsPreDigest: {
    _enum: {
      __Unused0: 'Null',
      Primary: 'SpConsensusBabeDigestsPrimaryPreDigest',
      SecondaryPlain: 'SpConsensusBabeDigestsSecondaryPlainPreDigest',
      SecondaryVRF: 'SpConsensusBabeDigestsSecondaryVRFPreDigest'
    }
  },
  /**
   * Lookup111: sp_consensus_babe::digests::PrimaryPreDigest
   **/
  SpConsensusBabeDigestsPrimaryPreDigest: {
    authorityIndex: 'u32',
    slot: 'u64',
    vrfSignature: 'SpCoreSr25519VrfVrfSignature'
  },
  /**
   * Lookup112: sp_core::sr25519::vrf::VrfSignature
   **/
  SpCoreSr25519VrfVrfSignature: {
    output: '[u8;32]',
    proof: '[u8;64]'
  },
  /**
   * Lookup113: sp_consensus_babe::digests::SecondaryPlainPreDigest
   **/
  SpConsensusBabeDigestsSecondaryPlainPreDigest: {
    authorityIndex: 'u32',
    slot: 'u64'
  },
  /**
   * Lookup114: sp_consensus_babe::digests::SecondaryVRFPreDigest
   **/
  SpConsensusBabeDigestsSecondaryVRFPreDigest: {
    authorityIndex: 'u32',
    slot: 'u64',
    vrfSignature: 'SpCoreSr25519VrfVrfSignature'
  },
  /**
   * Lookup116: sp_consensus_babe::BabeEpochConfiguration
   **/
  SpConsensusBabeBabeEpochConfiguration: {
    c: '(u64,u64)',
    allowedSlots: 'SpConsensusBabeAllowedSlots'
  },
  /**
   * Lookup120: pallet_babe::pallet::Call<T>
   **/
  PalletBabeCall: {
    _enum: {
      report_equivocation: {
        equivocationProof: 'SpConsensusSlotsEquivocationProof',
        keyOwnerProof: 'SpSessionMembershipProof',
      },
      report_equivocation_unsigned: {
        equivocationProof: 'SpConsensusSlotsEquivocationProof',
        keyOwnerProof: 'SpSessionMembershipProof',
      },
      plan_config_change: {
        config: 'SpConsensusBabeDigestsNextConfigDescriptor'
      }
    }
  },
  /**
   * Lookup121: sp_consensus_slots::EquivocationProof<sp_runtime::generic::header::Header<Number, Hash>, sp_consensus_babe::app::Public>
   **/
  SpConsensusSlotsEquivocationProof: {
    offender: 'SpConsensusBabeAppPublic',
    slot: 'u64',
    firstHeader: 'SpRuntimeHeader',
    secondHeader: 'SpRuntimeHeader'
  },
  /**
   * Lookup122: sp_session::MembershipProof
   **/
  SpSessionMembershipProof: {
    session: 'u32',
    trieNodes: 'Vec<Bytes>',
    validatorCount: 'u32'
  },
  /**
   * Lookup123: pallet_babe::pallet::Error<T>
   **/
  PalletBabeError: {
    _enum: ['InvalidEquivocationProof', 'InvalidKeyOwnershipProof', 'DuplicateOffenceReport', 'InvalidConfiguration']
  },
  /**
   * Lookup124: pallet_timestamp::pallet::Call<T>
   **/
  PalletTimestampCall: {
    _enum: {
      set: {
        now: 'Compact<u64>'
      }
    }
  },
  /**
   * Lookup125: sp_staking::offence::OffenceDetails<sp_core::crypto::AccountId32, Offender>
   **/
  SpStakingOffenceOffenceDetails: {
    offender: '(AccountId32,AccountId32)',
    reporters: 'Vec<AccountId32>'
  },
  /**
   * Lookup128: pallet_validator_set::Validator<BlockNumber>
   **/
  PalletValidatorSetValidator: {
    minSetKeysBlock: 'u32'
  },
  /**
   * Lookup129: pallet_validator_set::pallet::Error<T>
   **/
  PalletValidatorSetError: {
    _enum: ['Duplicate', 'NotAValidator', 'TooManyValidators']
  },
  /**
   * Lookup132: polkadot_bulletin_chain_runtime::opaque::SessionKeys
   **/
  PolkadotBulletinChainRuntimeOpaqueSessionKeys: {
    babe: 'SpConsensusBabeAppPublic',
    grandpa: 'SpConsensusGrandpaAppPublic',
    imOnline: 'PalletImOnlineSr25519AppSr25519Public'
  },
  /**
   * Lookup135: sp_core::crypto::KeyTypeId
   **/
  SpCoreCryptoKeyTypeId: '[u8;4]',
  /**
   * Lookup136: pallet_session::pallet::Call<T>
   **/
  PalletSessionCall: {
    _enum: {
      set_keys: {
        _alias: {
          keys_: 'keys',
        },
        keys_: 'PolkadotBulletinChainRuntimeOpaqueSessionKeys',
        proof: 'Bytes',
      },
      purge_keys: 'Null'
    }
  },
  /**
   * Lookup137: pallet_session::pallet::Error<T>
   **/
  PalletSessionError: {
    _enum: ['InvalidProof', 'NoAssociatedValidatorId', 'DuplicatedKey', 'NoKeys', 'NoAccount']
  },
  /**
   * Lookup141: pallet_im_online::pallet::Call<T>
   **/
  PalletImOnlineCall: {
    _enum: {
      heartbeat: {
        heartbeat: 'PalletImOnlineHeartbeat',
        signature: 'PalletImOnlineSr25519AppSr25519Signature'
      }
    }
  },
  /**
   * Lookup142: pallet_im_online::Heartbeat<BlockNumber>
   **/
  PalletImOnlineHeartbeat: {
    blockNumber: 'u32',
    sessionIndex: 'u32',
    authorityIndex: 'u32',
    validatorsLen: 'u32'
  },
  /**
   * Lookup143: pallet_im_online::sr25519::app_sr25519::Signature
   **/
  PalletImOnlineSr25519AppSr25519Signature: 'SpCoreSr25519Signature',
  /**
   * Lookup144: sp_core::sr25519::Signature
   **/
  SpCoreSr25519Signature: '[u8;64]',
  /**
   * Lookup145: pallet_im_online::pallet::Error<T>
   **/
  PalletImOnlineError: {
    _enum: ['InvalidKey', 'DuplicatedHeartbeat']
  },
  /**
   * Lookup146: pallet_grandpa::StoredState<N>
   **/
  PalletGrandpaStoredState: {
    _enum: {
      Live: 'Null',
      PendingPause: {
        scheduledAt: 'u32',
        delay: 'u32',
      },
      Paused: 'Null',
      PendingResume: {
        scheduledAt: 'u32',
        delay: 'u32'
      }
    }
  },
  /**
   * Lookup147: pallet_grandpa::StoredPendingChange<N, Limit>
   **/
  PalletGrandpaStoredPendingChange: {
    scheduledAt: 'u32',
    delay: 'u32',
    nextAuthorities: 'Vec<(SpConsensusGrandpaAppPublic,u64)>',
    forced: 'Option<u32>'
  },
  /**
   * Lookup150: pallet_grandpa::pallet::Call<T>
   **/
  PalletGrandpaCall: {
    _enum: {
      report_equivocation: {
        equivocationProof: 'SpConsensusGrandpaEquivocationProof',
        keyOwnerProof: 'SpSessionMembershipProof',
      },
      report_equivocation_unsigned: {
        equivocationProof: 'SpConsensusGrandpaEquivocationProof',
        keyOwnerProof: 'SpSessionMembershipProof',
      },
      note_stalled: {
        delay: 'u32',
        bestFinalizedBlockNumber: 'u32'
      }
    }
  },
  /**
   * Lookup151: sp_consensus_grandpa::EquivocationProof<primitive_types::H256, N>
   **/
  SpConsensusGrandpaEquivocationProof: {
    setId: 'u64',
    equivocation: 'SpConsensusGrandpaEquivocation'
  },
  /**
   * Lookup152: sp_consensus_grandpa::Equivocation<primitive_types::H256, N>
   **/
  SpConsensusGrandpaEquivocation: {
    _enum: {
      Prevote: 'FinalityGrandpaEquivocationPrevote',
      Precommit: 'FinalityGrandpaEquivocationPrecommit'
    }
  },
  /**
   * Lookup153: finality_grandpa::Equivocation<sp_consensus_grandpa::app::Public, finality_grandpa::Prevote<primitive_types::H256, N>, sp_consensus_grandpa::app::Signature>
   **/
  FinalityGrandpaEquivocationPrevote: {
    roundNumber: 'u64',
    identity: 'SpConsensusGrandpaAppPublic',
    first: '(FinalityGrandpaPrevote,SpConsensusGrandpaAppSignature)',
    second: '(FinalityGrandpaPrevote,SpConsensusGrandpaAppSignature)'
  },
  /**
   * Lookup154: finality_grandpa::Prevote<primitive_types::H256, N>
   **/
  FinalityGrandpaPrevote: {
    targetHash: 'H256',
    targetNumber: 'u32'
  },
  /**
   * Lookup156: finality_grandpa::Equivocation<sp_consensus_grandpa::app::Public, finality_grandpa::Precommit<primitive_types::H256, N>, sp_consensus_grandpa::app::Signature>
   **/
  FinalityGrandpaEquivocationPrecommit: {
    roundNumber: 'u64',
    identity: 'SpConsensusGrandpaAppPublic',
    first: '(FinalityGrandpaPrecommit,SpConsensusGrandpaAppSignature)',
    second: '(FinalityGrandpaPrecommit,SpConsensusGrandpaAppSignature)'
  },
  /**
   * Lookup158: pallet_grandpa::pallet::Error<T>
   **/
  PalletGrandpaError: {
    _enum: ['PauseFailed', 'ResumeFailed', 'ChangePending', 'TooSoon', 'InvalidKeyOwnershipProof', 'InvalidEquivocationProof', 'DuplicateOffenceReport']
  },
  /**
   * Lookup159: pallet_transaction_storage::AuthorizationScope<sp_core::crypto::AccountId32>
   **/
  PalletTransactionStorageAuthorizationScope: {
    _enum: {
      Account: 'AccountId32',
      Preimage: '[u8;32]'
    }
  },
  /**
   * Lookup160: pallet_transaction_storage::Authorization<BlockNumber>
   **/
  PalletTransactionStorageAuthorization: {
    extent: 'PalletTransactionStorageAuthorizationExtent',
    expiration: 'u32'
  },
  /**
   * Lookup161: pallet_transaction_storage::AuthorizationExtent
   **/
  PalletTransactionStorageAuthorizationExtent: {
    transactions: 'u32',
    bytes: 'u64'
  },
  /**
   * Lookup163: pallet_transaction_storage::TransactionInfo
   **/
  PalletTransactionStorageTransactionInfo: {
    _alias: {
      size_: 'size'
    },
    chunkRoot: 'H256',
    contentHash: 'H256',
    size_: 'u32',
    blockChunks: 'u32'
  },
  /**
   * Lookup165: pallet_transaction_storage::pallet::Call<T>
   **/
  PalletTransactionStorageCall: {
    _enum: {
      store: {
        data: 'Bytes',
      },
      renew: {
        block: 'u32',
        index: 'u32',
      },
      check_proof: {
        proof: 'SpTransactionStorageProofTransactionStorageProof',
      },
      authorize_account: {
        who: 'AccountId32',
        transactions: 'u32',
        bytes: 'u64',
      },
      authorize_preimage: {
        _alias: {
          hash_: 'hash',
        },
        hash_: '[u8;32]',
        maxSize: 'u64',
      },
      remove_expired_account_authorization: {
        who: 'AccountId32',
      },
      remove_expired_preimage_authorization: {
        _alias: {
          hash_: 'hash',
        },
        hash_: '[u8;32]'
      }
    }
  },
  /**
   * Lookup166: sp_transaction_storage_proof::TransactionStorageProof
   **/
  SpTransactionStorageProofTransactionStorageProof: {
    chunk: 'Bytes',
    proof: 'Vec<Bytes>'
  },
  /**
   * Lookup167: pallet_transaction_storage::pallet::Error<T>
   **/
  PalletTransactionStorageError: {
    _enum: ['BadContext', 'BadDataSize', 'TooManyTransactions', 'RenewedNotFound', 'UnexpectedProof', 'InvalidProof', 'MissingStateData', 'DoubleCheck', 'AuthorizationNotFound', 'AuthorizationNotExpired']
  },
  /**
   * Lookup168: pallet_relayer_set::Relayer<BlockNumber>
   **/
  PalletRelayerSetRelayer: {
    minBridgeTxBlock: 'u32'
  },
  /**
   * Lookup169: pallet_relayer_set::pallet::Error<T>
   **/
  PalletRelayerSetError: {
    _enum: ['Duplicate', 'NotARelayer']
  },
  /**
   * Lookup170: bp_runtime::HeaderId<primitive_types::H256, Number>
   **/
  BpRuntimeHeaderId: '(u32,H256)',
  /**
   * Lookup171: bp_header_chain::StoredHeaderData<Number, primitive_types::H256>
   **/
  BpHeaderChainStoredHeaderData: {
    number: 'u32',
    stateRoot: 'H256'
  },
  /**
   * Lookup172: pallet_bridge_grandpa::storage_types::StoredAuthoritySet<T, I>
   **/
  PalletBridgeGrandpaStorageTypesStoredAuthoritySet: {
    authorities: 'Vec<(SpConsensusGrandpaAppPublic,u64)>',
    setId: 'u64'
  },
  /**
   * Lookup174: bp_runtime::BasicOperatingMode
   **/
  BpRuntimeBasicOperatingMode: {
    _enum: ['Normal', 'Halted']
  },
  /**
   * Lookup175: pallet_bridge_grandpa::pallet::Call<T, I>
   **/
  PalletBridgeGrandpaCall: {
    _enum: {
      submit_finality_proof: {
        finalityTarget: 'SpRuntimeHeader',
        justification: 'BpHeaderChainJustificationGrandpaJustification',
      },
      initialize: {
        initData: 'BpHeaderChainInitializationData',
      },
      set_owner: {
        newOwner: 'Option<AccountId32>',
      },
      set_operating_mode: {
        operatingMode: 'BpRuntimeBasicOperatingMode'
      }
    }
  },
  /**
   * Lookup176: bp_header_chain::InitializationData<sp_runtime::generic::header::Header<Number, Hash>>
   **/
  BpHeaderChainInitializationData: {
    header: 'SpRuntimeHeader',
    authorityList: 'Vec<(SpConsensusGrandpaAppPublic,u64)>',
    setId: 'u64',
    operatingMode: 'BpRuntimeBasicOperatingMode'
  },
  /**
   * Lookup177: pallet_bridge_grandpa::pallet::Error<T, I>
   **/
  PalletBridgeGrandpaError: {
    _enum: {
      InvalidJustification: 'Null',
      InvalidAuthoritySet: 'Null',
      OldHeader: 'Null',
      UnsupportedScheduledChange: 'Null',
      NotInitialized: 'Null',
      AlreadyInitialized: 'Null',
      TooManyAuthoritiesInSet: 'Null',
      BridgeModule: 'BpRuntimeOwnedBridgeModuleError'
    }
  },
  /**
   * Lookup178: bp_runtime::OwnedBridgeModuleError
   **/
  BpRuntimeOwnedBridgeModuleError: {
    _enum: ['Halted']
  },
  /**
   * Lookup179: bp_parachains::ParaInfo
   **/
  BpParachainsParaInfo: {
    bestHeadHash: 'BpParachainsBestParaHeadHash',
    nextImportedHashPosition: 'u32'
  },
  /**
   * Lookup180: bp_parachains::BestParaHeadHash
   **/
  BpParachainsBestParaHeadHash: {
    atRelayBlockNumber: 'u32',
    headHash: 'H256'
  },
  /**
   * Lookup184: pallet_bridge_parachains::pallet::Call<T, I>
   **/
  PalletBridgeParachainsCall: {
    _enum: {
      submit_parachain_heads: {
        atRelayBlock: '(u32,H256)',
        parachains: 'Vec<(u32,H256)>',
        parachainHeadsProof: 'BpPolkadotCoreParachainsParaHeadsProof',
      },
      set_owner: {
        newOwner: 'Option<AccountId32>',
      },
      set_operating_mode: {
        operatingMode: 'BpRuntimeBasicOperatingMode'
      }
    }
  },
  /**
   * Lookup187: bp_polkadot_core::parachains::ParaHeadsProof
   **/
  BpPolkadotCoreParachainsParaHeadsProof: 'Vec<Bytes>',
  /**
   * Lookup188: pallet_bridge_parachains::pallet::Error<T, I>
   **/
  PalletBridgeParachainsError: {
    _enum: {
      UnknownRelayChainBlock: 'Null',
      InvalidRelayChainBlockNumber: 'Null',
      HeaderChainStorageProof: 'BpHeaderChainHeaderChainError',
      BridgeModule: 'BpRuntimeOwnedBridgeModuleError'
    }
  },
  /**
   * Lookup189: bp_header_chain::HeaderChainError
   **/
  BpHeaderChainHeaderChainError: {
    _enum: {
      UnknownHeader: 'Null',
      StorageProof: 'BpRuntimeStorageProofError'
    }
  },
  /**
   * Lookup190: bp_runtime::storage_proof::Error
   **/
  BpRuntimeStorageProofError: {
    _enum: ['DuplicateNodesInProof', 'UnusedNodesInTheProof', 'StorageRootMismatch', 'StorageValueUnavailable', 'StorageValueEmpty', 'StorageValueDecodeFailed']
  },
  /**
   * Lookup191: bp_runtime::StrippableError<T>
   **/
  BpRuntimeStrippableError: 'Null',
  /**
   * Lookup192: bp_messages::MessagesOperatingMode
   **/
  BpMessagesMessagesOperatingMode: {
    _enum: {
      Basic: 'BpRuntimeBasicOperatingMode',
      RejectingOutboundMessages: 'Null'
    }
  },
  /**
   * Lookup193: bp_messages::InboundLaneData<sp_core::crypto::AccountId32>
   **/
  BpMessagesInboundLaneData: {
    relayers: 'Vec<BpMessagesUnrewardedRelayer>',
    lastConfirmedNonce: 'u64'
  },
  /**
   * Lookup195: bp_messages::UnrewardedRelayer<sp_core::crypto::AccountId32>
   **/
  BpMessagesUnrewardedRelayer: {
    relayer: 'AccountId32',
    messages: 'BpMessagesDeliveredMessages'
  },
  /**
   * Lookup196: bp_messages::OutboundLaneData
   **/
  BpMessagesOutboundLaneData: {
    oldestUnprunedNonce: 'u64',
    latestReceivedNonce: 'u64',
    latestGeneratedNonce: 'u64'
  },
  /**
   * Lookup197: bp_messages::MessageKey
   **/
  BpMessagesMessageKey: {
    laneId: 'BpMessagesLaneId',
    nonce: 'u64'
  },
  /**
   * Lookup199: pallet_bridge_messages::pallet::Call<T, I>
   **/
  PalletBridgeMessagesCall: {
    _enum: {
      set_owner: {
        newOwner: 'Option<AccountId32>',
      },
      set_operating_mode: {
        operatingMode: 'BpMessagesMessagesOperatingMode',
      },
      receive_messages_proof: {
        relayerIdAtBridgedChain: 'AccountId32',
        proof: 'BridgeRuntimeCommonMessagesTargetFromBridgedChainMessagesProof',
        messagesCount: 'u32',
        dispatchWeight: 'SpWeightsWeightV2Weight',
      },
      receive_messages_delivery_proof: {
        proof: 'BridgeRuntimeCommonMessagesSourceFromBridgedChainMessagesDeliveryProof',
        relayersState: 'BpMessagesUnrewardedRelayersState'
      }
    }
  },
  /**
   * Lookup200: bridge_runtime_common::messages::target::FromBridgedChainMessagesProof<primitive_types::H256>
   **/
  BridgeRuntimeCommonMessagesTargetFromBridgedChainMessagesProof: {
    bridgedHeaderHash: 'H256',
    storageProof: 'Vec<Bytes>',
    lane: 'BpMessagesLaneId',
    noncesStart: 'u64',
    noncesEnd: 'u64'
  },
  /**
   * Lookup201: bridge_runtime_common::messages::source::FromBridgedChainMessagesDeliveryProof<primitive_types::H256>
   **/
  BridgeRuntimeCommonMessagesSourceFromBridgedChainMessagesDeliveryProof: {
    bridgedHeaderHash: 'H256',
    storageProof: 'Vec<Bytes>',
    lane: 'BpMessagesLaneId'
  },
  /**
   * Lookup202: bp_messages::UnrewardedRelayersState
   **/
  BpMessagesUnrewardedRelayersState: {
    unrewardedRelayerEntries: 'u64',
    messagesInOldestEntry: 'u64',
    totalMessages: 'u64',
    lastDeliveredNonce: 'u64'
  },
  /**
   * Lookup203: pallet_bridge_messages::pallet::Error<T, I>
   **/
  PalletBridgeMessagesError: {
    _enum: {
      NotOperatingNormally: 'Null',
      InactiveOutboundLane: 'Null',
      MessageDispatchInactive: 'Null',
      MessageRejectedByChainVerifier: 'BpMessagesVerificationError',
      MessageRejectedByLaneVerifier: 'BpMessagesVerificationError',
      MessageRejectedByPallet: 'BpMessagesVerificationError',
      FailedToWithdrawMessageFee: 'Null',
      TooManyMessagesInTheProof: 'Null',
      InvalidMessagesProof: 'Null',
      InvalidMessagesDeliveryProof: 'Null',
      InvalidUnrewardedRelayersState: 'Null',
      InsufficientDispatchWeight: 'Null',
      MessageIsNotYetSent: 'Null',
      ReceivalConfirmation: 'PalletBridgeMessagesOutboundLaneReceivalConfirmationError',
      BridgeModule: 'BpRuntimeOwnedBridgeModuleError'
    }
  },
  /**
   * Lookup204: bp_messages::VerificationError
   **/
  BpMessagesVerificationError: {
    _enum: {
      EmptyMessageProof: 'Null',
      HeaderChain: 'BpHeaderChainHeaderChainError',
      InboundLaneStorage: 'BpRuntimeStorageProofError',
      InvalidMessageWeight: 'Null',
      MessagesCountMismatch: 'Null',
      MessageStorage: 'BpRuntimeStorageProofError',
      MessageTooLarge: 'Null',
      OutboundLaneStorage: 'BpRuntimeStorageProofError',
      StorageProof: 'BpRuntimeStorageProofError',
      Other: 'Null'
    }
  },
  /**
   * Lookup205: pallet_bridge_messages::outbound_lane::ReceivalConfirmationError
   **/
  PalletBridgeMessagesOutboundLaneReceivalConfirmationError: {
    _enum: ['FailedToConfirmFutureMessages', 'EmptyUnrewardedRelayerEntry', 'NonConsecutiveUnrewardedRelayerEntries', 'TryingToConfirmMoreMessagesThanExpected']
  },
  /**
   * Lookup206: pallet_sudo::pallet::Call<T>
   **/
  PalletSudoCall: {
    _enum: {
      sudo: {
        call: 'Call',
      },
      sudo_unchecked_weight: {
        call: 'Call',
        weight: 'SpWeightsWeightV2Weight',
      },
      set_key: {
        _alias: {
          new_: 'new',
        },
        new_: 'MultiAddress',
      },
      sudo_as: {
        who: 'MultiAddress',
        call: 'Call'
      }
    }
  },
  /**
   * Lookup211: pallet_sudo::pallet::Error<T>
   **/
  PalletSudoError: {
    _enum: ['RequireSudo']
  },
  /**
   * Lookup213: sp_runtime::MultiSignature
   **/
  SpRuntimeMultiSignature: {
    _enum: {
      Ed25519: 'SpCoreEd25519Signature',
      Sr25519: 'SpCoreSr25519Signature',
      Ecdsa: 'SpCoreEcdsaSignature'
    }
  },
  /**
   * Lookup214: sp_core::ecdsa::Signature
   **/
  SpCoreEcdsaSignature: '[u8;65]',
  /**
   * Lookup217: frame_system::extensions::check_non_zero_sender::CheckNonZeroSender<T>
   **/
  FrameSystemExtensionsCheckNonZeroSender: 'Null',
  /**
   * Lookup218: frame_system::extensions::check_spec_version::CheckSpecVersion<T>
   **/
  FrameSystemExtensionsCheckSpecVersion: 'Null',
  /**
   * Lookup219: frame_system::extensions::check_tx_version::CheckTxVersion<T>
   **/
  FrameSystemExtensionsCheckTxVersion: 'Null',
  /**
   * Lookup220: frame_system::extensions::check_genesis::CheckGenesis<T>
   **/
  FrameSystemExtensionsCheckGenesis: 'Null',
  /**
   * Lookup223: frame_system::extensions::check_nonce::CheckNonce<T>
   **/
  FrameSystemExtensionsCheckNonce: 'Compact<u32>',
  /**
   * Lookup224: frame_system::extensions::check_weight::CheckWeight<T>
   **/
  FrameSystemExtensionsCheckWeight: 'Null',
  /**
   * Lookup225: polkadot_bulletin_chain_runtime::ValidateSigned
   **/
  PolkadotBulletinChainRuntimeValidateSigned: 'Null',
  /**
   * Lookup226: polkadot_bulletin_chain_runtime::BridgeRejectObsoleteHeadersAndMessages
   **/
  PolkadotBulletinChainRuntimeBridgeRejectObsoleteHeadersAndMessages: 'Null',
  /**
   * Lookup227: polkadot_bulletin_chain_runtime::Runtime
   **/
  PolkadotBulletinChainRuntimeRuntime: 'Null'
};
