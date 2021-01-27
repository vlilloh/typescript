import type {
  Constructor,
} from '@vlilloh/constructor';

export class Operator {

  /**
   * Implementación del operador `instanceof`.
   * 
   * ```
   * [] instanceof Array; // -> true
   * [] instanceof Object; // -> true
   * (()=>{}) instanceof Function; // -> true
   * (()=>{}) instanceof Object; // -> true
   * point3d instanceof Point3D; // true
   * point3d instanceof Point; // true
   * Object.prototype instanceof Object; // -> false
   * Object.setPrototypeOf({}, null) instanceof Object; // -> false
   * Object.create(null) instanceof Object; // -> false
   * ```
   */
  static instanceof(value: any, constructor: Constructor): boolean {
    return constructor[Symbol.hasInstance](value);
  }

}