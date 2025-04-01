import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Vincent enables users to delegate their wallets to Agentic applications for autonomous signing">
      <main className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1>Why Vincent?</h1>
            
            <h2>Overview</h2>
            
            <p>
              Vincent enables user's to delegate their wallets to Agentic applications for autonomous signing. 
              Users can precisely define the scope of their delegation. For example, a delegated agent can sign 
              only Uniswap swap transactions for a max of $100/day but it won't be able to sign any other type 
              of transactions or exceed the spend limit set by the user. App delegations are stored on the 
              <a href="https://developer.litprotocol.com/connecting-to-a-lit-network/lit-blockchains/chronicle-yellowstone"> Yellowstone</a> blockchain 
              and the Agent Wallets are managed by <a href="https://developer.litprotocol.com/">Lit Protocol</a> which 
              is an MPC TSS network.
            </p>
            
            <h2>Why It's Secure</h2>
          </div>
        </div>
      </main>
    </Layout>
  );
} 
