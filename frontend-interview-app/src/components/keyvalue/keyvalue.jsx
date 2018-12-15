import React from 'react';

const KeyValue = (props) => {
  return (
    <React.Fragment>
      <form id={props.id} onSubmit={props.delete}>
        <input type='text' placeholder='key' onChange={props.change}/>
        <input type='text' placeholder='value' onChange={props.change}/>
        <button type='submit'>x</button>
      </form>
    </React.Fragment>
  );
}

export default KeyValue; 