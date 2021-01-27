export class String_ {

  value: string;

  /**
   * En realidad, se invocaría como un literal ` `cadena` ` (preferentemente) o
   * como `String(value)` en lugar de `new String(value)`, y retornaría un tipo
   * `string` en lugar un objeto `String`, pero también con todos los métodos de
   * instancia.
   * 
   * Si se invoca como un literal, todos los `${expression}` que incluya dentro
   * se invocan implícitamente como `${String(expression)}`. La excepción es si
   * `expression` retorna un tipo `symbol`, que extrañamente arroja un
   * `TypeError: Cannot convert a Symbol value to a string`, lo que se soluciona
   * invocando la `expression` explícitamente con ${String(expression)}.
   */
  constructor(value: any) {
    if (typeof value === `object` && value !== null) {
      if (value[Symbol.toPrimitive]) {
        const primitiveValue = value[Symbol.toPrimitive](`string`);
        if (typeof primitiveValue === `object` && primitiveValue !== null) {
          throw new Error(`TypeError: Cannot convert object to primitive value`);
        } else if (typeof primitiveValue === `symbol`) {
          throw new Error(`TypeError: Cannot convert a Symbol value to a string`);
        } else {
          value = primitiveValue;
        }
      } else {
        value = value.toString();
      }
    }
    if (typeof value === `object` && value !== null) {
      throw new Error(`TypeError: Cannot convert object to primitive value`);
    } else if (
      typeof value === `function` ||
      typeof value === `boolean` ||
      typeof value === `number` ||
      typeof value === `symbol` ||
      typeof value === `bigint`
    ) {
      /* Debe ser `value.toString()`, y no String(value) o ` `${value}` ` porque
      entraría en recursión infinita. */
      this.value = value.toString();
    } else if (typeof value === `string`) {
      this.value = value;
    } else if (value === undefined) {
      this.value = `undefined`;
    } else { /* value === null */
      this.value = `null`;
    }
  }

  /**
   * @override
   */
  toString(): string {
    return this.value;
  }

  /**
   * @override
   */
  valueOf(): string {
    return this.value;
  }

}