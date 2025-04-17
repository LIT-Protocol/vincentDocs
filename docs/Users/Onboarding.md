---
pagination_next: Contact-Us
---

# Onboarding

Each time you visit an app on Vincent, you’ll be directed to that app’s dedicated consent page. This is where you will configure and manage your app-specific delegations, permitting it to use your assets and data according to the guidelines you set. Follow the steps below to begin your journey.

## 1. Create an Agent Wallet

The first time you visit an app powered by Vincent, you’ll be prompted to create your Agent Wallet using a credential of your choice. Currently, email, phone number, and Passkey methods are supported. This credential is used to control your Agent Wallet which is securely managed by Lit Protocol’s [decentralized key management network](https://developer.litprotocol.com/resources/how-it-works). You will have the ability to use the same Agent Wallet across all Vincent apps, or create a new one if you choose to.

![User Login](./images/login.png)

## 2. Review Permissions & Delegate

After you login you'll be required to review the permissions requested by the app on the Consent Page. On this page you can see the following details about the app:

    - **App:** The name and description of the app you're visiting.
    - **Account Address:** The EOA wallet address associated with the App creator.
    - **App Version:** The version of the app you're visiting. If the app publishes a new version you'll be prompted to update it.
    - **Tools:** Tools are used to execute the operations that you permit a given app to perform on your *behalf* using your Agent Wallet. All Tools are represented by [Lit Actions](https://developer.litprotocol.com/sdk/serverless-signing/overview). After you delegate your Agent Wallet to a given Tool, the application owner can no longer change the Tool's behavior, making the delegation system immutable. As the owner of your Agent Wallet, you always have the ability to revoke a Tool that you previously permitted. 
    - **Policies:** Policies are the guardrails you set for permitted tools, dictating the conditions that they operate under. An example is a daily spend limit, or requiring MFA for swaps exceeding a specific dollar amount. When you define a Policy, it must be met before a given Tool can be executed. Just like Tools, Policies are also codified as Lit Actions.

![Consent Page](./images/consent-page.png)

## 3. Update App Version

Once you've approved an App and it publishes a new version, you'll be prompted to update to the latest version when you visit the App's Consent Page again. Note, it's not mandatory to update to the latest version unless the App disables an older version.

![Update App Version](./images/consent-page.png)

## 4. Redirect to the App

After you've logged in via the Consent Page you'll be redirected to the App page based on the `redirectUri` specified in the URLSearchParams: `https://dashboard.heyvincent.ai/appId/160/consent?redirectUri=http://localhost:3000`

