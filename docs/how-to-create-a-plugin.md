# 如何新建插件

如果需要一个插件，但没有现成的，只好自己动手，丰衣足食

##### 核心插件

Feel free to create an issue if you have a plugin suggestion that should be maintained in core, like general source plugins or other common functionalities that will fit most use cases. That will also let others join the discussion about how it should be implemented first. Transformers for common file types should also be maintained in the core repository.

##### 插件库

Any plugins on NPM can be added to plugin library. Add a `gridsome-plugin` keyword in `package.json` to make it available in the [plugin library](/plugins).

## 创建一个source plugin

源插件表示是从API获取数据，并插入到内部数据库中. 插件名字可以叫 `gridsome-source-*` 或 `@username/gridsome-source-*`，前面加一个命名空间.

进一步学习 [Data Store API](/docs/data-store-api/)

## 创建一个 general plugin

其它的插件叫 `gridsome-plugin-*` 或 `@username/gridsome-plugin-*`.

进一步学习 [Server API](/docs/server-api/) 或 [Client API](/docs/client-api/)

## 创建一个 transformer

Transformers的功能与上面的插件不一样, 它为源插件服务，用来解析内容的. 它们也可以用来给GraphQL schema添加一些field. Transformers名字叫 `gridsome-transformer-*` 或 `@username/gridsome-transformer-*` ，目的是为了方便源插件找到.

进一步学习 [Transformer API](/docs/transformer-api/)

## 其它插件的插件 Plugins for other plugins

有些插件，如 `@gridsome/transformer-remark`, 可以有自己的插件. 名字叫 `gridsome-remark-*` 或 `@username/gridsome-remark-*`.

## 插件测试

1. [Create a new Gridsome project](/docs/#2-create-a-gridsome-project) (if you don't want to test with an existing one)
2. Open a terminal in your plugin project directory
3. `npm link` or `yarn link`
4. Open a terminal in your Gridsome project
5. `npm link my-plugin-name` or `yarn link my-plugin-name`
6. `gridsome develop`

If you are integrating with the [Server API](/docs/server-api/) in your plugin, restarting the development server is necessary. But, if you are only interacting with the [Client API](/docs/client-api/), your plugin should automatically hot-reload in your development server.
