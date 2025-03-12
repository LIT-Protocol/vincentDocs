---
sidebar_position: 4
---

# Implementing DCA Logic

In this section, we'll implement the core Dollar Cost Averaging logic that will handle the token purchases. This is where we'll define how our agent interacts with decentralized exchanges to execute trades.

## DCA Implementation

Create a file named `src/dca.ts` with the following code:

```typescript
import { ethers } from 'ethers';
import { provider } from './config';

// Simple ERC20 ABI for token interactions
const ERC20_ABI = [
  'function name() view returns (string)',
  'function symbol() view returns (string)',
  'function decimals() view returns (uint8)',
  'function balanceOf(address owner) view returns (uint256)',
  'function approve(address spender, uint256 amount) returns (bool)',
  'function transfer(address to, uint256 amount) returns (bool)',
];

// Uniswap V2 Router ABI (simplified for our needs)
const UNISWAP_ROUTER_ABI = [
  'function swapExactETHForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline) external payable returns (uint[] memory amounts)',
  'function getAmountsOut(uint amountIn, address[] calldata path) external view returns (uint[] memory amounts)',
];

// Uniswap V2 Router address (Goerli testnet)
const UNISWAP_ROUTER_ADDRESS = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D';

/**
 * Execute a DCA purchase using the provided wallet
 * @param wallet The Vincent wallet to use for the transaction
 * @param tokenAddress The address of the token to purchase
 * @param ethAmount The amount of ETH to spend (in wei)
 * @returns Transaction receipt
 */
export async function executeDCA(wallet: ethers.Wallet, tokenAddress: string, ethAmount: ethers.BigNumber) {
  try {
    // Connect to the Uniswap Router
    const uniswapRouter = new ethers.Contract(
      UNISWAP_ROUTER_ADDRESS,
      UNISWAP_ROUTER_ABI,
      wallet
    );
    
    // Connect to the token contract
    const tokenContract = new ethers.Contract(
      tokenAddress,
      ERC20_ABI,
      provider
    );
    
    // Get token details
    const tokenSymbol = await tokenContract.symbol();
    const tokenDecimals = await tokenContract.decimals();
    
    console.log(`Executing DCA purchase of ${tokenSymbol}...`);
    
    // Get the current exchange rate
    const path = [
      '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6', // WETH address on Goerli
      tokenAddress
    ];
    
    // Calculate the minimum amount out (with 2% slippage tolerance)
    const amountsOut = await uniswapRouter.getAmountsOut(ethAmount, path);
    const minAmountOut = amountsOut[1].mul(98).div(100); // 2% slippage
    
    console.log(`Current rate: 1 ETH = ${ethers.utils.formatUnits(amountsOut[1], tokenDecimals)} ${tokenSymbol}`);
    console.log(`Expected minimum output: ${ethers.utils.formatUnits(minAmountOut, tokenDecimals)} ${tokenSymbol}`);
    
    // Set deadline to 20 minutes from now
    const deadline = Math.floor(Date.now() / 1000) + 20 * 60;
    
    // Execute the swap
    const tx = await uniswapRouter.swapExactETHForTokens(
      minAmountOut,
      path,
      wallet.address,
      deadline,
      { value: ethAmount, gasLimit: 250000 }
    );
    
    console.log(`Transaction submitted: ${tx.hash}`);
    
    // Wait for transaction to be mined
    const receipt = await tx.wait();
    console.log(`Transaction confirmed in block ${receipt.blockNumber}`);
    
    // Get updated token balance
    const newBalance = await tokenContract.balanceOf(wallet.address);
    console.log(`New ${tokenSymbol} balance: ${ethers.utils.formatUnits(newBalance, tokenDecimals)}`);
    
    return receipt;
  } catch (error) {
    console.error('Error executing DCA purchase:', error);
    throw error;
  }
}

/**
 * Get the current price of a token in ETH
 * @param tokenAddress The address of the token
 * @returns The price in ETH
 */
export async function getTokenPrice(tokenAddress: string): Promise<number> {
  try {
    // Connect to the Uniswap Router
    const uniswapRouter = new ethers.Contract(
      UNISWAP_ROUTER_ADDRESS,
      UNISWAP_ROUTER_ABI,
      provider
    );
    
    // Get the current exchange rate for 1 ETH
    const path = [
      '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6', // WETH address on Goerli
      tokenAddress
    ];
    
    const oneEth = ethers.utils.parseEther('1');
    const amountsOut = await uniswapRouter.getAmountsOut(oneEth, path);
    
    // Connect to the token contract to get decimals
    const tokenContract = new ethers.Contract(
      tokenAddress,
      ERC20_ABI,
      provider
    );
    
    const tokenDecimals = await tokenContract.decimals();
    
    // Return the token price in ETH
    return parseFloat(ethers.utils.formatUnits(amountsOut[1], tokenDecimals));
  } catch (error) {
    console.error('Error getting token price:', error);
    throw error;
  }
}
```

This implementation:

1. Connects to Uniswap V2 on the Goerli testnet
2. Gets the current exchange rate for the token
3. Calculates a minimum output amount with a 2% slippage tolerance
4. Executes the swap transaction
5. Waits for confirmation and reports the new token balance

## Testing the DCA Logic

You can create a simple test script to verify your DCA logic works correctly. Create a file named `src/test-dca.ts`:

```typescript
import { ethers } from 'ethers';
import { provider, DCA_TOKEN_ADDRESS } from './config';
import { getTokenPrice } from './dca';

async function testDCA() {
  try {
    // Get token price
    const price = await getTokenPrice(DCA_TOKEN_ADDRESS);
    
    // Connect to the token contract to get details
    const tokenContract = new ethers.Contract(
      DCA_TOKEN_ADDRESS,
      [
        'function name() view returns (string)',
        'function symbol() view returns (string)',
        'function decimals() view returns (uint8)',
      ],
      provider
    );
    
    const tokenName = await tokenContract.name();
    const tokenSymbol = await tokenContract.symbol();
    
    console.log(`Current price of ${tokenName} (${tokenSymbol}):`);
    console.log(`1 ETH = ${price} ${tokenSymbol}`);
    console.log(`1 ${tokenSymbol} = ${1/price} ETH`);
  } catch (error) {
    console.error('Error testing DCA:', error);
  }
}

testDCA();
```

You can run this test with:

```bash
npx ts-node src/test-dca.ts
```

In the next section, we'll integrate Vincent's secure wallet system to ensure our agent has the appropriate permissions to execute trades on behalf of the user.
