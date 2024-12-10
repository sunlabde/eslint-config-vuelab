import tseslint from 'typescript-eslint';

export default tseslint.config(
	{
		files: ['*.vue', '**/*.vue'],

		rules: {
			'vue/multi-word-component-names': 'off',
		},
	},
	{
		files: ['components/**/*.vue'],

		rules: {
			'vue/multi-word-component-names': 'error',
		},
	},
);
