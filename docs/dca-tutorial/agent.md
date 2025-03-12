---
sidebar_position: 3
---

# Creating Your DCA Agent

In this section, we'll implement the core functionality of our Dollar Cost Averaging agent. We'll start by setting up the configuration and basic agent structure.

## Configuration Module

First, let's create a configuration module to load our environment variables. Create a file named `src/config.ts`:

```typescript
import dotenv from 'dotenv';
import { ethers } from 'ethers';

// Load environment variables
dotenv.config();

// Network configuration
export const NETWORK = process.env.NETWORK || 'goerli';
export const RPC_URL = process.env.RPC_URL || 'https://goerli.infura.io/v3/YOUR_INFURA_KEY';

// Vincent configuration
export const VINCENT_APP_ID = process.env.VINCENT_APP_ID || '';
export const VINCENT_ROLE_ID = process.env.VINCENT_ROLE_ID || '';

// DCA configuration
export const DCA_AMOUNT = parseFloat(process.env.DCA_AMOUNT || '0.01');
export const DCA_FREQUENCY = process.env.DCA_FREQUENCY || 'daily';
export const DCA_TOKEN_ADDRESS = process.env.DCA_TOKEN_ADDRESS || '';

// Provider setup
export const provider = new ethers.providers.JsonRpcProvider(RPC_URL);

// Frequency to cron expression mapping
export const frequencyToCron = {
  daily: '0 0 * * *',       // Run at midnight every day
  weekly: '0 0 * * 1',      // Run at midnight on Monday
  monthly: '0 0 1 * *',     // Run at midnight on the 1st of each month
};

// Validate configuration
export function validateConfig() {
  if (!VINCENT_APP_ID || !VINCENT_ROLE_ID) {
    throw new Error('Vincent configuration missing. Please set VINCENT_APP_ID and VINCENT_ROLE_ID in .env file');
  }
  
  if (!DCA_TOKEN_ADDRESS) {
    throw new Error('DCA token address missing. Please set DCA_TOKEN_ADDRESS in .env file');
  }
  
  if (isNaN(DCA_AMOUNT) || DCA_AMOUNT <= 0) {
    throw new Error('Invalid DCA amount. Please set a positive number for DCA_AMOUNT in .env file');
  }
  
  if (!['daily', 'weekly', 'monthly'].includes(DCA_FREQUENCY)) {
    throw new Error('Invalid DCA frequency. Please set DCA_FREQUENCY to daily, weekly, or monthly in .env file');
  }
  
  return true;
}
```

## Agent Core

Now, let's create the core agent functionality in `src/agent.ts`:

```typescript
import { ethers } from 'ethers';
import * as cron from 'node-cron';
import { provider, frequencyToCron } from './config';
import { executeDCA } from './dca';
import { initializeVincent } from './vincent';

export class DCAAgent {
  private cronJob: cron.ScheduledTask | null = null;
  private isRunning = false;
  private vincentWallet: any; // We'll type this properly when we implement Vincent integration
  
  constructor(
    private readonly frequency: string,
    private readonly tokenAddress: string,
    private readonly amount: number
  ) {}
  
  async initialize() {
    console.log('Initializing DCA Agent...');
    
    // Initialize Vincent wallet
    this.vincentWallet = await initializeVincent();
    
    console.log(`DCA Agent initialized for ${this.tokenAddress}`);
    console.log(`Schedule: ${this.frequency} purchases of ${this.amount} ETH`);
    
    return this;
  }
  
  start() {
    if (this.isRunning) {
      console.log('DCA Agent is already running');
      return;
    }
    
    const cronExpression = frequencyToCron[this.frequency as keyof typeof frequencyToCron];
    
    if (!cronExpression) {
      throw new Error(`Invalid frequency: ${this.frequency}`);
    }
    
    this.cronJob = cron.schedule(cronExpression, async () => {
      try {
        console.log(`Executing DCA purchase of ${this.amount} ETH worth of ${this.tokenAddress}`);
        await this.executePurchase();
      } catch (error) {
        console.error('Error executing DCA purchase:', error);
      }
    });
    
    this.isRunning = true;
    console.log(`DCA Agent started with schedule: ${cronExpression}`);
  }
  
  stop() {
    if (!this.isRunning || !this.cronJob) {
      console.log('DCA Agent is not running');
      return;
    }
    
    this.cronJob.stop();
    this.isRunning = false;
    console.log('DCA Agent stopped');
  }
  
  async executePurchase() {
    // This will be implemented in the DCA module
    await executeDCA(
      this.vincentWallet,
      this.tokenAddress,
      ethers.utils.parseEther(this.amount.toString())
    );
  }
  
  getStatus() {
    return {
      isRunning: this.isRunning,
      frequency: this.frequency,
      tokenAddress: this.tokenAddress,
      amount: this.amount,
    };
  }
}
```

## Main Entry Point

Let's create our main entry point in `src/index.ts`:

```typescript
import { DCAAgent } from './agent';
import { 
  validateConfig, 
  DCA_FREQUENCY, 
  DCA_TOKEN_ADDRESS, 
  DCA_AMOUNT 
} from './config';

async function main() {
  try {
    // Validate configuration
    validateConfig();
    
    // Initialize and start the DCA agent
    const agent = await new DCAAgent(
      DCA_FREQUENCY,
      DCA_TOKEN_ADDRESS,
      DCA_AMOUNT
    ).initialize();
    
    agent.start();
    
    // Handle graceful shutdown
    process.on('SIGINT', () => {
      console.log('Shutting down DCA Agent...');
      agent.stop();
      process.exit(0);
    });
    
    console.log('DCA Agent is running. Press Ctrl+C to stop.');
  } catch (error) {
    console.error('Failed to start DCA Agent:', error);
    process.exit(1);
  }
}

main();
```

In the next section, we'll implement the DCA logic that will handle the actual token purchases.
