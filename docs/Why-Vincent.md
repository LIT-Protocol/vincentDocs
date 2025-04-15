---
slug: /
---

# Why Vincent?

	:::info App Dashboard
	Try out the Dollar-Cost-Averaging demo that buys top memecoins on Base here: https://demo.heyvincent.ai/
	:::

# Overview

Vincent allows users to delegate their wallets to agentic applications for autonomous transaction signing—while retaining precise control over the scope of that delegation. For instance, a user can authorize an agent to sign Uniswap swap transactions with a maximum spend limit of $100 per day, while explicitly preventing it from performing other types of transactions or exceeding the set limit. These app delegations are recorded on the [Yellowstone](https://developer.litprotocol.com/connecting-to-a-lit-network/lit-blockchains/chronicle-yellowstone) blockchain, and the associated Agent Wallets are secured and managed by [Lit Protocol](https://developer.litprotocol.com/), a decentralized MPC-TSS (Multi-Party Computation – Threshold Signature Scheme) network.

## Why It's Secure

* Vincent is a fully decentralized Agent delegation system. The User delegations are stored on a blockchain instead of a centralized server managed by the App developer. Additionally, updating the User's delegation scopes always requires the User's consent, and the App developer cannot unilaterally change the delegation scopes.
* Users have full control over their delegation and can revoke it at any time. They can also precisely describe the scope of the delegation like setting the max spend limit, max transactions per day, requiring 2FA etc. All these delegation scopes or Policies must be met before signing any transaction on behalf of the User.
* Vincent delegations are enforced by Lit Protocol's MPC-TSS (Multi-Party Computation - Threshold Signature Scheme) network which requires the consensus of at least 2/3rd of Lit node's to sign any transaction. Hence it's impossible for the App developer to sign any transaction without the User's consent.
* Lit Protocol's MPC-TSS network has several security mechanisms to prevent node collusion like an additional layer of hardware security since the nodes run inside a TEE (Trusted Execution Environment) which means the node operators can't tamper with the transactions. Also any malicious node operators are easily identified and slashed. You can read more about Lit Protocol's security mechanisms [here](https://developer.litprotocol.com/security/introduction).
