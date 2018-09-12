export = multihashes;

declare namespace multihashes {
  export const names: { [algo: string]: number };
  export const codes: { [code: number]: string };
  export const defaultLengths: { [code: number]: number };

  export function toHexString(hash: Buffer): string;

  export function fromHexString(hash: string): Buffer;

  export function toB58String(hash: Buffer): string;

  export function fromB58String(hash: string | Buffer): Buffer;

  export function decode(buf: Buffer): { code: number, name: string, length: number, digest: Buffer };

  export function encode(digest: Buffer, code: string | number, length?: number): Buffer;

  export function coerceCode(name: string | number): number;

  export function isAppCode(code: number): boolean;

  export function isValidCode(code: number): boolean;

  export function validate(multihash: Buffer): undefined;

  export function prefix(multihash: Buffer): Buffer;
}
