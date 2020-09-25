# 模板

> 模板是为[collection](/docs/collections/) 中节点，生成单个文件用. 节点需要一个对应的页面，有自己的URL来展示.

## Setup templates

下面例子演示如何给名为`Post`的[集合collection](/docs/collections/)设置路由和模板. 如果没有明确指定模板名，默认是 `src/templates/{Collection}.vue`文件，集合的名字与模板的名字一样(.vue) .

```js
// gridsome.config.js
module.exports = {
  templates: {
    Post: '/blog/:year/:month/:title', 
    BlogPost: '/blog/:year/:month/:day/:slug',// 当浏览器中输入 http://localhost:8080/blog/2019/10/08/about/时，它会匹配到这个，那么templates/Post.vue就是对应的模板文件，根据上面的4个变量，从外部读取相应的数据填充到这个模板中，就是这天博客的内容，所有的博客排版都一样，只是url和内容对应变化
  }
}
```

指定 **custom component** 路径:

```js
// gridsome.config.js
module.exports = {
  templates: {
    Post: [
      {
        path: '/blog/:year/:month/:title',
        component: './src/other/location/Post.vue'
      }
    ]
  }
}
```

一个集合也可以设置 **多个模板** :

```js
// gridsome.config.js
module.exports = {
  templates: {
    Product: [
      {
        path: '/product/:slug',
        component: './src/templates/Product.vue'
      },
      {
        name: 'reviews',
        path: '/product/:slug/reviews',
        component: './src/templates/ProductReviews.vue'
      }
    ]
  }
}
```

Template paths are available in the GraphQL schema with a `path` field. Use a `to` argument for getting paths to additional templates for a collection.

```graphql
query ($id: ID!) {
  product(id: $id) {
    path               # 默认的路径
    path(to:"reviews") # reviews模板的路径
  }
}
```

模板有以下几个选项:

- **path** - Define a dynamic route and use any node field as parameters.
- **component** - 指定每个页面的模板，它是一个.vue组件.
- **name** - 为模板指定一个名字，用来从GraphQL中读取路径.

Path parameters are slugified by default, but the original value can be used by adding a `_raw` suffix, eg. `:title_raw`. Access values in deep objects or arrays by separating properties or indexes with double underscores (`__`). The `date` field has a set of shorthand helpers; `:year`, `:month` and `:day`.

- `:id` resolves to `node.id`
- `:value` resolves to `node.value` *(slugified value)*
- `:value_raw` resolves to `node.value` *(original value)*
- `:object__value` resolves to `node.object.value`
- `:array__3__id` resolves to `node.array[3].id`

The `path` option can be a function, which receives the node as the first argument and returns a path.

```js
// gridsome.config.js
module.exports = {
  templates: {
    Post: [
      {
        path: (node) => {
          return `/product/${node.slug}/reviews`
        }
      }
    ]
  }
}
```

Each node will get a `path` field in the GraphQL schema which contains the generated URL.

## 给模板添加数据

Pages generated from the `templates` configuration will have the node `id` available as a [query variable](https://graphql.org/learn/queries/#variables) in the `page-query` block. Use the `$id` variable to get the node for the current page:

```html
<template>
  <div>
    <h1 v-html="$page.post.title" />
    <div v-html="$page.post.content" />
  </div>
</template>

<page-query>
query ($id: ID!) {
  post(id: $id) {
    title
    content
  }
}
</page-query>
```

Other node fields are also available as query variables. Access values in deep objects or arrays by separating properties or indexes with double underscores (`__`).

- `$id` resolves to `node.id`
- `$value` resolves to `node.value`
- `$object__value` resolves to `node.object.value`
- `$array__3__id` resolves to `node.array[3].id`

## Node fields as meta info

The `metaInfo` option must be a function in order to access the query results:

```html
<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    }
  }
}
</script>
```
