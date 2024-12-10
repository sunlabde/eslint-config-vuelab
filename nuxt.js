import tseslint from 'typescript-eslint';

export default tseslint.config(
	{
		name: 'vuelab/nuxt/ignores',
		files: ['*.vue', '**/*.vue'],
		rules: {
			'vue/multi-word-component-names': 'off',
		},
	},
	{
		name: 'vuelab/nuxt/base',
		files: ['components/**/*.vue'],
		rules: {
			'vue/multi-word-component-names': 'error',
		},
	},
);
