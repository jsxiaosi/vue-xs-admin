/**
 * svg
 * https://github.com/anncwb/vite-plugin-svg-icons/blob/main/README.zh_CN.md
 */
import viteSvgIcons from 'vite-plugin-svg-icons';
import path from 'path';

export function configSvgPlugin() {
  const svgPlugin = viteSvgIcons({
    // 指定需要缓存的图标文件夹
    iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
    // 压缩配置
    // svgoOptions: false,
    // 指定symbolId格式
    symbolId: 'icon-[dir]-[name]',
  });
  return svgPlugin;
}
