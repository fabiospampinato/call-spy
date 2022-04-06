
/* IMPORT */

import {describe} from 'fava';
import callSpy from '../dist/index.js';
import {fn} from './fixtures.js';

/* MAIN */

describe ( 'callSpy', it => {

  it ( 'Detects if the function has been called', t => {

    const [fnSpy, result] = callSpy ( fn );

    t.false ( result.called );

    fnSpy ();

    t.true ( result.called );

  });

  it ( 'Detects how many times the function has been called', t => {

    const [fnSpy, result] = callSpy ( fn );

    t.is ( result.calls, 0 );

    fnSpy ();
    fnSpy ();
    fnSpy ();

    t.is ( result.calls, 3 );

  });

  it ( 'Stores this, arguments and result in an object', t => {

    const [fnSpy, result] = callSpy ( fn );

    const that = { me: true };
    const args = [0, 1, 'two'];

    fnSpy.apply ( that, args );

    t.true ( result.called );
    t.deepEqual ( that, result.this );
    t.deepEqual ( args, result.arguments );
    t.is ( 'hello!', result.return );

  });

  it ( 'Returns the proxied function return value', t => {

    const [fnSpy] = callSpy ( fn );

    t.is ( 'hello!', fnSpy () );

  });

});
