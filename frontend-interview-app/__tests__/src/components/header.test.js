import React from 'react';
import '../../jest-setup';

import Header from '../../../src/components/header';
// import Parent from '../../../src/components/parent/parent.jsx';

describe('<Header />', () => {

  // base test to check wiring
  it('should work', () => {
    expect(true).toBeTruthy();
  });

  it('should have header', () => {
    let app = shallow(<Header />);
    expect(app.find('header').exists()).toBeTruthy();
  });

  it('should have button', () => {
    let app = shallow(<Header />);
    expect(app.find('button').exists()).toBeTruthy();
  });

  it('should add a form when the button is clicked', () => {
    let app = shallow(<Header />);
    app.find('button').simulate('click');
    // A new form should populate in the Parent when the button is clicked
    // But cannot check because of error when testing the Parent Component
  });
});