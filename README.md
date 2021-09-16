# @sunlabde/eslint-config-vuelab

This package contains the custom eslint config used by the Sunlab UX Team. Under the hood it uses the airbnb rules with some custom additions. It should alongside with Vue 3 projects since it also includes the Vue eslint rules.

## How to use
### Prequesit
This package is only accessible privately over the GitHub package registry. Make sure you tell your npm client that `@sunlabde` points to `https://npm.pkg.github.com` as well as to provide a valid access token.

#### Example `.npmrc`
```
@sunlabde:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${SUNLABDE_NPM_AUTH_TOKEN}
```

## Install
```
npm install @sunlabde/eslint-config-vuelab -D
```

## Extend your ESLint config
There are three configurations available
- `base` – Only default vue rules
- `vue-cli` – Made for use with a Vue CLI project
- `vite` – Made for use wite a Vue Vite project

#### Example `.eslintrc.js`
```js
module.exports = {
  extends: [
    '@sunlabde/eslint-config-vuelab/vue-cli',
  ],
};
```

## Contribute
If you want to add new rules we should follow in our Sunlab UX projects, feel free to add those rules to the config. To do so, you just have to apply your changes, commit them and run `npm run release`. Follow the instructions and it will then create a new version of this package.

If you are unsure, always feel free to get in touch with me (thomas.brunner@sunlabn.de).
