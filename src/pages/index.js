import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

import TypescriptIcon from '@site/static/img/typescript-icon.png';
import PythonIcon from '@site/static/img/python-icon.png';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get Started with Vincent - 15min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

function AgentSection() {
  return (
    <section className={clsx('padding-vert--lg', styles.agentSection)}>
      <div className="container">
        <Heading as="h2" className="text--center">
          So you want to build an agent?
        </Heading>
        <p className="text--center">
          Vincent is an agent wallet service that secures tools and policies for agent developers. Built with tamper-proof threshold cryptography by Lit Protocol, Vincent ensures your agents operate safely and reliably. Pick your language and get started with our TypeScript and Python starters!
        </p>
        <div className={clsx('row', styles.starterButtons)}>
          <div className="col col--6 text--center padding-vert--md">
            <img src={TypescriptIcon} alt="TypeScript" className={styles.languageIcon} />
            <div className={styles.starterGroup}>
              <Link
                className="button button--primary button--md"
                to="/docs/typescript-elizaos">
                ElizaOS Starter
              </Link>
              <Link
                className="button button--primary button--md"
                to="/docs/typescript-agentkit">
                Coinbase AgentKit Starter
              </Link>
            </div>
          </div>
          <div className="col col--6 text--center padding-vert--md">
            <img src={PythonIcon} alt="Python" className={styles.languageIcon} />
            <div className={styles.starterGroup}>
              <Link
                className="button button--primary button--md"
                to="/docs/python-agentkit">
                Coinbase AgentKit Starter
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Vincent - Secure agent wallet service built with Lit Protocol's threshold cryptography">
      <HomepageHeader />
      <main>
        <AgentSection />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
