import globals from 'globals';
// eslint-disable-next-line import/no-extraneous-dependencies
import jseslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import stylistic from '@stylistic/eslint-plugin';
import eslintPluginJsonc from 'eslint-plugin-jsonc';

export default tseslint.config(
	{
		name: 'vuelab/global-ignores',
		ignores: [
			'node_modules/*',
			'dist/*',
			'.nuxt/*',
			'.ide/*',
			'.github/*',
		],
	},
	{
		name: 'vuelab/json',
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
		name: 'vuelab/base',

		files: ['**/*.js', '**/*.ts', '**/*.vue', '**/*.mjs'],

		plugins: {
			'@stylistic': stylistic,
		},

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
			'no-console': 'warn',
			'no-debugger': 'error',
			'no-param-reassign': ['error', { props: false }],
			'func-style': ['error', 'expression'],
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
			'@typescript-eslint/no-shadow': 'error',
			'@typescript-eslint/explicit-module-boundary-types': 0,
		},
	},
    {
        /**
         * Explicity disable some rules for server environment
         */

        name: 'vuelab/base/server',

		files: [
            'server/**/*.ts',
            'server/**/*.js',
            'netlify/**/*.ts',
            'netlify/**/*.js',
        ],

        rules: {
            'no-console': 'off'
        }
    }
);
