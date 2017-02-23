# callSpy

![Issues](https://img.shields.io/github/issues/fabiospampinato/call-spy.svg)
[![NPM version](https://img.shields.io/npm/v/call-spy.svg)](https://www.npmjs.com/package/call-spy)

Tiny wrapper for spying on function calls.

## Install

```shell
$ npm install --save call-spy
```

## Usage

```js
import callSpy from 'call-spy';

function fn () {
  return 'yay!';
}

const res = {};

fn = callSpy ( fn, res );

res.called; // false

fn ( 1, 2, 3 ); // 'yay!'

res.called; // true
res.result; // 'yay!'
res.args; // [1, 2, 3]
```

## License

MIT © Fabio Spampinato
