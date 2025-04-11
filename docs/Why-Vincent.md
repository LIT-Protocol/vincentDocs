---
slug: /
---

# Why Vincent?

# Overview

Vincent enables user's to delegate their wallets to Agentic applications for autonomous signing. Users can precisely define the scope of their delegation. For example, a delegated agent can sign only Uniswap swap transactions for a max of $100/day but it won't be able to sign any other type of transactions or exceed the spend limit set by the user. App delegations are stored the [Yellowstone](https://developer.litprotocol.com/connecting-to-a-lit-network/lit-blockchains/chronicle-yellowstone) blockchain and the Agent Wallets are managed by [Lit Protocol](https://developer.litprotocol.com/) which is an MPC TSS network.

## Why It's Secure

* Vincent is a fully decentralized Agent delegation system since the User delegations are stored on a blockchain instead of a centralized server managed by the App developer. Thus updating the User's delegation scopes always requires the user's consent and the App developer cannot unilaterally change the delegation scopes.
* User's have full control over their delegation and can revoke it at any time. They can also precisely describe the scope of the delegation like setting the max spend limit, max txns per day, requiring 2FA etc. All these delegation scopes or Policies must be met before signing any transaction on behalf of the user.
* Vincent delegations are enforced by Lit Protocol's MPC-TSS network which requires the consensus of at least 2/3rd of Lit node's to sign any transaction. Hence it's impossible for the App developer to sign any transaction without the user's consent.
* Lit Protocol's MPC-TSS network has several security mechanisms to prevent node collusion like an additional layer of hardware security since the nodes run inside a TEE (Trusted Execution Environment) which means the node operators can't tamper with the transactions. Also any malicious node operators are easily identified and slashed. You can read more about Lit Protocol's security mechanisms [here](https://developer.litprotocol.com/security/introduction).
