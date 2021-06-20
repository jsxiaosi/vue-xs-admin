module.exports = {
	root: true,
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true,
	},
	extends: ['standard', 'plugin:vue/essential', 'plugin:prettier/recommended'],
	parserOptions: {
		ecmaVersion: 2016,
		// 对Babel解析器的包装使其与 ESLint 兼容。
		parser: 'babel-eslint',
		// 代码是 ECMAScript 模块
		sourceType: 'module',
	},
	plugins: ['vue'],
	rules: {
		// 'prettier/prettier': 'error',
		'no-unused-vars': 'off',
		'vue/no-multiple-template-root': 'off',
		camelcase: 0,
		'vue/component-tags-order': [
			'error',
			{
				order: ['template', 'script', 'style'],
			},
		],
	},
}
