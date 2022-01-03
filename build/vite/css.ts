import { CSSOptions } from 'vite';

export function createViteCSS(): CSSOptions {
  const viteCSS: CSSOptions = {
    preprocessorOptions: {
      // 配置scss全局样式以及变量
      scss: {
        additionalData: '@import "./src/styles/index.scss";',
        charset: false,
      },
    },
    postcss: {
      plugins: [
        {
          postcssPlugin: 'internal:charset-removal',
          AtRule: {
            charset: (atRule: { name: string; remove: () => void }) => {
              if (atRule.name === 'charset') {
                atRule.remove();
              }
            },
          },
        },
      ],
    },
  };
  return viteCSS;
}
