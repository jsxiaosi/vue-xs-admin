declare type RefType<T> = T | null;

declare interface Fn<T = any, R = T> {
  (...arg: T[]): R;
}
