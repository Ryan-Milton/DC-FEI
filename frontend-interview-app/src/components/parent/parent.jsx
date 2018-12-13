import React from 'react';

import Header from '../header';
import KeyValue from '../keyvalue';

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyVauePairs: [1],
    };
  }

  async duplicate() {
    console.log('duplicate');
    let count = this.state.keyVauePairs.length;
    count++;
    // let baseState = this.state.keyVauePairs;
    await this.setState({ keyVauePairs: [...this.state.keyVauePairs, count]});
    console.log(this.state.keyVauePairs);
  }

  delete(event) {
    event.preventDefault();
    console.log(event.target);
  }

  render() {
    return (
      <React.Fragment>
        <Header clicked={this.duplicate.bind(this)}/>
        {this.state.keyVauePairs.map( (pair, key) => <KeyValue id={pair} delete={this.delete}/>)}
      </React.Fragment>
    );
  }
}

export default Parent;