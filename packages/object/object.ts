/**
 * @license
 */

/**
 * @packageDocumentation
 * 
 * Signaturas adaptadas a los tipos que deben usarse.
 */

/**
 * Make all properties in T readonly
 */
export type Readonly_<T> = {
  readonly [P in keyof T]: T[P];
};

/**
 * Marker for contextual `this` type
 */
export interface ThisType_<_T> { }

export type PropertyKey_ = string | number | symbol;

export interface PropertyDescriptor_ {
  configurable?: boolean;
  enumerable?: boolean;
  writable?: boolean;
  value?: any;
  get?(): any;
  set?(value: any): void;
}

export interface TypedPropertyDescriptor_<T> {
  configurable?: boolean;
  enumerable?: boolean;
  writable?: boolean;
  value?: T;
  get?: () => T;
  set?: (value: T) => void;
}

export interface PropertyDescriptorMap_ {
  [key: string]: PropertyDescriptor,
}

/**
 * En general, como anotación de tipo, los desarrolladores prefieren usar `{}`
 * en lugar de `Object`, pero yo prefiero usar `Object` por homogeneidad con el
 * uso del resto de tipos.
 * 
 * `Object` es la raíz de la jerarquía de clases. Define las propiedades comunes
 * a todas las instancias. Todas las clases heredan directa o indirectamente de
 * `Object`.
 * 
 * Una clase extiende por defecto de Object:
 * `class Point { ... }` = `class Point extends Object { ... }`.
 * 
 * De los 6 métodos de instancia, hay 3 que son redefinibles (`toLocaleString`,
 * `toString`, `valueOf`) y 3 que son no redefinibles (`hasOwnProperty`,
 * `isPrototypeOf`, `propertyIsEnumerable`).
 * 
 * Se echa en falta otros métodos de instancia que existen en `Object` de Java
 * como `clone`, `equals`, `getClass`.
 * 
 * @since ES1 `lib.es5.d.ts`
 */
export class Object_ {

  /**
   * @since ES1 `lib.es5.d.ts`
   */
  [propertyKey: string]: any;

  /**
   * @since ES1 `lib.es5.d.ts`
   */
  constructor(object?: Object_) {
    if (object){
      for (const [key, value] of Object_.entries(object)) {
        this[key] = value;
      }
    }
  }

  /**
   * @final
   * 
   * @since ES3 `lib.es5.d.ts`
   */
  hasOwnProperty(propertyKey: PropertyKey): boolean {
    return Object.prototype.hasOwnProperty(propertyKey);
  }

  /**
   * @final
   * 
   * @since ES3 `lib.es5.d.ts`
   */
  isPrototypeOf(value: any): boolean {
    if (typeof value === `object` && value !== null) {
      value = Object_.getPrototypeOf(value);
      while (value !== null) {
        if (value === this) {
          return true;
        }
        value = Object_.getPrototypeOf(value);
      }
      return false;
    }
    return false;
  }

  /**
   * @final
   * 
   * @since ES3 `lib.es5.d.ts`
   */
  propertyIsEnumerable(propertyKey: PropertyKey): boolean {
    return Object.prototype.propertyIsEnumerable(propertyKey);
  }

  /**
   * @since ES3 `lib.es5.d.ts`
   */
  toLocaleString(): string {
    return this.toString();
  }

  /**
   * Redefinir para que retorne una cadena con la información actual del objeto.
   * 
   * Si no redefinimos `toString`, podemos definir `[Symbol.toStringTag]` para
   * que al menos `toString` retorne de manera predeterminada 
   * `[object ${className}]` por ejemplo en lugar de `[object Object]` (ejemplo
   * a continuación), pero es más útil y recomendable redefinir `toString`.
   * 
   * ```
   * class Point {
   *   constructor(
   *     protected x: number,
   *     protected y: number,
   *   ) {}
   *   // @final
   *   get [Symbol.toStringTag](): string {
   *     return Object.getPrototypeOf(this).constructor.name;
   *   }
   * }
   * class Point3D extends Point {
   *   constructor(
   *     x: number,
   *     y: number,
   *     protected z: number,
   *   ) {
   *     super(x, y);
   *   }
   * }
   * `${new Point(1, 2)}`; // -> `[object Point]`
   * `${new Point3D(1, 2, 3)}`; // -> `[object Point3D]`
   * ```
   * 
   * @since ES1 `lib.es5.d.ts`
   */
  toString(): string {
    const toStringTag = Symbol.toStringTag as unknown as keyof Object_;
    return this[toStringTag] && typeof this[toStringTag] === `string` ?
      `[object ${this[toStringTag]}` :
      `[object Object]`;
  }

  /**
   * ```
   * class Point {
   *   valueOf(): number {
   *     return this.distToZero();
   *   }
   * }
   * Number(new Point(3, 4)); // -> 5
   * Number({}); // -> NaN
   * ```
   * 
   * @since ES1 `lib.es5.d.ts`
   */
  valueOf(): this {
    return this;
  }

  /**
   * @return `target`
   * 
   * @since ES2015 `lib.es2015.core.d.ts`
   */
  static assign(target: Object_, ...sources: Array<any>): any {
    return Object.assign(target, ...sources);
  }

  /**
   * @since ES5 `lib.es5.d.ts`
   */
  static create(
    prototype: Object_|null,
    propertyDescriptors?: PropertyDescriptorMap & ThisType<any>,
  ): any {
    return Object.create(prototype, propertyDescriptors!);
  }

  /**
   * @return `object`
   * 
   * @since ES5 `lib.es5.d.ts`
   */
  static defineProperties(
    object: any,
    propertyDescriptors: PropertyDescriptorMap & ThisType<any>,
  ): any {
    return Object.defineProperties(object, propertyDescriptors);
  }

  /**
   * @example
   * ```
   * Object.definePropery(Object.prototype, `class`, {
   *   get: function() {
   *     return Object.getPrototypeOf(this).constructor;
   *   },
   *   configurable: true,
   * });
   * ```
   * 
   * @return `object`
   * 
   * @since ES5 `lib.es5.d.ts`
   */
  static defineProperty(
    object: any,
    propertyKey: PropertyKey,
    propertyDescriptor: PropertyDescriptor & ThisType<any>,
  ): any {
    Object.defineProperty(object, propertyKey, propertyDescriptor);
  }

  /**
   * Retorna una `Array` de pares [nombre de propiedad, valor] a partir de las
   * propiedades enumerables de un objeto.
   * 
   * @example
   * ```
   * const object = { x: 1, y: 2 };
   * Object.entries(object); // → [ [x, 1], [y, 2] ]
   * ```
   * 
   * @since ES2017 `lib.es2017.object.d.ts`
   */
  static entries<T>(
    object: { [propertyName: string]: T } | ArrayLike<T>,
  ): Array<[string, T]> {
    return Object.entries(object);
  }

  /**
   * @return `object`
   * 
   * @since ES5 `lib.es5.d.ts`
   */
  static freeze<T>(object: T): Readonly<T> {
    return Object.freeze(object);
  }

  /**
   * Retorna un objeto creado (ensamblado) a partir de un `Iterable` con pares
   * `[clave, valor]`, como el producido por `Object.entries`. Hace lo contrario
   * que `Object.entries`.
   * 
   * @example
   * ```
   * const object = { x: 1, y: 2 };
   * const entries = Object.entries(object); // entries = [ [x, 1], [y, 2] ]
   * Object.fromEntries(entries); // → { x: 1, y: 2 }
   * ```
   * 
   * @since ES2019 `lib.es2019.object.d.ts`
   */
  static fromEntries<T = any>(
    entries: Iterable<readonly [PropertyKey, T]>,
  ): { [propertyName: string]: T } {
    const object = new Object_();
    for (const [propertyKey, value] of entries) {
      let coercedKey;
      if (typeof propertyKey === `string` || typeof propertyKey === `symbol`) {
        coercedKey = propertyKey;
      } else {
        coercedKey = String(propertyKey);
      }
      object[coercedKey as keyof Object_] = value;
    }
    return object;
  }

  /**
   * @since ES5 `lib.es5.d.ts`
   */
  static getOwnPropertyDescriptor(
    object: any,
    propertyKey: PropertyKey,
  ): PropertyDescriptor|undefined {
    return Object.getOwnPropertyDescriptor(object, propertyKey);
  }

  /**
   * @since ES2017 `lib.es2017.object.d.ts`
   */
  static getOwnPropertyDescriptors<T>(
    object: T
  ): {
    [P in keyof T]: TypedPropertyDescriptor<T[P]>
  } & {
    [propertyName: string]: PropertyDescriptor
  } {
    return Object.getOwnPropertyDescriptors(object);
  }

  /**
   * @since ES5 `lib.es5.d.ts`
   */
  static getOwnPropertyNames(object: any): Array<string> {
    return Object.getOwnPropertyNames(object);
  }

  /**
   * @since ES2015 `lib.es2015.core.d.ts`
   */
  static getOwnPropertySymbols(object: any): Array<symbol> {
    return Object.getOwnPropertySymbols(object);
  }

  /**
   * @since ES5 `lib.es5.d.ts`
   */
  static getPrototypeOf(object: any): any {
    return Object.getPrototypeOf(object);
  };

  /**
   * @since ES2015 `lib.es2015.core.d.ts`
   */
  static is(value1: any, value2: any): boolean {
    return Object.is(value1, value2);
  }

  /**
   * @since ES5 `lib.es5.d.ts`
   */
  static isExtensible(object: any): boolean {
    return Object.isExtensible(object);
  }

  /**
   * @since ES5 `lib.es5.d.ts`
   */
  static isFrozen(object: any): boolean {
    return Object.isFrozen(object);
  }

  /**
   * @since ES5 `lib.es5.d.ts`
   */
  static isSealed(object: any): boolean {
    return Object.isSealed(object);
  }

  /**
   * @since ES5 `lib.es5.d.ts`
   */
  static keys(object: Object_): Array<string> {
    return Object.keys(object);
  }

  /**
   * @return `object`
   * 
   * @since ES5 `lib.es5.d.ts`
   */
  static preventExtensions<T>(object: T): T {
    return Object.preventExtensions(object);
  }

  /**
   * @return `object`
   * 
   * @since ES5 `lib.es5.d.ts`
   */
  static seal<T>(object: T): T {
    return Object.seal(object);
  }

  /**
   * @return `object`
   * 
   * @since ES2015 `lib.es2015.core.d.ts`
   */
  static setPrototypeOf(object: any, prototype: Object_|null): any {
    return Object.setPrototypeOf(object, prototype);
  }

  /**
   * @since ES2017 `lib.es2017.object.d.ts`
   */
  static values<T>(
    object: { [propertyName: string]: T } |  ArrayLike<T>,
  ): Array<T> {
    return Object.values(object);
  }

}