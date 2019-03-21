
/* IMPORT */

import {result} from './types';

/* CALL SPY */

function callSpy ( fn: Function ): [Function, result] {

  const result: result = {
    called: false,
    calls: 0,
    this: undefined,
    arguments: [],
    return: undefined
  };

  function fnSpy ( ...args ) {

    const ret = fn.apply ( this, args );

    result.called = true;
    result.calls++;
    result.this = this;
    result.arguments = args;
    result.return = ret;

    return ret;

  };

  return [fnSpy, result];

}

/* EXPORT */

export default callSpy;
