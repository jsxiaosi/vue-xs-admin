/**
 * eslint
 * https://bitbucket.org/unimorphic/vite-plugin-linter/src/master/
 */
import { EsLinter, linterPlugin, TypeScriptLinter } from 'vite-plugin-linter'
import type { ConfigEnv } from 'vite'

export function configEsLinterPlugin(configEnv: ConfigEnv) {
	const esLinterPlugin = linterPlugin({
		include: [
			'./src/**/*.ts',
			'./src/**/*.tsx',
			'./src/**/*.vue',
			'./src/**/*.js',
		],
		linters: [
			new EsLinter({
				configEnv: configEnv,
				serveOptions: { clearCacheOnStart: true },
			}),
			new TypeScriptLinter(),
		],
		build: {
			includeMode: 'filesInFolder',
		},
	})
	return esLinterPlugin
}
