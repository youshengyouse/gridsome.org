# 项目配置

项目必需有配置文件 `gridsome.config.js` . 插件和项目设置就是这里配置，下面是一个基本配置:

```js
module.exports = {
  siteName: 'Gridsome',
  siteUrl: 'https://www.gridsome.org',
  plugins: []
}
```

## siteName

- 类型`string`
- 默认值`<dirname>`

设置项目的名字，通常它会出现在title tag中

## siteDescription

- Type `string`
- Default `''`

站点描述.

## siteUrl

- Type `string`
- Default `''`

## pathPrefix

- Type `string`
- Default `''`

Gridsome assumes your project is served from the root of your domain.
Change this option to `'/my-app'` if your project will be hosted in a
subdirectory called `my-app`.

## titleTemplate

- Type `string`
- Default `%s - <siteName>`

设置标签title的模板，其中 `%s` 是占位符，它会被页面metaInfo中指定的title替换

## plugins

- 类型`Array`
- 默认`[]`

用到的插件都放在 `plugins` 中，它是一个数组.

```js
module.exports = {
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        route: '/blog/:year/:month/:day/:slug',
        typeName: 'Post'
      }
    }
  ]
}
```

[进一步了解如何使用插件](/plugins/)

## templates

- Type `object`
- Default `{}`

为集全定义路由和模板.

[进一步学习模板](/docs/templates/)

## metadata

- Type `object`
- Default `{}`

给GraphQL schema 添加全局 metadata.

[进一步学习全局metadata](/docs/metadata/)

## icon

- Type `string | Object`
- Default `'./src/favicon.png'`

Gridsome will use any image located at `src/favicon.png` as favicon and
touchicon by default, but you can define another path or sizes etc. The icon
should be a square and minimum 16 pixels. The favicon will be resized to 16, 32,
96 pixels. And the touchicon will be resized to 76, 152, 120, 167, 180 pixels by
default.

```js
module.exports = {
  icon: './src/my-icon.png'
}
```

Use a different image for touch icons:

```js
module.exports = {
  icon: {
    favicon: './src/my-favicon.png',
    touchicon: './src/my-touchicon.png'
  }
}
```

Define custom sizes and disable effects on iOS < 7 devices:

```js
module.exports = {
  icon: {
    favicon: {
      src: './src/my-favicon.png',
      sizes: [16, 32, 96]
    },
    touchicon: {
      src: './src/my-touchicon.png',
      sizes: [76, 152, 120, 167],
      precomposed: true
    }
  }
}
```

## configureWebpack

- Type `Object | Function`

The option will be merged with the internal config if it is an object.

```js
module.exports = {
  configureWebpack: {
    // merged with the internal config
  }
}
```

If the option is a function, it will get the internal config as its first argument. You can either modify the argument or return a new config object that will override the internal webpack config.

```js
const merge = require('webpack-merge')

module.exports = {
  configureWebpack(config) {
    return merge({ /* custom config */ }, config)
  }
}
```

## chainWebpack

- Type `Function`

A function that will receive an instance of ChainableConfig powered by
[webpack-chain](https://github.com/neutrinojs/webpack-chain).

## runtimeCompiler

- Type `boolean`
- Default `false`

Include the Vue template compiler at runtime.

## configureServer

- Type `Function`

Configure the development server.

[Read more about configuring the development server](/docs/server-api#apiconfigureserverfn)

## permalinks.trailingSlash

- Type `boolean`
- Default `true`

Appends a trailing slash to pages and templates by default.

Pages with [dynamic routes](/docs/dynamic-routing/) will not include a trailing slash when this option is enabled and must have extra rewrite rules on the server to work properly. Also, static paths for `<g-link>` will not include a trailing slash automatically but should be included in the path:

```html
<g-link to="/about-us/">About us</g-link>
```

## permalinks.slugify

- Type `function | object`

Use a custom slugify method. Default slugifyer is [@sindresorhus/slugify](https://github.com/sindresorhus/slugify).

```js
module.exports = {
  permalinks: {
    slugify: {
      use: 'another-slugify-library',
      options: {}
    }
  }
}
```

## css.split

- Type `boolean` *Default: `false`*

Split CSS into multiple chunks. Splitting is disabled by default. Splitting CSS can result in weird behaviors.

## css.loaderOptions

- Type `Object`
- Default `{}`

Pass options to CSS-related loaders. For example:

```js
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        // options here will be passed to sass-loader
      },
      less: {
        // options here will be passed to less-loader
      }
    }
  }
}
```

Supported loaders are:

- [css-loader](https://github.com/webpack-contrib/css-loader)
- [postcss-loader](https://github.com/postcss/postcss-loader)
- [sass-loader](https://github.com/webpack-contrib/sass-loader)
- [less-loader](https://github.com/webpack-contrib/less-loader)
- [stylus-loader](https://github.com/shama/stylus-loader)

## host

- Type `string`
- Default `'localhost'`

## port

- Type `number`
- Default `8080`

## outputDir

- Type `string`
- Default `'dist'`

当使用 `gridsome build` 构建后生成的文件，放在该目录中.
