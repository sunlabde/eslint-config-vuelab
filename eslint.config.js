/* eslint-disable import/extensions */
import tseslint from 'typescript-eslint';
import vuelab from './index.js';

export default tseslint.config(
	vuelab.configs.all,
	vuelab.configs.nuxt,
);
