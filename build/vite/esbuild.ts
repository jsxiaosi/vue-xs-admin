// https://cn.vitejs.dev/config/shared-options.html#esbuild

import { ESBuildOptions } from 'vite';

export function createViteEsbuild(isBuild: boolean): ESBuildOptions | false {
  return {
    pure: isBuild ? ['console'] : [],
  };
}
