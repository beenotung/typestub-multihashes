# TypeStub for multihashes (js-multihash)
[![npm Package Version](https://img.shields.io/npm/v/typestub-multihashes.svg?maxAge=2592000)](https://www.npmjs.com/package/typestub-multihashes)

source: https://github.com/multiformats/js-multihash

## TL;DL
add types to npm package multihashes  and allow the client to import only once directly

## Example
```typescript
import * as multihashes from 'typestub-multihashes'

let b = Buffer.from('0beec7b5ea3f0fdbc95d0dd47f3c5bc275da8a33', 'hex');

let e = multihashes.encode(b, 'sha1');
let d = multihashes.decode(e);
console.log(d);
/* print:
{
  code: 17,
  name: 'sha1',
  length: 20,
  digest: <Buffer 0b ee c7 b5 ea 3f 0f db c9 5d 0d d4 7f 3c 5b c2 75 da 8a 33>
}
*/

```
