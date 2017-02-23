
/* IMPORT */

import {describe} from 'ava-spec';
import callSpy from '../dist';
import {fn} from './mocks';

/* CALL SPY */

describe ( 'callSpy', it => {

  it.beforeEach ( t => {

    t.context.res = {};
    t.context.fn = callSpy ( fn, t.context.res );

  });

  it ( 'Detects if the function has been called', t => {

    t.false ( t.context.res.called );

    t.context.fn ();

    t.true ( t.context.res.called );

  });

  it ( 'Stores this, arguments and result in an object', t => {

    const that = { me: true },
          args = [0, 1, 'two'];

    t.context.fn.apply ( that, args );

    t.true ( t.context.res.called );
    t.deepEqual ( that, t.context.res.this );
    t.deepEqual ( args, t.context.res.args );
    t.is ( 'hello!', t.context.res.result );

  });

  it ( 'Returns the proxied function return value', t => {

    t.is ( 'hello!', t.context.fn () );

  });

});
