import type { Dayjs } from 'dayjs';
import type { Plugin, ResolvedConfig } from 'vite';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { readdir, stat } from 'fs';
import { green } from 'kolorist';
import { join } from 'path';
dayjs.extend(duration);

const tost = `🤩你好！如果您感觉内容还不错，在右边链接给个star哦😘！https://github.com/jsxiaosi/vue-xs-admin`;

function getdirsize(dir: string, callback: (fileNumber: number, size: number) => void) {
  let size = 0;
  let fileNumber = 0;
  stat(dir, (err, stats) => {
    if (err) throw err; // 如果出错
    if (stats.isFile()) return callback(1, stats.size); // 如果是文件

    readdir(dir, (err, files) => {
      // 如果是目录
      if (err) throw err; // 如果遍历目录出错
      if (files.length === 0) return callback(0, 0); // 如果目录是空的

      let count = files.length; // 文件数量
      for (let i = 0; i < files.length; i++) {
        getdirsize(join(dir, files[i]), (_fileNumber: number, _size: number) => {
          if (err) throw err;
          size += _size;
          fileNumber += _fileNumber;
          if (--count <= 0) {
            // 如果目录中所有文件(或目录)都遍历完成
            callback(fileNumber, size);
          }
        });
      }
    });
  });
}

function bytesToSize(bytes: number, fixed = 2) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / k ** i).toFixed(fixed))} ${sizes[i]}`;
}

export function viteBuildOuteInfo(): Plugin {
  let config: ResolvedConfig;
  let startTime: Dayjs, endTime: Dayjs;

  return {
    // 插件名称
    name: 'vite-build-oute-info',

    // 该插件在 plugin-vue 插件之前执行，这样就可以直接解析到原模板文件
    enforce: 'post',
    transformIndexHtml: {
      order: 'post',
      handler: () => {},
    },

    configResolved(resolvedConfig) {
      // 存储最终解析的配置
      config = resolvedConfig;
    },

    // rollup.rollup在每次开始构建时调用
    buildStart() {
      console.info(['', green(tost), ''].join('\n'));
      if (config.command === 'build') {
        startTime = dayjs(new Date());
      }
    },

    closeBundle() {
      if (config.command === 'build') {
        endTime = dayjs(new Date());
        getdirsize(config.build.outDir, (f, s) => {
          console.log(
            `\n${green(
              `打包完成🎉（打包文件数量：${f}，用时：${dayjs
                .duration(endTime.diff(startTime))
                .format('mm分ss秒')}，打包后的大小：${bytesToSize(s)}）`,
            )}`,
          );
        });
      }
    },
  };
}

export default viteBuildOuteInfo;
