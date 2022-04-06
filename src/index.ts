
/* IMPORT */

import type {FN, Result} from './types';

/* MAIN */

const callSpy = <Arguments extends unknown[], Return> ( fn: FN<Arguments, Return> ): [FN<Arguments, Return>, Result<Arguments, Return>] => {

  const result: Result<any, any> = {
    called: false,
    calls: 0,
    this: undefined,
    arguments: [],
    return: undefined
  };

  function fnSpy ( this: any, ...args: Arguments ): Return {

    result.called = true;
    result.calls++;
    result.this = this;
    result.arguments = args;

    const ret = fn.apply ( this, args );

    result.return = ret;

    return ret;

  };

  return [fnSpy, result];

};

/* EXPORT */

export default callSpy;
