import vueI18n from '@intlify/eslint-plugin-vue-i18n';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	{
		name: 'vuelab/i18n',

		files: ['**/*.{ts,vue}'],

		extends: [
			vueI18n.configs['flat/base'],
		],

		languageOptions: {
			parserOptions: {
				parser: tseslint.parser,
			},
		},

		rules: {
			'@intlify/vue-i18n/no-missing-keys': 'error',
			'@intlify/vue-i18n/no-missing-keys-in-other-locales': 'error',
			'@intlify/vue-i18n/no-unused-keys': 'error',
			'@intlify/vue-i18n/no-raw-text': [
				'warn',
				{
					attributes: {
						'/.+/': ['label', 'title', 'description'],
					},
					ignorePattern: '^[-#:()&%*/·,?|]+$',
				},
			],
		},

		settings: {
			'vue-i18n': {
				localeDir: [
					{
						pattern: './src/lang/*.{json,json5,yaml,yml}',
						localeKey: 'file',
					},
					{
						pattern: './lang/*.{json,json5,yaml,yml}',
						localeKey: 'file',
					},
				],
				messageSyntaxVersion: '^9.0.0',
			},
		},
	},
);
