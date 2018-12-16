import React from 'react';
import { observer } from 'mobx-react';
import KVP from '../../keyvaluestores';

import Header from '../header';
import KeyValue from '../keyvalue';

import styles from './parent.scss';

@observer
class Parent extends React.Component {

  async componentWillMount() {
    await this.duplicate();
  }
    
  async duplicate() {
    const uuid = require('uuid/v4');
    await KVP.KVP.all.push({
      id: uuid(),
      key: '',
      value: '',
    });
  }

  delete(event) {
    event.preventDefault();
    KVP.KVP.all.splice(KVP.KVP.all.findIndex( (kvp) => kvp.id === event.target.id ), 1);
  }

  handleKeyChange(event) {
    KVP.KVP.all.filter( (kvp) => {
      if(kvp.id === event.target.name) {
        kvp.key = event.target.value;
      }
    });    
  }

  handleValueChange(event) {
    KVP.KVP.all.filter( (kvp) => {
      if(kvp.id === event.target.name) {
        kvp.value = event.target.value;
      }
    }); 
  }

  handleSubmit(event) {
    event.preventDefault();
    let jsonOutput = {};
    KVP.KVP.all.forEach( (kvp) => jsonOutput = {...jsonOutput, [kvp.key]: kvp.value });
    console.log(JSON.stringify(jsonOutput));
  }

  render() {
    return (
      <div className={styles.card}>
        <h1 className={styles.parent}>this is the parent component</h1>
          <Header clicked={this.duplicate.bind(this)} />
          {KVP.KVP.all.map( (pair, key) => <KeyValue key={pair.id} id={pair.id} delete={this.delete} keyChange={this.handleKeyChange} valueChange={this.handleValueChange}/>)}
          <button className={styles.button} type='submit' onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default Parent;