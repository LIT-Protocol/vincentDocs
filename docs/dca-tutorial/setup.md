---
sidebar_position: 2
---

# Setting Up Your Environment

Before we can build our Dollar Cost Averaging agent, we need to set up our development environment with the necessary tools and dependencies.

## Creating a New Project

First, let's create a new directory for our project and initialize it:

```bash
mkdir dca-agent
cd dca-agent
npm init -y
```

## Installing Dependencies

We'll need several packages to build our DCA agent:

```bash
npm install @lit-protocol/vincent-sdk ethers@5.7.2 node-cron dotenv
npm install typescript ts-node @types/node @types/node-cron --save-dev
```

Here's what each package does:

- `@lit-protocol/vincent-sdk`: Vincent's SDK for secure agent wallet integration
- `ethers`: Library for interacting with Ethereum and other EVM-compatible blockchains
- `node-cron`: For scheduling regular DCA purchases
- `dotenv`: For managing environment variables and secrets
- `typescript` and related packages: For type safety in our project

## TypeScript Configuration

Create a `tsconfig.json` file in your project root:

```json
{
  "compilerOptions": {
    "target": "es2020",
    "module": "commonjs",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true,
    "outDir": "./dist",
    "declaration": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

## Environment Setup

Create a `.env` file to store your configuration and secrets:

```
# Network Configuration
NETWORK=goerli
RPC_URL=https://goerli.infura.io/v3/YOUR_INFURA_KEY

# Vincent Configuration
VINCENT_APP_ID=your_app_id
VINCENT_ROLE_ID=your_role_id

# DCA Configuration
DCA_AMOUNT=0.01
DCA_FREQUENCY=daily  # daily, weekly, monthly
DCA_TOKEN_ADDRESS=0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984  # UNI token on Goerli
```

Make sure to add `.env` to your `.gitignore` file to avoid exposing sensitive information:

```bash
echo ".env" >> .gitignore
echo "node_modules" >> .gitignore
echo "dist" >> .gitignore
```

## Project Structure

Create the following directory structure for your project:

```
dca-agent/
├── src/
│   ├── config.ts
│   ├── agent.ts
│   ├── dca.ts
│   ├── vincent.ts
│   └── index.ts
├── .env
├── .gitignore
├── package.json
└── tsconfig.json
```

In the next section, we'll start implementing the core agent functionality.
