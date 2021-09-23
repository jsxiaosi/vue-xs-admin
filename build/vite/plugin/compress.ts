/**
 * 用于打包和输出gzip
 * https://github.com/anncwb/vite-plugin-compression/blob/main/README.zh_CN.md
 */
import viteCompression from 'vite-plugin-compression'

import type { Plugin } from 'vite'

export function configCompressPlugin(
	compress: 'gzip' | 'brotli' | 'none',
	deleteOriginFile = false
): Plugin | Plugin[] {
	let options = {}
	if (compress === 'gzip') {
		options = {
			ext: '.gz',
			algorithm: 'gzip',
		}
	}
	if (compress === 'brotli') {
		options = {
			ext: '.br',
			algorithm: 'brotliCompress',
		}
	}
	const plugin: Plugin[] = [
		viteCompression({
			verbose: true,
			threshold: 1500,
			deleteOriginFile,
			...options,
		}),
	]

	return plugin
}