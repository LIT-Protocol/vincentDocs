---
sidebar_position: 6
---

# Testing Your DCA Agent

In this section, we'll test our Dollar Cost Averaging agent to ensure it works correctly before deploying it to production. We'll focus on testing the core functionality on a testnet to avoid using real funds during development.

## Setting Up Test Environment

Before testing, make sure you have:

1. A wallet with some testnet ETH (you can get Goerli ETH from a faucet)
2. Your `.env` file configured with the correct values
3. All dependencies installed

## Creating a Test Script

Let's create a comprehensive test script in `src/test-agent.ts`:

```typescript
import { ethers } from 'ethers';
import { DCAAgent } from './agent';
import { validateConfig, DCA_TOKEN_ADDRESS, provider } from './config';

// Simple ERC20 ABI for token interactions
const ERC20_ABI = [
  'function name() view returns (string)',
  'function symbol() view returns (string)',
  'function decimals() view returns (uint8)',
  'function balanceOf(address owner) view returns (uint256)',
];

async function testAgent() {
  try {
    console.log('Testing DCA Agent...');
    
    // Validate configuration
    validateConfig();
    
    // Get token information
    const tokenContract = new ethers.Contract(
      DCA_TOKEN_ADDRESS,
      ERC20_ABI,
      provider
    );
    
    const tokenName = await tokenContract.name();
    const tokenSymbol = await tokenContract.symbol();
    const tokenDecimals = await tokenContract.decimals();
    
    console.log(`Target token: ${tokenName} (${tokenSymbol})`);
    
    // Initialize agent with test parameters
    // For testing, we'll use a small amount and execute immediately
    const agent = await new DCAAgent(
      'daily', // Frequency doesn't matter for immediate testing
      DCA_TOKEN_ADDRESS,
      0.001 // Small amount of ETH for testing
    ).initialize();
    
    console.log('Agent initialized successfully');
    
    // Get agent status
    const status = agent.getStatus();
    console.log('Agent status:', status);
    
    // Execute a test purchase
    console.log('Executing test purchase...');
    await agent.executePurchase();
    
    // Check token balance after purchase
    const wallet = await agent['vincentWallet'];
    const balance = await tokenContract.balanceOf(wallet.address);
    console.log(`Token balance after purchase: ${ethers.utils.formatUnits(balance, tokenDecimals)} ${tokenSymbol}`);
    
    console.log('Test completed successfully');
  } catch (error) {
    console.error('Test failed:', error);
  }
}

testAgent();
```

Run the test with:

```bash
npx ts-node src/test-agent.ts
```

## Manual Testing

In addition to the automated test script, you should also manually test:

1. **Initialization**: Ensure the agent initializes correctly with various configurations
2. **Scheduling**: Test that the cron scheduling works as expected
3. **Error handling**: Verify the agent handles errors gracefully (e.g., insufficient funds, network issues)
4. **Permission checks**: Confirm that Vincent's permission checks are enforced

### Testing Scheduled Execution

To test scheduled execution without waiting for the actual schedule, you can temporarily modify the cron expression:

```typescript
// In src/agent.ts, modify the start() method
start() {
  // ...
  
  // For testing, use a cron expression that runs every minute
  // const cronExpression = frequencyToCron[this.frequency as keyof typeof frequencyToCron];
  const cronExpression = '* * * * *'; // Run every minute for testing
  
  // ...
}
```

Then run your agent and observe that it executes a purchase every minute:

```bash
npx ts-node src/index.ts
```

Remember to change it back to the original code after testing.

## Testing Vincent Integration

To test the Vincent integration, you'll need:

1. A registered app in Vincent's system
2. Defined roles and tools
3. A user who has approved the permissions

Since Vincent's integration involves user consent, complete testing requires:

1. Directing a user to the consent page
2. Having them approve the permissions
3. Using the resulting session key to execute trades

For development, you can use the mock implementation we created, but for production, you'll need to test with the actual Vincent SDK.

## Troubleshooting Common Issues

### Insufficient Funds

If you encounter "insufficient funds" errors:
- Make sure your wallet has enough testnet ETH
- Verify the transaction gas limit is appropriate
- Check that the ETH amount for the DCA purchase is not too high

### Transaction Failures

If transactions fail:
- Check that the token address is correct
- Verify the Uniswap router address is correct for your network
- Ensure slippage tolerance is appropriate for the token's liquidity

### Permission Errors

If you encounter permission errors with Vincent:
- Verify the app ID and role ID are correct
- Check that the user has approved the necessary permissions
- Ensure the tool being used matches the approved tools

In the next section, we'll cover how to deploy your DCA agent to production.
