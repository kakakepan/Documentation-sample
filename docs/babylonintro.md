---

sidebar_label: Babylon Introduction
sidebar_position: 2
pagination_next: null
custom_edit_url: null

---
# Introduction
🎊 Welcome to the Babylonchain documentation.

## Overview
**Proof of Work** (PoW) and **Proof of Stake** (PoS) are the two primary mechanisms that validate blocks in a blockchain. Both mechanisms are needed to maintain the security of the blockchain, allowing users to add new cryptocurrency transactions. Each mechanism has its strengths and disadvantages. **PoW** needs miners to calculate random hashes, whereas **PoS** requires them to stake their coins. **PoW** is incredibly secure but consumes a great deal of energy and has a slow confirmation rate, whereas **PoS** is energy-efficient and has a fast confirmation rate.
## Proof of Stake
**Proof of Stake** is a blockchain technique for validating transaction blocks by staking miners' coins. Proof of Stake is an alternative to PoW to improve energy efficiency, environmental impact, and scalability. PoS is more attractive, however, there have been several security vulnerabilities with PoS.
## Proof of Stake Security Issues
Although PoS is more appealing than PoW, it is more open to attacks due to the lack of work supporting its security.
### Stake Re-Use Attack
This attack harms the majority of the PoS chains. **Stake re-use** is when the attacker removes its stakes from the original chain to re-use them in the attack chain.

The solution to this attack is **Social Consensus**, in which users must agree on the correct chain before unstaking is permitted. However, on the Cosmos chain, validators who wish to unstake tokens must wait approximately 21 days, which is extremely slow and inconsistent with the PoS's fast and efficient nature. An **external blockchain component** is another countermeasure to this attack. Bitcoin, for instance, can validate timestamps in a couple of hours, but its limited throughput prevents this from occurring.
## Babylon
This is where **Babylon** comes into play; **Babylon** eliminates Bitcoin's throughput limitations. Babylon is a timestamp aggregation service that leverages the security features of Bitcoin for various PoS networks. Babylon creates the means by which PoS chains communicate with Bitcoin and employs Bitcoin as the timestamping service for PoS. The Babylon team is comprised of Stanford consensus protocol researchers as well as experienced layer one developers from all over the world. Babylon's objective is to utilize Bitcoin's security to improve the security of Cosmos zones and other PoS chains.
## Why Babylon?
**Babylon** operates by combining the timestamps of numerous PoS chains into a single Bitcoin transaction. Babylon's cryptographic approach minimizes the size of Bitcoin stamps, resulting in a network footprint that is incredibly minimal and does not scale with the number of chains. Babylon improves PoS energy efficiency and speed while also enhancing PoW security.

- **Protecting Important Transactions**

Babylon utilizes Bitcoin security to safeguard its most important transactions, while standard transactions are quickly finalized.

- **Bootstrapping New Chains**

Babylon utilizes Bitcoin security to bootstrap new zones that have low token valuation.

- **Recovering from Stalling and Censorship**

The blocked and censored transactions can be entered into the ledger using Babylon as a backup.

- **Protecting Bridges**

Babylon safeguards Bitcoin and Proof of Stake chain communications.