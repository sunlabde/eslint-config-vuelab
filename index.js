/* eslint-disable import/extensions */
import base from './base.js';
import i18n from './i18n.js';
import vue from './vue.js';
import tseslint from 'typescript-eslint';

export default {
	configs: {
		base,
		i18n,
		vue,
		all: tseslint.config(
			...base,
			...i18n,
			...vue,
		),
	},
};
