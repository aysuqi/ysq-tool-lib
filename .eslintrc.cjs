module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		'eslint:recommended',
		'plugin:vue/vue3-essential',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended'
	],
	overrides: [
		{
			env: {
				node: true
			},
			files: ['.eslintrc{.js,.cjs}', 'commitlint.config{.js,.cjs}'],
			parserOptions: {
				sourceType: 'script'
			}
		}
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['vue', '@typescript-eslint'],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-var': 'error',
		'no-multiple-empty-lines': ['warn', { max: 1 }],
		'no-unexpected-multiline': 'error',
		'no-useless-escape': 'off',
		'@typescript-eslint/no-unused-vars': 'error',
		'@typescript-eslint/prefer-ts-expect-error': 'error',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-namespace': 'off',
		'@typescript-eslint/semi': 'off'
	}
}
