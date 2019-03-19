
/* IMPORT */

import {result} from './types';

/* CALL SPY */

function callSpy ( fn: Function, res: result ): Function {

  res.called = false;
  res.calls = 0;

  return function ( ...args ) {

    const result = fn.apply ( this, args );

    res.called = true;
    res.calls = ( res.calls || 0 ) + 1;
    res.this = this;
    res.arguments = args;
    res.return = result;

    return result;

  };

}

/* EXPORT */

export default callSpy;
