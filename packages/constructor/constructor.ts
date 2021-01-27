export interface Constructor<T = Object> {
 new (...args: Array<any>): T,
}