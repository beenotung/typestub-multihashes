# TypeStub for (js-)multibase
[![npm Package Version](https://img.shields.io/npm/v/typestub-multibase.svg?maxAge=2592000)](https://www.npmjs.com/package/typestub-multibase)

source: https://github.com/multiformats/js-multibase

## TL;DL
add types to npm package multibase and allow client to import only once directly

## Example
```typescript
import * as multibase from "typestub-multibase";
import {decode, isEncoded} from "typestub-multibase";

let data = 'the long data';
let code = multibase.encode('base64', data).toString();
let type = isEncoded(code);
let recover = decode(code).toString();
console.log({
  data,
  code,
  type,
  recover,
});
```
