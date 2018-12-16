import React from 'react';

import styles from './header.scss';

function Header(props) {
  return (
    <React.Fragment >
      <header className={styles.header}>This is your header<button onClick={props.clicked}>+</button></header>
      
    </React.Fragment>
  );
}

export default Header;