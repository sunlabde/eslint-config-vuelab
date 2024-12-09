<p align="center">
    <img width="380" src="https://github.com/sunlabde/eslint-config-vuelab/blob/main/logo.svg" alt="@sunlabde/eslint-config-vuelab">
</p>

# @sunlabde/eslint-config-vuelab

This package contains the custom eslint config used by the Sunlab UX Team. Under the hood it uses the recommended rules from [eslint](https://eslint.org/docs/latest/rules/) and [vue](https://eslint.vuejs.org/rules/) with some custom additions. It can be used for raw js/ts projects as well as vue projects. It can also be used for nuxt projects but it is not completely ready for it yet.

## 🔧 How to use 
### Prequesit
Since this package is hosted via the GitHub package registry you have to tell npm to use the correct registry. To do so, add the following to your `.nprmrc`

#### Example `.npmrc`
```
@sunlabde:registry=https://npm.pkg.github.com
```

## Install
```
pnpm install @sunlabde/eslint-config-vuelab -D
```

## Extend your ESLint config
Please note that this config required you to use ESLint v9. This package exports four different configurations:

- `base` – The core rules for raw js/ts projects
- `vue` – For vue projects
- `i18n` – For vue projects using i18n
- `all` – A combined export with `base`, `vue` and `i18n`

#### Example `eslint.config.js`
```js
import vuelab from '@sunlabde/eslint-config-vuelab';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	vuelab.configs.base,
	vuelab.configs.i18n,
);
```

## 💡 Contribute
If you want to add new rules we should follow in our Sunlab UX projects, feel free to add those rules to the config. To do so, you just have to apply your changes, commit them and run `pnpm release`. Follow the instructions and it will then create a new version of this package.

If you are unsure, always feel free to get in touch with me (thomas.brunner@sunlab.de).
