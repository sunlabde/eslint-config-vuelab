module.exports = {
	configs: {
		base: {
			env: {
				browser: true,
				es2021: true,
				node: true,
			},
        
			extends: [
				'plugin:vue/vue3-recommended',
				'plugin:jest/recommended',
			],
        
			settings: {
				'import/resolver': {
					node: {
						extensions: ['.js', '.jsx', '.ts', '.tsx'],
					},
				},
			},
        
			rules: {
				'no-unused-vars': 'off',
				'@typescript-eslint/no-unused-vars': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
				'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
				'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
				indent: 'off',
				'@typescript-eslint/indent': ['error', 'tab', { SwitchCase: 1 }],
				'no-tabs': 0,
				'vue/html-indent': ['error', 'tab'],
				'vue/multiline-html-element-content-newline': [
					'error',
					{
						ignoreWhenEmpty: true,
						ignores: ['pre', 'textarea'],
					},
				],
				'max-len': 0,
				'no-param-reassign': ['error', { props: false }],
				'no-underscore-dangle': 0,
				'vue/block-spacing': 'error',
				'vue/camelcase': ['error', { allow: ['alpha_spaces'] }],
				'vue/component-name-in-template-casing': 'error',
				'vue/match-component-file-name': 'error',
				'vue/require-component-is': 0,
				'no-plusplus': 0,
				'import/prefer-default-export': 0,
				'lines-between-class-members': ['warn', 'always', { exceptAfterSingleLine: true }],
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
				'import/no-extraneous-dependencies': ['error', {
					devDependencies: [
						'**/*.test.js',
						'**/*.test.ts',
						'**/*.spec.js',
						'**/*.spec.ts',
					],
				}],
			},
        
			parserOptions: {
				ecmaVersion: 12,
				parser: '@typescript-eslint/parser',
				sourceType: 'module',
			},
        
			plugins: [
				'vue',
				'@typescript-eslint',
			],
        
			overrides: [
				{
					files: ['*.ts', '*.tsx'], // Your TypeScript files extension
					parserOptions: {
						project: ['./tsconfig.json'], // Specify it only for TypeScript files
					},
				},
			],
		},

		vite: {
			extends: [
				'airbnb-base'
			]
		},
        
		'vue-cli': {
			extends: [
				'@vue/airbnb'
			]
		}
	}
};
