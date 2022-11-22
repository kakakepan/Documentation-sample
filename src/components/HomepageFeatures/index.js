import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Experienced Team',
    Svg: require('@site/static/img/team-svgrepo-com.svg').default,
    description: (
      <>
        Our team consists of consensus protocol researchers from Stanford and experienced layer 1 developers from all over the world.
      </>
    ),
  },
  {
    title: 'Our Work',
    Svg: require('@site/static/img/work-svgrepo-com.svg').default,
    description: (
      <>
        Our work include both basic research as well as collaboration with industry projects on improving the security of Cosmos zones and other PoS chains.
      </>
    ),
  },
  {
    title: 'What Do We Do',
    Svg: require('@site/static/img/working-time-work-svgrepo-com.svg').default,
    description: (
      <>
        We identified some critical attacks as well as designed optimal protocols to achieve the objectives of PoS Ethereum.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
