/**
 * @license
 */

/**
 * @packageDocumentation
 * 
 * @since `lib.es5.d.ts`.
 * 
 * Signaturas adaptadas a los tipos que deben usarse.
 * 
 * @param target `constructor` (static) o `prototype` (instance)
 * 
 * https://www.typescriptlang.org/docs/handbook/decorators.html
 * https://codeburst.io/decorate-your-code-with-typescript-decorators-5be4a4ffecb4
 */

export type ClassDecorator =
  <TFunction extends Function>(
    constructor: TFunction,
  ) => TFunction | void;

export type PropertyDecorator = (
  target: Object,
  propertyKey: string | symbol,
) => void;

export type MethodDecorator = <T>(
  target: Object,
  propertyKey: string | symbol,
  propertyDescriptor: TypedPropertyDescriptor<T>,
) => TypedPropertyDescriptor<T> | void;

export type ParameterDecorator = (
  target: Object,
  propertyKey: string | symbol,
  parameterIndex: number,
) => void;