import {
  Array_,
} from './array';

export class ArrayEntries<T> implements IterableIterator<Array_<number|T>> {
  protected index = 0;
  constructor(
    protected array: Array_<T>,
  ) {}
  [Symbol.iterator](): ArrayEntries<T> {
    return this;
  }
  next(): IteratorResult<Array_<number|T>,undefined> {
    const item = new Array_<number|T>(this.index, this.array[this.index]!);
    const done = this.index >= this.array.length;
    this.index++;
    if (!done) {
      return { value: item };
    } else {
      return { value: undefined, done: true };
    }
  }
}