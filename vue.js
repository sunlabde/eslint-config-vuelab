import pluginVue from 'eslint-plugin-vue';
import tseslint from 'typescript-eslint';
import pluginVueA11y from 'eslint-plugin-vuejs-accessibility';

export default tseslint.config(
	{
		name: 'vuelab/vue',

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
			'vue/html-indent': ['warn', 'tab'],
			'vue/multiline-html-element-content-newline': [
				'warn',
				{
					ignoreWhenEmpty: true,
					ignores: ['pre', 'textarea'],
				},
			],
			'vue/block-spacing': 'error',
			'vue/camelcase': ['error', { allow: ['alpha_spaces'] }],
			'vue/component-name-in-template-casing': 'error',
			'vue/match-component-file-name': 'error',
			'vue/block-order': ['error', {
				order: ['script', 'template', 'style'],
			}],
			'vue/component-api-style': ['error', ['script-setup']],
			'vue/define-emits-declaration': 'error',
			'vue/define-macros-order': 'warn',
			'vue/define-props-declaration': 'error',
			'vue/no-required-prop-with-default': 'error',
			'vue/padding-line-between-blocks': 'warn',
		},
	},
);
