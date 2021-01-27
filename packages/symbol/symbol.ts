/**
 * Caso de uso: Valor único para constante.
 * ```
 * const COLOR_RED = Symbol(`Red`);
 * const COLOR_ORANGE = Symbol(`Orange`);
 * const COLOR_YELLOW = Symbol(`Yellow`);
 * const COLOR_GREEN = Symbol(`Green`);
 * const COLOR_BLUE = Symbol(`Blue`);
 * const COLOR_VIOLET = Symbol(`Violet`);
 * const COLOR_BROWN = Symbol(`Brown`);
 * const getComplement = (color: symbol): symbol => {
 *   switch (color) {
 *     case COLOR_RED:
 *       return COLOR_GREEN;
 *     case COLOR_ORANGE:
 *       return COLOR_BLUE;
 *     case COLOR_YELLOW:
 *       return COLOR_VIOLET;
 *     case COLOR_GREEN:
 *       return COLOR_RED;
 *     case COLOR_BLUE:
 *       return COLOR_ORANGE;
 *     case COLOR_VIOLET:
 *       return COLOR_YELLOW;
 *     default:
 *       throw new Error(`Unknown color ${String(color)}`);
 *   }
 * }
 * getComplement(COLOR_YELLOW); // → Symbol(Violet)
 * getComplement(COLOR_BROWN); // → Uncaught Error: Unknown color Symbol(Brown)
 * ```
 * 
 * Caso de uso: Clave única para miembro de clase u objeto.
 * ```ts
 * class ClassSymbol {
 *   static readonly specialField = Symbol(`SymbolClass.specialField`);
 *   static readonly specialMethod = Symbol(`SymbolClass.specialMethod`);
 * }
 * class Class {
 *   [SymbolClass.specialField] = 1;
 *   [SymbolClass.specialMethod](): number {
 *     return this[SymbolClass.specialField];
 *   }
 * }
 * const object = new Class();
 * object[SymbolClass.specialMethod](); // → 1;
 * ```
 * 
 * @since ES2015 `lib.es2015.symbol.d.ts`
 */
export class Symbol_ {

  /**
   *  [[SymbolData]] internal slot 
   */
  value: symbol;

  /**
   * [[Description]] internal slot
   */
  private readonly _description?: string;

  /**
   * En realidad, se invocaría como `Symbol(description)` en lugar de
   * `new Symbol(description)`, y retornaría un tipo `symbol` en lugar un objeto
   * `Symbol`, pero también con todos los métodos de instancia.
   * 
   * @since ES2015 `lib.es2015.symbol.d.ts`
   */
  constructor(description?: any) {
    this.value = Symbol(description);
    if (description !== undefined) {
      this._description = `${this._description}`;
    }
  }

  /**
   * @since ES2015 `?`
   */
  [Symbol.toPrimitive](_hint: `number`|`string`|`default`): symbol {
    return this.value;
  }

  /**
   * @since ES2015 `lib.es2015.symbol.wellknown.d.ts`
   */
  get [Symbol.toStringTag](): string {
    return Object.getPrototypeOf(this).constructor.name;
  }

  /**
   * @since ES2019 `lib.es2019.symbol.d.ts`
   */
  get description(): string|undefined {
    return this._description;
  }

  /**
   * @override
   * 
   * @since ES2015 `lib.es5.d.ts`
   */
  toString(): string {
    return `${this[Symbol.toStringTag]}(${this.description === undefined ? `` : this.description})`;
  }

  /**
   * @override
   * 
   * @since ES2015 `lib.es5.d.ts`
   */
  valueOf(): symbol {
    return this.value;
  }

  /**
   * @since ES2018 `lib.es2018.asynciterable.d.ts`
   */
  static readonly asyncIterator = new Symbol_(`Symbol_.asyncIterator`);

  /**
   * @since ES2015 `lib.es2015.symbol.wellknown.d.ts`
   */
  static readonly hasInstance= new Symbol_(`Symbol_.hasInstance`);

  /**
   * @since ES2015 `lib.es2015.symbol.wellknown.d.ts`
   */
  static readonly isConcatSpreadable = new Symbol_(`Symbol_.isConcatSpreadable`);
  
  /**
   * @since ES2015 `lib.es2015.iterable.d.ts`
   */
  static readonly iterator = new Symbol_(`Symbol_.iterator`);

  /**
   * @since ES2015 `lib.es2015.symbol.wellknown.d.ts`
   */
  static readonly match = new Symbol_(`Symbol_.match`);

  /**
   * @since ES2020 `lib.es2020.symbol.wellknown.d.ts`
   */
  static readonly matchAll = new Symbol_(`Symbol_.matchAll`);

  /**
   * @since ES2015 `lib.es2015.symbol.wellknown.d.ts`
   */
  static readonly replace = new Symbol_(`Symbol_.replace`);

  /**
   * @since ES2015 `lib.es2015.symbol.wellknown.d.ts`
   */
  static readonly search = new Symbol_(`Symbol_.search`);

  /**
   * @since ES2015 `lib.es2015.symbol.wellknown.d.ts`
   */
  static readonly species = new Symbol_(`Symbol_.species`);

  /**
   * @since ES2015 `lib.es2015.symbol.wellknown.d.ts`
   */
  static readonly split = new Symbol_(`Symbol_.split`);

  /**
   * Para definir un método que convierte un objeto en un valor primitivo
   * correspondiente.
   * 
   * Usado en método:
   * `[Symbol.toPrimitive](hint: `number`|`string`|`default`): any { ... }`
   * 
   * Método invocado por Number, String, ...
   * 
   * @attributes
   * ```
   * Object.defineProperty(
   *   Symbol_.toPrimitive,
   *   `EPSILON`,
   *   { configurable: false, enumerable: false, writable: false }
   * );
   * ```
   * 
   * @example
   * ```
   * class Point {
   *   constructor(
   *     protected x: number,
   *     protected y: number,
   *   ) {}
   *   [Symbol.toPrimitive](hint: `number`|`string`|`default`): string|number {
   *     if (hint === `number`) {
   *       return this.distToZero();
   *     } else if (hint === `string`) {
   *      return `${Object.getPrototypeOf(this).constructor.name} { x: ${this.x}, y: ${this.y} }`;
   *     }
   *     return `${this.distToZero()}`;
   *   }
   *   distTo(point: Point): number {
   *     return Math.hypot(this.x - point.x, this.y - point.y);
   *   }
   *   distToZero(): number {
   *     return this.distTo(new Point(0, 0));
   *   }
   * }
   * const point = new Point(3, 4);
   * Number(point); // -> 5 (hint === `number`)
   * `${point}`; // -> `Point { x: 3, y: 4 }` (hint === `string`)
   * point + ``; // -> `5` (hint === `default`)
   * ```
   * 
   * @since ES2015 `lib.es2015.symbol.wellknown.d.ts`
   */
  static readonly toPrimitive = new Symbol_(`Symbol_.toPrimitive`);

  /**
   * @since ES2015 `lib.es2015.symbol.wellknown.d.ts`
   */
  static readonly toStringTag = new Symbol_(`Symbol_.toStringTag`);

  /**
   * @since ES2015 `lib.es2015.symbol.d.ts`
   */
  static for(key: string): symbol {
    return Symbol.for(key);
  };

  /**
   * @since ES2015 `lib.es2015.symbol.d.ts`
   */
  static keyFor(sym: symbol): string | undefined {
    return Symbol.keyFor(sym);
  }

}