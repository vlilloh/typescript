export const parseFloat = (string: string): number => {
  return globalThis.parseFloat(string);
}

export const parseInt = (string: string, radix?: number): number => {
  return globalThis.parseInt(string, radix);
}