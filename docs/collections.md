# 集合[Collections]

> A collection is a group of nodes and each node contains fields with custom data. Collections are useful if you are going to have blog posts, tags, products etc. on your site.

## 添加集合

集合的添加有两种方法，使用 [源插件](/plugins/) 或使用 [数据存储 API](/docs/data-store-api/)手工添加. 当`development` 和 `build`时，集合储存在本地内存中. Nodes can be **sourced** from local files (Markdown, JSON, YAML etc.) or any external APIs.

![集合](./images/node-pages.png)

## 使用源插件添加集合

The easiest way to add collections to Gridsome is with **source plugins**. This example creates collections from a **WordPress site**. The `typeName` option for source plugins are usually for prefixing collection names that the plugin adds.

```js
// gridsome.config.js
module.exports = {
  plugins: [
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: 'YOUR_WEBSITE_URL',
        typeName: 'WordPress',
      }
    }
  ]
}
```

 在  [插件页面中](/plugins) 查找 **源插件source plugins**.

## 使用Data Store API添加集合

可以从任何外部API手动添加集合. 下面例子中生成的集合名字叫 `Post` ，从外部API获取内容，并将它做为节点(node)添加到集合中.

```js
// gridsome.server.js
const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async actions => {
    const collection = actions.addCollection('Post')                   // 添加集合的名字叫Post,

    const { data } = await axios.get('https://api.example.com/posts')  // 从外部api获取数据

    for (const item of data) {
      collection.addNode({                                             // 遍历数据，做为node添加到collection中
        id: item.id,
        title: item.title,
        content: item.content
      })
    }
  })
}
```

进一步了解 [Data Store API](/docs/data-store-api/).

## GraphQL中的集合

Each collection will add two root fields to the [GraphQL schema](/docs/data-layer/) that are used to retrieve nodes in your pages. The field names are auto-generated based on the collection name. If you name the collection `Post`, you will have these fields available in the schema:

- `post` Get a single node by `id`.
- `allPost` Get a list of nodes. *(Can be sorted and filtered.)*

#### Automatic schema generation

Each collection type in the schema will have fields that are auto-generated based on discovered data on startup. That's great for simple projects but will often lead to errors with for example missing fields because content has been removed in an external source. You can use the [Schema API](/docs/schema-api/) to define your own schema that will persist when data changes.

*Custom schema types for a collection **must** implement the `Node` interface.*

#### Explore available types and fields

You can browse available fields by opening the **schema** tab in the [GraphQL explorer](/docs/data-layer#the-graphql-explorer).

Read more about how to [query nodes in GraphQL](/docs/querying-data/).

## collections的模板

[Templates](/docs/templates/) are used to create single pages for **nodes** in a collection. Nodes need a corresponding page in order to be presented on its own URL.

[进一步学习](/docs/templates/)