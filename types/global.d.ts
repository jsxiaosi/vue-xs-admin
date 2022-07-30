declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const Component: DefineComponent<{}, {}, any>;
  export default Component;
}

export interface StorageConfig {
  type: 'localStorage' | 'sessionStorage';
  prefix: string;
  expire: number;
  isEncrypt: boolean;
}
