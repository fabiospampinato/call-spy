# callSpy

Tiny function for spying on function calls.

## Install

```
npm install --save call-spy
```

## Usage

```js
import callSpy from 'call-spy';

const [fn, result] = callSpy ( () => 'yay' );

result.called; // false
result.calls; // 0

fn ( 1, 2, 3 ); // 'yay!'

result.called; // true
result.calls; // 1
result.return; // 'yay!'
result.arguments; // [1, 2, 3]
```

## License

MIT © Fabio Spampinato
