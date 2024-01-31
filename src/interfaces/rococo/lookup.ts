// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

/* eslint-disable sort-keys */

export default {
  /**
   * Lookup3: frame_system::AccountInfo<Nonce, pallet_balances::types::AccountData<Balance>>
   **/
  FrameSystemAccountInfo: {
    nonce: 'u32',
    consumers: 'u32',
    providers: 'u32',
    sufficients: 'u32',
    data: 'PalletBalancesAccountData'
  },
  /**
   * Lookup5: pallet_balances::types::AccountData<Balance>
   **/
  PalletBalancesAccountData: {
    free: 'u128',
    reserved: 'u128',
    frozen: 'u128',
    flags: 'u128'
  },
  /**
   * Lookup8: frame_support::dispatch::PerDispatchClass<sp_weights::weight_v2::Weight>
   **/
  FrameSupportDispatchPerDispatchClassWeight: {
    normal: 'SpWeightsWeightV2Weight',
    operational: 'SpWeightsWeightV2Weight',
    mandatory: 'SpWeightsWeightV2Weight'
  },
  /**
   * Lookup9: sp_weights::weight_v2::Weight
   **/
  SpWeightsWeightV2Weight: {
    refTime: 'Compact<u64>',
    proofSize: 'Compact<u64>'
  },
  /**
   * Lookup14: sp_runtime::generic::digest::Digest
   **/
  SpRuntimeDigest: {
    logs: 'Vec<SpRuntimeDigestDigestItem>'
  },
  /**
   * Lookup16: sp_runtime::generic::digest::DigestItem
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
   * Lookup19: frame_system::EventRecord<rococo_runtime::RuntimeEvent, primitive_types::H256>
   **/
  FrameSystemEventRecord: {
    phase: 'FrameSystemPhase',
    event: 'Event',
    topics: 'Vec<H256>'
  },
  /**
   * Lookup21: frame_system::pallet::Event<T>
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
   * Lookup22: frame_support::dispatch::DispatchInfo
   **/
  FrameSupportDispatchDispatchInfo: {
    weight: 'SpWeightsWeightV2Weight',
    class: 'FrameSupportDispatchDispatchClass',
    paysFee: 'FrameSupportDispatchPays'
  },
  /**
   * Lookup23: frame_support::dispatch::DispatchClass
   **/
  FrameSupportDispatchDispatchClass: {
    _enum: ['Normal', 'Operational', 'Mandatory']
  },
  /**
   * Lookup24: frame_support::dispatch::Pays
   **/
  FrameSupportDispatchPays: {
    _enum: ['Yes', 'No']
  },
  /**
   * Lookup25: sp_runtime::DispatchError
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
   * Lookup26: sp_runtime::ModuleError
   **/
  SpRuntimeModuleError: {
    index: 'u8',
    error: '[u8;4]'
  },
  /**
   * Lookup27: sp_runtime::TokenError
   **/
  SpRuntimeTokenError: {
    _enum: ['FundsUnavailable', 'OnlyProvider', 'BelowMinimum', 'CannotCreate', 'UnknownAsset', 'Frozen', 'Unsupported', 'CannotCreateHold', 'NotExpendable', 'Blocked']
  },
  /**
   * Lookup28: sp_arithmetic::ArithmeticError
   **/
  SpArithmeticArithmeticError: {
    _enum: ['Underflow', 'Overflow', 'DivisionByZero']
  },
  /**
   * Lookup29: sp_runtime::TransactionalError
   **/
  SpRuntimeTransactionalError: {
    _enum: ['LimitReached', 'NoLayer']
  },
  /**
   * Lookup30: pallet_indices::pallet::Event<T>
   **/
  PalletIndicesEvent: {
    _enum: {
      IndexAssigned: {
        who: 'AccountId32',
        index: 'u32',
      },
      IndexFreed: {
        index: 'u32',
      },
      IndexFrozen: {
        index: 'u32',
        who: 'AccountId32'
      }
    }
  },
  /**
   * Lookup31: pallet_balances::pallet::Event<T, I>
   **/
  PalletBalancesEvent: {
    _enum: {
      Endowed: {
        account: 'AccountId32',
        freeBalance: 'u128',
      },
      DustLost: {
        account: 'AccountId32',
        amount: 'u128',
      },
      Transfer: {
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
      },
      BalanceSet: {
        who: 'AccountId32',
        free: 'u128',
      },
      Reserved: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Unreserved: {
        who: 'AccountId32',
        amount: 'u128',
      },
      ReserveRepatriated: {
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
        destinationStatus: 'FrameSupportTokensMiscBalanceStatus',
      },
      Deposit: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Withdraw: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Slashed: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Minted: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Burned: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Suspended: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Restored: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Upgraded: {
        who: 'AccountId32',
      },
      Issued: {
        amount: 'u128',
      },
      Rescinded: {
        amount: 'u128',
      },
      Locked: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Unlocked: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Frozen: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Thawed: {
        who: 'AccountId32',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup32: frame_support::traits::tokens::misc::BalanceStatus
   **/
  FrameSupportTokensMiscBalanceStatus: {
    _enum: ['Free', 'Reserved']
  },
  /**
   * Lookup33: pallet_transaction_payment::pallet::Event<T>
   **/
  PalletTransactionPaymentEvent: {
    _enum: {
      TransactionFeePaid: {
        who: 'AccountId32',
        actualFee: 'u128',
        tip: 'u128'
      }
    }
  },
  /**
   * Lookup34: pallet_offences::pallet::Event
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
   * Lookup36: pallet_session::pallet::Event
   **/
  PalletSessionEvent: {
    _enum: {
      NewSession: {
        sessionIndex: 'u32'
      }
    }
  },
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
   * Lookup42: pallet_im_online::pallet::Event<T>
   **/
  PalletImOnlineEvent: {
    _enum: {
      HeartbeatReceived: {
        authorityId: 'PalletImOnlineSr25519AppSr25519Public',
      },
      AllGood: 'Null',
      SomeOffline: {
        offline: 'Vec<(AccountId32,Null)>'
      }
    }
  },
  /**
   * Lookup43: pallet_im_online::sr25519::app_sr25519::Public
   **/
  PalletImOnlineSr25519AppSr25519Public: 'SpCoreSr25519Public',
  /**
   * Lookup44: sp_core::sr25519::Public
   **/
  SpCoreSr25519Public: '[u8;32]',
  /**
   * Lookup48: pallet_treasury::pallet::Event<T, I>
   **/
  PalletTreasuryEvent: {
    _enum: {
      Proposed: {
        proposalIndex: 'u32',
      },
      Spending: {
        budgetRemaining: 'u128',
      },
      Awarded: {
        proposalIndex: 'u32',
        award: 'u128',
        account: 'AccountId32',
      },
      Rejected: {
        proposalIndex: 'u32',
        slashed: 'u128',
      },
      Burnt: {
        burntFunds: 'u128',
      },
      Rollover: {
        rolloverBalance: 'u128',
      },
      Deposit: {
        value: 'u128',
      },
      SpendApproved: {
        proposalIndex: 'u32',
        amount: 'u128',
        beneficiary: 'AccountId32',
      },
      UpdatedInactive: {
        reactivated: 'u128',
        deactivated: 'u128',
      },
      AssetSpendApproved: {
        index: 'u32',
        assetKind: 'PolkadotRuntimeCommonImplsVersionedLocatableAsset',
        amount: 'u128',
        beneficiary: 'XcmVersionedMultiLocation',
        validFrom: 'u32',
        expireAt: 'u32',
      },
      AssetSpendVoided: {
        index: 'u32',
      },
      Paid: {
        index: 'u32',
        paymentId: 'u64',
      },
      PaymentFailed: {
        index: 'u32',
        paymentId: 'u64',
      },
      SpendProcessed: {
        index: 'u32'
      }
    }
  },
  /**
   * Lookup49: polkadot_runtime_common::impls::VersionedLocatableAsset
   **/
  PolkadotRuntimeCommonImplsVersionedLocatableAsset: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      __Unused2: 'Null',
      V3: {
        location: 'StagingXcmV3MultiLocation',
        assetId: 'XcmV3MultiassetAssetId'
      }
    }
  },
  /**
   * Lookup50: staging_xcm::v3::multilocation::MultiLocation
   **/
  StagingXcmV3MultiLocation: {
    parents: 'u8',
    interior: 'XcmV3Junctions'
  },
  /**
   * Lookup51: xcm::v3::junctions::Junctions
   **/
  XcmV3Junctions: {
    _enum: {
      Here: 'Null',
      X1: 'XcmV3Junction',
      X2: '(XcmV3Junction,XcmV3Junction)',
      X3: '(XcmV3Junction,XcmV3Junction,XcmV3Junction)',
      X4: '(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)',
      X5: '(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)',
      X6: '(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)',
      X7: '(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)',
      X8: '(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)'
    }
  },
  /**
   * Lookup52: xcm::v3::junction::Junction
   **/
  XcmV3Junction: {
    _enum: {
      Parachain: 'Compact<u32>',
      AccountId32: {
        network: 'Option<XcmV3JunctionNetworkId>',
        id: '[u8;32]',
      },
      AccountIndex64: {
        network: 'Option<XcmV3JunctionNetworkId>',
        index: 'Compact<u64>',
      },
      AccountKey20: {
        network: 'Option<XcmV3JunctionNetworkId>',
        key: '[u8;20]',
      },
      PalletInstance: 'u8',
      GeneralIndex: 'Compact<u128>',
      GeneralKey: {
        length: 'u8',
        data: '[u8;32]',
      },
      OnlyChild: 'Null',
      Plurality: {
        id: 'XcmV3JunctionBodyId',
        part: 'XcmV3JunctionBodyPart',
      },
      GlobalConsensus: 'XcmV3JunctionNetworkId'
    }
  },
  /**
   * Lookup55: xcm::v3::junction::NetworkId
   **/
  XcmV3JunctionNetworkId: {
    _enum: {
      ByGenesis: '[u8;32]',
      ByFork: {
        blockNumber: 'u64',
        blockHash: '[u8;32]',
      },
      Polkadot: 'Null',
      Kusama: 'Null',
      Westend: 'Null',
      Rococo: 'Null',
      Wococo: 'Null',
      Ethereum: {
        chainId: 'Compact<u64>',
      },
      BitcoinCore: 'Null',
      BitcoinCash: 'Null',
      PolkadotBulletin: 'Null'
    }
  },
  /**
   * Lookup58: xcm::v3::junction::BodyId
   **/
  XcmV3JunctionBodyId: {
    _enum: {
      Unit: 'Null',
      Moniker: '[u8;4]',
      Index: 'Compact<u32>',
      Executive: 'Null',
      Technical: 'Null',
      Legislative: 'Null',
      Judicial: 'Null',
      Defense: 'Null',
      Administration: 'Null',
      Treasury: 'Null'
    }
  },
  /**
   * Lookup59: xcm::v3::junction::BodyPart
   **/
  XcmV3JunctionBodyPart: {
    _enum: {
      Voice: 'Null',
      Members: {
        count: 'Compact<u32>',
      },
      Fraction: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>',
      },
      AtLeastProportion: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>',
      },
      MoreThanProportion: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup60: xcm::v3::multiasset::AssetId
   **/
  XcmV3MultiassetAssetId: {
    _enum: {
      Concrete: 'StagingXcmV3MultiLocation',
      Abstract: '[u8;32]'
    }
  },
  /**
   * Lookup61: xcm::VersionedMultiLocation
   **/
  XcmVersionedMultiLocation: {
    _enum: {
      __Unused0: 'Null',
      V2: 'XcmV2MultiLocation',
      __Unused2: 'Null',
      V3: 'StagingXcmV3MultiLocation'
    }
  },
  /**
   * Lookup62: xcm::v2::multilocation::MultiLocation
   **/
  XcmV2MultiLocation: {
    parents: 'u8',
    interior: 'XcmV2MultilocationJunctions'
  },
  /**
   * Lookup63: xcm::v2::multilocation::Junctions
   **/
  XcmV2MultilocationJunctions: {
    _enum: {
      Here: 'Null',
      X1: 'XcmV2Junction',
      X2: '(XcmV2Junction,XcmV2Junction)',
      X3: '(XcmV2Junction,XcmV2Junction,XcmV2Junction)',
      X4: '(XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction)',
      X5: '(XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction)',
      X6: '(XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction)',
      X7: '(XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction)',
      X8: '(XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction)'
    }
  },
  /**
   * Lookup64: xcm::v2::junction::Junction
   **/
  XcmV2Junction: {
    _enum: {
      Parachain: 'Compact<u32>',
      AccountId32: {
        network: 'XcmV2NetworkId',
        id: '[u8;32]',
      },
      AccountIndex64: {
        network: 'XcmV2NetworkId',
        index: 'Compact<u64>',
      },
      AccountKey20: {
        network: 'XcmV2NetworkId',
        key: '[u8;20]',
      },
      PalletInstance: 'u8',
      GeneralIndex: 'Compact<u128>',
      GeneralKey: 'Bytes',
      OnlyChild: 'Null',
      Plurality: {
        id: 'XcmV2BodyId',
        part: 'XcmV2BodyPart'
      }
    }
  },
  /**
   * Lookup65: xcm::v2::NetworkId
   **/
  XcmV2NetworkId: {
    _enum: {
      Any: 'Null',
      Named: 'Bytes',
      Polkadot: 'Null',
      Kusama: 'Null'
    }
  },
  /**
   * Lookup67: xcm::v2::BodyId
   **/
  XcmV2BodyId: {
    _enum: {
      Unit: 'Null',
      Named: 'Bytes',
      Index: 'Compact<u32>',
      Executive: 'Null',
      Technical: 'Null',
      Legislative: 'Null',
      Judicial: 'Null',
      Defense: 'Null',
      Administration: 'Null',
      Treasury: 'Null'
    }
  },
  /**
   * Lookup68: xcm::v2::BodyPart
   **/
  XcmV2BodyPart: {
    _enum: {
      Voice: 'Null',
      Members: {
        count: 'Compact<u32>',
      },
      Fraction: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>',
      },
      AtLeastProportion: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>',
      },
      MoreThanProportion: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup69: pallet_conviction_voting::pallet::Event<T, I>
   **/
  PalletConvictionVotingEvent: {
    _enum: {
      Delegated: '(AccountId32,AccountId32)',
      Undelegated: 'AccountId32'
    }
  },
  /**
   * Lookup70: pallet_referenda::pallet::Event<T, I>
   **/
  PalletReferendaEvent: {
    _enum: {
      Submitted: {
        index: 'u32',
        track: 'u16',
        proposal: 'FrameSupportPreimagesBounded',
      },
      DecisionDepositPlaced: {
        index: 'u32',
        who: 'AccountId32',
        amount: 'u128',
      },
      DecisionDepositRefunded: {
        index: 'u32',
        who: 'AccountId32',
        amount: 'u128',
      },
      DepositSlashed: {
        who: 'AccountId32',
        amount: 'u128',
      },
      DecisionStarted: {
        index: 'u32',
        track: 'u16',
        proposal: 'FrameSupportPreimagesBounded',
        tally: 'PalletConvictionVotingTally',
      },
      ConfirmStarted: {
        index: 'u32',
      },
      ConfirmAborted: {
        index: 'u32',
      },
      Confirmed: {
        index: 'u32',
        tally: 'PalletConvictionVotingTally',
      },
      Approved: {
        index: 'u32',
      },
      Rejected: {
        index: 'u32',
        tally: 'PalletConvictionVotingTally',
      },
      TimedOut: {
        index: 'u32',
        tally: 'PalletConvictionVotingTally',
      },
      Cancelled: {
        index: 'u32',
        tally: 'PalletConvictionVotingTally',
      },
      Killed: {
        index: 'u32',
        tally: 'PalletConvictionVotingTally',
      },
      SubmissionDepositRefunded: {
        index: 'u32',
        who: 'AccountId32',
        amount: 'u128',
      },
      MetadataSet: {
        _alias: {
          hash_: 'hash',
        },
        index: 'u32',
        hash_: 'H256',
      },
      MetadataCleared: {
        _alias: {
          hash_: 'hash',
        },
        index: 'u32',
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup72: frame_support::traits::preimages::Bounded<rococo_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>
   **/
  FrameSupportPreimagesBounded: {
    _enum: {
      Legacy: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      Inline: 'Bytes',
      Lookup: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
        len: 'u32'
      }
    }
  },
  /**
   * Lookup74: frame_system::pallet::Call<T>
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
   * Lookup78: pallet_babe::pallet::Call<T>
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
   * Lookup79: sp_consensus_slots::EquivocationProof<sp_runtime::generic::header::Header<Number, Hash>, sp_consensus_babe::app::Public>
   **/
  SpConsensusSlotsEquivocationProof: {
    offender: 'SpConsensusBabeAppPublic',
    slot: 'u64',
    firstHeader: 'SpRuntimeHeader',
    secondHeader: 'SpRuntimeHeader'
  },
  /**
   * Lookup80: sp_runtime::generic::header::Header<Number, Hash>
   **/
  SpRuntimeHeader: {
    parentHash: 'H256',
    number: 'Compact<u32>',
    stateRoot: 'H256',
    extrinsicsRoot: 'H256',
    digest: 'SpRuntimeDigest'
  },
  /**
   * Lookup81: sp_consensus_babe::app::Public
   **/
  SpConsensusBabeAppPublic: 'SpCoreSr25519Public',
  /**
   * Lookup83: sp_session::MembershipProof
   **/
  SpSessionMembershipProof: {
    session: 'u32',
    trieNodes: 'Vec<Bytes>',
    validatorCount: 'u32'
  },
  /**
   * Lookup84: sp_consensus_babe::digests::NextConfigDescriptor
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
   * Lookup86: sp_consensus_babe::AllowedSlots
   **/
  SpConsensusBabeAllowedSlots: {
    _enum: ['PrimarySlots', 'PrimaryAndSecondaryPlainSlots', 'PrimaryAndSecondaryVRFSlots']
  },
  /**
   * Lookup87: pallet_timestamp::pallet::Call<T>
   **/
  PalletTimestampCall: {
    _enum: {
      set: {
        now: 'Compact<u64>'
      }
    }
  },
  /**
   * Lookup88: pallet_indices::pallet::Call<T>
   **/
  PalletIndicesCall: {
    _enum: {
      claim: {
        index: 'u32',
      },
      transfer: {
        _alias: {
          new_: 'new',
        },
        new_: 'MultiAddress',
        index: 'u32',
      },
      free: {
        index: 'u32',
      },
      force_transfer: {
        _alias: {
          new_: 'new',
        },
        new_: 'MultiAddress',
        index: 'u32',
        freeze: 'bool',
      },
      freeze: {
        index: 'u32'
      }
    }
  },
  /**
   * Lookup92: pallet_balances::pallet::Call<T, I>
   **/
  PalletBalancesCall: {
    _enum: {
      transfer_allow_death: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      __Unused1: 'Null',
      force_transfer: {
        source: 'MultiAddress',
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      transfer_keep_alive: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      transfer_all: {
        dest: 'MultiAddress',
        keepAlive: 'bool',
      },
      force_unreserve: {
        who: 'MultiAddress',
        amount: 'u128',
      },
      upgrade_accounts: {
        who: 'Vec<AccountId32>',
      },
      __Unused7: 'Null',
      force_set_balance: {
        who: 'MultiAddress',
        newFree: 'Compact<u128>'
      }
    }
  },
  /**
   * Lookup94: pallet_beefy::pallet::Call<T>
   **/
  PalletBeefyCall: {
    _enum: {
      report_equivocation: {
        equivocationProof: 'SpConsensusBeefyEquivocationProof',
        keyOwnerProof: 'SpSessionMembershipProof',
      },
      report_equivocation_unsigned: {
        equivocationProof: 'SpConsensusBeefyEquivocationProof',
        keyOwnerProof: 'SpSessionMembershipProof',
      },
      set_new_genesis: {
        delayInBlocks: 'u32'
      }
    }
  },
  /**
   * Lookup95: sp_consensus_beefy::EquivocationProof<Number, sp_consensus_beefy::ecdsa_crypto::Public, sp_consensus_beefy::ecdsa_crypto::Signature>
   **/
  SpConsensusBeefyEquivocationProof: {
    first: 'SpConsensusBeefyVoteMessage',
    second: 'SpConsensusBeefyVoteMessage'
  },
  /**
   * Lookup96: sp_consensus_beefy::ecdsa_crypto::Public
   **/
  SpConsensusBeefyEcdsaCryptoPublic: 'SpCoreEcdsaPublic',
  /**
   * Lookup97: sp_core::ecdsa::Public
   **/
  SpCoreEcdsaPublic: '[u8;33]',
  /**
   * Lookup99: sp_consensus_beefy::ecdsa_crypto::Signature
   **/
  SpConsensusBeefyEcdsaCryptoSignature: 'SpCoreEcdsaSignature',
  /**
   * Lookup100: sp_core::ecdsa::Signature
   **/
  SpCoreEcdsaSignature: '[u8;65]',
  /**
   * Lookup102: sp_consensus_beefy::VoteMessage<Number, sp_consensus_beefy::ecdsa_crypto::Public, sp_consensus_beefy::ecdsa_crypto::Signature>
   **/
  SpConsensusBeefyVoteMessage: {
    commitment: 'SpConsensusBeefyCommitment',
    id: 'SpConsensusBeefyEcdsaCryptoPublic',
    signature: 'SpConsensusBeefyEcdsaCryptoSignature'
  },
  /**
   * Lookup103: sp_consensus_beefy::commitment::Commitment<TBlockNumber>
   **/
  SpConsensusBeefyCommitment: {
    payload: 'SpConsensusBeefyPayload',
    blockNumber: 'u32',
    validatorSetId: 'u64'
  },
  /**
   * Lookup104: sp_consensus_beefy::payload::Payload
   **/
  SpConsensusBeefyPayload: 'Vec<([u8;2],Bytes)>',
  /**
   * Lookup108: pallet_session::pallet::Call<T>
   **/
  PalletSessionCall: {
    _enum: {
      set_keys: {
        _alias: {
          keys_: 'keys',
        },
        keys_: 'RococoRuntimeSessionKeys',
        proof: 'Bytes',
      },
      purge_keys: 'Null'
    }
  },
  /**
   * Lookup109: rococo_runtime::SessionKeys
   **/
  RococoRuntimeSessionKeys: {
    grandpa: 'SpConsensusGrandpaAppPublic',
    babe: 'SpConsensusBabeAppPublic',
    imOnline: 'PalletImOnlineSr25519AppSr25519Public',
    paraValidator: 'PolkadotPrimitivesV6ValidatorAppPublic',
    paraAssignment: 'PolkadotPrimitivesV6AssignmentAppPublic',
    authorityDiscovery: 'SpAuthorityDiscoveryAppPublic',
    beefy: 'SpConsensusBeefyEcdsaCryptoPublic'
  },
  /**
   * Lookup110: polkadot_primitives::v6::validator_app::Public
   **/
  PolkadotPrimitivesV6ValidatorAppPublic: 'SpCoreSr25519Public',
  /**
   * Lookup111: polkadot_primitives::v6::assignment_app::Public
   **/
  PolkadotPrimitivesV6AssignmentAppPublic: 'SpCoreSr25519Public',
  /**
   * Lookup112: sp_authority_discovery::app::Public
   **/
  SpAuthorityDiscoveryAppPublic: 'SpCoreSr25519Public',
  /**
   * Lookup113: pallet_grandpa::pallet::Call<T>
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
   * Lookup114: sp_consensus_grandpa::EquivocationProof<primitive_types::H256, N>
   **/
  SpConsensusGrandpaEquivocationProof: {
    setId: 'u64',
    equivocation: 'SpConsensusGrandpaEquivocation'
  },
  /**
   * Lookup115: sp_consensus_grandpa::Equivocation<primitive_types::H256, N>
   **/
  SpConsensusGrandpaEquivocation: {
    _enum: {
      Prevote: 'FinalityGrandpaEquivocationPrevote',
      Precommit: 'FinalityGrandpaEquivocationPrecommit'
    }
  },
  /**
   * Lookup116: finality_grandpa::Equivocation<sp_consensus_grandpa::app::Public, finality_grandpa::Prevote<primitive_types::H256, N>, sp_consensus_grandpa::app::Signature>
   **/
  FinalityGrandpaEquivocationPrevote: {
    roundNumber: 'u64',
    identity: 'SpConsensusGrandpaAppPublic',
    first: '(FinalityGrandpaPrevote,SpConsensusGrandpaAppSignature)',
    second: '(FinalityGrandpaPrevote,SpConsensusGrandpaAppSignature)'
  },
  /**
   * Lookup117: finality_grandpa::Prevote<primitive_types::H256, N>
   **/
  FinalityGrandpaPrevote: {
    targetHash: 'H256',
    targetNumber: 'u32'
  },
  /**
   * Lookup118: sp_consensus_grandpa::app::Signature
   **/
  SpConsensusGrandpaAppSignature: 'SpCoreEd25519Signature',
  /**
   * Lookup119: sp_core::ed25519::Signature
   **/
  SpCoreEd25519Signature: '[u8;64]',
  /**
   * Lookup122: finality_grandpa::Equivocation<sp_consensus_grandpa::app::Public, finality_grandpa::Precommit<primitive_types::H256, N>, sp_consensus_grandpa::app::Signature>
   **/
  FinalityGrandpaEquivocationPrecommit: {
    roundNumber: 'u64',
    identity: 'SpConsensusGrandpaAppPublic',
    first: '(FinalityGrandpaPrecommit,SpConsensusGrandpaAppSignature)',
    second: '(FinalityGrandpaPrecommit,SpConsensusGrandpaAppSignature)'
  },
  /**
   * Lookup123: finality_grandpa::Precommit<primitive_types::H256, N>
   **/
  FinalityGrandpaPrecommit: {
    targetHash: 'H256',
    targetNumber: 'u32'
  },
  /**
   * Lookup125: pallet_im_online::pallet::Call<T>
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
   * Lookup126: pallet_im_online::Heartbeat<BlockNumber>
   **/
  PalletImOnlineHeartbeat: {
    blockNumber: 'u32',
    sessionIndex: 'u32',
    authorityIndex: 'u32',
    validatorsLen: 'u32'
  },
  /**
   * Lookup127: pallet_im_online::sr25519::app_sr25519::Signature
   **/
  PalletImOnlineSr25519AppSr25519Signature: 'SpCoreSr25519Signature',
  /**
   * Lookup128: sp_core::sr25519::Signature
   **/
  SpCoreSr25519Signature: '[u8;64]',
  /**
   * Lookup129: pallet_treasury::pallet::Call<T, I>
   **/
  PalletTreasuryCall: {
    _enum: {
      propose_spend: {
        value: 'Compact<u128>',
        beneficiary: 'MultiAddress',
      },
      reject_proposal: {
        proposalId: 'Compact<u32>',
      },
      approve_proposal: {
        proposalId: 'Compact<u32>',
      },
      spend_local: {
        amount: 'Compact<u128>',
        beneficiary: 'MultiAddress',
      },
      remove_approval: {
        proposalId: 'Compact<u32>',
      },
      spend: {
        assetKind: 'PolkadotRuntimeCommonImplsVersionedLocatableAsset',
        amount: 'Compact<u128>',
        beneficiary: 'XcmVersionedMultiLocation',
        validFrom: 'Option<u32>',
      },
      payout: {
        index: 'u32',
      },
      check_status: {
        index: 'u32',
      },
      void_spend: {
        index: 'u32'
      }
    }
  },
  /**
   * Lookup131: pallet_conviction_voting::pallet::Call<T, I>
   **/
  PalletConvictionVotingCall: {
    _enum: {
      vote: {
        pollIndex: 'Compact<u32>',
        vote: 'PalletConvictionVotingVoteAccountVote',
      },
      delegate: {
        class: 'u16',
        to: 'MultiAddress',
        conviction: 'PalletConvictionVotingConviction',
        balance: 'u128',
      },
      undelegate: {
        class: 'u16',
      },
      unlock: {
        class: 'u16',
        target: 'MultiAddress',
      },
      remove_vote: {
        class: 'Option<u16>',
        index: 'u32',
      },
      remove_other_vote: {
        target: 'MultiAddress',
        class: 'u16',
        index: 'u32'
      }
    }
  },
  /**
   * Lookup132: pallet_conviction_voting::vote::AccountVote<Balance>
   **/
  PalletConvictionVotingVoteAccountVote: {
    _enum: {
      Standard: {
        vote: 'Vote',
        balance: 'u128',
      },
      Split: {
        aye: 'u128',
        nay: 'u128',
      },
      SplitAbstain: {
        aye: 'u128',
        nay: 'u128',
        abstain: 'u128'
      }
    }
  },
  /**
   * Lookup134: pallet_conviction_voting::conviction::Conviction
   **/
  PalletConvictionVotingConviction: {
    _enum: ['None', 'Locked1x', 'Locked2x', 'Locked3x', 'Locked4x', 'Locked5x', 'Locked6x']
  },
  /**
   * Lookup136: pallet_referenda::pallet::Call<T, I>
   **/
  PalletReferendaCall: {
    _enum: {
      submit: {
        proposalOrigin: 'RococoRuntimeOriginCaller',
        proposal: 'FrameSupportPreimagesBounded',
        enactmentMoment: 'FrameSupportScheduleDispatchTime',
      },
      place_decision_deposit: {
        index: 'u32',
      },
      refund_decision_deposit: {
        index: 'u32',
      },
      cancel: {
        index: 'u32',
      },
      kill: {
        index: 'u32',
      },
      nudge_referendum: {
        index: 'u32',
      },
      one_fewer_deciding: {
        track: 'u16',
      },
      refund_submission_deposit: {
        index: 'u32',
      },
      set_metadata: {
        index: 'u32',
        maybeHash: 'Option<H256>'
      }
    }
  },
  /**
   * Lookup137: rococo_runtime::OriginCaller
   **/
  RococoRuntimeOriginCaller: {
    _enum: {
      system: 'FrameSupportDispatchRawOrigin',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      Void: 'SpCoreVoid',
      __Unused5: 'Null',
      __Unused6: 'Null',
      __Unused7: 'Null',
      __Unused8: 'Null',
      __Unused9: 'Null',
      __Unused10: 'Null',
      __Unused11: 'Null',
      __Unused12: 'Null',
      __Unused13: 'Null',
      __Unused14: 'Null',
      __Unused15: 'Null',
      __Unused16: 'Null',
      __Unused17: 'Null',
      __Unused18: 'Null',
      __Unused19: 'Null',
      __Unused20: 'Null',
      __Unused21: 'Null',
      __Unused22: 'Null',
      __Unused23: 'Null',
      __Unused24: 'Null',
      __Unused25: 'Null',
      __Unused26: 'Null',
      __Unused27: 'Null',
      __Unused28: 'Null',
      __Unused29: 'Null',
      __Unused30: 'Null',
      __Unused31: 'Null',
      __Unused32: 'Null',
      __Unused33: 'Null',
      __Unused34: 'Null',
      __Unused35: 'Null',
      __Unused36: 'Null',
      __Unused37: 'Null',
      __Unused38: 'Null',
      __Unused39: 'Null',
      __Unused40: 'Null',
      __Unused41: 'Null',
      __Unused42: 'Null',
      Origins: 'RococoRuntimeGovernanceOriginsPalletCustomOriginsOrigin',
      __Unused44: 'Null',
      __Unused45: 'Null',
      __Unused46: 'Null',
      __Unused47: 'Null',
      __Unused48: 'Null',
      __Unused49: 'Null',
      ParachainsOrigin: 'PolkadotRuntimeParachainsOriginPalletOrigin',
      __Unused51: 'Null',
      __Unused52: 'Null',
      __Unused53: 'Null',
      __Unused54: 'Null',
      __Unused55: 'Null',
      __Unused56: 'Null',
      __Unused57: 'Null',
      __Unused58: 'Null',
      __Unused59: 'Null',
      __Unused60: 'Null',
      __Unused61: 'Null',
      __Unused62: 'Null',
      __Unused63: 'Null',
      __Unused64: 'Null',
      __Unused65: 'Null',
      __Unused66: 'Null',
      __Unused67: 'Null',
      __Unused68: 'Null',
      __Unused69: 'Null',
      __Unused70: 'Null',
      __Unused71: 'Null',
      __Unused72: 'Null',
      __Unused73: 'Null',
      __Unused74: 'Null',
      __Unused75: 'Null',
      __Unused76: 'Null',
      __Unused77: 'Null',
      __Unused78: 'Null',
      __Unused79: 'Null',
      __Unused80: 'Null',
      __Unused81: 'Null',
      __Unused82: 'Null',
      __Unused83: 'Null',
      __Unused84: 'Null',
      __Unused85: 'Null',
      __Unused86: 'Null',
      __Unused87: 'Null',
      __Unused88: 'Null',
      __Unused89: 'Null',
      __Unused90: 'Null',
      __Unused91: 'Null',
      __Unused92: 'Null',
      __Unused93: 'Null',
      __Unused94: 'Null',
      __Unused95: 'Null',
      __Unused96: 'Null',
      __Unused97: 'Null',
      __Unused98: 'Null',
      XcmPallet: 'PalletXcmOrigin'
    }
  },
  /**
   * Lookup138: frame_support::dispatch::RawOrigin<sp_core::crypto::AccountId32>
   **/
  FrameSupportDispatchRawOrigin: {
    _enum: {
      Root: 'Null',
      Signed: 'AccountId32',
      None: 'Null'
    }
  },
  /**
   * Lookup139: rococo_runtime::governance::origins::pallet_custom_origins::Origin
   **/
  RococoRuntimeGovernanceOriginsPalletCustomOriginsOrigin: {
    _enum: ['StakingAdmin', 'Treasurer', 'FellowshipAdmin', 'GeneralAdmin', 'AuctionAdmin', 'LeaseAdmin', 'ReferendumCanceller', 'ReferendumKiller', 'SmallTipper', 'BigTipper', 'SmallSpender', 'MediumSpender', 'BigSpender', 'WhitelistedCaller', 'FellowshipInitiates', 'Fellows', 'FellowshipExperts', 'FellowshipMasters', 'Fellowship1Dan', 'Fellowship2Dan', 'Fellowship3Dan', 'Fellowship4Dan', 'Fellowship5Dan', 'Fellowship6Dan', 'Fellowship7Dan', 'Fellowship8Dan', 'Fellowship9Dan']
  },
  /**
   * Lookup140: polkadot_runtime_parachains::origin::pallet::Origin
   **/
  PolkadotRuntimeParachainsOriginPalletOrigin: {
    _enum: {
      Parachain: 'u32'
    }
  },
  /**
   * Lookup142: pallet_xcm::pallet::Origin
   **/
  PalletXcmOrigin: {
    _enum: {
      Xcm: 'StagingXcmV3MultiLocation',
      Response: 'StagingXcmV3MultiLocation'
    }
  },
  /**
   * Lookup143: sp_core::Void
   **/
  SpCoreVoid: 'Null',
  /**
   * Lookup144: frame_support::traits::schedule::DispatchTime<BlockNumber>
   **/
  FrameSupportScheduleDispatchTime: {
    _enum: {
      At: 'u32',
      After: 'u32'
    }
  },
  /**
   * Lookup146: pallet_ranked_collective::pallet::Call<T, I>
   **/
  PalletRankedCollectiveCall: {
    _enum: {
      add_member: {
        who: 'MultiAddress',
      },
      promote_member: {
        who: 'MultiAddress',
      },
      demote_member: {
        who: 'MultiAddress',
      },
      remove_member: {
        who: 'MultiAddress',
        minRank: 'u16',
      },
      vote: {
        poll: 'u32',
        aye: 'bool',
      },
      cleanup_poll: {
        pollIndex: 'u32',
        max: 'u32'
      }
    }
  },
  /**
   * Lookup148: pallet_whitelist::pallet::Call<T>
   **/
  PalletWhitelistCall: {
    _enum: {
      whitelist_call: {
        callHash: 'H256',
      },
      remove_whitelisted_call: {
        callHash: 'H256',
      },
      dispatch_whitelisted_call: {
        callHash: 'H256',
        callEncodedLen: 'u32',
        callWeightWitness: 'SpWeightsWeightV2Weight',
      },
      dispatch_whitelisted_call_with_preimage: {
        call: 'Call'
      }
    }
  },
  /**
   * Lookup149: polkadot_runtime_common::claims::pallet::Call<T>
   **/
  PolkadotRuntimeCommonClaimsPalletCall: {
    _enum: {
      claim: {
        dest: 'AccountId32',
        ethereumSignature: 'PolkadotRuntimeCommonClaimsEcdsaSignature',
      },
      mint_claim: {
        who: 'EthereumAddress',
        value: 'u128',
        vestingSchedule: 'Option<(u128,u128,u32)>',
        statement: 'Option<PolkadotRuntimeCommonClaimsStatementKind>',
      },
      claim_attest: {
        dest: 'AccountId32',
        ethereumSignature: 'PolkadotRuntimeCommonClaimsEcdsaSignature',
        statement: 'Bytes',
      },
      attest: {
        statement: 'Bytes',
      },
      move_claim: {
        _alias: {
          new_: 'new',
        },
        old: 'EthereumAddress',
        new_: 'EthereumAddress',
        maybePreclaim: 'Option<AccountId32>'
      }
    }
  },
  /**
   * Lookup150: polkadot_runtime_common::claims::EcdsaSignature
   **/
  PolkadotRuntimeCommonClaimsEcdsaSignature: '[u8;65]',
  /**
   * Lookup155: polkadot_runtime_common::claims::StatementKind
   **/
  PolkadotRuntimeCommonClaimsStatementKind: {
    _enum: ['Regular', 'Saft']
  },
  /**
   * Lookup157: pallet_utility::pallet::Call<T>
   **/
  PalletUtilityCall: {
    _enum: {
      batch: {
        calls: 'Vec<Call>',
      },
      as_derivative: {
        index: 'u16',
        call: 'Call',
      },
      batch_all: {
        calls: 'Vec<Call>',
      },
      dispatch_as: {
        asOrigin: 'RococoRuntimeOriginCaller',
        call: 'Call',
      },
      force_batch: {
        calls: 'Vec<Call>',
      },
      with_weight: {
        call: 'Call',
        weight: 'SpWeightsWeightV2Weight'
      }
    }
  },
  /**
   * Lookup159: pallet_identity::pallet::Call<T>
   **/
  PalletIdentityCall: {
    _enum: {
      add_registrar: {
        account: 'MultiAddress',
      },
      set_identity: {
        info: 'PalletIdentityLegacyIdentityInfo',
      },
      set_subs: {
        subs: 'Vec<(AccountId32,Data)>',
      },
      clear_identity: 'Null',
      request_judgement: {
        regIndex: 'Compact<u32>',
        maxFee: 'Compact<u128>',
      },
      cancel_request: {
        regIndex: 'u32',
      },
      set_fee: {
        index: 'Compact<u32>',
        fee: 'Compact<u128>',
      },
      set_account_id: {
        _alias: {
          new_: 'new',
        },
        index: 'Compact<u32>',
        new_: 'MultiAddress',
      },
      set_fields: {
        index: 'Compact<u32>',
        fields: 'u64',
      },
      provide_judgement: {
        regIndex: 'Compact<u32>',
        target: 'MultiAddress',
        judgement: 'PalletIdentityJudgement',
        identity: 'H256',
      },
      kill_identity: {
        target: 'MultiAddress',
      },
      add_sub: {
        sub: 'MultiAddress',
        data: 'Data',
      },
      rename_sub: {
        sub: 'MultiAddress',
        data: 'Data',
      },
      remove_sub: {
        sub: 'MultiAddress',
      },
      quit_sub: 'Null'
    }
  },
  /**
   * Lookup160: pallet_identity::legacy::IdentityInfo<FieldLimit>
   **/
  PalletIdentityLegacyIdentityInfo: {
    additional: 'Vec<(Data,Data)>',
    display: 'Data',
    legal: 'Data',
    web: 'Data',
    riot: 'Data',
    email: 'Data',
    pgpFingerprint: 'Option<[u8;20]>',
    image: 'Data',
    twitter: 'Data'
  },
  /**
   * Lookup196: pallet_identity::types::Judgement<Balance>
   **/
  PalletIdentityJudgement: {
    _enum: {
      Unknown: 'Null',
      FeePaid: 'u128',
      Reasonable: 'Null',
      KnownGood: 'Null',
      OutOfDate: 'Null',
      LowQuality: 'Null',
      Erroneous: 'Null'
    }
  },
  /**
   * Lookup197: pallet_society::pallet::Call<T, I>
   **/
  PalletSocietyCall: {
    _enum: {
      bid: {
        value: 'u128',
      },
      unbid: 'Null',
      vouch: {
        who: 'MultiAddress',
        value: 'u128',
        tip: 'u128',
      },
      unvouch: 'Null',
      vote: {
        candidate: 'MultiAddress',
        approve: 'bool',
      },
      defender_vote: {
        approve: 'bool',
      },
      payout: 'Null',
      waive_repay: {
        amount: 'u128',
      },
      found_society: {
        founder: 'MultiAddress',
        maxMembers: 'u32',
        maxIntake: 'u32',
        maxStrikes: 'u32',
        candidateDeposit: 'u128',
        rules: 'Bytes',
      },
      dissolve: 'Null',
      judge_suspended_member: {
        who: 'MultiAddress',
        forgive: 'bool',
      },
      set_parameters: {
        maxMembers: 'u32',
        maxIntake: 'u32',
        maxStrikes: 'u32',
        candidateDeposit: 'u128',
      },
      punish_skeptic: 'Null',
      claim_membership: 'Null',
      bestow_membership: {
        candidate: 'AccountId32',
      },
      kick_candidate: {
        candidate: 'AccountId32',
      },
      resign_candidacy: 'Null',
      drop_candidate: {
        candidate: 'AccountId32',
      },
      cleanup_candidacy: {
        candidate: 'AccountId32',
        max: 'u32',
      },
      cleanup_challenge: {
        challengeRound: 'u32',
        max: 'u32'
      }
    }
  },
  /**
   * Lookup198: pallet_recovery::pallet::Call<T>
   **/
  PalletRecoveryCall: {
    _enum: {
      as_recovered: {
        account: 'MultiAddress',
        call: 'Call',
      },
      set_recovered: {
        lost: 'MultiAddress',
        rescuer: 'MultiAddress',
      },
      create_recovery: {
        friends: 'Vec<AccountId32>',
        threshold: 'u16',
        delayPeriod: 'u32',
      },
      initiate_recovery: {
        account: 'MultiAddress',
      },
      vouch_recovery: {
        lost: 'MultiAddress',
        rescuer: 'MultiAddress',
      },
      claim_recovery: {
        account: 'MultiAddress',
      },
      close_recovery: {
        rescuer: 'MultiAddress',
      },
      remove_recovery: 'Null',
      cancel_recovered: {
        account: 'MultiAddress'
      }
    }
  },
  /**
   * Lookup199: pallet_vesting::pallet::Call<T>
   **/
  PalletVestingCall: {
    _enum: {
      vest: 'Null',
      vest_other: {
        target: 'MultiAddress',
      },
      vested_transfer: {
        target: 'MultiAddress',
        schedule: 'PalletVestingVestingInfo',
      },
      force_vested_transfer: {
        source: 'MultiAddress',
        target: 'MultiAddress',
        schedule: 'PalletVestingVestingInfo',
      },
      merge_schedules: {
        schedule1Index: 'u32',
        schedule2Index: 'u32',
      },
      force_remove_vesting_schedule: {
        target: 'MultiAddress',
        scheduleIndex: 'u32'
      }
    }
  },
  /**
   * Lookup200: pallet_vesting::vesting_info::VestingInfo<Balance, BlockNumber>
   **/
  PalletVestingVestingInfo: {
    locked: 'u128',
    perBlock: 'u128',
    startingBlock: 'u32'
  },
  /**
   * Lookup201: pallet_scheduler::pallet::Call<T>
   **/
  PalletSchedulerCall: {
    _enum: {
      schedule: {
        when: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'Call',
      },
      cancel: {
        when: 'u32',
        index: 'u32',
      },
      schedule_named: {
        id: '[u8;32]',
        when: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'Call',
      },
      cancel_named: {
        id: '[u8;32]',
      },
      schedule_after: {
        after: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'Call',
      },
      schedule_named_after: {
        id: '[u8;32]',
        after: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'Call'
      }
    }
  },
  /**
   * Lookup204: pallet_proxy::pallet::Call<T>
   **/
  PalletProxyCall: {
    _enum: {
      proxy: {
        real: 'MultiAddress',
        forceProxyType: 'Option<RococoRuntimeProxyType>',
        call: 'Call',
      },
      add_proxy: {
        delegate: 'MultiAddress',
        proxyType: 'RococoRuntimeProxyType',
        delay: 'u32',
      },
      remove_proxy: {
        delegate: 'MultiAddress',
        proxyType: 'RococoRuntimeProxyType',
        delay: 'u32',
      },
      remove_proxies: 'Null',
      create_pure: {
        proxyType: 'RococoRuntimeProxyType',
        delay: 'u32',
        index: 'u16',
      },
      kill_pure: {
        spawner: 'MultiAddress',
        proxyType: 'RococoRuntimeProxyType',
        index: 'u16',
        height: 'Compact<u32>',
        extIndex: 'Compact<u32>',
      },
      announce: {
        real: 'MultiAddress',
        callHash: 'H256',
      },
      remove_announcement: {
        real: 'MultiAddress',
        callHash: 'H256',
      },
      reject_announcement: {
        delegate: 'MultiAddress',
        callHash: 'H256',
      },
      proxy_announced: {
        delegate: 'MultiAddress',
        real: 'MultiAddress',
        forceProxyType: 'Option<RococoRuntimeProxyType>',
        call: 'Call'
      }
    }
  },
  /**
   * Lookup206: rococo_runtime::ProxyType
   **/
  RococoRuntimeProxyType: {
    _enum: ['Any', 'NonTransfer', 'Governance', 'IdentityJudgement', 'CancelProxy', 'Auction', 'Society', 'OnDemandOrdering']
  },
  /**
   * Lookup207: pallet_multisig::pallet::Call<T>
   **/
  PalletMultisigCall: {
    _enum: {
      as_multi_threshold_1: {
        otherSignatories: 'Vec<AccountId32>',
        call: 'Call',
      },
      as_multi: {
        threshold: 'u16',
        otherSignatories: 'Vec<AccountId32>',
        maybeTimepoint: 'Option<PalletMultisigTimepoint>',
        call: 'Call',
        maxWeight: 'SpWeightsWeightV2Weight',
      },
      approve_as_multi: {
        threshold: 'u16',
        otherSignatories: 'Vec<AccountId32>',
        maybeTimepoint: 'Option<PalletMultisigTimepoint>',
        callHash: '[u8;32]',
        maxWeight: 'SpWeightsWeightV2Weight',
      },
      cancel_as_multi: {
        threshold: 'u16',
        otherSignatories: 'Vec<AccountId32>',
        timepoint: 'PalletMultisigTimepoint',
        callHash: '[u8;32]'
      }
    }
  },
  /**
   * Lookup209: pallet_multisig::Timepoint<BlockNumber>
   **/
  PalletMultisigTimepoint: {
    height: 'u32',
    index: 'u32'
  },
  /**
   * Lookup210: pallet_preimage::pallet::Call<T>
   **/
  PalletPreimageCall: {
    _enum: {
      note_preimage: {
        bytes: 'Bytes',
      },
      unnote_preimage: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      request_preimage: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      unrequest_preimage: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      ensure_updated: {
        hashes: 'Vec<H256>'
      }
    }
  },
  /**
   * Lookup212: pallet_asset_rate::pallet::Call<T>
   **/
  PalletAssetRateCall: {
    _enum: {
      create: {
        assetKind: 'PolkadotRuntimeCommonImplsVersionedLocatableAsset',
        rate: 'u128',
      },
      update: {
        assetKind: 'PolkadotRuntimeCommonImplsVersionedLocatableAsset',
        rate: 'u128',
      },
      remove: {
        assetKind: 'PolkadotRuntimeCommonImplsVersionedLocatableAsset'
      }
    }
  },
  /**
   * Lookup214: pallet_bounties::pallet::Call<T, I>
   **/
  PalletBountiesCall: {
    _enum: {
      propose_bounty: {
        value: 'Compact<u128>',
        description: 'Bytes',
      },
      approve_bounty: {
        bountyId: 'Compact<u32>',
      },
      propose_curator: {
        bountyId: 'Compact<u32>',
        curator: 'MultiAddress',
        fee: 'Compact<u128>',
      },
      unassign_curator: {
        bountyId: 'Compact<u32>',
      },
      accept_curator: {
        bountyId: 'Compact<u32>',
      },
      award_bounty: {
        bountyId: 'Compact<u32>',
        beneficiary: 'MultiAddress',
      },
      claim_bounty: {
        bountyId: 'Compact<u32>',
      },
      close_bounty: {
        bountyId: 'Compact<u32>',
      },
      extend_bounty_expiry: {
        bountyId: 'Compact<u32>',
        remark: 'Bytes'
      }
    }
  },
  /**
   * Lookup215: pallet_child_bounties::pallet::Call<T>
   **/
  PalletChildBountiesCall: {
    _enum: {
      add_child_bounty: {
        parentBountyId: 'Compact<u32>',
        value: 'Compact<u128>',
        description: 'Bytes',
      },
      propose_curator: {
        parentBountyId: 'Compact<u32>',
        childBountyId: 'Compact<u32>',
        curator: 'MultiAddress',
        fee: 'Compact<u128>',
      },
      accept_curator: {
        parentBountyId: 'Compact<u32>',
        childBountyId: 'Compact<u32>',
      },
      unassign_curator: {
        parentBountyId: 'Compact<u32>',
        childBountyId: 'Compact<u32>',
      },
      award_child_bounty: {
        parentBountyId: 'Compact<u32>',
        childBountyId: 'Compact<u32>',
        beneficiary: 'MultiAddress',
      },
      claim_child_bounty: {
        parentBountyId: 'Compact<u32>',
        childBountyId: 'Compact<u32>',
      },
      close_child_bounty: {
        parentBountyId: 'Compact<u32>',
        childBountyId: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup216: pallet_nis::pallet::Call<T>
   **/
  PalletNisCall: {
    _enum: {
      place_bid: {
        amount: 'Compact<u128>',
        duration: 'u32',
      },
      retract_bid: {
        amount: 'Compact<u128>',
        duration: 'u32',
      },
      fund_deficit: 'Null',
      thaw_private: {
        index: 'Compact<u32>',
        maybeProportion: 'Option<Perquintill>',
      },
      thaw_communal: {
        index: 'Compact<u32>',
      },
      communify: {
        index: 'Compact<u32>',
      },
      privatize: {
        index: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup220: polkadot_runtime_parachains::configuration::pallet::Call<T>
   **/
  PolkadotRuntimeParachainsConfigurationPalletCall: {
    _enum: {
      set_validation_upgrade_cooldown: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_validation_upgrade_delay: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_code_retention_period: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_max_code_size: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_max_pov_size: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_max_head_data_size: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_on_demand_cores: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_on_demand_retries: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_group_rotation_frequency: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_paras_availability_period: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      __Unused10: 'Null',
      set_scheduling_lookahead: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_max_validators_per_core: {
        _alias: {
          new_: 'new',
        },
        new_: 'Option<u32>',
      },
      set_max_validators: {
        _alias: {
          new_: 'new',
        },
        new_: 'Option<u32>',
      },
      set_dispute_period: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_dispute_post_conclusion_acceptance_period: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      __Unused16: 'Null',
      __Unused17: 'Null',
      set_no_show_slots: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_n_delay_tranches: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_zeroth_delay_tranche_width: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_needed_approvals: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_relay_vrf_modulo_samples: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_max_upward_queue_count: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_max_upward_queue_size: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_max_downward_message_size: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      __Unused26: 'Null',
      set_max_upward_message_size: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_max_upward_message_num_per_candidate: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_hrmp_open_request_ttl: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_hrmp_sender_deposit: {
        _alias: {
          new_: 'new',
        },
        new_: 'u128',
      },
      set_hrmp_recipient_deposit: {
        _alias: {
          new_: 'new',
        },
        new_: 'u128',
      },
      set_hrmp_channel_max_capacity: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_hrmp_channel_max_total_size: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_hrmp_max_parachain_inbound_channels: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      __Unused35: 'Null',
      set_hrmp_channel_max_message_size: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_hrmp_max_parachain_outbound_channels: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      __Unused38: 'Null',
      set_hrmp_max_message_num_per_candidate: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      __Unused40: 'Null',
      __Unused41: 'Null',
      set_pvf_voting_ttl: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_minimum_validation_upgrade_delay: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_bypass_consistency_check: {
        _alias: {
          new_: 'new',
        },
        new_: 'bool',
      },
      set_async_backing_params: {
        _alias: {
          new_: 'new',
        },
        new_: 'PolkadotPrimitivesV6AsyncBackingAsyncBackingParams',
      },
      set_executor_params: {
        _alias: {
          new_: 'new',
        },
        new_: 'PolkadotPrimitivesV6ExecutorParams',
      },
      set_on_demand_base_fee: {
        _alias: {
          new_: 'new',
        },
        new_: 'u128',
      },
      set_on_demand_fee_variability: {
        _alias: {
          new_: 'new',
        },
        new_: 'Perbill',
      },
      set_on_demand_queue_max_size: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_on_demand_target_queue_utilization: {
        _alias: {
          new_: 'new',
        },
        new_: 'Perbill',
      },
      set_on_demand_ttl: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_minimum_backing_votes: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_node_feature: {
        index: 'u8',
        value: 'bool'
      }
    }
  },
  /**
   * Lookup221: polkadot_primitives::v6::async_backing::AsyncBackingParams
   **/
  PolkadotPrimitivesV6AsyncBackingAsyncBackingParams: {
    maxCandidateDepth: 'u32',
    allowedAncestryLen: 'u32'
  },
  /**
   * Lookup222: polkadot_primitives::v6::executor_params::ExecutorParams
   **/
  PolkadotPrimitivesV6ExecutorParams: 'Vec<PolkadotPrimitivesV6ExecutorParamsExecutorParam>',
  /**
   * Lookup224: polkadot_primitives::v6::executor_params::ExecutorParam
   **/
  PolkadotPrimitivesV6ExecutorParamsExecutorParam: {
    _enum: {
      __Unused0: 'Null',
      MaxMemoryPages: 'u32',
      StackLogicalMax: 'u32',
      StackNativeMax: 'u32',
      PrecheckingMaxMemory: 'u64',
      PvfPrepTimeout: '(PolkadotPrimitivesV6PvfPrepKind,u64)',
      PvfExecTimeout: '(PolkadotPrimitivesV6PvfExecKind,u64)',
      WasmExtBulkMemory: 'Null'
    }
  },
  /**
   * Lookup225: polkadot_primitives::v6::PvfPrepKind
   **/
  PolkadotPrimitivesV6PvfPrepKind: {
    _enum: ['Precheck', 'Prepare']
  },
  /**
   * Lookup226: polkadot_primitives::v6::PvfExecKind
   **/
  PolkadotPrimitivesV6PvfExecKind: {
    _enum: ['Backing', 'Approval']
  },
  /**
   * Lookup228: polkadot_runtime_parachains::shared::pallet::Call<T>
   **/
  PolkadotRuntimeParachainsSharedPalletCall: 'Null',
  /**
   * Lookup229: polkadot_runtime_parachains::inclusion::pallet::Call<T>
   **/
  PolkadotRuntimeParachainsInclusionPalletCall: 'Null',
  /**
   * Lookup230: polkadot_runtime_parachains::paras_inherent::pallet::Call<T>
   **/
  PolkadotRuntimeParachainsParasInherentPalletCall: {
    _enum: {
      enter: {
        data: 'PolkadotPrimitivesV6InherentData'
      }
    }
  },
  /**
   * Lookup231: polkadot_primitives::v6::InherentData<sp_runtime::generic::header::Header<Number, Hash>>
   **/
  PolkadotPrimitivesV6InherentData: {
    bitfields: 'Vec<PolkadotPrimitivesV6SignedUncheckedSigned>',
    backedCandidates: 'Vec<PolkadotPrimitivesV6BackedCandidate>',
    disputes: 'Vec<PolkadotPrimitivesV6DisputeStatementSet>',
    parentHeader: 'SpRuntimeHeader'
  },
  /**
   * Lookup233: polkadot_primitives::v6::signed::UncheckedSigned<polkadot_primitives::v6::AvailabilityBitfield, polkadot_primitives::v6::AvailabilityBitfield>
   **/
  PolkadotPrimitivesV6SignedUncheckedSigned: {
    payload: 'BitVec',
    validatorIndex: 'u32',
    signature: 'PolkadotPrimitivesV6ValidatorAppSignature'
  },
  /**
   * Lookup236: bitvec::order::Lsb0
   **/
  BitvecOrderLsb0: 'Null',
  /**
   * Lookup238: polkadot_primitives::v6::validator_app::Signature
   **/
  PolkadotPrimitivesV6ValidatorAppSignature: 'SpCoreSr25519Signature',
  /**
   * Lookup240: polkadot_primitives::v6::BackedCandidate<primitive_types::H256>
   **/
  PolkadotPrimitivesV6BackedCandidate: {
    candidate: 'PolkadotPrimitivesV6CommittedCandidateReceipt',
    validityVotes: 'Vec<PolkadotPrimitivesV6ValidityAttestation>',
    validatorIndices: 'BitVec'
  },
  /**
   * Lookup241: polkadot_primitives::v6::CommittedCandidateReceipt<primitive_types::H256>
   **/
  PolkadotPrimitivesV6CommittedCandidateReceipt: {
    descriptor: 'PolkadotPrimitivesV6CandidateDescriptor',
    commitments: 'PolkadotPrimitivesV6CandidateCommitments'
  },
  /**
   * Lookup242: polkadot_primitives::v6::CandidateDescriptor<primitive_types::H256>
   **/
  PolkadotPrimitivesV6CandidateDescriptor: {
    paraId: 'u32',
    relayParent: 'H256',
    collator: 'PolkadotPrimitivesV6CollatorAppPublic',
    persistedValidationDataHash: 'H256',
    povHash: 'H256',
    erasureRoot: 'H256',
    signature: 'PolkadotPrimitivesV6CollatorAppSignature',
    paraHead: 'H256',
    validationCodeHash: 'H256'
  },
  /**
   * Lookup243: polkadot_primitives::v6::collator_app::Public
   **/
  PolkadotPrimitivesV6CollatorAppPublic: 'SpCoreSr25519Public',
  /**
   * Lookup244: polkadot_primitives::v6::collator_app::Signature
   **/
  PolkadotPrimitivesV6CollatorAppSignature: 'SpCoreSr25519Signature',
  /**
   * Lookup246: polkadot_primitives::v6::CandidateCommitments<N>
   **/
  PolkadotPrimitivesV6CandidateCommitments: {
    upwardMessages: 'Vec<Bytes>',
    horizontalMessages: 'Vec<PolkadotCorePrimitivesOutboundHrmpMessage>',
    newValidationCode: 'Option<Bytes>',
    headData: 'Bytes',
    processedDownwardMessages: 'u32',
    hrmpWatermark: 'u32'
  },
  /**
   * Lookup249: polkadot_core_primitives::OutboundHrmpMessage<polkadot_parachain_primitives::primitives::Id>
   **/
  PolkadotCorePrimitivesOutboundHrmpMessage: {
    recipient: 'u32',
    data: 'Bytes'
  },
  /**
   * Lookup255: polkadot_primitives::v6::ValidityAttestation
   **/
  PolkadotPrimitivesV6ValidityAttestation: {
    _enum: {
      __Unused0: 'Null',
      Implicit: 'PolkadotPrimitivesV6ValidatorAppSignature',
      Explicit: 'PolkadotPrimitivesV6ValidatorAppSignature'
    }
  },
  /**
   * Lookup257: polkadot_primitives::v6::DisputeStatementSet
   **/
  PolkadotPrimitivesV6DisputeStatementSet: {
    candidateHash: 'H256',
    session: 'u32',
    statements: 'Vec<(PolkadotPrimitivesV6DisputeStatement,u32,PolkadotPrimitivesV6ValidatorAppSignature)>'
  },
  /**
   * Lookup261: polkadot_primitives::v6::DisputeStatement
   **/
  PolkadotPrimitivesV6DisputeStatement: {
    _enum: {
      Valid: 'PolkadotPrimitivesV6ValidDisputeStatementKind',
      Invalid: 'PolkadotPrimitivesV6InvalidDisputeStatementKind'
    }
  },
  /**
   * Lookup262: polkadot_primitives::v6::ValidDisputeStatementKind
   **/
  PolkadotPrimitivesV6ValidDisputeStatementKind: {
    _enum: {
      Explicit: 'Null',
      BackingSeconded: 'H256',
      BackingValid: 'H256',
      ApprovalChecking: 'Null'
    }
  },
  /**
   * Lookup263: polkadot_primitives::v6::InvalidDisputeStatementKind
   **/
  PolkadotPrimitivesV6InvalidDisputeStatementKind: {
    _enum: ['Explicit']
  },
  /**
   * Lookup264: polkadot_runtime_parachains::paras::pallet::Call<T>
   **/
  PolkadotRuntimeParachainsParasPalletCall: {
    _enum: {
      force_set_current_code: {
        para: 'u32',
        newCode: 'Bytes',
      },
      force_set_current_head: {
        para: 'u32',
        newHead: 'Bytes',
      },
      force_schedule_code_upgrade: {
        para: 'u32',
        newCode: 'Bytes',
        relayParentNumber: 'u32',
      },
      force_note_new_head: {
        para: 'u32',
        newHead: 'Bytes',
      },
      force_queue_action: {
        para: 'u32',
      },
      add_trusted_validation_code: {
        validationCode: 'Bytes',
      },
      poke_unused_validation_code: {
        validationCodeHash: 'H256',
      },
      include_pvf_check_statement: {
        stmt: 'PolkadotPrimitivesV6PvfCheckStatement',
        signature: 'PolkadotPrimitivesV6ValidatorAppSignature',
      },
      force_set_most_recent_context: {
        para: 'u32',
        context: 'u32'
      }
    }
  },
  /**
   * Lookup265: polkadot_primitives::v6::PvfCheckStatement
   **/
  PolkadotPrimitivesV6PvfCheckStatement: {
    accept: 'bool',
    subject: 'H256',
    sessionIndex: 'u32',
    validatorIndex: 'u32'
  },
  /**
   * Lookup266: polkadot_runtime_parachains::initializer::pallet::Call<T>
   **/
  PolkadotRuntimeParachainsInitializerPalletCall: {
    _enum: {
      force_approve: {
        upTo: 'u32'
      }
    }
  },
  /**
   * Lookup267: polkadot_runtime_parachains::hrmp::pallet::Call<T>
   **/
  PolkadotRuntimeParachainsHrmpPalletCall: {
    _enum: {
      hrmp_init_open_channel: {
        recipient: 'u32',
        proposedMaxCapacity: 'u32',
        proposedMaxMessageSize: 'u32',
      },
      hrmp_accept_open_channel: {
        sender: 'u32',
      },
      hrmp_close_channel: {
        channelId: 'PolkadotParachainPrimitivesPrimitivesHrmpChannelId',
      },
      force_clean_hrmp: {
        para: 'u32',
        numInbound: 'u32',
        numOutbound: 'u32',
      },
      force_process_hrmp_open: {
        channels: 'u32',
      },
      force_process_hrmp_close: {
        channels: 'u32',
      },
      hrmp_cancel_open_request: {
        channelId: 'PolkadotParachainPrimitivesPrimitivesHrmpChannelId',
        openRequests: 'u32',
      },
      force_open_hrmp_channel: {
        sender: 'u32',
        recipient: 'u32',
        maxCapacity: 'u32',
        maxMessageSize: 'u32',
      },
      establish_system_channel: {
        sender: 'u32',
        recipient: 'u32',
      },
      poke_channel_deposits: {
        sender: 'u32',
        recipient: 'u32'
      }
    }
  },
  /**
   * Lookup268: polkadot_parachain_primitives::primitives::HrmpChannelId
   **/
  PolkadotParachainPrimitivesPrimitivesHrmpChannelId: {
    sender: 'u32',
    recipient: 'u32'
  },
  /**
   * Lookup269: polkadot_runtime_parachains::disputes::pallet::Call<T>
   **/
  PolkadotRuntimeParachainsDisputesPalletCall: {
    _enum: ['force_unfreeze']
  },
  /**
   * Lookup270: polkadot_runtime_parachains::disputes::slashing::pallet::Call<T>
   **/
  PolkadotRuntimeParachainsDisputesSlashingPalletCall: {
    _enum: {
      report_dispute_lost_unsigned: {
        disputeProof: 'PolkadotPrimitivesV6SlashingDisputeProof',
        keyOwnerProof: 'SpSessionMembershipProof'
      }
    }
  },
  /**
   * Lookup271: polkadot_primitives::v6::slashing::DisputeProof
   **/
  PolkadotPrimitivesV6SlashingDisputeProof: {
    timeSlot: 'PolkadotPrimitivesV6SlashingDisputesTimeSlot',
    kind: 'PolkadotPrimitivesV6SlashingSlashingOffenceKind',
    validatorIndex: 'u32',
    validatorId: 'PolkadotPrimitivesV6ValidatorAppPublic'
  },
  /**
   * Lookup272: polkadot_primitives::v6::slashing::DisputesTimeSlot
   **/
  PolkadotPrimitivesV6SlashingDisputesTimeSlot: {
    sessionIndex: 'u32',
    candidateHash: 'H256'
  },
  /**
   * Lookup273: polkadot_primitives::v6::slashing::SlashingOffenceKind
   **/
  PolkadotPrimitivesV6SlashingSlashingOffenceKind: {
    _enum: ['ForInvalid', 'AgainstValid']
  },
  /**
   * Lookup274: pallet_message_queue::pallet::Call<T>
   **/
  PalletMessageQueueCall: {
    _enum: {
      reap_page: {
        messageOrigin: 'PolkadotRuntimeParachainsInclusionAggregateMessageOrigin',
        pageIndex: 'u32',
      },
      execute_overweight: {
        messageOrigin: 'PolkadotRuntimeParachainsInclusionAggregateMessageOrigin',
        page: 'u32',
        index: 'u32',
        weightLimit: 'SpWeightsWeightV2Weight'
      }
    }
  },
  /**
   * Lookup275: polkadot_runtime_parachains::inclusion::AggregateMessageOrigin
   **/
  PolkadotRuntimeParachainsInclusionAggregateMessageOrigin: {
    _enum: {
      Ump: 'PolkadotRuntimeParachainsInclusionUmpQueueId'
    }
  },
  /**
   * Lookup276: polkadot_runtime_parachains::inclusion::UmpQueueId
   **/
  PolkadotRuntimeParachainsInclusionUmpQueueId: {
    _enum: {
      Para: 'u32'
    }
  },
  /**
   * Lookup277: polkadot_runtime_parachains::assigner_on_demand::pallet::Call<T>
   **/
  PolkadotRuntimeParachainsAssignerOnDemandPalletCall: {
    _enum: {
      place_order_allow_death: {
        maxAmount: 'u128',
        paraId: 'u32',
      },
      place_order_keep_alive: {
        maxAmount: 'u128',
        paraId: 'u32'
      }
    }
  },
  /**
   * Lookup278: polkadot_runtime_common::paras_registrar::pallet::Call<T>
   **/
  PolkadotRuntimeCommonParasRegistrarPalletCall: {
    _enum: {
      register: {
        id: 'u32',
        genesisHead: 'Bytes',
        validationCode: 'Bytes',
      },
      force_register: {
        who: 'AccountId32',
        deposit: 'u128',
        id: 'u32',
        genesisHead: 'Bytes',
        validationCode: 'Bytes',
      },
      deregister: {
        id: 'u32',
      },
      swap: {
        id: 'u32',
        other: 'u32',
      },
      remove_lock: {
        para: 'u32',
      },
      reserve: 'Null',
      add_lock: {
        para: 'u32',
      },
      schedule_code_upgrade: {
        para: 'u32',
        newCode: 'Bytes',
      },
      set_current_head: {
        para: 'u32',
        newHead: 'Bytes'
      }
    }
  },
  /**
   * Lookup279: polkadot_runtime_common::slots::pallet::Call<T>
   **/
  PolkadotRuntimeCommonSlotsPalletCall: {
    _enum: {
      force_lease: {
        para: 'u32',
        leaser: 'AccountId32',
        amount: 'u128',
        periodBegin: 'u32',
        periodCount: 'u32',
      },
      clear_all_leases: {
        para: 'u32',
      },
      trigger_onboard: {
        para: 'u32'
      }
    }
  },
  /**
   * Lookup280: polkadot_runtime_common::auctions::pallet::Call<T>
   **/
  PolkadotRuntimeCommonAuctionsPalletCall: {
    _enum: {
      new_auction: {
        duration: 'Compact<u32>',
        leasePeriodIndex: 'Compact<u32>',
      },
      bid: {
        para: 'Compact<u32>',
        auctionIndex: 'Compact<u32>',
        firstSlot: 'Compact<u32>',
        lastSlot: 'Compact<u32>',
        amount: 'Compact<u128>',
      },
      cancel_auction: 'Null'
    }
  },
  /**
   * Lookup282: polkadot_runtime_common::crowdloan::pallet::Call<T>
   **/
  PolkadotRuntimeCommonCrowdloanPalletCall: {
    _enum: {
      create: {
        index: 'Compact<u32>',
        cap: 'Compact<u128>',
        firstPeriod: 'Compact<u32>',
        lastPeriod: 'Compact<u32>',
        end: 'Compact<u32>',
        verifier: 'Option<SpRuntimeMultiSigner>',
      },
      contribute: {
        index: 'Compact<u32>',
        value: 'Compact<u128>',
        signature: 'Option<SpRuntimeMultiSignature>',
      },
      withdraw: {
        who: 'AccountId32',
        index: 'Compact<u32>',
      },
      refund: {
        index: 'Compact<u32>',
      },
      dissolve: {
        index: 'Compact<u32>',
      },
      edit: {
        index: 'Compact<u32>',
        cap: 'Compact<u128>',
        firstPeriod: 'Compact<u32>',
        lastPeriod: 'Compact<u32>',
        end: 'Compact<u32>',
        verifier: 'Option<SpRuntimeMultiSigner>',
      },
      add_memo: {
        index: 'u32',
        memo: 'Bytes',
      },
      poke: {
        index: 'u32',
      },
      contribute_all: {
        index: 'Compact<u32>',
        signature: 'Option<SpRuntimeMultiSignature>'
      }
    }
  },
  /**
   * Lookup284: sp_runtime::MultiSigner
   **/
  SpRuntimeMultiSigner: {
    _enum: {
      Ed25519: 'SpCoreEd25519Public',
      Sr25519: 'SpCoreSr25519Public',
      Ecdsa: 'SpCoreEcdsaPublic'
    }
  },
  /**
   * Lookup286: sp_runtime::MultiSignature
   **/
  SpRuntimeMultiSignature: {
    _enum: {
      Ed25519: 'SpCoreEd25519Signature',
      Sr25519: 'SpCoreSr25519Signature',
      Ecdsa: 'SpCoreEcdsaSignature'
    }
  },
  /**
   * Lookup287: pallet_xcm::pallet::Call<T>
   **/
  PalletXcmCall: {
    _enum: {
      send: {
        dest: 'XcmVersionedMultiLocation',
        message: 'XcmVersionedXcm',
      },
      teleport_assets: {
        dest: 'XcmVersionedMultiLocation',
        beneficiary: 'XcmVersionedMultiLocation',
        assets: 'XcmVersionedMultiAssets',
        feeAssetItem: 'u32',
      },
      reserve_transfer_assets: {
        dest: 'XcmVersionedMultiLocation',
        beneficiary: 'XcmVersionedMultiLocation',
        assets: 'XcmVersionedMultiAssets',
        feeAssetItem: 'u32',
      },
      execute: {
        message: 'XcmVersionedXcm',
        maxWeight: 'SpWeightsWeightV2Weight',
      },
      force_xcm_version: {
        location: 'StagingXcmV3MultiLocation',
        version: 'u32',
      },
      force_default_xcm_version: {
        maybeXcmVersion: 'Option<u32>',
      },
      force_subscribe_version_notify: {
        location: 'XcmVersionedMultiLocation',
      },
      force_unsubscribe_version_notify: {
        location: 'XcmVersionedMultiLocation',
      },
      limited_reserve_transfer_assets: {
        dest: 'XcmVersionedMultiLocation',
        beneficiary: 'XcmVersionedMultiLocation',
        assets: 'XcmVersionedMultiAssets',
        feeAssetItem: 'u32',
        weightLimit: 'XcmV3WeightLimit',
      },
      limited_teleport_assets: {
        dest: 'XcmVersionedMultiLocation',
        beneficiary: 'XcmVersionedMultiLocation',
        assets: 'XcmVersionedMultiAssets',
        feeAssetItem: 'u32',
        weightLimit: 'XcmV3WeightLimit',
      },
      force_suspension: {
        suspended: 'bool'
      }
    }
  },
  /**
   * Lookup288: xcm::VersionedXcm<RuntimeCall>
   **/
  XcmVersionedXcm: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      V2: 'XcmV2Xcm',
      V3: 'XcmV3Xcm'
    }
  },
  /**
   * Lookup289: xcm::v2::Xcm<RuntimeCall>
   **/
  XcmV2Xcm: 'Vec<XcmV2Instruction>',
  /**
   * Lookup291: xcm::v2::Instruction<RuntimeCall>
   **/
  XcmV2Instruction: {
    _enum: {
      WithdrawAsset: 'XcmV2MultiassetMultiAssets',
      ReserveAssetDeposited: 'XcmV2MultiassetMultiAssets',
      ReceiveTeleportedAsset: 'XcmV2MultiassetMultiAssets',
      QueryResponse: {
        queryId: 'Compact<u64>',
        response: 'XcmV2Response',
        maxWeight: 'Compact<u64>',
      },
      TransferAsset: {
        assets: 'XcmV2MultiassetMultiAssets',
        beneficiary: 'XcmV2MultiLocation',
      },
      TransferReserveAsset: {
        assets: 'XcmV2MultiassetMultiAssets',
        dest: 'XcmV2MultiLocation',
        xcm: 'XcmV2Xcm',
      },
      Transact: {
        originType: 'XcmV2OriginKind',
        requireWeightAtMost: 'Compact<u64>',
        call: 'XcmDoubleEncoded',
      },
      HrmpNewChannelOpenRequest: {
        sender: 'Compact<u32>',
        maxMessageSize: 'Compact<u32>',
        maxCapacity: 'Compact<u32>',
      },
      HrmpChannelAccepted: {
        recipient: 'Compact<u32>',
      },
      HrmpChannelClosing: {
        initiator: 'Compact<u32>',
        sender: 'Compact<u32>',
        recipient: 'Compact<u32>',
      },
      ClearOrigin: 'Null',
      DescendOrigin: 'XcmV2MultilocationJunctions',
      ReportError: {
        queryId: 'Compact<u64>',
        dest: 'XcmV2MultiLocation',
        maxResponseWeight: 'Compact<u64>',
      },
      DepositAsset: {
        assets: 'XcmV2MultiassetMultiAssetFilter',
        maxAssets: 'Compact<u32>',
        beneficiary: 'XcmV2MultiLocation',
      },
      DepositReserveAsset: {
        assets: 'XcmV2MultiassetMultiAssetFilter',
        maxAssets: 'Compact<u32>',
        dest: 'XcmV2MultiLocation',
        xcm: 'XcmV2Xcm',
      },
      ExchangeAsset: {
        give: 'XcmV2MultiassetMultiAssetFilter',
        receive: 'XcmV2MultiassetMultiAssets',
      },
      InitiateReserveWithdraw: {
        assets: 'XcmV2MultiassetMultiAssetFilter',
        reserve: 'XcmV2MultiLocation',
        xcm: 'XcmV2Xcm',
      },
      InitiateTeleport: {
        assets: 'XcmV2MultiassetMultiAssetFilter',
        dest: 'XcmV2MultiLocation',
        xcm: 'XcmV2Xcm',
      },
      QueryHolding: {
        queryId: 'Compact<u64>',
        dest: 'XcmV2MultiLocation',
        assets: 'XcmV2MultiassetMultiAssetFilter',
        maxResponseWeight: 'Compact<u64>',
      },
      BuyExecution: {
        fees: 'XcmV2MultiAsset',
        weightLimit: 'XcmV2WeightLimit',
      },
      RefundSurplus: 'Null',
      SetErrorHandler: 'XcmV2Xcm',
      SetAppendix: 'XcmV2Xcm',
      ClearError: 'Null',
      ClaimAsset: {
        assets: 'XcmV2MultiassetMultiAssets',
        ticket: 'XcmV2MultiLocation',
      },
      Trap: 'Compact<u64>',
      SubscribeVersion: {
        queryId: 'Compact<u64>',
        maxResponseWeight: 'Compact<u64>',
      },
      UnsubscribeVersion: 'Null'
    }
  },
  /**
   * Lookup292: xcm::v2::multiasset::MultiAssets
   **/
  XcmV2MultiassetMultiAssets: 'Vec<XcmV2MultiAsset>',
  /**
   * Lookup294: xcm::v2::multiasset::MultiAsset
   **/
  XcmV2MultiAsset: {
    id: 'XcmV2MultiassetAssetId',
    fun: 'XcmV2MultiassetFungibility'
  },
  /**
   * Lookup295: xcm::v2::multiasset::AssetId
   **/
  XcmV2MultiassetAssetId: {
    _enum: {
      Concrete: 'XcmV2MultiLocation',
      Abstract: 'Bytes'
    }
  },
  /**
   * Lookup296: xcm::v2::multiasset::Fungibility
   **/
  XcmV2MultiassetFungibility: {
    _enum: {
      Fungible: 'Compact<u128>',
      NonFungible: 'XcmV2MultiassetAssetInstance'
    }
  },
  /**
   * Lookup297: xcm::v2::multiasset::AssetInstance
   **/
  XcmV2MultiassetAssetInstance: {
    _enum: {
      Undefined: 'Null',
      Index: 'Compact<u128>',
      Array4: '[u8;4]',
      Array8: '[u8;8]',
      Array16: '[u8;16]',
      Array32: '[u8;32]',
      Blob: 'Bytes'
    }
  },
  /**
   * Lookup298: xcm::v2::Response
   **/
  XcmV2Response: {
    _enum: {
      Null: 'Null',
      Assets: 'XcmV2MultiassetMultiAssets',
      ExecutionResult: 'Option<(u32,XcmV2TraitsError)>',
      Version: 'u32'
    }
  },
  /**
   * Lookup301: xcm::v2::traits::Error
   **/
  XcmV2TraitsError: {
    _enum: {
      Overflow: 'Null',
      Unimplemented: 'Null',
      UntrustedReserveLocation: 'Null',
      UntrustedTeleportLocation: 'Null',
      MultiLocationFull: 'Null',
      MultiLocationNotInvertible: 'Null',
      BadOrigin: 'Null',
      InvalidLocation: 'Null',
      AssetNotFound: 'Null',
      FailedToTransactAsset: 'Null',
      NotWithdrawable: 'Null',
      LocationCannotHold: 'Null',
      ExceedsMaxMessageSize: 'Null',
      DestinationUnsupported: 'Null',
      Transport: 'Null',
      Unroutable: 'Null',
      UnknownClaim: 'Null',
      FailedToDecode: 'Null',
      MaxWeightInvalid: 'Null',
      NotHoldingFees: 'Null',
      TooExpensive: 'Null',
      Trap: 'u64',
      UnhandledXcmVersion: 'Null',
      WeightLimitReached: 'u64',
      Barrier: 'Null',
      WeightNotComputable: 'Null'
    }
  },
  /**
   * Lookup302: xcm::v2::OriginKind
   **/
  XcmV2OriginKind: {
    _enum: ['Native', 'SovereignAccount', 'Superuser', 'Xcm']
  },
  /**
   * Lookup303: xcm::double_encoded::DoubleEncoded<T>
   **/
  XcmDoubleEncoded: {
    encoded: 'Bytes'
  },
  /**
   * Lookup304: xcm::v2::multiasset::MultiAssetFilter
   **/
  XcmV2MultiassetMultiAssetFilter: {
    _enum: {
      Definite: 'XcmV2MultiassetMultiAssets',
      Wild: 'XcmV2MultiassetWildMultiAsset'
    }
  },
  /**
   * Lookup305: xcm::v2::multiasset::WildMultiAsset
   **/
  XcmV2MultiassetWildMultiAsset: {
    _enum: {
      All: 'Null',
      AllOf: {
        id: 'XcmV2MultiassetAssetId',
        fun: 'XcmV2MultiassetWildFungibility'
      }
    }
  },
  /**
   * Lookup306: xcm::v2::multiasset::WildFungibility
   **/
  XcmV2MultiassetWildFungibility: {
    _enum: ['Fungible', 'NonFungible']
  },
  /**
   * Lookup307: xcm::v2::WeightLimit
   **/
  XcmV2WeightLimit: {
    _enum: {
      Unlimited: 'Null',
      Limited: 'Compact<u64>'
    }
  },
  /**
   * Lookup308: xcm::v3::Xcm<Call>
   **/
  XcmV3Xcm: 'Vec<XcmV3Instruction>',
  /**
   * Lookup310: xcm::v3::Instruction<Call>
   **/
  XcmV3Instruction: {
    _enum: {
      WithdrawAsset: 'XcmV3MultiassetMultiAssets',
      ReserveAssetDeposited: 'XcmV3MultiassetMultiAssets',
      ReceiveTeleportedAsset: 'XcmV3MultiassetMultiAssets',
      QueryResponse: {
        queryId: 'Compact<u64>',
        response: 'XcmV3Response',
        maxWeight: 'SpWeightsWeightV2Weight',
        querier: 'Option<StagingXcmV3MultiLocation>',
      },
      TransferAsset: {
        assets: 'XcmV3MultiassetMultiAssets',
        beneficiary: 'StagingXcmV3MultiLocation',
      },
      TransferReserveAsset: {
        assets: 'XcmV3MultiassetMultiAssets',
        dest: 'StagingXcmV3MultiLocation',
        xcm: 'XcmV3Xcm',
      },
      Transact: {
        originKind: 'XcmV2OriginKind',
        requireWeightAtMost: 'SpWeightsWeightV2Weight',
        call: 'XcmDoubleEncoded',
      },
      HrmpNewChannelOpenRequest: {
        sender: 'Compact<u32>',
        maxMessageSize: 'Compact<u32>',
        maxCapacity: 'Compact<u32>',
      },
      HrmpChannelAccepted: {
        recipient: 'Compact<u32>',
      },
      HrmpChannelClosing: {
        initiator: 'Compact<u32>',
        sender: 'Compact<u32>',
        recipient: 'Compact<u32>',
      },
      ClearOrigin: 'Null',
      DescendOrigin: 'XcmV3Junctions',
      ReportError: 'XcmV3QueryResponseInfo',
      DepositAsset: {
        assets: 'XcmV3MultiassetMultiAssetFilter',
        beneficiary: 'StagingXcmV3MultiLocation',
      },
      DepositReserveAsset: {
        assets: 'XcmV3MultiassetMultiAssetFilter',
        dest: 'StagingXcmV3MultiLocation',
        xcm: 'XcmV3Xcm',
      },
      ExchangeAsset: {
        give: 'XcmV3MultiassetMultiAssetFilter',
        want: 'XcmV3MultiassetMultiAssets',
        maximal: 'bool',
      },
      InitiateReserveWithdraw: {
        assets: 'XcmV3MultiassetMultiAssetFilter',
        reserve: 'StagingXcmV3MultiLocation',
        xcm: 'XcmV3Xcm',
      },
      InitiateTeleport: {
        assets: 'XcmV3MultiassetMultiAssetFilter',
        dest: 'StagingXcmV3MultiLocation',
        xcm: 'XcmV3Xcm',
      },
      ReportHolding: {
        responseInfo: 'XcmV3QueryResponseInfo',
        assets: 'XcmV3MultiassetMultiAssetFilter',
      },
      BuyExecution: {
        fees: 'XcmV3MultiAsset',
        weightLimit: 'XcmV3WeightLimit',
      },
      RefundSurplus: 'Null',
      SetErrorHandler: 'XcmV3Xcm',
      SetAppendix: 'XcmV3Xcm',
      ClearError: 'Null',
      ClaimAsset: {
        assets: 'XcmV3MultiassetMultiAssets',
        ticket: 'StagingXcmV3MultiLocation',
      },
      Trap: 'Compact<u64>',
      SubscribeVersion: {
        queryId: 'Compact<u64>',
        maxResponseWeight: 'SpWeightsWeightV2Weight',
      },
      UnsubscribeVersion: 'Null',
      BurnAsset: 'XcmV3MultiassetMultiAssets',
      ExpectAsset: 'XcmV3MultiassetMultiAssets',
      ExpectOrigin: 'Option<StagingXcmV3MultiLocation>',
      ExpectError: 'Option<(u32,XcmV3TraitsError)>',
      ExpectTransactStatus: 'XcmV3MaybeErrorCode',
      QueryPallet: {
        moduleName: 'Bytes',
        responseInfo: 'XcmV3QueryResponseInfo',
      },
      ExpectPallet: {
        index: 'Compact<u32>',
        name: 'Bytes',
        moduleName: 'Bytes',
        crateMajor: 'Compact<u32>',
        minCrateMinor: 'Compact<u32>',
      },
      ReportTransactStatus: 'XcmV3QueryResponseInfo',
      ClearTransactStatus: 'Null',
      UniversalOrigin: 'XcmV3Junction',
      ExportMessage: {
        network: 'XcmV3JunctionNetworkId',
        destination: 'XcmV3Junctions',
        xcm: 'XcmV3Xcm',
      },
      LockAsset: {
        asset: 'XcmV3MultiAsset',
        unlocker: 'StagingXcmV3MultiLocation',
      },
      UnlockAsset: {
        asset: 'XcmV3MultiAsset',
        target: 'StagingXcmV3MultiLocation',
      },
      NoteUnlockable: {
        asset: 'XcmV3MultiAsset',
        owner: 'StagingXcmV3MultiLocation',
      },
      RequestUnlock: {
        asset: 'XcmV3MultiAsset',
        locker: 'StagingXcmV3MultiLocation',
      },
      SetFeesMode: {
        jitWithdraw: 'bool',
      },
      SetTopic: '[u8;32]',
      ClearTopic: 'Null',
      AliasOrigin: 'StagingXcmV3MultiLocation',
      UnpaidExecution: {
        weightLimit: 'XcmV3WeightLimit',
        checkOrigin: 'Option<StagingXcmV3MultiLocation>'
      }
    }
  },
  /**
   * Lookup311: xcm::v3::multiasset::MultiAssets
   **/
  XcmV3MultiassetMultiAssets: 'Vec<XcmV3MultiAsset>',
  /**
   * Lookup313: xcm::v3::multiasset::MultiAsset
   **/
  XcmV3MultiAsset: {
    id: 'XcmV3MultiassetAssetId',
    fun: 'XcmV3MultiassetFungibility'
  },
  /**
   * Lookup314: xcm::v3::multiasset::Fungibility
   **/
  XcmV3MultiassetFungibility: {
    _enum: {
      Fungible: 'Compact<u128>',
      NonFungible: 'XcmV3MultiassetAssetInstance'
    }
  },
  /**
   * Lookup315: xcm::v3::multiasset::AssetInstance
   **/
  XcmV3MultiassetAssetInstance: {
    _enum: {
      Undefined: 'Null',
      Index: 'Compact<u128>',
      Array4: '[u8;4]',
      Array8: '[u8;8]',
      Array16: '[u8;16]',
      Array32: '[u8;32]'
    }
  },
  /**
   * Lookup316: xcm::v3::Response
   **/
  XcmV3Response: {
    _enum: {
      Null: 'Null',
      Assets: 'XcmV3MultiassetMultiAssets',
      ExecutionResult: 'Option<(u32,XcmV3TraitsError)>',
      Version: 'u32',
      PalletsInfo: 'Vec<XcmV3PalletInfo>',
      DispatchResult: 'XcmV3MaybeErrorCode'
    }
  },
  /**
   * Lookup319: xcm::v3::traits::Error
   **/
  XcmV3TraitsError: {
    _enum: {
      Overflow: 'Null',
      Unimplemented: 'Null',
      UntrustedReserveLocation: 'Null',
      UntrustedTeleportLocation: 'Null',
      LocationFull: 'Null',
      LocationNotInvertible: 'Null',
      BadOrigin: 'Null',
      InvalidLocation: 'Null',
      AssetNotFound: 'Null',
      FailedToTransactAsset: 'Null',
      NotWithdrawable: 'Null',
      LocationCannotHold: 'Null',
      ExceedsMaxMessageSize: 'Null',
      DestinationUnsupported: 'Null',
      Transport: 'Null',
      Unroutable: 'Null',
      UnknownClaim: 'Null',
      FailedToDecode: 'Null',
      MaxWeightInvalid: 'Null',
      NotHoldingFees: 'Null',
      TooExpensive: 'Null',
      Trap: 'u64',
      ExpectationFalse: 'Null',
      PalletNotFound: 'Null',
      NameMismatch: 'Null',
      VersionIncompatible: 'Null',
      HoldingWouldOverflow: 'Null',
      ExportError: 'Null',
      ReanchorFailed: 'Null',
      NoDeal: 'Null',
      FeesNotMet: 'Null',
      LockError: 'Null',
      NoPermission: 'Null',
      Unanchored: 'Null',
      NotDepositable: 'Null',
      UnhandledXcmVersion: 'Null',
      WeightLimitReached: 'SpWeightsWeightV2Weight',
      Barrier: 'Null',
      WeightNotComputable: 'Null',
      ExceedsStackLimit: 'Null'
    }
  },
  /**
   * Lookup321: xcm::v3::PalletInfo
   **/
  XcmV3PalletInfo: {
    index: 'Compact<u32>',
    name: 'Bytes',
    moduleName: 'Bytes',
    major: 'Compact<u32>',
    minor: 'Compact<u32>',
    patch: 'Compact<u32>'
  },
  /**
   * Lookup324: xcm::v3::MaybeErrorCode
   **/
  XcmV3MaybeErrorCode: {
    _enum: {
      Success: 'Null',
      Error: 'Bytes',
      TruncatedError: 'Bytes'
    }
  },
  /**
   * Lookup327: xcm::v3::QueryResponseInfo
   **/
  XcmV3QueryResponseInfo: {
    destination: 'StagingXcmV3MultiLocation',
    queryId: 'Compact<u64>',
    maxWeight: 'SpWeightsWeightV2Weight'
  },
  /**
   * Lookup328: xcm::v3::multiasset::MultiAssetFilter
   **/
  XcmV3MultiassetMultiAssetFilter: {
    _enum: {
      Definite: 'XcmV3MultiassetMultiAssets',
      Wild: 'XcmV3MultiassetWildMultiAsset'
    }
  },
  /**
   * Lookup329: xcm::v3::multiasset::WildMultiAsset
   **/
  XcmV3MultiassetWildMultiAsset: {
    _enum: {
      All: 'Null',
      AllOf: {
        id: 'XcmV3MultiassetAssetId',
        fun: 'XcmV3MultiassetWildFungibility',
      },
      AllCounted: 'Compact<u32>',
      AllOfCounted: {
        id: 'XcmV3MultiassetAssetId',
        fun: 'XcmV3MultiassetWildFungibility',
        count: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup330: xcm::v3::multiasset::WildFungibility
   **/
  XcmV3MultiassetWildFungibility: {
    _enum: ['Fungible', 'NonFungible']
  },
  /**
   * Lookup331: xcm::v3::WeightLimit
   **/
  XcmV3WeightLimit: {
    _enum: {
      Unlimited: 'Null',
      Limited: 'SpWeightsWeightV2Weight'
    }
  },
  /**
   * Lookup332: xcm::VersionedMultiAssets
   **/
  XcmVersionedMultiAssets: {
    _enum: {
      __Unused0: 'Null',
      V2: 'XcmV2MultiassetMultiAssets',
      __Unused2: 'Null',
      V3: 'XcmV3MultiassetMultiAssets'
    }
  },
  /**
   * Lookup341: polkadot_runtime_common::identity_migrator::pallet::Call<T>
   **/
  PolkadotRuntimeCommonIdentityMigratorPalletCall: {
    _enum: {
      reap_identity: {
        who: 'AccountId32',
      },
      poke_deposit: {
        who: 'AccountId32'
      }
    }
  },
  /**
   * Lookup342: polkadot_runtime_common::paras_sudo_wrapper::pallet::Call<T>
   **/
  PolkadotRuntimeCommonParasSudoWrapperPalletCall: {
    _enum: {
      sudo_schedule_para_initialize: {
        id: 'u32',
        genesis: 'PolkadotRuntimeParachainsParasParaGenesisArgs',
      },
      sudo_schedule_para_cleanup: {
        id: 'u32',
      },
      sudo_schedule_parathread_upgrade: {
        id: 'u32',
      },
      sudo_schedule_parachain_downgrade: {
        id: 'u32',
      },
      sudo_queue_downward_xcm: {
        id: 'u32',
        xcm: 'XcmVersionedXcm',
      },
      sudo_establish_hrmp_channel: {
        sender: 'u32',
        recipient: 'u32',
        maxCapacity: 'u32',
        maxMessageSize: 'u32'
      }
    }
  },
  /**
   * Lookup343: polkadot_runtime_parachains::paras::ParaGenesisArgs
   **/
  PolkadotRuntimeParachainsParasParaGenesisArgs: {
    genesisHead: 'Bytes',
    validationCode: 'Bytes',
    paraKind: 'bool'
  },
  /**
   * Lookup344: polkadot_runtime_common::assigned_slots::pallet::Call<T>
   **/
  PolkadotRuntimeCommonAssignedSlotsPalletCall: {
    _enum: {
      assign_perm_parachain_slot: {
        id: 'u32',
      },
      assign_temp_parachain_slot: {
        id: 'u32',
        leasePeriodStart: 'PolkadotRuntimeCommonAssignedSlotsSlotLeasePeriodStart',
      },
      unassign_parachain_slot: {
        id: 'u32',
      },
      set_max_permanent_slots: {
        slots: 'u32',
      },
      set_max_temporary_slots: {
        slots: 'u32'
      }
    }
  },
  /**
   * Lookup345: polkadot_runtime_common::assigned_slots::SlotLeasePeriodStart
   **/
  PolkadotRuntimeCommonAssignedSlotsSlotLeasePeriodStart: {
    _enum: ['Current', 'Next']
  },
  /**
   * Lookup346: rococo_runtime::validator_manager::pallet::Call<T>
   **/
  RococoRuntimeValidatorManagerPalletCall: {
    _enum: {
      register_validators: {
        validators: 'Vec<AccountId32>',
      },
      deregister_validators: {
        validators: 'Vec<AccountId32>'
      }
    }
  },
  /**
   * Lookup347: pallet_state_trie_migration::pallet::Call<T>
   **/
  PalletStateTrieMigrationCall: {
    _enum: {
      control_auto_migration: {
        maybeConfig: 'Option<PalletStateTrieMigrationMigrationLimits>',
      },
      continue_migrate: {
        limits: 'PalletStateTrieMigrationMigrationLimits',
        realSizeUpper: 'u32',
        witnessTask: 'PalletStateTrieMigrationMigrationTask',
      },
      migrate_custom_top: {
        _alias: {
          keys_: 'keys',
        },
        keys_: 'Vec<Bytes>',
        witnessSize: 'u32',
      },
      migrate_custom_child: {
        root: 'Bytes',
        childKeys: 'Vec<Bytes>',
        totalSize: 'u32',
      },
      set_signed_max_limits: {
        limits: 'PalletStateTrieMigrationMigrationLimits',
      },
      force_set_progress: {
        progressTop: 'PalletStateTrieMigrationProgress',
        progressChild: 'PalletStateTrieMigrationProgress'
      }
    }
  },
  /**
   * Lookup349: pallet_state_trie_migration::pallet::MigrationLimits
   **/
  PalletStateTrieMigrationMigrationLimits: {
    _alias: {
      size_: 'size'
    },
    size_: 'u32',
    item: 'u32'
  },
  /**
   * Lookup350: pallet_state_trie_migration::pallet::MigrationTask<T>
   **/
  PalletStateTrieMigrationMigrationTask: {
    _alias: {
      size_: 'size'
    },
    progressTop: 'PalletStateTrieMigrationProgress',
    progressChild: 'PalletStateTrieMigrationProgress',
    size_: 'u32',
    topItems: 'u32',
    childItems: 'u32'
  },
  /**
   * Lookup351: pallet_state_trie_migration::pallet::Progress<MaxKeyLen>
   **/
  PalletStateTrieMigrationProgress: {
    _enum: {
      ToStart: 'Null',
      LastKey: 'Bytes',
      Complete: 'Null'
    }
  },
  /**
   * Lookup353: pallet_root_testing::pallet::Call<T>
   **/
  PalletRootTestingCall: {
    _enum: {
      fill_block: {
        ratio: 'Perbill',
      },
      trigger_defensive: 'Null'
    }
  },
  /**
   * Lookup354: pallet_sudo::pallet::Call<T>
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
        call: 'Call',
      },
      remove_key: 'Null'
    }
  },
  /**
   * Lookup355: sp_runtime::traits::BlakeTwo256
   **/
  SpRuntimeBlakeTwo256: 'Null',
  /**
   * Lookup357: pallet_conviction_voting::types::Tally<Votes, Total>
   **/
  PalletConvictionVotingTally: {
    ayes: 'u128',
    nays: 'u128',
    support: 'u128'
  },
  /**
   * Lookup358: pallet_ranked_collective::pallet::Event<T, I>
   **/
  PalletRankedCollectiveEvent: {
    _enum: {
      MemberAdded: {
        who: 'AccountId32',
      },
      RankChanged: {
        who: 'AccountId32',
        rank: 'u16',
      },
      MemberRemoved: {
        who: 'AccountId32',
        rank: 'u16',
      },
      Voted: {
        who: 'AccountId32',
        poll: 'u32',
        vote: 'PalletRankedCollectiveVoteRecord',
        tally: 'PalletRankedCollectiveTally'
      }
    }
  },
  /**
   * Lookup359: pallet_ranked_collective::VoteRecord
   **/
  PalletRankedCollectiveVoteRecord: {
    _enum: {
      Aye: 'u32',
      Nay: 'u32'
    }
  },
  /**
   * Lookup360: pallet_ranked_collective::Tally<T, I, M>
   **/
  PalletRankedCollectiveTally: {
    bareAyes: 'u32',
    ayes: 'u32',
    nays: 'u32'
  },
  /**
   * Lookup362: pallet_whitelist::pallet::Event<T>
   **/
  PalletWhitelistEvent: {
    _enum: {
      CallWhitelisted: {
        callHash: 'H256',
      },
      WhitelistedCallRemoved: {
        callHash: 'H256',
      },
      WhitelistedCallDispatched: {
        callHash: 'H256',
        result: 'Result<FrameSupportDispatchPostDispatchInfo, SpRuntimeDispatchErrorWithPostInfo>'
      }
    }
  },
  /**
   * Lookup364: frame_support::dispatch::PostDispatchInfo
   **/
  FrameSupportDispatchPostDispatchInfo: {
    actualWeight: 'Option<SpWeightsWeightV2Weight>',
    paysFee: 'FrameSupportDispatchPays'
  },
  /**
   * Lookup366: sp_runtime::DispatchErrorWithPostInfo<frame_support::dispatch::PostDispatchInfo>
   **/
  SpRuntimeDispatchErrorWithPostInfo: {
    postInfo: 'FrameSupportDispatchPostDispatchInfo',
    error: 'SpRuntimeDispatchError'
  },
  /**
   * Lookup367: polkadot_runtime_common::claims::pallet::Event<T>
   **/
  PolkadotRuntimeCommonClaimsPalletEvent: {
    _enum: {
      Claimed: {
        who: 'AccountId32',
        ethereumAddress: 'EthereumAddress',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup368: pallet_utility::pallet::Event
   **/
  PalletUtilityEvent: {
    _enum: {
      BatchInterrupted: {
        index: 'u32',
        error: 'SpRuntimeDispatchError',
      },
      BatchCompleted: 'Null',
      BatchCompletedWithErrors: 'Null',
      ItemCompleted: 'Null',
      ItemFailed: {
        error: 'SpRuntimeDispatchError',
      },
      DispatchedAs: {
        result: 'Result<Null, SpRuntimeDispatchError>'
      }
    }
  },
  /**
   * Lookup370: pallet_identity::pallet::Event<T>
   **/
  PalletIdentityEvent: {
    _enum: {
      IdentitySet: {
        who: 'AccountId32',
      },
      IdentityCleared: {
        who: 'AccountId32',
        deposit: 'u128',
      },
      IdentityKilled: {
        who: 'AccountId32',
        deposit: 'u128',
      },
      JudgementRequested: {
        who: 'AccountId32',
        registrarIndex: 'u32',
      },
      JudgementUnrequested: {
        who: 'AccountId32',
        registrarIndex: 'u32',
      },
      JudgementGiven: {
        target: 'AccountId32',
        registrarIndex: 'u32',
      },
      RegistrarAdded: {
        registrarIndex: 'u32',
      },
      SubIdentityAdded: {
        sub: 'AccountId32',
        main: 'AccountId32',
        deposit: 'u128',
      },
      SubIdentityRemoved: {
        sub: 'AccountId32',
        main: 'AccountId32',
        deposit: 'u128',
      },
      SubIdentityRevoked: {
        sub: 'AccountId32',
        main: 'AccountId32',
        deposit: 'u128'
      }
    }
  },
  /**
   * Lookup371: pallet_society::pallet::Event<T, I>
   **/
  PalletSocietyEvent: {
    _enum: {
      Founded: {
        founder: 'AccountId32',
      },
      Bid: {
        candidateId: 'AccountId32',
        offer: 'u128',
      },
      Vouch: {
        candidateId: 'AccountId32',
        offer: 'u128',
        vouching: 'AccountId32',
      },
      AutoUnbid: {
        candidate: 'AccountId32',
      },
      Unbid: {
        candidate: 'AccountId32',
      },
      Unvouch: {
        candidate: 'AccountId32',
      },
      Inducted: {
        primary: 'AccountId32',
        candidates: 'Vec<AccountId32>',
      },
      SuspendedMemberJudgement: {
        who: 'AccountId32',
        judged: 'bool',
      },
      CandidateSuspended: {
        candidate: 'AccountId32',
      },
      MemberSuspended: {
        member: 'AccountId32',
      },
      Challenged: {
        member: 'AccountId32',
      },
      Vote: {
        candidate: 'AccountId32',
        voter: 'AccountId32',
        vote: 'bool',
      },
      DefenderVote: {
        voter: 'AccountId32',
        vote: 'bool',
      },
      NewParams: {
        params: 'PalletSocietyGroupParams',
      },
      Unfounded: {
        founder: 'AccountId32',
      },
      Deposit: {
        value: 'u128',
      },
      Elevated: {
        member: 'AccountId32',
        rank: 'u32'
      }
    }
  },
  /**
   * Lookup372: pallet_society::GroupParams<Balance>
   **/
  PalletSocietyGroupParams: {
    maxMembers: 'u32',
    maxIntake: 'u32',
    maxStrikes: 'u32',
    candidateDeposit: 'u128'
  },
  /**
   * Lookup373: pallet_recovery::pallet::Event<T>
   **/
  PalletRecoveryEvent: {
    _enum: {
      RecoveryCreated: {
        account: 'AccountId32',
      },
      RecoveryInitiated: {
        lostAccount: 'AccountId32',
        rescuerAccount: 'AccountId32',
      },
      RecoveryVouched: {
        lostAccount: 'AccountId32',
        rescuerAccount: 'AccountId32',
        sender: 'AccountId32',
      },
      RecoveryClosed: {
        lostAccount: 'AccountId32',
        rescuerAccount: 'AccountId32',
      },
      AccountRecovered: {
        lostAccount: 'AccountId32',
        rescuerAccount: 'AccountId32',
      },
      RecoveryRemoved: {
        lostAccount: 'AccountId32'
      }
    }
  },
  /**
   * Lookup374: pallet_vesting::pallet::Event<T>
   **/
  PalletVestingEvent: {
    _enum: {
      VestingUpdated: {
        account: 'AccountId32',
        unvested: 'u128',
      },
      VestingCompleted: {
        account: 'AccountId32'
      }
    }
  },
  /**
   * Lookup375: pallet_scheduler::pallet::Event<T>
   **/
  PalletSchedulerEvent: {
    _enum: {
      Scheduled: {
        when: 'u32',
        index: 'u32',
      },
      Canceled: {
        when: 'u32',
        index: 'u32',
      },
      Dispatched: {
        task: '(u32,u32)',
        id: 'Option<[u8;32]>',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      CallUnavailable: {
        task: '(u32,u32)',
        id: 'Option<[u8;32]>',
      },
      PeriodicFailed: {
        task: '(u32,u32)',
        id: 'Option<[u8;32]>',
      },
      PermanentlyOverweight: {
        task: '(u32,u32)',
        id: 'Option<[u8;32]>'
      }
    }
  },
  /**
   * Lookup377: pallet_proxy::pallet::Event<T>
   **/
  PalletProxyEvent: {
    _enum: {
      ProxyExecuted: {
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      PureCreated: {
        pure: 'AccountId32',
        who: 'AccountId32',
        proxyType: 'RococoRuntimeProxyType',
        disambiguationIndex: 'u16',
      },
      Announced: {
        real: 'AccountId32',
        proxy: 'AccountId32',
        callHash: 'H256',
      },
      ProxyAdded: {
        delegator: 'AccountId32',
        delegatee: 'AccountId32',
        proxyType: 'RococoRuntimeProxyType',
        delay: 'u32',
      },
      ProxyRemoved: {
        delegator: 'AccountId32',
        delegatee: 'AccountId32',
        proxyType: 'RococoRuntimeProxyType',
        delay: 'u32'
      }
    }
  },
  /**
   * Lookup378: pallet_multisig::pallet::Event<T>
   **/
  PalletMultisigEvent: {
    _enum: {
      NewMultisig: {
        approving: 'AccountId32',
        multisig: 'AccountId32',
        callHash: '[u8;32]',
      },
      MultisigApproval: {
        approving: 'AccountId32',
        timepoint: 'PalletMultisigTimepoint',
        multisig: 'AccountId32',
        callHash: '[u8;32]',
      },
      MultisigExecuted: {
        approving: 'AccountId32',
        timepoint: 'PalletMultisigTimepoint',
        multisig: 'AccountId32',
        callHash: '[u8;32]',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      MultisigCancelled: {
        cancelling: 'AccountId32',
        timepoint: 'PalletMultisigTimepoint',
        multisig: 'AccountId32',
        callHash: '[u8;32]'
      }
    }
  },
  /**
   * Lookup379: pallet_preimage::pallet::Event<T>
   **/
  PalletPreimageEvent: {
    _enum: {
      Noted: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      Requested: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      Cleared: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup380: pallet_asset_rate::pallet::Event<T>
   **/
  PalletAssetRateEvent: {
    _enum: {
      AssetRateCreated: {
        assetKind: 'PolkadotRuntimeCommonImplsVersionedLocatableAsset',
        rate: 'u128',
      },
      AssetRateRemoved: {
        assetKind: 'PolkadotRuntimeCommonImplsVersionedLocatableAsset',
      },
      AssetRateUpdated: {
        _alias: {
          new_: 'new',
        },
        assetKind: 'PolkadotRuntimeCommonImplsVersionedLocatableAsset',
        old: 'u128',
        new_: 'u128'
      }
    }
  },
  /**
   * Lookup381: pallet_bounties::pallet::Event<T, I>
   **/
  PalletBountiesEvent: {
    _enum: {
      BountyProposed: {
        index: 'u32',
      },
      BountyRejected: {
        index: 'u32',
        bond: 'u128',
      },
      BountyBecameActive: {
        index: 'u32',
      },
      BountyAwarded: {
        index: 'u32',
        beneficiary: 'AccountId32',
      },
      BountyClaimed: {
        index: 'u32',
        payout: 'u128',
        beneficiary: 'AccountId32',
      },
      BountyCanceled: {
        index: 'u32',
      },
      BountyExtended: {
        index: 'u32',
      },
      BountyApproved: {
        index: 'u32',
      },
      CuratorProposed: {
        bountyId: 'u32',
        curator: 'AccountId32',
      },
      CuratorUnassigned: {
        bountyId: 'u32',
      },
      CuratorAccepted: {
        bountyId: 'u32',
        curator: 'AccountId32'
      }
    }
  },
  /**
   * Lookup382: pallet_child_bounties::pallet::Event<T>
   **/
  PalletChildBountiesEvent: {
    _enum: {
      Added: {
        index: 'u32',
        childIndex: 'u32',
      },
      Awarded: {
        index: 'u32',
        childIndex: 'u32',
        beneficiary: 'AccountId32',
      },
      Claimed: {
        index: 'u32',
        childIndex: 'u32',
        payout: 'u128',
        beneficiary: 'AccountId32',
      },
      Canceled: {
        index: 'u32',
        childIndex: 'u32'
      }
    }
  },
  /**
   * Lookup383: pallet_nis::pallet::Event<T>
   **/
  PalletNisEvent: {
    _enum: {
      BidPlaced: {
        who: 'AccountId32',
        amount: 'u128',
        duration: 'u32',
      },
      BidRetracted: {
        who: 'AccountId32',
        amount: 'u128',
        duration: 'u32',
      },
      BidDropped: {
        who: 'AccountId32',
        amount: 'u128',
        duration: 'u32',
      },
      Issued: {
        index: 'u32',
        expiry: 'u32',
        who: 'AccountId32',
        proportion: 'Perquintill',
        amount: 'u128',
      },
      Thawed: {
        index: 'u32',
        who: 'AccountId32',
        proportion: 'Perquintill',
        amount: 'u128',
        dropped: 'bool',
      },
      Funded: {
        deficit: 'u128',
      },
      Transferred: {
        from: 'AccountId32',
        to: 'AccountId32',
        index: 'u32'
      }
    }
  },
  /**
   * Lookup385: polkadot_runtime_parachains::inclusion::pallet::Event<T>
   **/
  PolkadotRuntimeParachainsInclusionPalletEvent: {
    _enum: {
      CandidateBacked: '(PolkadotPrimitivesV6CandidateReceipt,Bytes,u32,u32)',
      CandidateIncluded: '(PolkadotPrimitivesV6CandidateReceipt,Bytes,u32,u32)',
      CandidateTimedOut: '(PolkadotPrimitivesV6CandidateReceipt,Bytes,u32)',
      UpwardMessagesReceived: {
        from: 'u32',
        count: 'u32'
      }
    }
  },
  /**
   * Lookup386: polkadot_primitives::v6::CandidateReceipt<primitive_types::H256>
   **/
  PolkadotPrimitivesV6CandidateReceipt: {
    descriptor: 'PolkadotPrimitivesV6CandidateDescriptor',
    commitmentsHash: 'H256'
  },
  /**
   * Lookup389: polkadot_runtime_parachains::paras::pallet::Event
   **/
  PolkadotRuntimeParachainsParasPalletEvent: {
    _enum: {
      CurrentCodeUpdated: 'u32',
      CurrentHeadUpdated: 'u32',
      CodeUpgradeScheduled: 'u32',
      NewHeadNoted: 'u32',
      ActionQueued: '(u32,u32)',
      PvfCheckStarted: '(H256,u32)',
      PvfCheckAccepted: '(H256,u32)',
      PvfCheckRejected: '(H256,u32)'
    }
  },
  /**
   * Lookup390: polkadot_runtime_parachains::hrmp::pallet::Event<T>
   **/
  PolkadotRuntimeParachainsHrmpPalletEvent: {
    _enum: {
      OpenChannelRequested: {
        sender: 'u32',
        recipient: 'u32',
        proposedMaxCapacity: 'u32',
        proposedMaxMessageSize: 'u32',
      },
      OpenChannelCanceled: {
        byParachain: 'u32',
        channelId: 'PolkadotParachainPrimitivesPrimitivesHrmpChannelId',
      },
      OpenChannelAccepted: {
        sender: 'u32',
        recipient: 'u32',
      },
      ChannelClosed: {
        byParachain: 'u32',
        channelId: 'PolkadotParachainPrimitivesPrimitivesHrmpChannelId',
      },
      HrmpChannelForceOpened: {
        sender: 'u32',
        recipient: 'u32',
        proposedMaxCapacity: 'u32',
        proposedMaxMessageSize: 'u32',
      },
      HrmpSystemChannelOpened: {
        sender: 'u32',
        recipient: 'u32',
        proposedMaxCapacity: 'u32',
        proposedMaxMessageSize: 'u32',
      },
      OpenChannelDepositsUpdated: {
        sender: 'u32',
        recipient: 'u32'
      }
    }
  },
  /**
   * Lookup391: polkadot_runtime_parachains::disputes::pallet::Event<T>
   **/
  PolkadotRuntimeParachainsDisputesPalletEvent: {
    _enum: {
      DisputeInitiated: '(H256,PolkadotRuntimeParachainsDisputesDisputeLocation)',
      DisputeConcluded: '(H256,PolkadotRuntimeParachainsDisputesDisputeResult)',
      Revert: 'u32'
    }
  },
  /**
   * Lookup392: polkadot_runtime_parachains::disputes::DisputeLocation
   **/
  PolkadotRuntimeParachainsDisputesDisputeLocation: {
    _enum: ['Local', 'Remote']
  },
  /**
   * Lookup393: polkadot_runtime_parachains::disputes::DisputeResult
   **/
  PolkadotRuntimeParachainsDisputesDisputeResult: {
    _enum: ['Valid', 'Invalid']
  },
  /**
   * Lookup394: pallet_message_queue::pallet::Event<T>
   **/
  PalletMessageQueueEvent: {
    _enum: {
      ProcessingFailed: {
        id: '[u8;32]',
        origin: 'PolkadotRuntimeParachainsInclusionAggregateMessageOrigin',
        error: 'FrameSupportMessagesProcessMessageError',
      },
      Processed: {
        id: '[u8;32]',
        origin: 'PolkadotRuntimeParachainsInclusionAggregateMessageOrigin',
        weightUsed: 'SpWeightsWeightV2Weight',
        success: 'bool',
      },
      OverweightEnqueued: {
        id: '[u8;32]',
        origin: 'PolkadotRuntimeParachainsInclusionAggregateMessageOrigin',
        pageIndex: 'u32',
        messageIndex: 'u32',
      },
      PageReaped: {
        origin: 'PolkadotRuntimeParachainsInclusionAggregateMessageOrigin',
        index: 'u32'
      }
    }
  },
  /**
   * Lookup395: frame_support::traits::messages::ProcessMessageError
   **/
  FrameSupportMessagesProcessMessageError: {
    _enum: {
      BadFormat: 'Null',
      Corrupt: 'Null',
      Unsupported: 'Null',
      Overweight: 'SpWeightsWeightV2Weight',
      Yield: 'Null'
    }
  },
  /**
   * Lookup396: polkadot_runtime_parachains::assigner_on_demand::pallet::Event<T>
   **/
  PolkadotRuntimeParachainsAssignerOnDemandPalletEvent: {
    _enum: {
      OnDemandOrderPlaced: {
        paraId: 'u32',
        spotPrice: 'u128',
      },
      SpotTrafficSet: {
        traffic: 'u128'
      }
    }
  },
  /**
   * Lookup397: polkadot_runtime_common::paras_registrar::pallet::Event<T>
   **/
  PolkadotRuntimeCommonParasRegistrarPalletEvent: {
    _enum: {
      Registered: {
        paraId: 'u32',
        manager: 'AccountId32',
      },
      Deregistered: {
        paraId: 'u32',
      },
      Reserved: {
        paraId: 'u32',
        who: 'AccountId32',
      },
      Swapped: {
        paraId: 'u32',
        otherId: 'u32'
      }
    }
  },
  /**
   * Lookup398: polkadot_runtime_common::slots::pallet::Event<T>
   **/
  PolkadotRuntimeCommonSlotsPalletEvent: {
    _enum: {
      NewLeasePeriod: {
        leasePeriod: 'u32',
      },
      Leased: {
        paraId: 'u32',
        leaser: 'AccountId32',
        periodBegin: 'u32',
        periodCount: 'u32',
        extraReserved: 'u128',
        totalAmount: 'u128'
      }
    }
  },
  /**
   * Lookup399: polkadot_runtime_common::auctions::pallet::Event<T>
   **/
  PolkadotRuntimeCommonAuctionsPalletEvent: {
    _enum: {
      AuctionStarted: {
        auctionIndex: 'u32',
        leasePeriod: 'u32',
        ending: 'u32',
      },
      AuctionClosed: {
        auctionIndex: 'u32',
      },
      Reserved: {
        bidder: 'AccountId32',
        extraReserved: 'u128',
        totalAmount: 'u128',
      },
      Unreserved: {
        bidder: 'AccountId32',
        amount: 'u128',
      },
      ReserveConfiscated: {
        paraId: 'u32',
        leaser: 'AccountId32',
        amount: 'u128',
      },
      BidAccepted: {
        bidder: 'AccountId32',
        paraId: 'u32',
        amount: 'u128',
        firstSlot: 'u32',
        lastSlot: 'u32',
      },
      WinningOffset: {
        auctionIndex: 'u32',
        blockNumber: 'u32'
      }
    }
  },
  /**
   * Lookup400: polkadot_runtime_common::crowdloan::pallet::Event<T>
   **/
  PolkadotRuntimeCommonCrowdloanPalletEvent: {
    _enum: {
      Created: {
        paraId: 'u32',
      },
      Contributed: {
        who: 'AccountId32',
        fundIndex: 'u32',
        amount: 'u128',
      },
      Withdrew: {
        who: 'AccountId32',
        fundIndex: 'u32',
        amount: 'u128',
      },
      PartiallyRefunded: {
        paraId: 'u32',
      },
      AllRefunded: {
        paraId: 'u32',
      },
      Dissolved: {
        paraId: 'u32',
      },
      HandleBidResult: {
        paraId: 'u32',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      Edited: {
        paraId: 'u32',
      },
      MemoUpdated: {
        who: 'AccountId32',
        paraId: 'u32',
        memo: 'Bytes',
      },
      AddedToNewRaise: {
        paraId: 'u32'
      }
    }
  },
  /**
   * Lookup401: pallet_xcm::pallet::Event<T>
   **/
  PalletXcmEvent: {
    _enum: {
      Attempted: {
        outcome: 'XcmV3TraitsOutcome',
      },
      Sent: {
        origin: 'StagingXcmV3MultiLocation',
        destination: 'StagingXcmV3MultiLocation',
        message: 'XcmV3Xcm',
        messageId: '[u8;32]',
      },
      UnexpectedResponse: {
        origin: 'StagingXcmV3MultiLocation',
        queryId: 'u64',
      },
      ResponseReady: {
        queryId: 'u64',
        response: 'XcmV3Response',
      },
      Notified: {
        queryId: 'u64',
        palletIndex: 'u8',
        callIndex: 'u8',
      },
      NotifyOverweight: {
        queryId: 'u64',
        palletIndex: 'u8',
        callIndex: 'u8',
        actualWeight: 'SpWeightsWeightV2Weight',
        maxBudgetedWeight: 'SpWeightsWeightV2Weight',
      },
      NotifyDispatchError: {
        queryId: 'u64',
        palletIndex: 'u8',
        callIndex: 'u8',
      },
      NotifyDecodeFailed: {
        queryId: 'u64',
        palletIndex: 'u8',
        callIndex: 'u8',
      },
      InvalidResponder: {
        origin: 'StagingXcmV3MultiLocation',
        queryId: 'u64',
        expectedLocation: 'Option<StagingXcmV3MultiLocation>',
      },
      InvalidResponderVersion: {
        origin: 'StagingXcmV3MultiLocation',
        queryId: 'u64',
      },
      ResponseTaken: {
        queryId: 'u64',
      },
      AssetsTrapped: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
        origin: 'StagingXcmV3MultiLocation',
        assets: 'XcmVersionedMultiAssets',
      },
      VersionChangeNotified: {
        destination: 'StagingXcmV3MultiLocation',
        result: 'u32',
        cost: 'XcmV3MultiassetMultiAssets',
        messageId: '[u8;32]',
      },
      SupportedVersionChanged: {
        location: 'StagingXcmV3MultiLocation',
        version: 'u32',
      },
      NotifyTargetSendFail: {
        location: 'StagingXcmV3MultiLocation',
        queryId: 'u64',
        error: 'XcmV3TraitsError',
      },
      NotifyTargetMigrationFail: {
        location: 'XcmVersionedMultiLocation',
        queryId: 'u64',
      },
      InvalidQuerierVersion: {
        origin: 'StagingXcmV3MultiLocation',
        queryId: 'u64',
      },
      InvalidQuerier: {
        origin: 'StagingXcmV3MultiLocation',
        queryId: 'u64',
        expectedQuerier: 'StagingXcmV3MultiLocation',
        maybeActualQuerier: 'Option<StagingXcmV3MultiLocation>',
      },
      VersionNotifyStarted: {
        destination: 'StagingXcmV3MultiLocation',
        cost: 'XcmV3MultiassetMultiAssets',
        messageId: '[u8;32]',
      },
      VersionNotifyRequested: {
        destination: 'StagingXcmV3MultiLocation',
        cost: 'XcmV3MultiassetMultiAssets',
        messageId: '[u8;32]',
      },
      VersionNotifyUnrequested: {
        destination: 'StagingXcmV3MultiLocation',
        cost: 'XcmV3MultiassetMultiAssets',
        messageId: '[u8;32]',
      },
      FeesPaid: {
        paying: 'StagingXcmV3MultiLocation',
        fees: 'XcmV3MultiassetMultiAssets',
      },
      AssetsClaimed: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
        origin: 'StagingXcmV3MultiLocation',
        assets: 'XcmVersionedMultiAssets'
      }
    }
  },
  /**
   * Lookup402: xcm::v3::traits::Outcome
   **/
  XcmV3TraitsOutcome: {
    _enum: {
      Complete: 'SpWeightsWeightV2Weight',
      Incomplete: '(SpWeightsWeightV2Weight,XcmV3TraitsError)',
      Error: 'XcmV3TraitsError'
    }
  },
  /**
   * Lookup403: polkadot_runtime_common::identity_migrator::pallet::Event<T>
   **/
  PolkadotRuntimeCommonIdentityMigratorPalletEvent: {
    _enum: {
      IdentityReaped: {
        who: 'AccountId32',
      },
      DepositUpdated: {
        who: 'AccountId32',
        identity: 'u128',
        subs: 'u128'
      }
    }
  },
  /**
   * Lookup404: polkadot_runtime_common::assigned_slots::pallet::Event<T>
   **/
  PolkadotRuntimeCommonAssignedSlotsPalletEvent: {
    _enum: {
      PermanentSlotAssigned: 'u32',
      TemporarySlotAssigned: 'u32',
      MaxPermanentSlotsChanged: {
        slots: 'u32',
      },
      MaxTemporarySlotsChanged: {
        slots: 'u32'
      }
    }
  },
  /**
   * Lookup405: rococo_runtime::validator_manager::pallet::Event<T>
   **/
  RococoRuntimeValidatorManagerPalletEvent: {
    _enum: {
      ValidatorsRegistered: 'Vec<AccountId32>',
      ValidatorsDeregistered: 'Vec<AccountId32>'
    }
  },
  /**
   * Lookup406: pallet_state_trie_migration::pallet::Event<T>
   **/
  PalletStateTrieMigrationEvent: {
    _enum: {
      Migrated: {
        top: 'u32',
        child: 'u32',
        compute: 'PalletStateTrieMigrationMigrationCompute',
      },
      Slashed: {
        who: 'AccountId32',
        amount: 'u128',
      },
      AutoMigrationFinished: 'Null',
      Halted: {
        error: 'PalletStateTrieMigrationError'
      }
    }
  },
  /**
   * Lookup407: pallet_state_trie_migration::pallet::MigrationCompute
   **/
  PalletStateTrieMigrationMigrationCompute: {
    _enum: ['Signed', 'Auto']
  },
  /**
   * Lookup408: pallet_state_trie_migration::pallet::Error<T>
   **/
  PalletStateTrieMigrationError: {
    _enum: ['MaxSignedLimits', 'KeyTooLong', 'NotEnoughFunds', 'BadWitness', 'SignedMigrationNotAllowed', 'BadChildRoot']
  },
  /**
   * Lookup409: pallet_root_testing::pallet::Event<T>
   **/
  PalletRootTestingEvent: {
    _enum: ['DefensiveTestCall']
  },
  /**
   * Lookup410: pallet_sudo::pallet::Event<T>
   **/
  PalletSudoEvent: {
    _enum: {
      Sudid: {
        sudoResult: 'Result<Null, SpRuntimeDispatchError>',
      },
      KeyChanged: {
        _alias: {
          new_: 'new',
        },
        old: 'Option<AccountId32>',
        new_: 'AccountId32',
      },
      KeyRemoved: 'Null',
      SudoAsDone: {
        sudoResult: 'Result<Null, SpRuntimeDispatchError>'
      }
    }
  },
  /**
   * Lookup411: frame_system::Phase
   **/
  FrameSystemPhase: {
    _enum: {
      ApplyExtrinsic: 'u32',
      Finalization: 'Null',
      Initialization: 'Null'
    }
  },
  /**
   * Lookup413: frame_system::LastRuntimeUpgradeInfo
   **/
  FrameSystemLastRuntimeUpgradeInfo: {
    specVersion: 'Compact<u32>',
    specName: 'Text'
  },
  /**
   * Lookup415: frame_system::limits::BlockWeights
   **/
  FrameSystemLimitsBlockWeights: {
    baseBlock: 'SpWeightsWeightV2Weight',
    maxBlock: 'SpWeightsWeightV2Weight',
    perClass: 'FrameSupportDispatchPerDispatchClassWeightsPerClass'
  },
  /**
   * Lookup416: frame_support::dispatch::PerDispatchClass<frame_system::limits::WeightsPerClass>
   **/
  FrameSupportDispatchPerDispatchClassWeightsPerClass: {
    normal: 'FrameSystemLimitsWeightsPerClass',
    operational: 'FrameSystemLimitsWeightsPerClass',
    mandatory: 'FrameSystemLimitsWeightsPerClass'
  },
  /**
   * Lookup417: frame_system::limits::WeightsPerClass
   **/
  FrameSystemLimitsWeightsPerClass: {
    baseExtrinsic: 'SpWeightsWeightV2Weight',
    maxExtrinsic: 'Option<SpWeightsWeightV2Weight>',
    maxTotal: 'Option<SpWeightsWeightV2Weight>',
    reserved: 'Option<SpWeightsWeightV2Weight>'
  },
  /**
   * Lookup418: frame_system::limits::BlockLength
   **/
  FrameSystemLimitsBlockLength: {
    max: 'FrameSupportDispatchPerDispatchClassU32'
  },
  /**
   * Lookup419: frame_support::dispatch::PerDispatchClass<T>
   **/
  FrameSupportDispatchPerDispatchClassU32: {
    normal: 'u32',
    operational: 'u32',
    mandatory: 'u32'
  },
  /**
   * Lookup420: sp_weights::RuntimeDbWeight
   **/
  SpWeightsRuntimeDbWeight: {
    read: 'u64',
    write: 'u64'
  },
  /**
   * Lookup421: sp_version::RuntimeVersion
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
   * Lookup425: frame_system::pallet::Error<T>
   **/
  FrameSystemError: {
    _enum: ['InvalidSpecName', 'SpecVersionNeedsToIncrease', 'FailedToExtractRuntimeVersion', 'NonDefaultComposite', 'NonZeroRefCount', 'CallFiltered']
  },
  /**
   * Lookup432: sp_consensus_babe::digests::PreDigest
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
   * Lookup433: sp_consensus_babe::digests::PrimaryPreDigest
   **/
  SpConsensusBabeDigestsPrimaryPreDigest: {
    authorityIndex: 'u32',
    slot: 'u64',
    vrfSignature: 'SpCoreSr25519VrfVrfSignature'
  },
  /**
   * Lookup434: sp_core::sr25519::vrf::VrfSignature
   **/
  SpCoreSr25519VrfVrfSignature: {
    output: '[u8;32]',
    proof: '[u8;64]'
  },
  /**
   * Lookup435: sp_consensus_babe::digests::SecondaryPlainPreDigest
   **/
  SpConsensusBabeDigestsSecondaryPlainPreDigest: {
    authorityIndex: 'u32',
    slot: 'u64'
  },
  /**
   * Lookup436: sp_consensus_babe::digests::SecondaryVRFPreDigest
   **/
  SpConsensusBabeDigestsSecondaryVRFPreDigest: {
    authorityIndex: 'u32',
    slot: 'u64',
    vrfSignature: 'SpCoreSr25519VrfVrfSignature'
  },
  /**
   * Lookup437: sp_consensus_babe::BabeEpochConfiguration
   **/
  SpConsensusBabeBabeEpochConfiguration: {
    c: '(u64,u64)',
    allowedSlots: 'SpConsensusBabeAllowedSlots'
  },
  /**
   * Lookup441: pallet_babe::pallet::Error<T>
   **/
  PalletBabeError: {
    _enum: ['InvalidEquivocationProof', 'InvalidKeyOwnershipProof', 'DuplicateOffenceReport', 'InvalidConfiguration']
  },
  /**
   * Lookup443: pallet_indices::pallet::Error<T>
   **/
  PalletIndicesError: {
    _enum: ['NotAssigned', 'NotOwner', 'InUse', 'NotTransfer', 'Permanent']
  },
  /**
   * Lookup445: pallet_balances::types::BalanceLock<Balance>
   **/
  PalletBalancesBalanceLock: {
    id: '[u8;8]',
    amount: 'u128',
    reasons: 'PalletBalancesReasons'
  },
  /**
   * Lookup446: pallet_balances::types::Reasons
   **/
  PalletBalancesReasons: {
    _enum: ['Fee', 'Misc', 'All']
  },
  /**
   * Lookup449: pallet_balances::types::ReserveData<ReserveIdentifier, Balance>
   **/
  PalletBalancesReserveData: {
    id: '[u8;8]',
    amount: 'u128'
  },
  /**
   * Lookup453: rococo_runtime::RuntimeHoldReason
   **/
  RococoRuntimeRuntimeHoldReason: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      __Unused4: 'Null',
      __Unused5: 'Null',
      __Unused6: 'Null',
      __Unused7: 'Null',
      __Unused8: 'Null',
      __Unused9: 'Null',
      __Unused10: 'Null',
      __Unused11: 'Null',
      __Unused12: 'Null',
      __Unused13: 'Null',
      __Unused14: 'Null',
      __Unused15: 'Null',
      __Unused16: 'Null',
      __Unused17: 'Null',
      __Unused18: 'Null',
      __Unused19: 'Null',
      __Unused20: 'Null',
      __Unused21: 'Null',
      __Unused22: 'Null',
      __Unused23: 'Null',
      __Unused24: 'Null',
      __Unused25: 'Null',
      __Unused26: 'Null',
      __Unused27: 'Null',
      __Unused28: 'Null',
      __Unused29: 'Null',
      __Unused30: 'Null',
      __Unused31: 'Null',
      Preimage: 'PalletPreimageHoldReason',
      __Unused33: 'Null',
      __Unused34: 'Null',
      __Unused35: 'Null',
      __Unused36: 'Null',
      __Unused37: 'Null',
      Nis: 'PalletNisHoldReason'
    }
  },
  /**
   * Lookup454: pallet_preimage::pallet::HoldReason
   **/
  PalletPreimageHoldReason: {
    _enum: ['Preimage']
  },
  /**
   * Lookup455: pallet_nis::pallet::HoldReason
   **/
  PalletNisHoldReason: {
    _enum: ['NftReceipt']
  },
  /**
   * Lookup458: pallet_balances::types::IdAmount<Id, Balance>
   **/
  PalletBalancesIdAmount: {
    id: 'Null',
    amount: 'u128'
  },
  /**
   * Lookup460: pallet_balances::pallet::Error<T, I>
   **/
  PalletBalancesError: {
    _enum: ['VestingBalance', 'LiquidityRestrictions', 'InsufficientBalance', 'ExistentialDeposit', 'Expendability', 'ExistingVestingSchedule', 'DeadAccount', 'TooManyReserves', 'TooManyHolds', 'TooManyFreezes']
  },
  /**
   * Lookup461: pallet_transaction_payment::Releases
   **/
  PalletTransactionPaymentReleases: {
    _enum: ['V1Ancient', 'V2']
  },
  /**
   * Lookup462: sp_staking::offence::OffenceDetails<sp_core::crypto::AccountId32, Offender>
   **/
  SpStakingOffenceOffenceDetails: {
    offender: '(AccountId32,Null)',
    reporters: 'Vec<AccountId32>'
  },
  /**
   * Lookup466: pallet_beefy::pallet::Error<T>
   **/
  PalletBeefyError: {
    _enum: ['InvalidKeyOwnershipProof', 'InvalidEquivocationProof', 'DuplicateOffenceReport', 'InvalidConfiguration']
  },
  /**
   * Lookup467: sp_consensus_beefy::mmr::BeefyAuthoritySet<primitive_types::H256>
   **/
  SpConsensusBeefyMmrBeefyAuthoritySet: {
    id: 'u64',
    len: 'u32',
    keysetCommitment: 'H256'
  },
  /**
   * Lookup472: sp_core::crypto::KeyTypeId
   **/
  SpCoreCryptoKeyTypeId: '[u8;4]',
  /**
   * Lookup473: pallet_session::pallet::Error<T>
   **/
  PalletSessionError: {
    _enum: ['InvalidProof', 'NoAssociatedValidatorId', 'DuplicatedKey', 'NoKeys', 'NoAccount']
  },
  /**
   * Lookup474: pallet_grandpa::StoredState<N>
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
   * Lookup475: pallet_grandpa::StoredPendingChange<N, Limit>
   **/
  PalletGrandpaStoredPendingChange: {
    scheduledAt: 'u32',
    delay: 'u32',
    nextAuthorities: 'Vec<(SpConsensusGrandpaAppPublic,u64)>',
    forced: 'Option<u32>'
  },
  /**
   * Lookup477: pallet_grandpa::pallet::Error<T>
   **/
  PalletGrandpaError: {
    _enum: ['PauseFailed', 'ResumeFailed', 'ChangePending', 'TooSoon', 'InvalidKeyOwnershipProof', 'InvalidEquivocationProof', 'DuplicateOffenceReport']
  },
  /**
   * Lookup481: pallet_im_online::pallet::Error<T>
   **/
  PalletImOnlineError: {
    _enum: ['InvalidKey', 'DuplicatedHeartbeat']
  },
  /**
   * Lookup482: pallet_treasury::Proposal<sp_core::crypto::AccountId32, Balance>
   **/
  PalletTreasuryProposal: {
    proposer: 'AccountId32',
    value: 'u128',
    beneficiary: 'AccountId32',
    bond: 'u128'
  },
  /**
   * Lookup484: pallet_treasury::SpendStatus<polkadot_runtime_common::impls::VersionedLocatableAsset, AssetBalance, xcm::VersionedMultiLocation, BlockNumber, PaymentId>
   **/
  PalletTreasurySpendStatus: {
    assetKind: 'PolkadotRuntimeCommonImplsVersionedLocatableAsset',
    amount: 'u128',
    beneficiary: 'XcmVersionedMultiLocation',
    validFrom: 'u32',
    expireAt: 'u32',
    status: 'PalletTreasuryPaymentState'
  },
  /**
   * Lookup485: pallet_treasury::PaymentState<Id>
   **/
  PalletTreasuryPaymentState: {
    _enum: {
      Pending: 'Null',
      Attempted: {
        id: 'u64',
      },
      Failed: 'Null'
    }
  },
  /**
   * Lookup488: frame_support::PalletId
   **/
  FrameSupportPalletId: '[u8;8]',
  /**
   * Lookup489: pallet_treasury::pallet::Error<T, I>
   **/
  PalletTreasuryError: {
    _enum: ['InsufficientProposersBalance', 'InvalidIndex', 'TooManyApprovals', 'InsufficientPermission', 'ProposalNotApproved', 'FailedToConvertBalance', 'SpendExpired', 'EarlyPayout', 'AlreadyAttempted', 'PayoutError', 'NotAttempted', 'Inconclusive']
  },
  /**
   * Lookup491: pallet_conviction_voting::vote::Voting<Balance, sp_core::crypto::AccountId32, BlockNumber, PollIndex, MaxVotes>
   **/
  PalletConvictionVotingVoteVoting: {
    _enum: {
      Casting: 'PalletConvictionVotingVoteCasting',
      Delegating: 'PalletConvictionVotingVoteDelegating'
    }
  },
  /**
   * Lookup492: pallet_conviction_voting::vote::Casting<Balance, BlockNumber, PollIndex, MaxVotes>
   **/
  PalletConvictionVotingVoteCasting: {
    votes: 'Vec<(u32,PalletConvictionVotingVoteAccountVote)>',
    delegations: 'PalletConvictionVotingDelegations',
    prior: 'PalletConvictionVotingVotePriorLock'
  },
  /**
   * Lookup496: pallet_conviction_voting::types::Delegations<Balance>
   **/
  PalletConvictionVotingDelegations: {
    votes: 'u128',
    capital: 'u128'
  },
  /**
   * Lookup497: pallet_conviction_voting::vote::PriorLock<BlockNumber, Balance>
   **/
  PalletConvictionVotingVotePriorLock: '(u32,u128)',
  /**
   * Lookup498: pallet_conviction_voting::vote::Delegating<Balance, sp_core::crypto::AccountId32, BlockNumber>
   **/
  PalletConvictionVotingVoteDelegating: {
    balance: 'u128',
    target: 'AccountId32',
    conviction: 'PalletConvictionVotingConviction',
    delegations: 'PalletConvictionVotingDelegations',
    prior: 'PalletConvictionVotingVotePriorLock'
  },
  /**
   * Lookup502: pallet_conviction_voting::pallet::Error<T, I>
   **/
  PalletConvictionVotingError: {
    _enum: ['NotOngoing', 'NotVoter', 'NoPermission', 'NoPermissionYet', 'AlreadyDelegating', 'AlreadyVoting', 'InsufficientFunds', 'NotDelegating', 'Nonsense', 'MaxVotesReached', 'ClassNeeded', 'BadClass']
  },
  /**
   * Lookup503: pallet_referenda::types::ReferendumInfo<TrackId, rococo_runtime::OriginCaller, Moment, frame_support::traits::preimages::Bounded<rococo_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>, Balance, pallet_conviction_voting::types::Tally<Votes, Total>, sp_core::crypto::AccountId32, ScheduleAddress>
   **/
  PalletReferendaReferendumInfoConvictionVotingTally: {
    _enum: {
      Ongoing: 'PalletReferendaReferendumStatusConvictionVotingTally',
      Approved: '(u32,Option<PalletReferendaDeposit>,Option<PalletReferendaDeposit>)',
      Rejected: '(u32,Option<PalletReferendaDeposit>,Option<PalletReferendaDeposit>)',
      Cancelled: '(u32,Option<PalletReferendaDeposit>,Option<PalletReferendaDeposit>)',
      TimedOut: '(u32,Option<PalletReferendaDeposit>,Option<PalletReferendaDeposit>)',
      Killed: 'u32'
    }
  },
  /**
   * Lookup504: pallet_referenda::types::ReferendumStatus<TrackId, rococo_runtime::OriginCaller, Moment, frame_support::traits::preimages::Bounded<rococo_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>, Balance, pallet_conviction_voting::types::Tally<Votes, Total>, sp_core::crypto::AccountId32, ScheduleAddress>
   **/
  PalletReferendaReferendumStatusConvictionVotingTally: {
    track: 'u16',
    origin: 'RococoRuntimeOriginCaller',
    proposal: 'FrameSupportPreimagesBounded',
    enactment: 'FrameSupportScheduleDispatchTime',
    submitted: 'u32',
    submissionDeposit: 'PalletReferendaDeposit',
    decisionDeposit: 'Option<PalletReferendaDeposit>',
    deciding: 'Option<PalletReferendaDecidingStatus>',
    tally: 'PalletConvictionVotingTally',
    inQueue: 'bool',
    alarm: 'Option<(u32,(u32,u32))>'
  },
  /**
   * Lookup505: pallet_referenda::types::Deposit<sp_core::crypto::AccountId32, Balance>
   **/
  PalletReferendaDeposit: {
    who: 'AccountId32',
    amount: 'u128'
  },
  /**
   * Lookup508: pallet_referenda::types::DecidingStatus<BlockNumber>
   **/
  PalletReferendaDecidingStatus: {
    since: 'u32',
    confirming: 'Option<u32>'
  },
  /**
   * Lookup516: pallet_referenda::types::TrackInfo<Balance, Moment>
   **/
  PalletReferendaTrackInfo: {
    name: 'Text',
    maxDeciding: 'u32',
    decisionDeposit: 'u128',
    preparePeriod: 'u32',
    decisionPeriod: 'u32',
    confirmPeriod: 'u32',
    minEnactmentPeriod: 'u32',
    minApproval: 'PalletReferendaCurve',
    minSupport: 'PalletReferendaCurve'
  },
  /**
   * Lookup517: pallet_referenda::types::Curve
   **/
  PalletReferendaCurve: {
    _enum: {
      LinearDecreasing: {
        length: 'Perbill',
        floor: 'Perbill',
        ceil: 'Perbill',
      },
      SteppedDecreasing: {
        begin: 'Perbill',
        end: 'Perbill',
        step: 'Perbill',
        period: 'Perbill',
      },
      Reciprocal: {
        factor: 'i64',
        xOffset: 'i64',
        yOffset: 'i64'
      }
    }
  },
  /**
   * Lookup520: pallet_referenda::pallet::Error<T, I>
   **/
  PalletReferendaError: {
    _enum: ['NotOngoing', 'HasDeposit', 'BadTrack', 'Full', 'QueueEmpty', 'BadReferendum', 'NothingToDo', 'NoTrack', 'Unfinished', 'NoPermission', 'NoDeposit', 'BadStatus', 'PreimageNotExist']
  },
  /**
   * Lookup521: pallet_ranked_collective::MemberRecord
   **/
  PalletRankedCollectiveMemberRecord: {
    rank: 'u16'
  },
  /**
   * Lookup525: pallet_ranked_collective::pallet::Error<T, I>
   **/
  PalletRankedCollectiveError: {
    _enum: ['AlreadyMember', 'NotMember', 'NotPolling', 'Ongoing', 'NoneRemaining', 'Corruption', 'RankTooLow', 'InvalidWitness', 'NoPermission']
  },
  /**
   * Lookup526: pallet_referenda::types::ReferendumInfo<TrackId, rococo_runtime::OriginCaller, Moment, frame_support::traits::preimages::Bounded<rococo_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>, Balance, pallet_ranked_collective::Tally<T, I, M>, sp_core::crypto::AccountId32, ScheduleAddress>
   **/
  PalletReferendaReferendumInfoRankedCollectiveTally: {
    _enum: {
      Ongoing: 'PalletReferendaReferendumStatusRankedCollectiveTally',
      Approved: '(u32,Option<PalletReferendaDeposit>,Option<PalletReferendaDeposit>)',
      Rejected: '(u32,Option<PalletReferendaDeposit>,Option<PalletReferendaDeposit>)',
      Cancelled: '(u32,Option<PalletReferendaDeposit>,Option<PalletReferendaDeposit>)',
      TimedOut: '(u32,Option<PalletReferendaDeposit>,Option<PalletReferendaDeposit>)',
      Killed: 'u32'
    }
  },
  /**
   * Lookup527: pallet_referenda::types::ReferendumStatus<TrackId, rococo_runtime::OriginCaller, Moment, frame_support::traits::preimages::Bounded<rococo_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>, Balance, pallet_ranked_collective::Tally<T, I, M>, sp_core::crypto::AccountId32, ScheduleAddress>
   **/
  PalletReferendaReferendumStatusRankedCollectiveTally: {
    track: 'u16',
    origin: 'RococoRuntimeOriginCaller',
    proposal: 'FrameSupportPreimagesBounded',
    enactment: 'FrameSupportScheduleDispatchTime',
    submitted: 'u32',
    submissionDeposit: 'PalletReferendaDeposit',
    decisionDeposit: 'Option<PalletReferendaDeposit>',
    deciding: 'Option<PalletReferendaDecidingStatus>',
    tally: 'PalletRankedCollectiveTally',
    inQueue: 'bool',
    alarm: 'Option<(u32,(u32,u32))>'
  },
  /**
   * Lookup530: pallet_whitelist::pallet::Error<T>
   **/
  PalletWhitelistError: {
    _enum: ['UnavailablePreImage', 'UndecodableCall', 'InvalidCallWeightWitness', 'CallIsNotWhitelisted', 'CallAlreadyWhitelisted']
  },
  /**
   * Lookup531: polkadot_runtime_common::claims::pallet::Error<T>
   **/
  PolkadotRuntimeCommonClaimsPalletError: {
    _enum: ['InvalidEthereumSignature', 'SignerHasNoClaim', 'SenderHasNoClaim', 'PotUnderflow', 'InvalidStatement', 'VestedBalanceExists']
  },
  /**
   * Lookup532: pallet_utility::pallet::Error<T>
   **/
  PalletUtilityError: {
    _enum: ['TooManyCalls']
  },
  /**
   * Lookup533: pallet_identity::types::Registration<Balance, MaxJudgements, pallet_identity::legacy::IdentityInfo<FieldLimit>>
   **/
  PalletIdentityRegistration: {
    judgements: 'Vec<(u32,PalletIdentityJudgement)>',
    deposit: 'u128',
    info: 'PalletIdentityLegacyIdentityInfo'
  },
  /**
   * Lookup541: pallet_identity::types::RegistrarInfo<Balance, sp_core::crypto::AccountId32, IdField>
   **/
  PalletIdentityRegistrarInfo: {
    account: 'AccountId32',
    fee: 'u128',
    fields: 'u64'
  },
  /**
   * Lookup543: pallet_identity::pallet::Error<T>
   **/
  PalletIdentityError: {
    _enum: ['TooManySubAccounts', 'NotFound', 'NotNamed', 'EmptyIndex', 'FeeChanged', 'NoIdentity', 'StickyJudgement', 'JudgementGiven', 'InvalidJudgement', 'InvalidIndex', 'InvalidTarget', 'TooManyRegistrars', 'AlreadyClaimed', 'NotSub', 'NotOwned', 'JudgementForDifferentIdentity', 'JudgementPaymentFailed']
  },
  /**
   * Lookup544: pallet_society::MemberRecord
   **/
  PalletSocietyMemberRecord: {
    rank: 'u32',
    strikes: 'u32',
    vouching: 'Option<PalletSocietyVouchingStatus>',
    index: 'u32'
  },
  /**
   * Lookup546: pallet_society::VouchingStatus
   **/
  PalletSocietyVouchingStatus: {
    _enum: ['Vouching', 'Banned']
  },
  /**
   * Lookup547: pallet_society::PayoutRecord<Balance, bounded_collections::bounded_vec::BoundedVec<T, S>>
   **/
  PalletSocietyPayoutRecord: {
    paid: 'u128',
    payouts: 'Vec<(u32,u128)>'
  },
  /**
   * Lookup550: pallet_society::Bid<sp_core::crypto::AccountId32, Balance>
   **/
  PalletSocietyBid: {
    who: 'AccountId32',
    kind: 'PalletSocietyBidKind',
    value: 'u128'
  },
  /**
   * Lookup551: pallet_society::BidKind<sp_core::crypto::AccountId32, Balance>
   **/
  PalletSocietyBidKind: {
    _enum: {
      Deposit: 'u128',
      Vouch: '(AccountId32,u128)'
    }
  },
  /**
   * Lookup553: pallet_society::Candidacy<sp_core::crypto::AccountId32, Balance>
   **/
  PalletSocietyCandidacy: {
    round: 'u32',
    kind: 'PalletSocietyBidKind',
    bid: 'u128',
    tally: 'PalletSocietyTally',
    skepticStruck: 'bool'
  },
  /**
   * Lookup554: pallet_society::Tally
   **/
  PalletSocietyTally: {
    approvals: 'u32',
    rejections: 'u32'
  },
  /**
   * Lookup556: pallet_society::Vote
   **/
  PalletSocietyVote: {
    approve: 'bool',
    weight: 'u32'
  },
  /**
   * Lookup558: pallet_society::IntakeRecord<sp_core::crypto::AccountId32, Balance>
   **/
  PalletSocietyIntakeRecord: {
    who: 'AccountId32',
    bid: 'u128',
    round: 'u32'
  },
  /**
   * Lookup560: pallet_society::pallet::Error<T, I>
   **/
  PalletSocietyError: {
    _enum: ['NotMember', 'AlreadyMember', 'Suspended', 'NotSuspended', 'NoPayout', 'AlreadyFounded', 'InsufficientPot', 'AlreadyVouching', 'NotVouchingOnBidder', 'Head', 'Founder', 'AlreadyBid', 'AlreadyCandidate', 'NotCandidate', 'MaxMembers', 'NotFounder', 'NotHead', 'NotApproved', 'NotRejected', 'Approved', 'Rejected', 'InProgress', 'TooEarly', 'Voted', 'Expired', 'NotBidder', 'NoDefender', 'NotGroup', 'AlreadyElevated', 'AlreadyPunished', 'InsufficientFunds', 'NoVotes']
  },
  /**
   * Lookup561: pallet_recovery::RecoveryConfig<BlockNumber, Balance, bounded_collections::bounded_vec::BoundedVec<sp_core::crypto::AccountId32, S>>
   **/
  PalletRecoveryRecoveryConfig: {
    delayPeriod: 'u32',
    deposit: 'u128',
    friends: 'Vec<AccountId32>',
    threshold: 'u16'
  },
  /**
   * Lookup563: pallet_recovery::ActiveRecovery<BlockNumber, Balance, bounded_collections::bounded_vec::BoundedVec<sp_core::crypto::AccountId32, S>>
   **/
  PalletRecoveryActiveRecovery: {
    created: 'u32',
    deposit: 'u128',
    friends: 'Vec<AccountId32>'
  },
  /**
   * Lookup564: pallet_recovery::pallet::Error<T>
   **/
  PalletRecoveryError: {
    _enum: ['NotAllowed', 'ZeroThreshold', 'NotEnoughFriends', 'MaxFriends', 'NotSorted', 'NotRecoverable', 'AlreadyRecoverable', 'AlreadyStarted', 'NotStarted', 'NotFriend', 'DelayPeriod', 'AlreadyVouched', 'Threshold', 'StillActive', 'AlreadyProxy', 'BadState']
  },
  /**
   * Lookup567: pallet_vesting::Releases
   **/
  PalletVestingReleases: {
    _enum: ['V0', 'V1']
  },
  /**
   * Lookup568: pallet_vesting::pallet::Error<T>
   **/
  PalletVestingError: {
    _enum: ['NotVesting', 'AtMaxVestingSchedules', 'AmountLow', 'ScheduleIndexOutOfBounds', 'InvalidScheduleParams']
  },
  /**
   * Lookup571: pallet_scheduler::Scheduled<Name, frame_support::traits::preimages::Bounded<rococo_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>, BlockNumber, rococo_runtime::OriginCaller, sp_core::crypto::AccountId32>
   **/
  PalletSchedulerScheduled: {
    maybeId: 'Option<[u8;32]>',
    priority: 'u8',
    call: 'FrameSupportPreimagesBounded',
    maybePeriodic: 'Option<(u32,u32)>',
    origin: 'RococoRuntimeOriginCaller'
  },
  /**
   * Lookup573: pallet_scheduler::pallet::Error<T>
   **/
  PalletSchedulerError: {
    _enum: ['FailedToSchedule', 'NotFound', 'TargetBlockNumberInPast', 'RescheduleNoChange', 'Named']
  },
  /**
   * Lookup576: pallet_proxy::ProxyDefinition<sp_core::crypto::AccountId32, rococo_runtime::ProxyType, BlockNumber>
   **/
  PalletProxyProxyDefinition: {
    delegate: 'AccountId32',
    proxyType: 'RococoRuntimeProxyType',
    delay: 'u32'
  },
  /**
   * Lookup580: pallet_proxy::Announcement<sp_core::crypto::AccountId32, primitive_types::H256, BlockNumber>
   **/
  PalletProxyAnnouncement: {
    real: 'AccountId32',
    callHash: 'H256',
    height: 'u32'
  },
  /**
   * Lookup582: pallet_proxy::pallet::Error<T>
   **/
  PalletProxyError: {
    _enum: ['TooMany', 'NotFound', 'NotProxy', 'Unproxyable', 'Duplicate', 'NoPermission', 'Unannounced', 'NoSelfProxy']
  },
  /**
   * Lookup584: pallet_multisig::Multisig<BlockNumber, Balance, sp_core::crypto::AccountId32, MaxApprovals>
   **/
  PalletMultisigMultisig: {
    when: 'PalletMultisigTimepoint',
    deposit: 'u128',
    depositor: 'AccountId32',
    approvals: 'Vec<AccountId32>'
  },
  /**
   * Lookup586: pallet_multisig::pallet::Error<T>
   **/
  PalletMultisigError: {
    _enum: ['MinimumThreshold', 'AlreadyApproved', 'NoApprovalsNeeded', 'TooFewSignatories', 'TooManySignatories', 'SignatoriesOutOfOrder', 'SenderInSignatories', 'NotFound', 'NotOwner', 'NoTimepoint', 'WrongTimepoint', 'UnexpectedTimepoint', 'MaxWeightTooLow', 'AlreadyStored']
  },
  /**
   * Lookup587: pallet_preimage::OldRequestStatus<sp_core::crypto::AccountId32, Balance>
   **/
  PalletPreimageOldRequestStatus: {
    _enum: {
      Unrequested: {
        deposit: '(AccountId32,u128)',
        len: 'u32',
      },
      Requested: {
        deposit: 'Option<(AccountId32,u128)>',
        count: 'u32',
        len: 'Option<u32>'
      }
    }
  },
  /**
   * Lookup590: pallet_preimage::RequestStatus<sp_core::crypto::AccountId32, frame_support::traits::tokens::fungible::HoldConsideration<A, F, R, D>>
   **/
  PalletPreimageRequestStatus: {
    _enum: {
      Unrequested: {
        ticket: '(AccountId32,u128)',
        len: 'u32',
      },
      Requested: {
        maybeTicket: 'Option<(AccountId32,u128)>',
        count: 'u32',
        maybeLen: 'Option<u32>'
      }
    }
  },
  /**
   * Lookup596: pallet_preimage::pallet::Error<T>
   **/
  PalletPreimageError: {
    _enum: ['TooBig', 'AlreadyNoted', 'NotAuthorized', 'NotNoted', 'Requested', 'NotRequested', 'TooMany', 'TooFew']
  },
  /**
   * Lookup597: pallet_asset_rate::pallet::Error<T>
   **/
  PalletAssetRateError: {
    _enum: ['UnknownAssetKind', 'AlreadyExists']
  },
  /**
   * Lookup598: pallet_bounties::Bounty<sp_core::crypto::AccountId32, Balance, BlockNumber>
   **/
  PalletBountiesBounty: {
    proposer: 'AccountId32',
    value: 'u128',
    fee: 'u128',
    curatorDeposit: 'u128',
    bond: 'u128',
    status: 'PalletBountiesBountyStatus'
  },
  /**
   * Lookup599: pallet_bounties::BountyStatus<sp_core::crypto::AccountId32, BlockNumber>
   **/
  PalletBountiesBountyStatus: {
    _enum: {
      Proposed: 'Null',
      Approved: 'Null',
      Funded: 'Null',
      CuratorProposed: {
        curator: 'AccountId32',
      },
      Active: {
        curator: 'AccountId32',
        updateDue: 'u32',
      },
      PendingPayout: {
        curator: 'AccountId32',
        beneficiary: 'AccountId32',
        unlockAt: 'u32'
      }
    }
  },
  /**
   * Lookup601: pallet_bounties::pallet::Error<T, I>
   **/
  PalletBountiesError: {
    _enum: ['InsufficientProposersBalance', 'InvalidIndex', 'ReasonTooBig', 'UnexpectedStatus', 'RequireCurator', 'InvalidValue', 'InvalidFee', 'PendingPayout', 'Premature', 'HasActiveChildBounty', 'TooManyQueued']
  },
  /**
   * Lookup602: pallet_child_bounties::ChildBounty<sp_core::crypto::AccountId32, Balance, BlockNumber>
   **/
  PalletChildBountiesChildBounty: {
    parentBounty: 'u32',
    value: 'u128',
    fee: 'u128',
    curatorDeposit: 'u128',
    status: 'PalletChildBountiesChildBountyStatus'
  },
  /**
   * Lookup603: pallet_child_bounties::ChildBountyStatus<sp_core::crypto::AccountId32, BlockNumber>
   **/
  PalletChildBountiesChildBountyStatus: {
    _enum: {
      Added: 'Null',
      CuratorProposed: {
        curator: 'AccountId32',
      },
      Active: {
        curator: 'AccountId32',
      },
      PendingPayout: {
        curator: 'AccountId32',
        beneficiary: 'AccountId32',
        unlockAt: 'u32'
      }
    }
  },
  /**
   * Lookup604: pallet_child_bounties::pallet::Error<T>
   **/
  PalletChildBountiesError: {
    _enum: ['ParentBountyNotActive', 'InsufficientBountyBalance', 'TooManyChildBounties']
  },
  /**
   * Lookup607: pallet_nis::pallet::Bid<Balance, sp_core::crypto::AccountId32>
   **/
  PalletNisBid: {
    amount: 'u128',
    who: 'AccountId32'
  },
  /**
   * Lookup609: pallet_nis::pallet::SummaryRecord<BlockNumber, Balance>
   **/
  PalletNisSummaryRecord: {
    proportionOwed: 'Perquintill',
    index: 'u32',
    thawed: 'Perquintill',
    lastPeriod: 'u32',
    receiptsOnHold: 'u128'
  },
  /**
   * Lookup610: pallet_nis::pallet::ReceiptRecord<sp_core::crypto::AccountId32, BlockNumber, Balance>
   **/
  PalletNisReceiptRecord: {
    proportion: 'Perquintill',
    owner: 'Option<(AccountId32,u128)>',
    expiry: 'u32'
  },
  /**
   * Lookup612: pallet_nis::pallet::Error<T>
   **/
  PalletNisError: {
    _enum: ['DurationTooSmall', 'DurationTooBig', 'AmountTooSmall', 'BidTooLow', 'UnknownReceipt', 'NotOwner', 'NotExpired', 'UnknownBid', 'PortionTooBig', 'Unfunded', 'AlreadyFunded', 'Throttled', 'MakesDust', 'AlreadyCommunal', 'AlreadyPrivate']
  },
  /**
   * Lookup616: polkadot_runtime_parachains::configuration::HostConfiguration<BlockNumber>
   **/
  PolkadotRuntimeParachainsConfigurationHostConfiguration: {
    maxCodeSize: 'u32',
    maxHeadDataSize: 'u32',
    maxUpwardQueueCount: 'u32',
    maxUpwardQueueSize: 'u32',
    maxUpwardMessageSize: 'u32',
    maxUpwardMessageNumPerCandidate: 'u32',
    hrmpMaxMessageNumPerCandidate: 'u32',
    validationUpgradeCooldown: 'u32',
    validationUpgradeDelay: 'u32',
    asyncBackingParams: 'PolkadotPrimitivesV6AsyncBackingAsyncBackingParams',
    maxPovSize: 'u32',
    maxDownwardMessageSize: 'u32',
    hrmpMaxParachainOutboundChannels: 'u32',
    hrmpSenderDeposit: 'u128',
    hrmpRecipientDeposit: 'u128',
    hrmpChannelMaxCapacity: 'u32',
    hrmpChannelMaxTotalSize: 'u32',
    hrmpMaxParachainInboundChannels: 'u32',
    hrmpChannelMaxMessageSize: 'u32',
    executorParams: 'PolkadotPrimitivesV6ExecutorParams',
    codeRetentionPeriod: 'u32',
    onDemandCores: 'u32',
    onDemandRetries: 'u32',
    onDemandQueueMaxSize: 'u32',
    onDemandTargetQueueUtilization: 'Perbill',
    onDemandFeeVariability: 'Perbill',
    onDemandBaseFee: 'u128',
    onDemandTtl: 'u32',
    groupRotationFrequency: 'u32',
    parasAvailabilityPeriod: 'u32',
    schedulingLookahead: 'u32',
    maxValidatorsPerCore: 'Option<u32>',
    maxValidators: 'Option<u32>',
    disputePeriod: 'u32',
    disputePostConclusionAcceptancePeriod: 'u32',
    noShowSlots: 'u32',
    nDelayTranches: 'u32',
    zerothDelayTrancheWidth: 'u32',
    neededApprovals: 'u32',
    relayVrfModuloSamples: 'u32',
    pvfVotingTtl: 'u32',
    minimumValidationUpgradeDelay: 'u32',
    minimumBackingVotes: 'u32',
    nodeFeatures: 'BitVec'
  },
  /**
   * Lookup619: polkadot_runtime_parachains::configuration::pallet::Error<T>
   **/
  PolkadotRuntimeParachainsConfigurationPalletError: {
    _enum: ['InvalidNewValue']
  },
  /**
   * Lookup622: polkadot_runtime_parachains::shared::AllowedRelayParentsTracker<primitive_types::H256, BlockNumber>
   **/
  PolkadotRuntimeParachainsSharedAllowedRelayParentsTracker: {
    buffer: 'Vec<(H256,H256)>',
    latestNumber: 'u32'
  },
  /**
   * Lookup625: polkadot_runtime_parachains::inclusion::AvailabilityBitfieldRecord<N>
   **/
  PolkadotRuntimeParachainsInclusionAvailabilityBitfieldRecord: {
    bitfield: 'BitVec',
    submittedAt: 'u32'
  },
  /**
   * Lookup626: polkadot_runtime_parachains::inclusion::CandidatePendingAvailability<primitive_types::H256, N>
   **/
  PolkadotRuntimeParachainsInclusionCandidatePendingAvailability: {
    _alias: {
      hash_: 'hash'
    },
    core: 'u32',
    hash_: 'H256',
    descriptor: 'PolkadotPrimitivesV6CandidateDescriptor',
    availabilityVotes: 'BitVec',
    backers: 'BitVec',
    relayParentNumber: 'u32',
    backedInNumber: 'u32',
    backingGroup: 'u32'
  },
  /**
   * Lookup627: polkadot_runtime_parachains::inclusion::pallet::Error<T>
   **/
  PolkadotRuntimeParachainsInclusionPalletError: {
    _enum: ['UnsortedOrDuplicateValidatorIndices', 'UnsortedOrDuplicateDisputeStatementSet', 'UnsortedOrDuplicateBackedCandidates', 'UnexpectedRelayParent', 'WrongBitfieldSize', 'BitfieldAllZeros', 'BitfieldDuplicateOrUnordered', 'ValidatorIndexOutOfBounds', 'InvalidBitfieldSignature', 'UnscheduledCandidate', 'CandidateScheduledBeforeParaFree', 'ScheduledOutOfOrder', 'HeadDataTooLarge', 'PrematureCodeUpgrade', 'NewCodeTooLarge', 'DisallowedRelayParent', 'InvalidAssignment', 'InvalidGroupIndex', 'InsufficientBacking', 'InvalidBacking', 'NotCollatorSigned', 'ValidationDataHashMismatch', 'IncorrectDownwardMessageHandling', 'InvalidUpwardMessages', 'HrmpWatermarkMishandling', 'InvalidOutboundHrmp', 'InvalidValidationCodeHash', 'ParaHeadMismatch', 'BitfieldReferencesFreedCore']
  },
  /**
   * Lookup628: polkadot_primitives::v6::ScrapedOnChainVotes<primitive_types::H256>
   **/
  PolkadotPrimitivesV6ScrapedOnChainVotes: {
    session: 'u32',
    backingValidatorsPerCandidate: 'Vec<(PolkadotPrimitivesV6CandidateReceipt,Vec<(u32,PolkadotPrimitivesV6ValidityAttestation)>)>',
    disputes: 'Vec<PolkadotPrimitivesV6DisputeStatementSet>'
  },
  /**
   * Lookup633: polkadot_runtime_parachains::paras_inherent::pallet::Error<T>
   **/
  PolkadotRuntimeParachainsParasInherentPalletError: {
    _enum: ['TooManyInclusionInherents', 'InvalidParentHeader', 'CandidateConcludedInvalid', 'InherentOverweight', 'DisputeStatementsUnsortedOrDuplicates', 'DisputeInvalid']
  },
  /**
   * Lookup636: polkadot_runtime_parachains::scheduler::pallet::CoreOccupied<N>
   **/
  PolkadotRuntimeParachainsSchedulerPalletCoreOccupied: {
    _enum: {
      Free: 'Null',
      Paras: 'PolkadotRuntimeParachainsSchedulerPalletParasEntry'
    }
  },
  /**
   * Lookup637: polkadot_runtime_parachains::scheduler::pallet::ParasEntry<N>
   **/
  PolkadotRuntimeParachainsSchedulerPalletParasEntry: {
    assignment: 'PolkadotRuntimeParachainsSchedulerCommonAssignment',
    availabilityTimeouts: 'u32',
    ttl: 'u32'
  },
  /**
   * Lookup638: polkadot_runtime_parachains::scheduler::common::Assignment
   **/
  PolkadotRuntimeParachainsSchedulerCommonAssignment: {
    paraId: 'u32'
  },
  /**
   * Lookup644: polkadot_runtime_parachains::paras::PvfCheckActiveVoteState<BlockNumber>
   **/
  PolkadotRuntimeParachainsParasPvfCheckActiveVoteState: {
    votesAccept: 'BitVec',
    votesReject: 'BitVec',
    age: 'u32',
    createdAt: 'u32',
    causes: 'Vec<PolkadotRuntimeParachainsParasPvfCheckCause>'
  },
  /**
   * Lookup646: polkadot_runtime_parachains::paras::PvfCheckCause<BlockNumber>
   **/
  PolkadotRuntimeParachainsParasPvfCheckCause: {
    _enum: {
      Onboarding: 'u32',
      Upgrade: {
        id: 'u32',
        includedAt: 'u32',
        setGoAhead: 'PolkadotRuntimeParachainsParasSetGoAhead'
      }
    }
  },
  /**
   * Lookup647: polkadot_runtime_parachains::paras::SetGoAhead
   **/
  PolkadotRuntimeParachainsParasSetGoAhead: {
    _enum: ['Yes', 'No']
  },
  /**
   * Lookup650: polkadot_runtime_parachains::paras::ParaLifecycle
   **/
  PolkadotRuntimeParachainsParasParaLifecycle: {
    _enum: ['Onboarding', 'Parathread', 'Parachain', 'UpgradingParathread', 'DowngradingParachain', 'OffboardingParathread', 'OffboardingParachain']
  },
  /**
   * Lookup652: polkadot_runtime_parachains::paras::ParaPastCodeMeta<N>
   **/
  PolkadotRuntimeParachainsParasParaPastCodeMeta: {
    upgradeTimes: 'Vec<PolkadotRuntimeParachainsParasReplacementTimes>',
    lastPruned: 'Option<u32>'
  },
  /**
   * Lookup654: polkadot_runtime_parachains::paras::ReplacementTimes<N>
   **/
  PolkadotRuntimeParachainsParasReplacementTimes: {
    expectedAt: 'u32',
    activatedAt: 'u32'
  },
  /**
   * Lookup656: polkadot_primitives::v6::UpgradeGoAhead
   **/
  PolkadotPrimitivesV6UpgradeGoAhead: {
    _enum: ['Abort', 'GoAhead']
  },
  /**
   * Lookup657: polkadot_primitives::v6::UpgradeRestriction
   **/
  PolkadotPrimitivesV6UpgradeRestriction: {
    _enum: ['Present']
  },
  /**
   * Lookup658: polkadot_runtime_parachains::paras::pallet::Error<T>
   **/
  PolkadotRuntimeParachainsParasPalletError: {
    _enum: ['NotRegistered', 'CannotOnboard', 'CannotOffboard', 'CannotUpgrade', 'CannotDowngrade', 'PvfCheckStatementStale', 'PvfCheckStatementFuture', 'PvfCheckValidatorIndexOutOfBounds', 'PvfCheckInvalidSignature', 'PvfCheckDoubleVote', 'PvfCheckSubjectInvalid', 'CannotUpgradeCode']
  },
  /**
   * Lookup660: polkadot_runtime_parachains::initializer::BufferedSessionChange
   **/
  PolkadotRuntimeParachainsInitializerBufferedSessionChange: {
    validators: 'Vec<PolkadotPrimitivesV6ValidatorAppPublic>',
    queued: 'Vec<PolkadotPrimitivesV6ValidatorAppPublic>',
    sessionIndex: 'u32'
  },
  /**
   * Lookup662: polkadot_core_primitives::InboundDownwardMessage<BlockNumber>
   **/
  PolkadotCorePrimitivesInboundDownwardMessage: {
    sentAt: 'u32',
    msg: 'Bytes'
  },
  /**
   * Lookup663: polkadot_runtime_parachains::hrmp::HrmpOpenChannelRequest
   **/
  PolkadotRuntimeParachainsHrmpHrmpOpenChannelRequest: {
    confirmed: 'bool',
    age: 'u32',
    senderDeposit: 'u128',
    maxMessageSize: 'u32',
    maxCapacity: 'u32',
    maxTotalSize: 'u32'
  },
  /**
   * Lookup665: polkadot_runtime_parachains::hrmp::HrmpChannel
   **/
  PolkadotRuntimeParachainsHrmpHrmpChannel: {
    maxCapacity: 'u32',
    maxTotalSize: 'u32',
    maxMessageSize: 'u32',
    msgCount: 'u32',
    totalSize: 'u32',
    mqcHead: 'Option<H256>',
    senderDeposit: 'u128',
    recipientDeposit: 'u128'
  },
  /**
   * Lookup667: polkadot_core_primitives::InboundHrmpMessage<BlockNumber>
   **/
  PolkadotCorePrimitivesInboundHrmpMessage: {
    sentAt: 'u32',
    data: 'Bytes'
  },
  /**
   * Lookup670: polkadot_runtime_parachains::hrmp::pallet::Error<T>
   **/
  PolkadotRuntimeParachainsHrmpPalletError: {
    _enum: ['OpenHrmpChannelToSelf', 'OpenHrmpChannelInvalidRecipient', 'OpenHrmpChannelZeroCapacity', 'OpenHrmpChannelCapacityExceedsLimit', 'OpenHrmpChannelZeroMessageSize', 'OpenHrmpChannelMessageSizeExceedsLimit', 'OpenHrmpChannelAlreadyExists', 'OpenHrmpChannelAlreadyRequested', 'OpenHrmpChannelLimitExceeded', 'AcceptHrmpChannelDoesntExist', 'AcceptHrmpChannelAlreadyConfirmed', 'AcceptHrmpChannelLimitExceeded', 'CloseHrmpChannelUnauthorized', 'CloseHrmpChannelDoesntExist', 'CloseHrmpChannelAlreadyUnderway', 'CancelHrmpOpenChannelUnauthorized', 'OpenHrmpChannelDoesntExist', 'OpenHrmpChannelAlreadyConfirmed', 'WrongWitness', 'ChannelCreationNotAuthorized']
  },
  /**
   * Lookup672: polkadot_primitives::v6::SessionInfo
   **/
  PolkadotPrimitivesV6SessionInfo: {
    activeValidatorIndices: 'Vec<u32>',
    randomSeed: '[u8;32]',
    disputePeriod: 'u32',
    validators: 'PolkadotPrimitivesV6IndexedVecValidatorIndex',
    discoveryKeys: 'Vec<SpAuthorityDiscoveryAppPublic>',
    assignmentKeys: 'Vec<PolkadotPrimitivesV6AssignmentAppPublic>',
    validatorGroups: 'PolkadotPrimitivesV6IndexedVecGroupIndex',
    nCores: 'u32',
    zerothDelayTrancheWidth: 'u32',
    relayVrfModuloSamples: 'u32',
    nDelayTranches: 'u32',
    noShowSlots: 'u32',
    neededApprovals: 'u32'
  },
  /**
   * Lookup673: polkadot_primitives::v6::IndexedVec<polkadot_primitives::v6::ValidatorIndex, polkadot_primitives::v6::validator_app::Public>
   **/
  PolkadotPrimitivesV6IndexedVecValidatorIndex: 'Vec<PolkadotPrimitivesV6ValidatorAppPublic>',
  /**
   * Lookup675: polkadot_primitives::v6::IndexedVec<polkadot_primitives::v6::GroupIndex, V>
   **/
  PolkadotPrimitivesV6IndexedVecGroupIndex: 'Vec<Vec<u32>>',
  /**
   * Lookup677: polkadot_primitives::v6::DisputeState<N>
   **/
  PolkadotPrimitivesV6DisputeState: {
    validatorsFor: 'BitVec',
    validatorsAgainst: 'BitVec',
    start: 'u32',
    concludedAt: 'Option<u32>'
  },
  /**
   * Lookup679: polkadot_runtime_parachains::disputes::pallet::Error<T>
   **/
  PolkadotRuntimeParachainsDisputesPalletError: {
    _enum: ['DuplicateDisputeStatementSets', 'AncientDisputeStatement', 'ValidatorIndexOutOfBounds', 'InvalidSignature', 'DuplicateStatement', 'SingleSidedDispute', 'MaliciousBacker', 'MissingBackingVotes', 'UnconfirmedDispute']
  },
  /**
   * Lookup680: polkadot_primitives::v6::slashing::PendingSlashes
   **/
  PolkadotPrimitivesV6SlashingPendingSlashes: {
    _alias: {
      keys_: 'keys'
    },
    keys_: 'BTreeMap<u32, PolkadotPrimitivesV6ValidatorAppPublic>',
    kind: 'PolkadotPrimitivesV6SlashingSlashingOffenceKind'
  },
  /**
   * Lookup684: polkadot_runtime_parachains::disputes::slashing::pallet::Error<T>
   **/
  PolkadotRuntimeParachainsDisputesSlashingPalletError: {
    _enum: ['InvalidKeyOwnershipProof', 'InvalidSessionIndex', 'InvalidCandidateHash', 'InvalidValidatorIndex', 'ValidatorIndexIdMismatch', 'DuplicateSlashingReport']
  },
  /**
   * Lookup685: pallet_message_queue::BookState<polkadot_runtime_parachains::inclusion::AggregateMessageOrigin>
   **/
  PalletMessageQueueBookState: {
    _alias: {
      size_: 'size'
    },
    begin: 'u32',
    end: 'u32',
    count: 'u32',
    readyNeighbours: 'Option<PalletMessageQueueNeighbours>',
    messageCount: 'u64',
    size_: 'u64'
  },
  /**
   * Lookup687: pallet_message_queue::Neighbours<polkadot_runtime_parachains::inclusion::AggregateMessageOrigin>
   **/
  PalletMessageQueueNeighbours: {
    prev: 'PolkadotRuntimeParachainsInclusionAggregateMessageOrigin',
    next: 'PolkadotRuntimeParachainsInclusionAggregateMessageOrigin'
  },
  /**
   * Lookup689: pallet_message_queue::Page<Size, HeapSize>
   **/
  PalletMessageQueuePage: {
    remaining: 'u32',
    remainingSize: 'u32',
    firstIndex: 'u32',
    first: 'u32',
    last: 'u32',
    heap: 'Bytes'
  },
  /**
   * Lookup691: pallet_message_queue::pallet::Error<T>
   **/
  PalletMessageQueueError: {
    _enum: ['NotReapable', 'NoPage', 'NoMessage', 'AlreadyProcessed', 'Queued', 'InsufficientWeight', 'TemporarilyUnprocessable', 'QueuePaused']
  },
  /**
   * Lookup693: polkadot_runtime_parachains::assigner_on_demand::CoreAffinityCount
   **/
  PolkadotRuntimeParachainsAssignerOnDemandCoreAffinityCount: {
    coreIdx: 'u32',
    count: 'u32'
  },
  /**
   * Lookup694: polkadot_runtime_parachains::assigner_on_demand::pallet::Error<T>
   **/
  PolkadotRuntimeParachainsAssignerOnDemandPalletError: {
    _enum: ['InvalidParaId', 'QueueFull', 'SpotPriceHigherThanMaxAmount', 'NoOnDemandCores']
  },
  /**
   * Lookup695: polkadot_runtime_common::paras_registrar::ParaInfo<sp_core::crypto::AccountId32, Balance>
   **/
  PolkadotRuntimeCommonParasRegistrarParaInfo: {
    manager: 'AccountId32',
    deposit: 'u128',
    locked: 'Option<bool>'
  },
  /**
   * Lookup697: polkadot_runtime_common::paras_registrar::pallet::Error<T>
   **/
  PolkadotRuntimeCommonParasRegistrarPalletError: {
    _enum: ['NotRegistered', 'AlreadyRegistered', 'NotOwner', 'CodeTooLarge', 'HeadDataTooLarge', 'NotParachain', 'NotParathread', 'CannotDeregister', 'CannotDowngrade', 'CannotUpgrade', 'ParaLocked', 'NotReserved', 'EmptyCode', 'CannotSwap']
  },
  /**
   * Lookup699: polkadot_runtime_common::slots::pallet::Error<T>
   **/
  PolkadotRuntimeCommonSlotsPalletError: {
    _enum: ['ParaNotOnboarding', 'LeaseError']
  },
  /**
   * Lookup704: polkadot_runtime_common::auctions::pallet::Error<T>
   **/
  PolkadotRuntimeCommonAuctionsPalletError: {
    _enum: ['AuctionInProgress', 'LeasePeriodInPast', 'ParaNotRegistered', 'NotCurrentAuction', 'NotAuction', 'AuctionEnded', 'AlreadyLeasedOut']
  },
  /**
   * Lookup705: polkadot_runtime_common::crowdloan::FundInfo<sp_core::crypto::AccountId32, Balance, BlockNumber, LeasePeriod>
   **/
  PolkadotRuntimeCommonCrowdloanFundInfo: {
    depositor: 'AccountId32',
    verifier: 'Option<SpRuntimeMultiSigner>',
    deposit: 'u128',
    raised: 'u128',
    end: 'u32',
    cap: 'u128',
    lastContribution: 'PolkadotRuntimeCommonCrowdloanLastContribution',
    firstPeriod: 'u32',
    lastPeriod: 'u32',
    fundIndex: 'u32'
  },
  /**
   * Lookup706: polkadot_runtime_common::crowdloan::LastContribution<BlockNumber>
   **/
  PolkadotRuntimeCommonCrowdloanLastContribution: {
    _enum: {
      Never: 'Null',
      PreEnding: 'u32',
      Ending: 'u32'
    }
  },
  /**
   * Lookup707: polkadot_runtime_common::crowdloan::pallet::Error<T>
   **/
  PolkadotRuntimeCommonCrowdloanPalletError: {
    _enum: ['FirstPeriodInPast', 'FirstPeriodTooFarInFuture', 'LastPeriodBeforeFirstPeriod', 'LastPeriodTooFarInFuture', 'CannotEndInPast', 'EndTooFarInFuture', 'Overflow', 'ContributionTooSmall', 'InvalidParaId', 'CapExceeded', 'ContributionPeriodOver', 'InvalidOrigin', 'NotParachain', 'LeaseActive', 'BidOrLeaseActive', 'FundNotEnded', 'NoContributions', 'NotReadyToDissolve', 'InvalidSignature', 'MemoTooLarge', 'AlreadyInNewRaise', 'VrfDelayInProgress', 'NoLeasePeriod']
  },
  /**
   * Lookup708: pallet_xcm::pallet::QueryStatus<BlockNumber>
   **/
  PalletXcmQueryStatus: {
    _enum: {
      Pending: {
        responder: 'XcmVersionedMultiLocation',
        maybeMatchQuerier: 'Option<XcmVersionedMultiLocation>',
        maybeNotify: 'Option<(u8,u8)>',
        timeout: 'u32',
      },
      VersionNotifier: {
        origin: 'XcmVersionedMultiLocation',
        isActive: 'bool',
      },
      Ready: {
        response: 'XcmVersionedResponse',
        at: 'u32'
      }
    }
  },
  /**
   * Lookup712: xcm::VersionedResponse
   **/
  XcmVersionedResponse: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      V2: 'XcmV2Response',
      V3: 'XcmV3Response'
    }
  },
  /**
   * Lookup718: pallet_xcm::pallet::VersionMigrationStage
   **/
  PalletXcmVersionMigrationStage: {
    _enum: {
      MigrateSupportedVersion: 'Null',
      MigrateVersionNotifiers: 'Null',
      NotifyCurrentTargets: 'Option<Bytes>',
      MigrateAndNotifyOldTargets: 'Null'
    }
  },
  /**
   * Lookup721: xcm::VersionedAssetId
   **/
  XcmVersionedAssetId: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      __Unused2: 'Null',
      V3: 'XcmV3MultiassetAssetId'
    }
  },
  /**
   * Lookup722: pallet_xcm::pallet::RemoteLockedFungibleRecord<ConsumerIdentifier, MaxConsumers>
   **/
  PalletXcmRemoteLockedFungibleRecord: {
    amount: 'u128',
    owner: 'XcmVersionedMultiLocation',
    locker: 'XcmVersionedMultiLocation',
    consumers: 'Vec<(Null,u128)>'
  },
  /**
   * Lookup729: pallet_xcm::pallet::Error<T>
   **/
  PalletXcmError: {
    _enum: ['Unreachable', 'SendFailure', 'Filtered', 'UnweighableMessage', 'DestinationNotInvertible', 'Empty', 'CannotReanchor', 'TooManyAssets', 'InvalidOrigin', 'BadVersion', 'BadLocation', 'NoSubscription', 'AlreadySubscribed', 'CannotCheckOutTeleport', 'LowBalance', 'TooManyLocks', 'AccountNotSovereign', 'FeesNotMet', 'LockNotFound', 'InUse', 'InvalidAssetNotConcrete', 'InvalidAssetUnknownReserve', 'InvalidAssetUnsupportedReserve', 'TooManyReserves', 'LocalExecutionIncomplete']
  },
  /**
   * Lookup730: polkadot_runtime_common::paras_sudo_wrapper::pallet::Error<T>
   **/
  PolkadotRuntimeCommonParasSudoWrapperPalletError: {
    _enum: ['ParaDoesntExist', 'ParaAlreadyExists', 'ExceedsMaxMessageSize', 'CouldntCleanup', 'NotParathread', 'NotParachain', 'CannotUpgrade', 'CannotDowngrade']
  },
  /**
   * Lookup731: polkadot_runtime_common::assigned_slots::ParachainTemporarySlot<sp_core::crypto::AccountId32, LeasePeriod>
   **/
  PolkadotRuntimeCommonAssignedSlotsParachainTemporarySlot: {
    manager: 'AccountId32',
    periodBegin: 'u32',
    periodCount: 'u32',
    lastLease: 'Option<u32>',
    leaseCount: 'u32'
  },
  /**
   * Lookup732: polkadot_runtime_common::assigned_slots::pallet::Error<T>
   **/
  PolkadotRuntimeCommonAssignedSlotsPalletError: {
    _enum: ['ParaDoesntExist', 'NotParathread', 'CannotUpgrade', 'CannotDowngrade', 'SlotAlreadyAssigned', 'SlotNotAssigned', 'OngoingLeaseExists', 'MaxPermanentSlotsExceeded', 'MaxTemporarySlotsExceeded']
  },
  /**
   * Lookup733: pallet_sudo::pallet::Error<T>
   **/
  PalletSudoError: {
    _enum: ['RequireSudo']
  },
  /**
   * Lookup736: frame_system::extensions::check_non_zero_sender::CheckNonZeroSender<T>
   **/
  FrameSystemExtensionsCheckNonZeroSender: 'Null',
  /**
   * Lookup737: frame_system::extensions::check_spec_version::CheckSpecVersion<T>
   **/
  FrameSystemExtensionsCheckSpecVersion: 'Null',
  /**
   * Lookup738: frame_system::extensions::check_tx_version::CheckTxVersion<T>
   **/
  FrameSystemExtensionsCheckTxVersion: 'Null',
  /**
   * Lookup739: frame_system::extensions::check_genesis::CheckGenesis<T>
   **/
  FrameSystemExtensionsCheckGenesis: 'Null',
  /**
   * Lookup742: frame_system::extensions::check_nonce::CheckNonce<T>
   **/
  FrameSystemExtensionsCheckNonce: 'Compact<u32>',
  /**
   * Lookup743: frame_system::extensions::check_weight::CheckWeight<T>
   **/
  FrameSystemExtensionsCheckWeight: 'Null',
  /**
   * Lookup744: pallet_transaction_payment::ChargeTransactionPayment<T>
   **/
  PalletTransactionPaymentChargeTransactionPayment: 'Compact<u128>',
  /**
   * Lookup745: rococo_runtime::Runtime
   **/
  RococoRuntimeRuntime: 'Null'
};
