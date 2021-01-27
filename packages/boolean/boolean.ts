/**
 * 
 */
export class Boolean_ {

  value: boolean;

  /**
   * En realidad, se invocaría como un literal `value` (preferentemente), `true`
   * o `false`, o como `Boolean(value)` en lugar de `new Boolean(value)`, y
   * retornaría un tipo `boolean` en lugar un objeto `Boolean`, pero también con
   * todos los métodos de instancia.
   * 
   * Preferir `Boolean(value)` a `!!value`.
   * 
   * Decimos que `value` es *truthy* si `Boolean(value) === true`. Decimos que
   * `value` es *falsy* si `Boolean(value) === false`.
   * 
   * ---
   * 
   * La sentencia `if` y la expresión `if` (el operador condicional) convierten
   * su valor condicional a `boolean` implícitamente con `Boolean(value)`. Los
   * operadores lógicos hacen lo mismo con su primer operando.
   * 
   * Una comprobación *truthy* / *falsy* es imprecisa para valores faltantes.
   * 
   * Por ejemplo, el el caso de uso de si un argumento opcional fue
   * proporcionado:
   * ```
   * const func = (value?: any) => {
   *   if (!value) { // Incorrecto
   *     throw new Error(`Missing argument: value`); 
   *   }
   *   if (value === undefined) { // Correcto
   *     throw new Error(`Missing argument: value`);
   *   }
   * }
   * ```
   * 
   * O por ejemplo, en el caso de uso de si una propiedad existe:
   * ```
   * const func = (object: any) => {
   *   if (!object.property) { // Incorrecto
   *     throw new Error(`Missing property: .property`); 
   *   }
   *   if (!(`property` in object)) { // Correcto
   *     throw new Error(`Missing property: .property`);
   *   }
   * }
   * ```
   * 
   * Operadores lógicos:
   * - Binarios:
   *   - *And* lógico `&&`: `x && y` ⇔ `!Boolean(x) ? x : y` (`false ? x : y`)
   *   - *Or* lógico `||`: `x || y` ⇔ `Boolean(x) ? x : y` (`true ? x : y`)
   * - Unario
   *   - *Not* lógico `!`
   * 
   * Los operadores lógicos binarios, tal y como vemos en su implementación como
   * operadores condicionales:
   * - Preservan el valor: Los operandos son retornados sin cambiar, en lugar de
   * retornar `true` o `false`, a pesar de que el primer operando sea convertido
   * a `boolean`.
   * - Actúan en cortocircuito: Si el primer operando ya determina el
   * resultado, entonces el segundo operando no es evaluado.
   * 
   * El *or* lógico es útil para el caso de uso de obtener un valor por defecto
   * en caso de que el valor recibido sea *falsy*:
   * ```
   * // const valueToUse = receivedValue || defaultValue;
   * const countMatches = (regex, str) => {
   *   const matchResult = str.match(regex); // null or Array
   *   return (matchResult || []).length;
   * }
   * ```
   */
  constructor(value: any) {
    if (
      typeof value === `object` && value !== null ||
      typeof value === `function` ||
      typeof value === `symbol`
    ) {
      this.value = true;
    } else if (typeof value === `boolean`) {
      this.value = value;
    } else if (typeof value === `number`) {
      this.value = value !== 0 && value !== NaN;
    } else if (typeof value === `bigint`) {
      this.value = value !== 0n;
    } else if (typeof value === `string`) {
      this.value = value.length !== 0;
    } else { /* value === undefined || value === null */
      this.value = false;
    }
  }

  /**
   * @override
   */
  toString(): string {
    return this.value ? `true` : `false`;
  }

  /**
   * @override
   */
  valueOf(): boolean {
    return this.value;
  }

}