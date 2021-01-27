/**
 * @since ES1 `lib.es5.d.ts`
 */
export class Function_ {

  /* [Symbol.hasInstance](inst: Object): boolean {
    return this.prototype.isPrototypeOf(inst);
  } */

  /**
   * Retorna el nombre de la función.
   * 
   * Por defecto es `anonymous` a no ser que la función haya sido asignada a una
   * variable, en cuyo caso será el nombre de la variable. La función siempre
   * irá asignada a una variable de función, de método o de clase. En el caso de
   * un método, si la clave es un símbolo, el valor de `name` será tal y como
   * hayamos escrito la clave, por ejemplo `"[Symbol.toPrimitive]"`.
   * 
   * @since ES2015 `lib.es2015.core.d.ts`
   */
  readonly name = `anonymous`;

  /**
   * Número de parámetros de la función o del constructor de la clase.
   * 
   * Los parámetros opcionales no se cuentan.
   * 
   * @since ES1 `lib.es5.d.ts`
   */
  readonly length: number;

  /**
   * @since ES1 `lib.es5.d.ts`
   */
  constructor(...args: Array<string>) {
    // El último parámetro de `args` es el cuerpo de la función.
    // this.[[body]] = args[args.length-1]
    this.length = args.length-1;
  }

  /**
   * Determina si el valor dado hereda (es una instancia) de la función, si la
   * función fue usada como una función constructora (o clase).
   * 
   * Una clase puede controlar qué valores son reconocidos como sus instancias
   * redefiniendo este método, que es el usado por el operador `instanceof`.
   * 
   * Este método se redefine como método de clase, y no de instancia como
   * aparece aquí, porque el objeto de la clase (la función constructora) hereda
   * de `Function.prototype`, donde está definido `[Symbol.hasInstance]` como
   * método de instancia.
   * 
   * @example
   * ```
   * class Point {
   *   constructor(
   *     protected x: number,
   *     protected y: number,
   *   ) { }
   *   static [Symbol.hasInstance](value: any): boolean {
   *     return Function.prototype[Symbol.hasInstance].call(this, value) ||
   *       value instanceof Object && `x` in value && `y` in value;
   *   }
   * }
   *
   * class Point3D extends Point {
   *   constructor(
   *     x: number,
   *     y: number,
   *     protected z: number,
   *   ) {
   *     super(x, y);
   *   }
   *   static [Symbol.hasInstance](value: any): boolean {
   *     return super[Symbol.hasInstance](value) && `z` in value;
   *   }
   * }
   *
   * ({ x: 1, y: 2 }) instanceof Point; // -> true
   * ({ x: 1, y: 2, z: 3 }) instanceof Point3D; // -> true
   * ```
   * 
   * @since ES2015 `lib.es2015.symbol.wellknown.d.ts`
   */
  [Symbol.hasInstance](value: any): boolean {
    return (this as {[key: string]: any}).prototype.isPrototypeOf(value);
  }

  /**
   * @since ES3 `lib.es5.d.ts`
   */
  apply(this: Function, thisArg: any, argArray?: any): any {
    thisArg; argArray;
  }

  /**
   * @since ES3 `lib.es5.d.ts`
   */
  call(this: Function, thisArg: any, ...argArray: any[]): any {
    thisArg; argArray;
  }

  /**
   * @since ES5 `lib.es5.d.ts`
   */
  bind(this: Function, thisArg: any, ...argArray: any[]): any {
    thisArg; argArray;
  }

  /**
   * Retorna una representación en cadena de la función.
   * 
   * @override
   * 
   * @since ES1 `lib.es5.d.ts`
   */
  toString(): string {
    return ``;
  }

}