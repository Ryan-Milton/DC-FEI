import React from 'react';
import '../../jest-setup';
import KeyValue from '../../../src/components/keyvalue';

describe('<KeyValue />', () => {

  // base test to check wiring
  it('should work', () => {
    expect(true).toBeTruthy();
  });

  it('should have a form', () => {
    let app = shallow(<KeyValue />);
    expect(app.find('form').exists()).toBeTruthy();
  });

  it('should have a button', () => {
    let app = shallow(<KeyValue />);
    expect(app.find('button').exists()).toBeTruthy();
  });
});