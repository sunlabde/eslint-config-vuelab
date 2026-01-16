import tseslint from 'typescript-eslint';

export default tseslint.config(
	{
		name: 'vuelab/nuxt/disables',
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
	{
		/**
         * Due to the fact that nuxt is dynamically generating some aliases
         * and paths it is better to disable some import rules
         */
		name: 'vuelab/nuxt/disables/import',
		files: ['**/*.js', '**/*.ts', '**/*.vue', '**/*.mjs'],
		rules: {
			'import/extensions': 'off',
			'import/no-unresolved': 'off',
			'import/no-extraneous-dependencies': 'off',
		},
	},
);
