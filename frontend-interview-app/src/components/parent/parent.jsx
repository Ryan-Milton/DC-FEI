import React from 'react';

import Header from '../header';
import KeyValue from '../keyvalue';
import { throws } from 'assert';

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  duplicate() {
    console.log('duplicate');
  }

  delete(event) {
    event.preventDefault();
    console.log('delete');
  }

  render() {
    return (
      <React.Fragment>
        <Header duplicate={this.duplicate}/>
        <KeyValue delete={this.delete}/>
      </React.Fragment>
    );
  }
}

export default Parent;