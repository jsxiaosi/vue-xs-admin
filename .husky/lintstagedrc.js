module.exports = {
  '*.{js,ts,tsx,jsx}': ['eslint --fix', 'prettier --write'],
  'package.json': ['prettier --write'],
  '*.vue': ['eslint --fix', 'prettier --write', 'stylelint --fix'],
  '*.{scss,less,styl,html}': ['stylelint --fix', 'prettier --write'],
  '*.md': ['prettier --write'],
};
