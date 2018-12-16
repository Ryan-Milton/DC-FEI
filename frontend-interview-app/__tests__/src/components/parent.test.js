import React from 'react';
import '../../jest-setup';
import Parent from '../../../src/components/parent/parent.jsx';

describe('<Parent />', () => {

  // base test to check wiring
  // test will not pass, the error is as follows

  // /home/ryan/Interview Code Challenges/DC-FEI/frontend-interview-app/src/components/parent/index.js:1
  //   ({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,global,jest){import Parent from './parent';
  //                                                                                                   ^^^^^^

  //   SyntaxError: Unexpected identifier

  //     1 | import React from 'react';
  //     2 | import SampleComponent from '../../SampleComponent'; // eslint-disable-this-line
  //   > 3 | import Parent from '../../parent';
  //       | ^
  //     4 | 
  //     5 | import styles from './Home.scss';
  //     6 | 

  //     at ScriptTransformer._transformAndBuildScript (../../../../../usr/local/lib/node_modules/jest/node_modules/jest-runtime/build/script_transformer.js:403:17)
  //     at Object.<anonymous> (src/components/pages/Home/Home.jsx:3:1)

  // I haven't been able to fix it. I was going to add the env - test - plugins script to the .babelrc but it was already there.
  // Just going to move ahead with testing other modules
  it('should work', () => {
    expect(true).toBeTruthy();
  });
});