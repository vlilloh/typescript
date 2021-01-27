/**
 * @license
 */

/**
 * @packageDocumentation
 * 
 * Signaturas adaptadas a los tipos que deben usarse.
 */

import {
  ArrayEntries,
} from './array-entries';

import {
  ArrayKeys,
} from './array-keys';

import {
  ArrayValues,
} from './array-values';

export interface ArrayLike_<T> {
  readonly [index: number]: T; // index >= 0
  readonly length: number;
}

export interface ConcatArray_<T> extends ArrayLike<T> {
  join(separator?: string): string;
  slice(start?: number, end?: number): Array<T>;
}

/**
 * En general, como anotación de tipo, los desarrolladores prefieren usar `[]T`
 * en lugar de `Array<T>`, pero yo prefiero usar `Array<T>` por homogeneidad con
 * el uso del resto de tipos.
 * 
 * @since ES1 `lib.es5.d.ts`
 */
export class Array_<T> implements ArrayLike<T>, Iterable<T> {

  /**
   * @since ES1 `lib.es5.d.ts`
   */
  [index: number]: T;

  /**
   * @since ES1 `lib.es5.d.ts`
   */
  readonly length: number;

  /**
   * Preferir usar el literal (`[1, 2, 3]`) en lugar del constructor
   * (`new Array(1, 2, 3)`).
   * 
   * @since ES1 `lib.es5.d.ts`
   */
  constructor(
    ...items: Array<T>
  ) {
    // super();
    for (let i=0; i<items.length; i++) {
      this[i] = items[i]!;
    }
    this.length = items.length;
  }

  /**
   * Usar el método `values` en lugar de este método.
   * 
   * @category R: Método no destructivo (no modifica el receptor `Array`).
   *
   * @since ES2015 `lib.es2015.iterable.d.ts`
   */
  [Symbol.iterator](): ArrayValues<T> /* IterableIterator<T> */ {
    return new ArrayValues(this);
  }

  /**
   * Usar _spread_ de ES2015 (`[...array, ...items]`) en lugar de este
   * método (`array.concat(...items)`).
   * 
   * @category R: Método no destructivo (no modifica el receptor `Array`).
   * 
   * @since ES3 `lib.es5.d.ts`
   */
  concat(
    ...items: Array<T | ConcatArray<T>>
  ): /* Array_<T> */ Array<T> {
    return Array.prototype.concat.call(this, ...items);
  }

  /**
   * @category W: Método destructivo (modifica el receptor `Array`).
   * 
   * @since ES2015 `lib.es2015.core.d.ts`
   */
  copyWithin(
    target: number,
    start: number,
    end = this.length,
  ): /* this */ Array<T> {
    return Array.prototype.copyWithin.call(this, target, start, end);
  }

  /**
   * @category R: Método no destructivo (no modifica el receptor `Array`).
   * 
   * @since ES2015 `lib.es2015.iterable.d.ts`
   */
  entries(): ArrayEntries<T> /* IterableIterator<[number, T]> */ {
    return new ArrayEntries(this);
  }

  /**
   * @category R: Método no destructivo (no modifica el receptor `Array`).
   * 
   * @since ES5 `lib.es5.d.ts`
   */
  every(
    callback: (
      value: T,
      index: number,
      array: Array<T>,
    ) => boolean,
    thisArg?: any
  ): boolean {
    return Array.prototype.every.call(this, callback, thisArg);
  }

  /**
   * @category W: Método destructivo (modifica el receptor `Array`).
   * 
   * @since ES2015 `lib.es2015.core.d.ts`
   */
  fill(
    value: T,
    start = 0,
    end = this.length,
  ): /* this */ Array<T> {
    return Array.prototype.fill.call(this, value, start, end);
  }

  /**
   * @category R: Método no destructivo (no modifica el receptor `Array`).
   * 
   * @since ES5 `lib.es5.d.ts`
   */
  filter(
    callback: (
      value: T,
      index: number,
      array: /* Array_<T> */ Array<T>,
    ) => any,
    thisArg?: any
  ): /* Array_<T> */ Array<T> {
    return Array.prototype.filter.call(this, callback, thisArg);
  }

  /**
   * @category R: Método no destructivo (no modifica el receptor `Array`).
   * 
   * @since ES2015 `lib.es2015.core.d.ts`
   */
  find(
    predicate: (
      value: T,
      index: number,
      object: Array<T>,
    ) => boolean,
    thisArg?: any,
  ): T | undefined {
    return Array.prototype.find.call(this, predicate, thisArg);
  }

  /**
   * @category R: Método no destructivo (no modifica el receptor `Array`).
   * 
   * @since ES2015 `lib.es2015.core.d.ts`
   */
  findIndex(
    predicate: (
      value: T,
      index: number,
      object: Array<T>,
    ) => boolean,
    thisArg?: any,
  ): number {
    return Array.prototype.findIndex.call(this, predicate, thisArg);
  }

  /**
   * @category R: Método no destructivo (no modifica el receptor `Array`).
   * 
   * @since ES2019 `lib.es2019.array.d.ts`
   */
  flat(
    depth = 1,
  ): /* Array_<any> */ Array<any> {
    return Array.prototype.flat.call(this, depth);
  }

  /**
   * @category R: Método no destructivo (no modifica el receptor `Array`).
   * 
   * @since ES2019 `lib.es2019.array.d.ts`
   */
  flatMap<U>(
    callback: (
      value: T,
      index: number,
      array: /* Array_<T> */ Array<T>,
    ) => U | Array_<U>,
    thisArg?: any,
  ): /* Array_<U> */ Array<U> {
    return Array.prototype.flatMap.call(this, callback, thisArg) as Array<U>;
  }

  /**
   * @category R: Método no destructivo (no modifica el receptor `Array`).
   * 
   * @since ES5 `lib.es5.d.ts`
   */
  forEach(
    callback: (
      value: T,
      index: number,
      array: Array<T>,
    ) => void,
    thisArg?: any,
  ): void {
    return Array.prototype.forEach.call(this, callback, thisArg);
  }

  /**
   * @category R: Método no destructivo (no modifica el receptor `Array`).
   * 
   * @since ES2016 `lib.es2016.array.include.d.ts`
   */
  includes(
    searchElement: T,
    fromIndex = 0,
  ): boolean {
    return Array.prototype.includes.call(this, searchElement, fromIndex);
  }

  /**
   * @category R: Método no destructivo (no modifica el receptor `Array`).
   * 
   * @since ES5 `lib.es5.d.ts`
   */
  indexOf(
    searchElement: T,
    fromIndex?: number,
  ): number {
    return Array.prototype.indexOf.call(this, searchElement, fromIndex);
  }

  /**
   * @category R: Método no destructivo (no modifica el receptor `Array`).
   * 
   * @since ES1 `lib.es5.d.ts`
   */
  join(
    separator = `,`,
  ): string {
    return Array.prototype.join.call(this, separator);
  }

  /**
   * @category R: Método no destructivo (no modifica el receptor `Array`).
   * 
   * @since ES2015 `lib.es2015.iterable.d.ts`
   */
  keys(): ArrayKeys /* IterableIterator<number> */ {
    return new ArrayKeys(this);
  }

  /**
   * @category R: Método no destructivo (no modifica el receptor `Array`).
   * 
   * @since ES5 `lib.es5.d.ts`
   */
  lastIndexOf(
    searchElement: T,
    fromIndex = this.length-1,
  ): number {
    return Array.prototype.lastIndexOf.call(this, searchElement, fromIndex);
  }

  /**
   * @category R: Método no destructivo (no modifica el receptor `Array`).
   * 
   * @since ES5 `lib.es5.d.ts`
   */
  map<U>(
    callback: (
      value: T,
      index: number,
      array: /* Array_<T> */ Array<T>,
    ) => U,
    thisArg?: any,
  ): /* Array_<U> */ Array<U> {
    return Array.prototype.map.call(this, callback, thisArg) as Array<U>;
  }

  /**
   * @category W: Método destructivo (modifica el receptor `Array`).
   * 
   * @since ES3 `lib.es5.d.ts`
   */
  pop(): T | undefined {
    return Array.prototype.pop.call(this);
  }

  /**
   * @category W: Método destructivo (modifica el receptor `Array`).
   * 
   * @since ES3 `lib.es5.d.ts`
   */
  push(...items: Array<T>): number {
    return Array.prototype.push.call(this, ...items);
  }

  /**
   * @category R: Método no destructivo (no modifica el receptor `Array`).
   * 
   * @since ES5 `lib.es5.d.ts`
   */
  reduce<U>(
    callback: (
      accumValue: U,
      currentValue: T,
      currentIndex: number,
      array: Array<T>,
    ) => U,
    initValue?: U,
  ): U {
    callback; initValue; return initValue!;
  }

  /**
   * @category R: Método no destructivo (no modifica el receptor `Array`).
   * 
   * @since ES5 `lib.es5.d.ts`
   */
  reduceRight<U>(
    callback: (
      accumValue: U,
      currentValue: T,
      currentIndex: number,
      array: Array<T>,
    ) => U,
    initValue?: U,
  ): U {
    callback; initValue; return initValue!;
  }

  /**
   * @category W: Método destructivo (modifica el receptor `Array`).
   * 
   * @since ES1 `lib.es5.d.ts`
   */
  reverse(): /* this */ Array<T> {
    return Array.prototype.reverse.call(this);
  }

  /**
   * @category W: Método destructivo (modifica el receptor `Array`).
   * 
   * @since ES3 `lib.es5.d.ts`
   */
  shift(): T | undefined {
    return Array.prototype.shift.call(this);
  }

  /**
   * @category R: Método no destructivo (no modifica el receptor `Array`).
   * 
   * @since ES3 `lib.es5.d.ts`
   */
  slice(
    start = 0,
    end = this.length,
  ): /* Array_<T> */ Array<T> {
    return Array.prototype.slice.call(this, start, end);
  }

  /**
   * @category R: Método no destructivo (no modifica el receptor `Array`).
   * 
   * @since ES5 `lib.es5.d.ts`
   */
  some(
    callback: (
      value: T,
      index: number,
      array: /* Array_<T> */ Array<T>,
    ) => boolean,
    thisArg?: any,
  ): boolean {
    return Array.prototype.some.call(this, callback, thisArg);
  }

  /**
   * @category W: Método destructivo (modifica el receptor `Array`).
   * 
   * @since ES1 `lib.es5.d.ts`
   */
  sort(
    compareFunc?: (
      a: T,
      b: T,
    ) => number
  ): /* this */ Array<T> {
    return Array.prototype.sort.call(this, compareFunc);
  }

  /**
   * @category W: Método destructivo (modifica el receptor `Array`).
   * 
   * @since ES3 `lib.es5.d.ts`
   */
  splice(
    start: number,
    deleteCount = this.length - start,
    ...items: Array<T>
  ): /* Array_<T> */ Array<T> {
    return Array.prototype.splice.call(this, start, deleteCount, ...items);
  }

  /**
   * @category R: Método no destructivo (no modifica el receptor `Array`).
   * 
   * @override
   * 
   * @since ES3 `lib.es5.d.ts`
   */
  toLocaleString(): string {
    let string = ``;
    if (this.length >= 1) {
      string = String(this[0]);
    }
    for (let i=1; i<this.length; i++) {
      string += `,${String(this[i])}`;
    }
    return string;
  }

  /**
   * @category R: Método no destructivo (no modifica el receptor `Array`).
   * 
   * @override
   * 
   * @since ES1 `lib.es5.d.ts`
   */
  toString(): string {
    let string = ``;
    if (this.length >= 1) {
      string = String(this[0]);
    }
    for (let i=1; i<this.length; i++) {
      string += `,${String(this[i])}`;
    }
    return string;
  }

  /**
   * @category W: Método destructivo (modifica el receptor `Array`).
   * 
   * @since ES3 `lib.es5.d.ts`
   */
  unshift(
    ...items: Array<T>
  ): number {
    return Array.prototype.unshift.call(this, ...items);
  }

  /**
   * Usar este método en lugar del método `Symbol.iterator`.
   * 
   * @category R: Método no destructivo (no modifica el receptor `Array`).
   * 
   * @since ES2015 `lib.es2015.iterable.d.ts`
   */
  values(): ArrayValues<T> /* IterableIterator<T> */ {
    return this[Symbol.iterator]();
  }

  /**
   * @since ES2015 `lib.es2015.symbol.wellknown.d.ts`
   */
  static get [Symbol.species](): typeof Array_ {
    return this;
  }

  /**
   * Preferir usar un literal y el _spread_ de ES2015 (`[...iterable]`) en lugar
   * de este método (`Array.from(iterable)`).
   * 
   * @since ES2015 `lib.es2015.iterable.d.ts`
   */
  static from<T, U>(
    iterable: Iterable<T> | ArrayLike<T>,
    mapFunc?: (value: T, index: number) => U,
    thisArg?: any,
  ): Array_<U> {
    iterable; mapFunc; thisArg; return new Array_();
    // return Array.from(iterable, mapFunc, thisArg);
  }

  /**
   * Preferir usar `value instanceof Array` en lugar de este método.
   * 
   * @since ES5 `lib.es5.d.ts`
   */
  static isArray(value: any): value is Array_<any> {
    return Object.prototype.toString.call(value) === `[object Array]`;
  }

  /**
   * @since ES2015 `lib.es2015.core.d.ts`
   */
  static of<T>(
    ...items: Array<T>
  ): /* Array_<T> */ Array<T> {
    return Array.of(...items);
  }

}