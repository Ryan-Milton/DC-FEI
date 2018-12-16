import React from 'react';

const KeyValue = (props) => {
  return (
    <React.Fragment>
      <form id={props.id} onSubmit={props.delete}>
        <input type='text' name={props.id} placeholder='key' onChange={props.keyChange} />
        <input type='text' name={props.id} placeholder='value' onChange={props.valueChange}/>
        <button type='submit'>x</button>
      </form>
    </React.Fragment>
  );
}

export default KeyValue; 