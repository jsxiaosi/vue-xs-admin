/**
 * eslint
 * https://bitbucket.org/unimorphic/vite-plugin-linter/src/master/
 */
import { EsLinter, linterPlugin, TypeScriptLinter } from 'vite-plugin-linter'
import type { ConfigEnv } from 'vite'

export function configEsLinterPlugin(configEnv: ConfigEnv) {
	const esLinterPlugin = linterPlugin({
		// 包括检查的文件
		include: [
			'./src/**/*.ts',
			'./src/**/*.tsx',
			'./src/**/*.vue',
			'./src/**/*.js',
		],
		//运行的lint类型（这里运行了eslint typeScriptLint）注意：目前这个插件好像还没支持styleLint没看到有相关的define
		linters: [
			new EsLinter({
				// 环境变量
				configEnv: configEnv,
				// 运行时是否删除缓存文件
				serveOptions: { clearCacheOnStart: true },
			}),
			new TypeScriptLinter(),
		],
		// 检查文件的范围 processedFiles：仅对vite处理的文件检查  filesInFolder：全部文件都检查
		build: {
			includeMode: 'filesInFolder',
		},
	})
	return esLinterPlugin
}
