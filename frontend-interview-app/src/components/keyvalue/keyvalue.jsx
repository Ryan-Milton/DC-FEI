import React from 'react';
import styles from './keyvalue.scss';

const KeyValue = (props) => {
  return (
    <React.Fragment>
      <form className={styles.keyValue} id={props.id} onSubmit={props.delete}>
        <input className={styles.key} type='text' name={props.id} placeholder='Key' onChange={props.keyChange} />
        <input type='text' name={props.id} placeholder='Value' onChange={props.valueChange}/>
        <button type='submit'>x</button>
      </form>
    </React.Fragment>
  );
}

export default KeyValue; 