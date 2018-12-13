import React from 'react';

const KeyValue = (props) => {
  return (
    <React.Fragment>
      <form id={props.id}>
        <input type='text' placeholder='key'/>
        <input type='text' placeholder='value'/>
        <button onClick={props.delete}>x</button>
      </form>
    </React.Fragment>
  );
}

export default KeyValue; 