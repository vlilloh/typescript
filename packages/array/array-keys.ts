import {
  Array_,
} from './array';

export class ArrayKeys implements IterableIterator<number> {
  protected index = 0;
  constructor(
    protected array: Array_<unknown>,
  ) {}
  [Symbol.iterator](): ArrayKeys {
    return this;
  }
  next(): IteratorResult<number,undefined> {
    const item = this.index;
    const done = this.index >= this.array.length;
    this.index++;
    if (!done) {
      return { value: item };
    } else {
      return { value: undefined, done: true };
    }
  }
}