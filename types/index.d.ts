declare type RefType<T> = T | null;

declare interface Fn<T = any, R = T> {
  (...arg: T[]): R;
}

// vite-plugin-theme-preprocessor不支持ts,默认导出一个d.ts解决报错
declare module '@zougt/*';
