
/* IMPORT */

import {result} from './types';

/* CALL SPY */

function callSpy ( fn: Function, res: result ): Function {

  res.called = false;

  return function ( ...args ) {

    const result = fn.apply ( this, args );

    res.called = true;
    res.this = this;
    res.arguments = args;
    res.return = result;

    return result;

  };

}

/* EXPORT */

export = Object.assign ( callSpy, { default: callSpy } );
