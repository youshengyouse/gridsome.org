# Pages

> Pages are responsible for presenting your data at a URL. Each page will be generated statically and have its own `index.html` file with the markup.

 在 Gridsome 中有两个方法可以生成页面:

1. **[Using the file system](#file-based-pages)** -使用 [单文件组件](https://vuejs.org/v2/guide/single-file-components.html)  创建页面
2. **[Using the Pages API](#programmatic-pages)** - 编程方式动态创建页面.

## 基于文件的页面

在 `src/pages` 目录下的[单文件组件](https://vuejs.org/v2/guide/single-file-components.html) ，将自动生成对应的URL，如下面例子:

- `src/pages/Index.vue` 对应`/` *(The frontpage)*
- `src/pages/AboutUs.vue` 对应`/about-us/`
- `src/pages/about/Vision.vue` 对应`/about/vision/`
- `src/pages/blog/Index.vue` 对应`/blog/`

单文件组件如下:

```html
<template>
  <div>
    <h1>Hello, world!</h1>
  </div>
</template>
```

 `src/pages` 下面的页面通常用于固定URL，如 `/about/` 或都博客列表，如 `/blog/`. [进一步学习如何创建单 blog posts等.](/docs/collections/)

## 编程方式生成页面

在 `gridsome.server.js`中使用`createPages` 钩子可以编程动态创建页面，当你从外部API获取数据后手工创建页面时非常有用 [没有使用 GraphQL 数据层](/docs/pages-api#create-pages-from-external-apis).

```js
module.exports = function (api) {
  api.createPages(({ createPage }) => {
    createPage({
      path: '/my-page', // 当在浏览器中输入 xxx.com/my-page 时，实际就是访问文件/src/templates/MyPage.vue，这里与vue-router中定义路由的方法一样
      component: './src/templates/MyPage.vue'
    })
  })
}
```

[进一步了解 Pages API](/docs/pages-api/)

## 动态路由

Pages can have dynamic routes. Dynamic routes are useful for pages that only need client-side routing. For example user pages that fetch info from an external API in production based on a segment in the URL.

进一步了解 [动态路由](/docs/dynamic-routing/)

## 页面元信息

Gridsome 使用 [vue-meta](https://vue-meta.nuxtjs.org/) 处理页面中的元信息.

```html
<template>
  <div>
    <h1>Hello, world!</h1>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!',
    meta: [
      { name: 'author', content: 'John Doe' }
    ]
  }
}
</script>
```

进一步了解 [`populating <head>`](/docs/head/).

## 自定义404 页面

创建单文件组件 `src/pages/404.vue` ，它就是404页面.
