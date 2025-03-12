import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useColorMode} from '@docusaurus/theme-common';

// Import both SVGs statically
import AgentSvg from '@site/static/img/agent.svg';
import AgentDarkSvg from '@site/static/img/agent-dark.svg';
import LockSvg from '@site/static/img/lock.svg';
import LitLogoSvg from '@site/static/img/litLogo.svg';

const FeatureList = [
  {
    title: 'Easy to Use',
    lightSvg: AgentSvg,
    darkSvg: AgentDarkSvg,
    description: (
      <>
        Vincent was designed from the ground up to be easily implemented into your agent application
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    lightSvg: LockSvg,
    darkSvg: LockSvg,
    description: (
      <>
        Vincent lets you focus on your application , and we'll handle authentication, and custody and permissions for user funds.
      </>
    ),
  },
  {
    title: 'Powered by Lit Protocol',
    lightSvg: LitLogoSvg,
    darkSvg: LitLogoSvg,
    description: (
      <>
        Lit Protocol ensures agent access keys can't be tampered with - Users can trust that agent apps will only be able to use funds in ways they designate.
      </>
    ),
  },
];

function Feature({lightSvg, darkSvg, title, description}) {
  const {colorMode} = useColorMode();
  const isDarkTheme = colorMode === 'dark';
  const Svg = isDarkTheme ? darkSvg : lightSvg;
  
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
