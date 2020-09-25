# 在Gridsome中使用CSS

全局的样式和资源放在 `src/assets` 文件夹下，并在 `src/main.js`中导入

## 导入全局样式

使用import在 `src/main.js` 中导入全局样式

```js
import '~/assets/styles.css'
```
💡 `~` 是项目 **/src/** 目录的别名.

## 使用SASS 和 CSS 预处理器

使用 **SASS** 之前得安装`sass-loader node-sass`两个依赖包， `npm install -D sass-loader node-sass` .现在可以在**src/main.js**中导入**.scss** 文件，当开发服务器启动了，此时对scss的修改，会立即在浏览器中反映出来，可以修改下背景色试下

```js
import '~/assets/styles.scss'
```

在 **Vue Components** 中只需加上 `lang="scss"` 特征就可以:
```html
<style lang="scss">
.element {
  &__nested {
    color: Yay;
  }
}
</style>
```

[在Vue.js中如何使用预处理器参考官方文档](https://vue-loader.vuejs.org/guide/pre-processors.html)

### 全局预处理器文件 (如. 变量variables, 混合mixins)

Often when you're working on a project, you'll have a set of variables, mixins, and framework variable overrides that you'll want to be automatically used in your components/layouts so you don't have to keep manually importing them.

首先安装 `style-resources-loader`:

```js
npm i -D style-resources-loader
```

You'll need to add the following block to the top of your `gridsome.config.js` file before the existing `module.exports`:

```js
const path = require('path')

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/sass/_globals.sass'),
        // or if you use scss
        path.resolve(__dirname, './src/assets/sass/_globals.scss'),
        // you can also use a glob if you'd prefer
        path.resolve(__dirname, './src/assets/sass/*.sass'),
        // or scss
        path.resolve(__dirname, './src/assets/sass/*.scss'),
      ],
    })
}

module.exports = {
  // existing config
}
```

接下来，修改 `module.exports` 部分如下:

```js
module.exports = {
  chainWebpack (config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

    types.forEach(type => {
      addStyleResource(config.module.rule('sass').oneOf(type))
    })

    // or if you use scss
    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
  }
}
```

## 给 Vue Components添加css

在单文件组件`<style>` 标签中.

```html
// Example.vue
<template>
  <div class="banner">
    Hello!
  </div>
</template>

<style>
.banner {
  background-color: red;
}
</style>
```

## 在组件中使用Scoped样式

非常容易，只需要在style标签中加上  "scoped" 就可以，表示只在当前组件中使用这个样式，不会覆盖全局样式，如下例它会生成 

```html
.card[data-v-54cdc180] {
  color: red;
}
```


```html
<style scoped>
.card {
  background: blue;
}
</style>
```
如
```html
<div class="card">
```
加上scoped后变成了
```html
<div data-v-54cdc180="" class="card">
```

This will change the `.card` class in current component automatically to something like **.card[x5u123sc5s1]** and only apply the style to that class.

[Learn more about Scoped styles in Vue](https://vue-loader.vuejs.org/guide/scoped-css.html)

## 启用 Critical CSS

Gridsome中 [Critical CSS 插件](/plugins/@gridsome/plugin-critical) 在选定的视图尺寸下，从组件中抽取css放到 `<head>`中.

## 添加CSS framework

## Tailwind(重点掌握)

[TailwindCSS](https://tailwindcss.com) is a highly customizable, utility-based CSS framework that gives you all of the building blocks you need to build your project without any opinionated styles you have to fight to override. 使用 TailwindCSS 时, 强烈推荐(必装)使用一个非常实例的插件 [PostCSS-PurgeCSS](https://github.com/FullHuman/postcss-purgecss) ，它可以删除没用到的css，最后css文件变得非常小.

### Add TailwindCSS with a Plugin

在gridsome中使用tailwindcss最快最简单的方法，是安装插件 [Gridsome Tailwind Plugin](/plugins/gridsome-plugin-tailwindcss). A Gridsome plugin will typically have the majority of the boilerplate and configuration done for you, eliminating a lot of the set up time.

### 手动使用 TailwindCSS

如果你想自己安装并配置tailwindCSS, 得先安装TailwindCSS (使用npm或yarn安装):
```shell
# 使用 npm
npm install tailwindcss

# 使用 Yarn
yarn add tailwindcss
```

安装 PostCSS-PurgeCSS:
```shell
npm i -D @fullhuman/postcss-purgecss
```

接着在`/src`目录下新建文件 `main.css` ，内容如下:
```css
@tailwind base;

@tailwind components;

@tailwind utilities;
```

在 `main.js` 中 `require('~/main.css')`导入.   `main.js` 如下:
```javascript
// 导入全局样式
require('~/main.css')

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
    Vue.component('Layout', DefaultLayout)

}
```

另外，你也可自定义安装TailwindCSS, 生成TailwindCSS配置文件:
```shell
npx tailwind init
```

会在项目的根目录生成一个最小的 `tailwind.config.js` 文件:
```javascript
module.exports = {
    theme: {
        extend: {}
    },
    variants: {},
    plugins: []
}
```

进一步学习如何自定义安装TailwindCSS，请参考 [配置文档](https://tailwindcss.com/docs/configuration/)

下一步, `gridsome.config.js` 也要改下，添加TailwindCSS 和 PurgeCSS 配置部分:

```javascript
const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

const postcssPlugins = [
  tailwind(),
]

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss(require('./purgecss.config.js')))

module.exports = {
    siteName: 'Gridsome',
    plugins: [],
    css: {
        loaderOptions: {
            postcss: {
                plugins: postcssPlugins,
            },
        },
    },
}

```

最后, 在项目的根目录创建文件 `purgecss.config.js` ，配置如下:

```javascript
module.exports = {
    content: [
        './src/**/*.vue',
        './src/**/*.js',
        './src/**/*.jsx',
        './src/**/*.html',
        './src/**/*.pug',
        './src/**/*.md',
    ],
    whitelist: [
        'body',
        'html',
        'img',
        'a',
        'g-image',
        'g-image--lazy',
        'g-image--loaded',
    ],
    extractors: [
        {
            extractor: content => content.match(/[A-z0-9-:\\/]+/g),
            extensions: ['vue', 'js', 'jsx', 'md', 'html', 'pug'],
        },
    ],
}
```

重启 `gridsome develop`，生效.

## Bulma

...等完善

## Buefy

[Buefy](https://buefy.org/) provides one of the most comprehensive implementations of Bulma components, styles, and grid system available for Vue.js.

To install use:

```shell
# With npm
npm i buefy

# With yarn
yarn add buefy
```

Then, register the Buefy plugin in your `main.js` file:

```js
import Buefy from 'buefy'

import 'buefy/dist/buefy.css'

// Then add it to export function

export default function (Vue) {
  Vue.use(Buefy)
}
```

Buefy doesn't include icon packs in the core bundle, but many of its components use icons. If you'd like to use icons, check out the [Buefy documentation](https://buefy.org/documentation/start) to make sure you choose the right CSS to import. Below is an example of how you might import an icon font with Buefy:

```js
import Buefy from 'buefy'

import 'buefy/dist/buefy.css'

export default function (Vue) {
  head.link.push({
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.2.0/css/all.css'
  })

  Vue.use(Buefy, {
    defaultIconPack: 'fas' // Font Awesome Solid
  })
}
```

## Bootstrap

...plugin coming

## BootstrapVue

[BootstrapVue](https://bootstrap-vue.js.org/) provides one of the most comprehensive implementations of Bootstrap V4 components and grid system available for Vue.js 2.5+, complete with extensive and automated WAI-ARIA accessibility markup.

To install use:

```shell
# With npm
npm i vue bootstrap-vue bootstrap

# With yarn
yarn add vue bootstrap-vue bootstrap
```

Then, register BootstrapVue plugin in your `main.js` file:

```js
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Then add it to export function

export default function (Vue) {
  Vue.use(BootstrapVue)
}
```

## Vuetify

[Vuetify](https://vuetifyjs.com/en/) is a semantic component framework for Vue. It aims to provide clean, semantic and reusable components that make building your application a breeze. Based on Google's material design, it can be a quick way to get an app up and running with pre-built components available to use and customize. Updated for Vuetify 2.0.

To install use:

```shell
# With npm
npm install vuetify --save

# With yarn
yarn add vuetify
```

Then, you will need to register the Vuetify plugin, include the Vuetify CSS file, and add a link to the head for Google's material design icons in your 'main.js' file, with Vuetify 2.0+ you will need to pass a new instance of Vuetify to appOptions. Icons and iconfonts are now built into Vuetify 2.0+. You can install them as a local dependency or add them as a stylesheet in your head from a CDN, more information on Vuetify icon installation is available [here](https://vuetifyjs.com/en/customization/icons):

```js
// v1.5
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { head }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css',
  })
  
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900',
  });

  Vue.use(Vuetify)
  
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
```

```js
// v2.0
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { appOptions, head }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css',
  })
  
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900',
  });
  
  const opts = { ... } //opts includes, vuetify themes, icons, etc.
  Vue.use(Vuetify)
  
  appOptions.vuetify = new Vuetify(opts);
  
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
```

Finally, there is one last thing you will need in order to build your application with Vuetify. You will need to allowlist Vuetify in webpack in order to build.

First, install the webpack-node-externals plugin:

```shell
# With npm
npm install webpack-node-externals --save-dev

# With yarn
yarn add webpack-node-externals --dev
```

Then modify your `gridsome.server.js` file to include the webpack-node-externals package, and allowlist Vuetify.
```js
const nodeExternals = require('webpack-node-externals')

module.exports = function (api) {
  api.chainWebpack((config, { isServer }) => {
    if (isServer) {
      config.externals([
        nodeExternals({
          allowlist: [/^vuetify/]
        })
      ])
    }
  })

  api.loadSource(store => {
    // Use the Data store API here: https://gridsome.org/docs/data-store-api
  })
}
```
>❗️Note: Before webpack-node-externals version 2.4, use whitelist instead of allowlist.

Or save your bundle size by using [vuetify treeshaking](https://vuetifyjs.com/en/customization/a-la-carte).

1. Install dependencies
```shell
# With npm
npm install deepmerge fibers sass sass-loader@7.3.1 vuetify-loader --save-dev

# With yarn
yarn add deepmerge fibers sass sass-loader@7.3.1 vuetify-loader --dev
```
>❗️Note: sass-loader must be lower than 8 version,
  also remove `node-sass` package if it's installed, otherwise build will fail.

2. Configure webpack in `gridsome.server.js`
```js
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');

module.exports = (api) => {
  api.chainWebpack((config, { isServer }) => {
    config.plugin('vuetify-loader').use(VuetifyLoaderPlugin);
  });
```

>❗️Note: `webpack-node-externals` is not needed in this case.

3. Install plugin in `main.js`
```js
import Vuetify from 'vuetify/lib/framework';
import 'vuetify/dist/vuetify.min.css';

export default function (Vue, { appOptions, head }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css',
  });

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900',
  });

  const opts = {}; // opts includes, vuetify themes, icons, etc.
  Vue.use(Vuetify);
  appOptions.vuetify = new Vuetify(opts);
}
```

Then you should be able to build now! You will find the files in your dist/folder.
