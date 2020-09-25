# Pages API

使用Pages API 可以创建自定义页面， 页面API 在 GraphQL schema生成之后调用， 所以可以读取node并使用它或其它数据来创建页面.

从在 `gridsome.server.js`中使用 `api.createPages()` 钩子开始

```js
//gridsome.server.js
module.exports = function (api) {
  api.createPages(({ createPage, graphql }) => {
    // Create pages here
  })
}
```

```js
api.createPages((obj)=>{}) 中obj的内容如下
{
  graphql: [Function: graphql],
  resolve: [Function: resolve],
  slugify: [Function: slugify],
  getCollection: [Function: getCollection],
  getContentType: [Function: getContentType],
  createPage: [Function: createPage],
  createRoute: [Function: createRoute]
}
```



## 创建一个page

Use the `createPages` hook if you want to create pages. Pages created in this hook will be re-created and garbage collected occasionally. Use the `createManagedPages` below to have more control over when pages are updated or deleted manually.

### createPage(options)

- options `object`
  - **path** `string` *必需.*
  - **component** `string` *必需.*
  - context `object` *Optional context for the page and `page-query`.*
  - queryVariables `object` *Optional context only for `page-query`.*

```js
module.exports = function (api) {
  api.createPages(({ createPage }) => {
    createPage({
      path: '/my-page',
      component: './src/templates/MyPage.vue'
    })
  })
}
```

```js
api.createPages(async ({ createPage }) => {
    // 我测试返回的data是12条数据{id,title,content}
    const { data } = await axios.get('http://0he2.bendi/api/data')
    data.forEach(({ id, title, content }) => {
      createPage({
        path: '/a/' + id, // 这里是url地址，如 http://localhost:8081/a/8，就会显示January.vue这个页面的内容，xx/a/13，显示404，没找到页面
        component: './src/templates/January.vue' // 当浏览器中输入上面的地址后，实际调用的是January.vue组件，如何向组件传递数呢
        context:{
          id: id
      }
          
      })
    })
  })

// 在模板文件January.vue中，可以直接使用 {{ $context.id }},也可在js部分 console.log(this.$context)看下
// 在path中可以使用变量，如 path: '/a/:id'，在January.vue使用 this.$route.params.id可以读取
```

```js
// 正常的做法是，先使用graphql获取数据，再将数据传到模板中

```



参考:  https://lyon.digital/gridsome-with-craft-cms/

参考:  https://github.com/gridsome/gridsome/pull/309



## 创建managed pages

Pages created in the `createPages` hook will be re-created and garbage collected occasionally. That's why that hook is only able to create pages. You can use a `createManagedPages` hook to create, update and remove pages yourself.

```js
module.exports = function (api) {
  api.createManagedPages(({ createPage }) => {
    createPage({
      path: '/my-page',
      component: './src/templates/MyPage.vue'
    })
  })
}
```

### createPage(options)

- options `object`
  - **path** `string` *Required. Can be a fixed or dynamic route.*
  - **component** `string` *Required.*
  - context `object` *Optional context for the page and `page-query`.*
  - queryVariables `object` *Optional context only for `page-query`.*

Create a new page.

### removePage(page)

Removes a page created by `createPage`.

### removePageByPath(path)

Removes a page matching the provided path.

### removePagesByComponent(path)

Removes all pages matching the provided component path.

### findAndRemovePages(query)

Removes all pages matching the provided query.

### findPages(query)

Returns all pages matching the provided query.

### findPage(query)

Returns first pages matching the provided query.

## page上下文

Each page can have a context which will be available as variables for `page-query`. The context will also be available in the page component as `$context`. If you only want the context to be available for `page-query`, use the `queryVariables` option instead.

##### Example usage

```js
//gridsome.server.js
module.exports = function (api) {
  api.createPages(({ createPage }) => {
    createPage({
      path: '/my-page',
      component: './src/templates/MyPage.vue',
      context: {
        customValue: '...'
      }
    })
  })
}
```

Use the context in the page component or as variables in `page-query`.

```html
<template>
  <Layout>
    <h1>{{ $context.customValue }}</h1>
  </Layout>
</template>

<page-query>
query ($customValue: String) {
  ...
}
</page-query>
```

## 使用样例

### 从GraphQL创建页面

````js
//gridsome.server.js
module.exports = function (api) {
  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`{
      allProduct {
        edges {
          node {
            id
            slug
          }
        }
      }
    }`)

    data.allProduct.edges.forEach(({ node }) => {
      createPage({
        path: `/product/${node.slug}/reviews`,
        component: './src/templates/ProductReviews.vue',
        context: {
          id: node.id
        }
      })
    })
  })
}
````

### 从外部APIs创建pages

We use `createManagedPages` in this example because we don't need the pages to be re-created on changes. The template also uses the context for rendering data instead of GraphQL results.

```js
//gridsome.server.js
module.exports = function (api) {
  api.createManagedPages(async ({ createPage }) => {
    const { data } = await axios.get('https://api.example.com/posts')

    data.forEach(item => {
      createPage({
        path: `/post/${item.slug}`,
        component: './src/templates/Post.vue',
        context: {
          title: item.title,
          content: item.content
        }
      })
    })
  })
}
```

```html
<template>
  <Layout>
    <h1>{{ $context.title }}</h1>
    <div v-html="$context.content"></div>
  </Layout>
</template>
```
