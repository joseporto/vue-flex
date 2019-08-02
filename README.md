# @jporto/vue-flex

![logo](https://gitlab.com/porto/vue-flex/raw/master/src/assets/logo64.png)

[![build status](https://img.shields.io/gitlab/pipeline/porto/vue-flex/master.svg)](https://gitlab.com/porto/vue-flex.git)
[![npm-publish](https://img.shields.io/npm/dm/@jporto/vue-flex.svg)](https://www.npmjs.com/package/@jporto/vue-flex)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![language count](https://img.shields.io/github/languages/count/joseporto/vue-flex.svg)](https://gitlab.com/porto/vue-flex/-/graphs/master/charts)

A Vue JS Flex component for mobile first layouts

Checkout the [Demo](https://porto.gitlab.io/vue-flex/) which contains the component documentation.

> If you enjoy this component, feel free to drop me feedback, either via the repository, or via joseporto@icloud.com.

> Also, please [verify my project](https://bio.torre.co/joseporto/projects?id=vN8XvQNo&view=verify) at torre.co.

## Instalation

```bash
yarn add @jporto/vue-flex
```

or

```bash
npm install @jporto/vue-flex
```

## Setup

### Vue.js

- Add the following to you application main.js file:

```js
import VueFlex from '@jporto/vue-flex'

Vue.use(VueFlex)
```

#### import the styles

- Add a similar object to configure the breakpoints, before importing the stylesheet

```scss
$var-breakpoints: (
  "pm": 320,
  "pl": 375,
  "ts": 425,
  "tw": 768,
  "ds": 1024,
  "dw": 1440
);
```

```scss
@import '@jporto/vue-flex/dist/@jporto/main.scss';
```

### NuxtJS

- Similar as with Vue.js, but I recomend adding a `components.js` file to plugins, with the following content:
  
```js
import Vue from 'vue'
import VueFlex from '@jporto/vue-flex';
Vue.use(VueFlex);
```

- Register the plugin in `nuxt.config.js`:

```js
plugins: [
  '@/plugins/components',
],
```
