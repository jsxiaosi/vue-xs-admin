/**
 * 用于打包和输出gzip
 * https://github.com/anncwb/vite-plugin-compression/blob/main/README.zh_CN.md
 */
import viteCompression from 'vite-plugin-compression'

export function configCompressPlugin(compress, deleteOriginFile) {
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
	const plugin = [
		viteCompression({
			verbose: true,
			threshold: 1500,
			deleteOriginFile,
			...options,
		}),
	]

	return plugin
}
