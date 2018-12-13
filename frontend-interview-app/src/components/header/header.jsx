import React from 'react';

function Header(props) {
  return (
    <React.Fragment>
      <h1>I'm a header</h1>
      <button onClick={props.duplicate}>+</button>
    </React.Fragment>
  );
}

export default Header;