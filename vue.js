import pluginVue from 'eslint-plugin-vue';
import tseslint from 'typescript-eslint';
import pluginVueA11y from 'eslint-plugin-vuejs-accessibility';

export default tseslint.config(
	{
		files: ['*.vue', '**/*.vue'],

		extends: [
			pluginVue.configs['flat/recommended'],
			pluginVueA11y.configs['flat/recommended'],
		],

		languageOptions: {
			parserOptions: {
				parser: '@typescript-eslint/parser',
			},
		},

		rules: {
			'vue/html-indent': ['error', 'tab'],
			'vue/multiline-html-element-content-newline': [
				'error',
				{
					ignoreWhenEmpty: true,
					ignores: ['pre', 'textarea'],
				},
			],
			'vue/block-spacing': 'error',
			'vue/camelcase': ['error', { allow: ['alpha_spaces'] }],
			'vue/component-name-in-template-casing': 'error',
			'vue/match-component-file-name': 'error',
			'vue/require-component-is': 0,
		},
	},
);
