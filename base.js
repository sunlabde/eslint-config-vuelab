import globals from 'globals';
// eslint-disable-next-line import/no-extraneous-dependencies
import jseslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import stylistic from '@stylistic/eslint-plugin';
import eslintPluginJsonc from 'eslint-plugin-jsonc';

export default tseslint.config(
	{
		ignores: [
			'node_modules/*',
			'dist/*',
			'.nuxt/*',
		],
	},
	{
		plugins: {
			'@stylistic': stylistic,
		},
	},
	{
		files: ['**/*.json', 'package.json'],
		ignores: ['package-lock.json'],
		extends: [
			eslintPluginJsonc.configs['flat/recommended-with-jsonc'],
		],
		rules: {
			'jsonc/indent': ['error', 'tab'],
		},
	},
	{
		files: ['**/*.js', '**/*.ts', '**/*.vue', '**/*.mjs'],

		extends: [
			jseslint.configs.recommended,
			tseslint.configs.recommended,
			importPlugin.flatConfigs.recommended,
			stylistic.configs.customize({
				indent: 'tab',
				quotes: 'single',
				semi: true,
				arrowParens: true,
				braceStyle: '1tbs',
			}),
		],

		languageOptions: {
			ecmaVersion: 12,
			sourceType: 'module',
			globals: {
				...globals.browser,
				...globals.node,
				__BUILD_TIMESTAMP__: 'readonly',
				__COMMIT_REF__: 'readonly',
				__REPOSITORY_URL__: 'readonly',
			},
		},

		settings: {
			'import/resolver': {
				typescript: true,
				node: true,
			},
		},

		rules: {
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
			'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
			'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
			'@stylistic/max-len': 0,
			'no-param-reassign': ['error', { props: false }],
			'no-underscore-dangle': 0,
			'no-plusplus': 0,
			'import/prefer-default-export': 0,
			'@stylistic/lines-between-class-members': [
				'warn',
				'always',
				{
					exceptAfterSingleLine: true,
				},
			],
			'func-style': ['error', 'expression'],
			'@typescript-eslint/explicit-module-boundary-types': 0,
			'no-shadow': 'off',
			'@typescript-eslint/no-shadow': 'error',
			'import/extensions': [
				'error',
				'ignorePackages',
				{
					js: 'never',
					jsx: 'never',
					ts: 'never',
					tsx: 'never',
				},
			],
			'import/no-extraneous-dependencies': [
				'error',
				{
					devDependencies: [
						'**/*.test.js',
						'**/*.test.ts',
						'**/*.spec.js',
						'**/*.spec.ts',
						'*.config.js',
						'*.config.ts',
					],
				},
			],
		},
	},
);
