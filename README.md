# callSpy

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
res.return; // 'yay!'
res.arguments; // [1, 2, 3]
```

## License

MIT © Fabio Spampinato
