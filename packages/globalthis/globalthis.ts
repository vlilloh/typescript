import {
  Array_,
} from '@vlilloh/array';

import {
  Boolean_,
} from '@vlilloh/boolean';

import {
  Date_,
} from '@vlilloh/date';

import {
  Function_,
} from '@vlilloh/function';

import {
  Math_,
} from '@vlilloh/math';

import {
  Number_,
} from '@vlilloh/number';

import {
  Object_,
} from '@vlilloh/object';

import {
  String_,
} from '@vlilloh/string';

import {
  Symbol_,
} from '@vlilloh/symbol';

import {
  parseInt,
  parseFloat,
} from '../common';

/**
 * @since ES1 `lib.es5.d.ts` (como `globalThis` desde ES2020)
 */
export const globalThis_ = {

  /**
   * @since ES2020
   */
  globalThis: globalThis,

  /**
   * @since ES1 `lib.es5.d.ts`
   */
  Infinity: Infinity,

  /**
   * @since ES1 `lib.es5.d.ts`
   */
  NaN: NaN,

  /**
   * @since ES3 `lib.es5.d.ts`
   */
  undefined: undefined,

  /**
   * @since ES3 `lib.es5.d.ts`
   */
  decodeURI(encodedURI: string): string {
    return globalThis.decodeURI(encodedURI);
  },

  /**
   * @since ES3 `lib.es5.d.ts`
   */
  decodeURIComponent(encodedURIComponent: string): string {
    return globalThis.decodeURIComponent(encodedURIComponent);
  },

  /**
   * @since ES3 `lib.es5.d.ts`
   */
  encodeURI(uri: string): string {
    return globalThis.encodeURI(uri);
  },

  /**
   * @since ES3 `lib.es5.d.ts`
   */
  encodeURIComponent(uriComponent: string | number | boolean): string {
    return globalThis.encodeURIComponent(uriComponent);
  },

  /**
   * @since ES1 `lib.es5.d.ts`
   */
  isFinite(value: unknown): boolean {
    if (typeof value === `number`) {
      return value - value === 0;
    }
    if (typeof value === `string` && value.trim() !== ``) {
      // TODO
    }
    return false;
  },

  /**
   * @since ES1 `lib.es5.d.ts`
   */
  isNaN(number: number): boolean {
    return globalThis.isNaN(number);
  },

  /**
   * @since ES1 `lib.es5.d.ts`
   */
  parseInt(string: string, radix?: number): number {
    return parseInt(string, radix);
  },

  /**
   * @since ES1 `lib.es5.d.ts`
   */
  parseFloat(string: string): number {
    return parseFloat(string);
  },

  /**
   * @since ES1 `lib.es5.d.ts`
   */
  Array: Array_,

  /**
   * @since ES2017 `lib.es2017.sharedmemory.d.ts`
   */
  // Atomics: Atomics_,

  /**
   * @since ES2015 `lib.es5.d.ts`
   */
  // ArrayBuffer: ArrayBuffer_,

  /**
   * @since ES2020 `lib.es2020.bigint.d.ts`
   */
  // BigInt: BigInt_,

  /**
   * @since ES2020 `lib.es2020.bigint.d.ts`
   */
  // BigInt64Array: BigInt64Array_,

  /**
   * @since ES2020 `lib.es2020.bigint.d.ts`
   */
  // BigUint64Array: BigUint64Array_,

  /**
   * @since ES1 `lib.es5.d.ts`
   */
  Boolean: Boolean_,

  /**
   * @since ES2015 `lib.es5.d.ts`
   */
  // DataView: DataView_,

  /**
   * @since ES1 `lib.es5.d.ts`
   */
  Date: Date_,

  /**
   * @since ES3 `lib.es5.d.ts`
   */
  // Error: Error_,

  /**
   * @since ES3 `lib.es5.d.ts`
   */
  // EvalError: EvalError_,

  /**
   * @since ES2015 `lib.es5.d.ts`
   */
  // Float32Array: Float32Array_,

  /**
   * @since ES2015 `lib.es5.d.ts`
   */
  // Float64Array: Float64Array_,

  /**
   * @since ES1 `lib.es5.d.ts`
   */
  Function: Function_,

  /**
   * @since ES2015 `lib.es5.d.ts`
   */
  // Int8Array: Int8Array_,

  /**
   * @since ES2015 `lib.es5.d.ts`
   */
  // Int16Array: Int16Array_,

  /**
   * @since ES2015 `lib.es5.d.ts`
   */
  // Int32Array: Int32Array_,

  /**
   * @since ES5 `lib.es5.d.ts`
   */
  // JSON: JSON_,

  /**
   * @since ES2015 `lib.es2015.collection.d.ts`
   */
  // Map: Map_,

  /**
   * @since ES1 `lib.es5.d.ts`
   */
  Math: Math_,

  /**
   * @since ES1 `lib.es5.d.ts`
   */
  Number: Number_,

  /**
   * @since ES1 `lib.es5.d.ts`
   */
  Object: Object_,

  /**
   * @since ES2015 `lib.es2015.promise.d.ts`
   */
  // Promise: Promise_,

  /**
   * @since ES2015 `lib.es2015.proxy.d.ts`
   */
  // Proxy: Proxy_,

  /**
   * @since ES3 `lib.es5.d.ts`
   */
  // RangeError: RangeError_,

  /**
   * @since ES3 `lib.es5.d.ts`
   */
  // ReferenceError: ReferenceError_,

  /**
   * @since ES2015 `lib.es2015.reflect.d.ts`
   */
  // Reflect: Reflect_,

  /**
   * @since ES3 `lib.es5.d.ts`
   */
  // RegExp: RegExp_,

  /**
   * @since ES2015 `lib.es2015.collection.d.ts`
   */
  // Set: Set_,

  /**
   * @since ES2017 `lib.es2017.sharedmemory.d.ts`
   */
  // SharedArrayBuffer: SharedArrayBuffer_,

  /**
   * @since ES1 `lib.es5.d.ts`
   */
  String: String_,

  /**
   * @since ES2015 `lib.es2015.symbol.d.ts` `lib.es2015.symbol.wellknown.d.ts`
   */
  Symbol: Symbol_,

  /**
   * @since ES3 `lib.es5.d.ts`
   */
  // SyntaxError: SyntaxError_,

  /**
   * @since ES3 `lib.es5.d.ts`
   */
  // TypeError: TypeError_,

  /**
   * @since ES2015 `lib.es5.d.ts`
   */
  // Uint8Array: Uint8Array_,

  /**
   * @since ES2015 `lib.es5.d.ts`
   */
  // Uint8ClampedArray: Uint8ClampedArray_,

  /**
   * @since ES2015 `lib.es5.d.ts`
   */
  // Uint16Array: Uint16Array_,

  /**
   * @since ES2015 `lib.es5.d.ts`
   */
  // Uint32Array: Uint32Array_,

  /**
   * @since ES3 `lib.es5.d.ts`
   */
  // URIError: URIError_,

  /**
   * @since ES2015 `lib.es2015.collection.d.ts`
   */
  // WeakMap: WeakMap_,

  /**
   * @since ES2015 `lib.es2015.collection.d.ts`
   */
  // WeakSet: WeakSet_,

}