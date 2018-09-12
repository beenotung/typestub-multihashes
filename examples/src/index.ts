import * as multihashes from 'typestub-multihashes'

let b = new Buffer('0beec7b5ea3f0fdbc95d0dd47f3c5bc275da8a33', 'hex');

let e = multihashes.encode(b, 'sha1');
let d = multihashes.decode(e);
console.log(d);
