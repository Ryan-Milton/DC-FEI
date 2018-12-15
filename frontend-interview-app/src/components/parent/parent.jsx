import React from 'react';

import Header from '../header';
import KeyValue from '../keyvalue';

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyVauePairs: [],
    };
  }

  componentWillMount() {
    this.duplicate();
  }

  async duplicate() {
    console.log('duplicate');
    const uuid = require('uuid/v4');
    if(this.state.keyVauePairs.length === 0 ) {
      await this.setState({ keyVauePairs: [{
          id: uuid(),
          key: '',
          value: '',
        } 
      ]});
    } else {
      await this.setState({ keyVauePairs: [...this.state.keyVauePairs, {
          id: uuid(),
          key: '',
          value: '',
        }
      ]});
    }
    console.log(this.state.keyVauePairs);
  }

  delete(event) {
    event.preventDefault();
    let id = event.target.id;
    console.log(id);
    let indexes = this.state.keyVauePairs.map( item => item );
    console.log(indexes.filter( (kvp) => kvp.id === event.target.id));
  }

  handleChange(event) {
    console.log(event.target.id);
  }

  render() {
    return (
      <React.Fragment>
        <Header clicked={this.duplicate.bind(this)}/>
        {this.state.keyVauePairs.map( (pair, key) => <KeyValue id={pair.id} delete={this.delete.bind(this)} change={this.handleChange}/>)}
      </React.Fragment>
    );
  }
}

export default Parent;