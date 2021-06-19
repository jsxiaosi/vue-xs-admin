module.exports = {
  plugins: ['stylelint-scss', 'stylelint-order'],

  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  rules: {
    indentation: 2, // 缩进2个空格
    'at-rule-no-unknown': [true, {
      ignoreAtRules: [
        'mixin', 'extend', 'content', 'include'
      ]
    }],
    'no-descending-specificity': null, // 禁止特异性较低的选择器在特异性较高的选择器之后重写
    'selector-pseudo-class-no-unknown': [true, {
				ignorePseudoClasses: ['host'],
    }],
    // https://github.com/kristerkari/stylelint-scss scsslint规范配置
    'scss/comment-no-loud': true, // 禁止使用/*注释
    'scss/comment-no-empty': true, // 禁止空注释
    'vue/component-tags-order': [
      'error',
      {
				order: ['template', 'script', 'style'],
			},
		],
	},
	// ignoreFiles: ['src/**/styles/variables-*.scss']
}
