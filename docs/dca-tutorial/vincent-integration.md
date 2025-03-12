---
sidebar_position: 5
---

# Securing with Vincent

In this section, we'll integrate Vincent's secure agent wallet system to ensure our DCA agent has the appropriate permissions to execute trades on behalf of the user. Vincent provides a secure, permission-based approach that gives users full control over what actions the agent can perform.

## Understanding Vincent's Permission Model

Vincent uses a role-based permission system where:

1. **Apps** define roles and tools
2. **Roles** are collections of tools with specific permissions
3. **Tools** are specific actions that can be performed (like executing a trade)
4. **Policies** define constraints on how tools can be used

For our DCA agent, we'll need to create:
- A role for "DCA Trading"
- Tools for checking balances and executing trades
- Policies that limit trade sizes and token addresses

## Vincent Integration

Let's implement the Vincent integration in `src/vincent.ts`:

```typescript
import { ethers } from 'ethers';
import { VINCENT_APP_ID, VINCENT_ROLE_ID, provider } from './config';

// Note: In a real implementation, you would import from '@lit-protocol/vincent-sdk'
// For this tutorial, we'll create a simplified mock of the Vincent SDK

interface VincentWallet extends ethers.Wallet {
  appId: string;
  roleId: string;
}

/**
 * Initialize Vincent wallet with the appropriate permissions
 * @returns A wallet with Vincent permissions
 */
export async function initializeVincent(): Promise<VincentWallet> {
  console.log('Initializing Vincent wallet...');
  console.log(`App ID: ${VINCENT_APP_ID}`);
  console.log(`Role ID: ${VINCENT_ROLE_ID}`);
  
  // In a real implementation, this would involve:
  // 1. Connecting to the user's wallet
  // 2. Requesting consent for the specific role
  // 3. Getting a session key with the appropriate permissions
  
  // For this tutorial, we'll create a mock wallet
  // In production, you would use Vincent's SDK to get a real wallet
  
  // Create a random wallet for demonstration
  // In production, this would be derived from user consent
  const mockWallet = ethers.Wallet.createRandom().connect(provider);
  
  // Add Vincent-specific properties
  const vincentWallet = mockWallet as VincentWallet;
  vincentWallet.appId = VINCENT_APP_ID;
  vincentWallet.roleId = VINCENT_ROLE_ID;
  
  console.log(`Vincent wallet initialized with address: ${vincentWallet.address}`);
  
  return vincentWallet;
}

/**
 * Verify if the wallet has permission to execute a specific action
 * @param wallet The Vincent wallet
 * @param action The action to check permission for
 * @param params Additional parameters for the permission check
 * @returns Whether the wallet has permission
 */
export async function checkPermission(
  wallet: VincentWallet,
  action: string,
  params: any
): Promise<boolean> {
  // In a real implementation, this would check the on-chain permissions
  // For this tutorial, we'll assume the wallet has the necessary permissions
  
  console.log(`Checking permission for action: ${action}`);
  console.log('Parameters:', params);
  
  // Mock permission check - always returns true
  // In production, this would verify against the Agent Registry
  return true;
}

/**
 * Register the DCA agent with Vincent
 * @param appName The name of your DCA application
 * @param appDescription A description of your application
 * @returns The app ID and management address
 */
export async function registerVincentApp(
  appName: string,
  appDescription: string
): Promise<{ appId: string; managementAddress: string }> {
  // In a real implementation, this would register your app with Vincent
  // For this tutorial, we'll return mock values
  
  console.log(`Registering Vincent app: ${appName}`);
  console.log(`Description: ${appDescription}`);
  
  // Generate a random app ID and management address
  const appId = `app_${Math.random().toString(36).substring(2, 15)}`;
  const managementAddress = ethers.Wallet.createRandom().address;
  
  console.log(`App registered with ID: ${appId}`);
  console.log(`Management address: ${managementAddress}`);
  
  return { appId, managementAddress };
}
```

## Setting Up Vincent in Production

In a production environment, you would need to:

1. **Register your app** with Vincent to get an App ID and Management Wallet
2. **Define your roles and tools** in the Vincent App Registry
3. **Create a consent page** where users can approve the DCA agent's permissions
4. **Use the Vincent SDK** to get a session key with the appropriate permissions

### Example Role and Tool Definition

Here's how you would define your DCA role and tools in Vincent:

```typescript
// This would be done through Vincent's API or dashboard
const dcaRole = {
  name: "DCA Trading",
  description: "Execute regular token purchases according to a schedule",
  tools: [
    {
      name: "Check Balance",
      description: "Check wallet balance",
      ipfsCid: "QmYourToolCID1", // IPFS CID of the Lit Action
      policySchema: {
        // No parameters needed for balance checks
      }
    },
    {
      name: "Execute Trade",
      description: "Swap ETH for tokens on Uniswap",
      ipfsCid: "QmYourToolCID2", // IPFS CID of the Lit Action
      policySchema: {
        maxAmount: {
          type: "number",
          description: "Maximum ETH amount per trade",
          default: 0.1
        },
        allowedTokens: {
          type: "array",
          description: "Addresses of tokens that can be purchased",
          default: ["0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984"] // UNI token on Goerli
        }
      }
    }
  ]
};
```

## Consent Page Integration

To integrate with Vincent's consent page, you would direct users to:

```
https://consent.vincent.xyz?appId={VINCENT_APP_ID}&roleId={VINCENT_ROLE_ID}
```

Users would then:
1. Connect their wallet
2. Review the permissions requested
3. Adjust any policy parameters
4. Approve the permissions

Once approved, your agent would be able to execute trades on behalf of the user, but only within the constraints of the approved policies.

In the next section, we'll test our DCA agent to ensure it works correctly.
