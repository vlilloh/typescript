export class Math_ {

  /**
   * Euler's number, base of natural logarithms.
   * 
   * @attributes
   * ```
   * Object.defineProperty(
   *   Math_, `E`,
   *   { configurable: false, enumerable: false, writable: false }
   * );
   * ```
   * 
   * @since ES1 `lib.es5.d.ts`
   */
  static readonly E = 2.718281828459045;

  /**
   * Natural logarithm of 10.
   * 
   * @attributes
   * ```
   * Object.defineProperty(
   *   Math_, `LN10`,
   *   { configurable: false, enumerable: false, writable: false }
   * );
   * ```
   * 
   * @since ES1 `lib.es5.d.ts`
   */
  static readonly LN10 = Math.log(10); // 2.302585092994046

  /**
   * Natural logarithm of 2.
   * 
   * @attributes
   * ```
   * Object.defineProperty(
   *   Math_, `LN2`,
   *   { configurable: false, enumerable: false, writable: false }
   * );
   * ```
   * 
   * @since ES1 `lib.es5.d.ts`
   */
  static readonly LN2 = Math.log(2); // 0.6931471805599453

  /**
   * Base-2 logarithm of e.
   * 
   * @attributes
   * ```
   * Object.defineProperty(
   *   Math_, `LOG2E`,
   *   { configurable: false, enumerable: false, writable: false }
   * );
   * ```
   * 
   * @since ES1 `lib.es5.d.ts`
   */
  static readonly LOG2E = Math.log2(Math.E); // 1.4426950408889634

  /**
   * Base-10 logarithm of e
   * 
   * @attributes
   * ```
   * Object.defineProperty(
   *   Math_, `LOG10E`,
   *   { configurable: false, enumerable: false, writable: false }
   * );
   * ```
   * 
   * @since ES1 `lib.es5.d.ts`
   */
  static readonly LOG10E = Math.log10(Math.E); // 0.4342944819032518

  /**
   * Ratio of the circumference of a circle to its diameter.
   * 
   * @attributes
   * ```
   * Object.defineProperty(
   *   Math_, `PI`,
   *   { configurable: false, enumerable: false, writable: false }
   * );
   * ```
   * 
   * @since ES1 `lib.es5.d.ts`
   */
  static readonly PI = 3.141592653589793;

  /**
   * Square root of 0.5, or, equivalently, one divided by the square root of 2.
   * 
   * @attributes
   * ```
   * Object.defineProperty(
   *   Math_, `SQRT1_2`,
   *   { configurable: false, enumerable: false, writable: false }
   * );
   * ```
   * 
   * @since ES1 `lib.es5.d.ts`
   */
  static readonly SQRT1_2 = Math.sqrt(1/2); // 0.7071067811865476

  /**
   * Square root of 2.
   * 
   * @attributes
   * ```
   * Object.defineProperty(
   *   Math_, `SQRT2`,
   *   { configurable: false, enumerable: false, writable: false }
   * );
   * ```
   * 
   * @since ES1 `lib.es5.d.ts`
   */
  static readonly SQRT2 = Math.sqrt(2); // 1.4142135623730951

  /**
   * @since ES2015 `lib.es2015.symbol.wellknown.d.ts`
   */
  static get [Symbol.toStringTag](): string {
    return this.name;
  }

}