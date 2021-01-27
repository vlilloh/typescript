import {
  parseInt,
  parseFloat,
} from '../common';

/**
 * @since ES1 `lib.es5.d.ts`
 */
export class Number_ {

  value: number;

  /**
   * En realidad, se invocaría como un literal `value` de tipo `number`
   * (preferentemente), o como `Number(value)` en lugar de `new Number(value)`,
   * y retornaría un tipo `number` en lugar un objeto `Number`, pero también con
   * todos los métodos de instancia.
   * 
   * Preferir `Number(value)` a `+value`.
   * 
   * @since ES1 `lib.es5.d.ts`
   */
  constructor(value: any) {
    if (arguments.length === 0) {
      this.value = 0;
      return;
    }
    if (typeof value === `object` && value !== null) {
      if (value[Symbol.toPrimitive]) {
        const primitiveValue = value[Symbol.toPrimitive](`number`);
        if (typeof primitiveValue === `object` && primitiveValue !== null) {
          throw new Error(`TypeError: Cannot convert object to primitive value`);
        } else {
          value = primitiveValue;
        }
      } else {
        value = value.valueOf();
      }
    }
    if (
      typeof value === `object` && value !== null ||
      typeof value === `function`
    ) {
      this.value = NaN;
    } else if (typeof value === `boolean`) {
      this.value = value ? 1 : 0;
    } else if (typeof value === `number`) {
      this.value = value;
    } else if (typeof value === `string`) {
      this.value = value.length === 0 ? 0 : NaN;
      if (value.length === 0) {
        this.value = 0;
      } else {
        /* this.value = la cadena convertida en número si es un número
        representado como cadena, o NaN si no se puede */
      }
    } else if (typeof value === `symbol`) {
      throw new Error(`TypeError: Cannot convert a Symbol value to a number`);
    } else if (typeof value === `bigint`) {
      this.value = Number(value); // Estamos haciendo trampa
    } else if (value === undefined) {
      this.value = NaN;
    } else { /* value === null */
      this.value = 0;
    }
  }

  /**
   * Returns a string containing a number represented in exponential notation.
   * 
   * @param fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
   * 
   * @since ES3 `lib.es5.d.ts`
   */
  toExponential(fractionDigits?: number): string {
    return this.value.toExponential(fractionDigits);
  }

  /**
   * Returns a string representing a number in fixed-point notation.
   * 
   * @param fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
   * 
   * @since ES3 `lib.es5.d.ts`
   */
  toFixed(fractionDigits?: number): string {
    return this.value.toFixed(fractionDigits);
  }

  /**
   * @override
   * 
   * @since ES3 ?
   */
  toLocaleString(): string {
    /* Estamos haciendo trampa. Desarrollar un algoritmo que convierta un
    `number` en un `string`. */
    return this.value.toString();
  }

  /**
   * Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
   * 
   * @param precision Number of significant digits. Must be in the range 1 - 21, inclusive.
   * 
   * @since ES3 `lib.es5.d.ts`
   */
  toPrecision(precision?: number): string {
    return this.value.toPrecision(precision);
  }

  /**
   * @override
   * 
   * @since ES1 `lib.es5.d.ts`
   */
  toString(radix?: number): string {
    /* Estamos haciendo trampa. Desarrollar un algoritmo que convierta un
    `number` en un `string`. */
    return this.value.toString(radix);
  }

  /**
   * @override
   * 
   * @since ES1 `lib.es5.d.ts`
   */
  valueOf(): number {
    return this.value;
  }

  /**
   * Difference between 1 and the smallest value greater than 1 that is
   * representable as a Number value (the smallest floating point number greater
   * than 1), which is approximately 2.2204460492503130808472633361816e-16.
   * 
   * @attributes
   * ```
   * Object.defineProperty(
   *   Number_, `EPSILON`,
   *   { configurable: false, enumerable: false, writable: false }
   * );
   * ```
   * 
   * @since ES2015 `lib.es2015.core.d.ts`
   */
  static readonly EPSILON = 2 ** -52; // 2.220446049250313e-16

  /**
   * Largest integer n such that n and n + 1 are both exactly representable as
   * a Number value.
   * 
   * @attributes
   * ```
   * Object.defineProperty(
   *   Number_, `MAX_SAFE_INTEGER`,
   *   { configurable: false, enumerable: false, writable: false }
   * );
   * ```
   * 
   * @since ES2015 `lib.es2015.core.d.ts`
   */
  static readonly MAX_SAFE_INTEGER = 2 ** 53 - 1; // 9007199254740991

  /**
   * Largest positive finite value of the Number type (largest number that can
   * be represented), which is approximately `2 ** 1024`.
   * 
   * @attributes
   * ```
   * Object.defineProperty(
   *   Number_, `MAX_VALUE`,
   *   { configurable: false, enumerable: false, writable: false }
   * );
   * ```
   * 
   * @since ES1 `lib.es5.d.ts`
   */
  static readonly MAX_VALUE = 1.7976931348623157e+308;

  /**
   * Smallest integer n such that n and n - 1 are both exactly representable as
   * a Number value.
   * 
   * @attributes
   * ```
   * Object.defineProperty(
   *   Number_, `MIN_SAFE_INTEGER`,
   *   { configurable: false, enumerable: false, writable: false }
   * );
   * ```
   * 
   * @since ES2015 `lib.es2015.core.d.ts`
   */
  static readonly MIN_SAFE_INTEGER = -(2 ** 53 - 1); // -9007199254740991

  /**
   * Smallest positive value of the Number type (closest number to zero that
   * can be represented).
   * 
   * @attributes
   * ```
   * Object.defineProperty(
   *   Number_, `MIN_VALUE`,
   *   { configurable: false, enumerable: false, writable: false }
   * );
   * ```
   * 
   * @since ES1 `lib.es5.d.ts`
   */
  static readonly MIN_VALUE = 5e-324;

  /**
   * A value that is not a number.
   * 
   * In equality comparisons, `NaN` does not equal any value, including itself.
   * 
   * To test whether a value is equivalent to `NaN`, use the `isNaN` function.
   * 
   * @attributes
   * ```
   * Object.defineProperty(
   *   Number_, `NaN`,
   *   { configurable: false, enumerable: false, writable: false }
   * );
   * ```
   * 
   * @since ES1 `lib.es5.d.ts`
   */
  static readonly NaN = NaN;

  /**
   * A value that is less than the largest negative number that can be
   * represented.
   * 
   * @attributes
   * ```
   * Object.defineProperty(
   *   Number_, `NEGATIVE_INFINITY`,
   *   { configurable: false, enumerable: false, writable: false }
   * );
   * ```
   * 
   * @since ES1 `lib.es5.d.ts`
   */
  static readonly NEGATIVE_INFINITY = -Infinity;

  /**
   * A value greater than the largest number that can be represented.
   * 
   * @attributes
   * ```
   * Object.defineProperty(
   *   Number_, `POSITIVE_INFINITY`,
   *   { configurable: false, enumerable: false, writable: false }
   * );
   * ```
   * 
   * @since ES1 `lib.es5.d.ts`
   */
  static readonly POSITIVE_INFINITY = Infinity;

  /**
   * Returns `true` if passed value is finite.
   * 
   * Unlike the global `isFinite`, `Number_.isFinite` doesn't forcibly convert
   * the parameter to a `number`. Only finite values of the type `number`, result
   * in `true`.
   * 
   * @since ES2015 `lib.es2015.core.d.ts`
   */
  isFinite(value: unknown): boolean {
    return (typeof value === `number`) && (value - value === 0);
  }

  /**
   * Returns true if the value passed is an integer, false otherwise.
   * 
   * @since ES2015 `lib.es2015.core.d.ts`
   */
  isInteger(value: unknown): boolean {
    return Number.isInteger(value);
  }

  /**
   * Returns a Boolean value that indicates whether a value is the reserved
   * value NaN (not a number).
   * 
   * Unlike the global isNaN(), Number.isNaN() doesn't forcefully convert the
   * parameter to a number. Only values of the type number, that are also NaN,
   * result in true.
   * 
   * @since ES2015 `lib.es2015.core.d.ts`
   */
  isNaN(value: unknown): boolean {
    return Number.isNaN(value);
  }

  /**
   * Returns true if the value passed is a safe integer.
   * 
   * @since ES2015 `lib.es2015.core.d.ts`
   */
  isSafeInteger(value: unknown): boolean {
    return Number.isSafeInteger(value);
  }

  /**
   * The value of the `Number.parseFloat` data property is the same built-in
   * function object that is the value of the `parseFloat` property of the
   * global object.
   * 
   * Converts a `string` to a floating-point `number`.
   * 
   * @since ES2015 `lib.es2015.core.d.ts`
   */
  parseFloat(string: string): number {
    return parseFloat(string);
  }

  /**
   * The value of the `Number.parseInt` data property is the same built-in
   * function object that is the value of the `parseInt` property of the global
   * object.
   * 
   * Converts a `string` to an integer.
   * 
   * `radix` is a value between 2 and 36 that specifies the base of the number.
   *
   * If this argument is not supplied, strings with a prefix of `0x` are
   * considered hexadecimal. All other strings are considered decimal.
   * 
   * @since ES2015 `lib.es2015.core.d.ts`
   */
  parseInt(string: string, radix?: number): number {
    return parseInt(string, radix);
  }

}