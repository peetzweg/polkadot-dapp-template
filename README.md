# Polkadot DApp Template (WIP)

## Todo

- ~~fix api types~~
- use [`@polkadot/typegen`](https://polkadot.js.org/docs/api/examples/promise/typegen) instead of `@polkadot/api-augment`
- allow for passing status callback?
- ~~context guards which assure `api`, `currentAccount` etc is set~~
- eager connect?
- rotate RPCs
- ~~RPC from url~~
- check if pallet is available
- describe decisions in README


## Goals

(**Note: Work in Progress**)

- don't use centralized services
- don't require a deployed backend
- production ready settings
- decentralized deployment possible
- runnable locally
- best typescript experience possible
- light client first
- use state for art tools for DApps in the Polkadot Ecosystem
- reasonable bundle size

## Stack

- typescript
- vite
- tailwindcss
- shadcn/ui
- react-query
- polkadotjs/api
- (polkadotjs/api-augment)

## Built in Components

- `<Web3Provider />`
- `<ApiProvider />`
- formatBalance
- parseToBalance TODO

## Typegen

(**Note: Work in Progress**)

```json
{
  "scripts": {
    "typegen": "pnpm typegen:defs && pnpm typegen:meta",
    "typegen:defs": "polkadot-types-from-defs --package sample-polkadotjs-typegen/interfaces --input ./src/interfaces --endpoint ./metadata.json",
    "typegen:meta": "polkadot-types-from-chain --package sample-polkadotjs-typegen/interfaces --endpoint ./metadata.json --output ./src/interfaces",
    "metadata": "curl -H \"Content-Type: application/json\" -d '{\"id\":\"1\", \"jsonrpc\":\"2.0\", \"method\": \"state_getMetadata\", \"params\":[]}' http://localhost:9944 > metadata.json"
  }
}
```

## Proof of Ink / Proof of Personhood

- zk api => webassembly polkadotjs or other.
- derivation path scheme /polkadot/personhood/context
- for apply key => /polkadot/personhood/apply
- bendersnatch zk
- fetch pages of members from storage

- get entropy from seed to derive new verifiable
- Verifiable repo => secret,open, create
- root => (revision index, page index) => rootkeys (revisionindex - page index) => members public keys


### Tasks to do POP POC

- root => ProofOfInk::add_design_family

- query available design families

- generate => k_new

- k_new => ProofOfInk::apply(signed(k_new))
- k_new => ProofOfInk::commit(signed(1), InkChoice::DesignedElective(0, 0), None)
- upload evidence
- k_new => ProofOfInk::submit_evidence(signed(1), [1; 32])

- pallet_mob_rule show case count
(- Intervene?)
- pallet_mob_rule show case state

- k_new => ProofOfInk::register(signed(1), key_1.clone())

- People Stuff =>
assert_ok!(People::refresh_root(nobody()));
assert_ok!(People::push_member(nobody(), 0));
assert_ok!(People::bake_root(nobody()));

### Raw Test

```rust

#[test]
fn everything_works() {
	new_test_ext().execute_with(|| {
		// Add a design family for tattoos. This is just a simple elective one with 10 designs.
		assert_ok!(ProofOfInk::add_design_family(root(), 0, FamilyKind::Designed { count: 10 }));

		// First participant applies, commits to a design and submits evidence...
		assert_ok!(ProofOfInk::apply(signed(1)));
		assert_ok!(ProofOfInk::commit(signed(1), InkChoice::DesignedElective(0, 0), None));

		// Evidence is uploaded to Bulletin chain here; hash of evidence compilation is [1; 32].

		assert_ok!(ProofOfInk::submit_evidence(signed(1), [1; 32]));

		// We can see that Mob Rule has been triggered and a case has been created.
		assert_eq!(pallet_mob_rule::CaseCount::<Test>::get(), 1);
		assert!(pallet_mob_rule::Cases::<Test>::get(0).is_some());

		// We force the outcome by governance.
		assert_ok!(MobRule::intervene(root(), 0, Judgement::Truth(Truth::ConfidentTrue)));

		// First person is now a proven - they register a special key and we bake the first root.
		let key_1 = TestMemberKey(1);
		assert_ok!(ProofOfInk::register(signed(1), key_1.clone()));
		assert_ok!(People::refresh_root(nobody()));
		assert_ok!(People::push_member(nobody(), 0));
		assert_ok!(People::bake_root(nobody()));

		let init_proof = |member| {
			// For this we need to know all the members. This proof generation would be done
			// off-chain (but on some device connected to the chain) so we need not be too concerned
			// about the iteration.
			// This code will need to be rewritten to work in JS (or whatever language the UI uses)
			// and a light-client.
			use pallet_people::{Root, RootKeys};
			let (_, revision, pages) = Root::<Test>::get().unwrap();
			let keys = (0..pages).map(|p| RootKeys::<Test>::get((revision, p))).flatten();
			TestVerifiable::open(member, keys).unwrap()
		};

		// The thing we want to do as an *anonymous* member under the Mob Rules context is set an
		// associated context-sensible account. This is a bit like a proxy account, except it
		// proxies to a personal alias, not an account and it will only work in this specific
		// context.
		let call: RuntimeCall = pallet_people::Call::<Test>::set_alias_account { account: 20 }.into();

		// We now make a proof that we're a member. This is a two-part affair - the first part
		// (called the "commitment") collects together all the keys which made the latest root and
		// thus generally needs access to the chain's state to know what these keys are. The second
		// part combines the output of this with the secret key and the message we want to sign in
		// order to create the final proof. This part can happen on an offline device as it doesn't
		// require much external data or chain-state. In this case our message is just the call we
		// want to execute.
		let commitment = init_proof(&key_1);
		let (proof, mob_1) = TestVerifiable::create(commitment, &key_1, &MOB_CONTEXT, &call.encode())
			.unwrap();
		assert_ok!(People::as_personal_alias(signed(20), MOB_CONTEXT, call.into(), proof));
		assert_eq!(
			pallet_people::AccountToAlias::<Test>::get(20),
			Some(ContextualAlias{context: MOB_CONTEXT, alias: mob_1.clone() }),
		);

		// Since it is now associated, we can use `under_alias` to execute any further calls for us
		// in the Mob Rules context. We start by altering the proxy account to be 30.
		let call: RuntimeCall = pallet_people::Call::<Test>::set_alias_account { account: 30 }.into();
		assert_ok!(People::under_alias(signed(20), call.into()));
		assert_eq!(
			pallet_people::AccountToAlias::<Test>::get(30),
			Some(ContextualAlias{context: MOB_CONTEXT, alias: mob_1}),
		);
		let call: RuntimeCall = pallet_people::Call::<Test>::set_alias_account { account: 30 }.into();
		assert_noop!(People::under_alias(signed(20), call.into()), pallet_people::Error::<Test>::InvalidAccount);
		// And then back again to 20...
		let call: RuntimeCall = pallet_people::Call::<Test>::set_alias_account { account: 20 }.into();
		assert_ok!(People::under_alias(signed(30), call.into()));

		let key_2 = 20;
	});
}

```