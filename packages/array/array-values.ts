import {
  Array_,
} from './array';

export class ArrayValues<T> implements IterableIterator<T> {
  protected index = 0;
  constructor(
    protected array: Array_<T>,
  ) {}
  [Symbol.iterator](): ArrayValues<T> {
    return this;
  }
  next(): IteratorResult<T,undefined> {
    const item = this.array[this.index];
    const done = this.index >= this.array.length;
    this.index++;
    if (!done) {
      return { value: item, done: false } as IteratorYieldResult<T>;
    } else {
      return { value: undefined, done: true };
    }
  }
  /**
   * @override
   */
  toString(): string {
    return `${Object.getPrototypeOf(this).constructor.name} { index: ${this.index}, array: ${this.array} }`;
  }
}