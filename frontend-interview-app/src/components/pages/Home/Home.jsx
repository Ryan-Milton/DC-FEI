import React from 'react';
import SampleComponent from '../../SampleComponent'; // eslint-disable-this-line
import Parent from '../../parent';

import styles from './Home.scss';

const Home = () => (
  <div data-test-hook="homePage" className={styles.home}>
    <Parent />
  </div>
);

export default Home;
