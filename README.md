<div align="center">
  <h1>🍳 Web3 Scaffold</h1>
  <p>Jumpstart your Web3 development journey with our robust and easy-to-use scaffold. Let's cook up some code!</p>
  <p>Foundry : Smart contract development and testing</p>
  <p>NextJS + Wagmi + RainbowKit : Web3 Dapp development</p>
</div>

## 🚀 Getting Started

Before you begin, ensure you have the following tools installed:

- [NodeJS](https://nodejs.org/) (with Corepack)
- [Git](https://git-scm.com/)
- [Foundryup](https://book.getfoundry.sh/getting-started/installation#using-foundryup)
- [Slither](https://github.com/crytic/slither) (optional)

## 🔫 Running Locally

To get started, follow these steps:

1. Clone the repository to your local machine:

```bash
git clone
```

2. Navigate to the project directory:

```bash
cd web3-scaffold
```

3. Install the project dependencies:

```bash
corepack enable pnpm && pnpm install
```

4. Open a new terminal window and start the Anvil development chain:

```bash
pnpm contracts chain
```

4. Open a new terminal window and generate the contract artifacts:

```bash
pnpm local-deploy
```

4. Start the development server:

```bash
pnpm frontend dev
```

5. Open your browser and navigate to `http://localhost:3000` to view the application.

## 🤝 How to Contribute

We welcome contributions from the community with open arms! If you'd like to contribute, please see our [CONTRIBUTING.md](CONTRIBUTING.md) guide for information on how to get started.

<div align="center">
  <b>Let's build the future of Web3 together!</b>
</div>
