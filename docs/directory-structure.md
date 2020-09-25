# 目录结构

一个最基本的Gridsome项目，结构如下:

```text
.
├── package.json
├── gridsome.config.js
├── gridsome.server.js
├── static/
└── src/
    ├── main.js
    ├── index.html
    ├── App.vue
    ├── layouts/
    │   └── Default.vue
    ├── pages/
    │   ├── Index.vue
    │   └── Blog.vue
    └── templates/
        └── BlogPost.vue
```

## 根目录

### package.json

包含项目中安装了哪些插件等相关信息.

### gridsome.config.js

它是gridsome启动时会读取的配置文件，包含安装的插件的配置和选项.

[项目配置参考](/docs/config/)

### gridsome.server.js

它是可选的， is used to hook into various parts of the Gridsome server. 它导出的是一个函数，函数的参数是 PluginAPI.

```js
PluginAPI {
  _entry: 对象,
  _transformers: undefined,
  _app: App 对象,
  _store: PluginStore 对象,
  _on: [Function: bound _on],
  resolve: [Function: bound resolve],
  setClientOptions: [Function: bound setClientOptions],
  transpileDependencies: [Function: bound transpileDependencies],
  registerComponentParser: [Function: bound registerComponentParser],
  loadSource: [Function: bound loadSource],
  createSchema: [Function: bound createSchema],
  createPages: [Function: bound createPages],
  createManagedPages: [Function: bound createManagedPages],
  chainWebpack: [Function: bound chainWebpack],
  configureWebpack: [Function: bound configureWebpack],
  configureServer: [Function: bound configureServer],
  onInit: [Function: bound onInit],
  onBootstrap: [Function: bound onBootstrap],
  onCreateNode: [Function: bound onCreateNode],
  beforeBuild: [Function: bound beforeBuild],
  afterBuild: [Function: bound afterBuild]
}
```

[进一步学习Server API](/docs/server-api/)

##  `/src` 目录

### Main.js

- 导入全局样式和脚本
- 安装Vue插件，注册组件、指令等
- 它导出的也是一个函数，函数第一个参数为Vue,第二个参数**Client API**如下，包括5个属性

```json
isClient: true
isServer: false
appOptions: {
    data: {}
    metaInfo: {
        titleTemplate: "%s - 欢迎使用Gridsome"
        htmlAttrs: {…}, 
        meta: Array(4), …
        }
    methods: {}
    render: ƒ render(h)
    router: VueRouter 对象
}
head: {
    base: {}
    htmlAttrs: {lang: "en"}
    link: Array(9)
        0: {rel: "icon", href: "data:,"}
        1: {rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/static/src/favicon.png?width=16&key=6aa06a6"}
        2: {rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/static/src/favicon.png?width=32&key=6aa06a6"}
        3: {rel: "icon", type: "image/png", sizes: "96x96", href: "/assets/static/src/favicon.png?width=96&key=6aa06a6"}
        4: {rel: "apple-touch-icon", type: "image/png", sizes: "76x76", href: "/assets/static/src/favicon.png?width=76&key=f6f3c9c"}
        5: {rel: "apple-touch-icon", type: "image/png", sizes: "152x152", href: "/assets/static/src/favicon.png?width=152&key=f6f3c9c"}
        6: {rel: "apple-touch-icon", type: "image/png", sizes: "120x120", href: "/assets/static/src/favicon.png?width=120&key=f6f3c9c"}
        7: {rel: "apple-touch-icon", type: "image/png", sizes: "167x167", href: "/assets/static/src/favicon.png?width=167&key=f6f3c9c"}
        8: {rel: "apple-touch-icon", type: "image/png", sizes: "180x180", href: "/assets/static/src/favicon.png?width=180&key=f6f3c9c"}
    meta: Array(4)
        0: {charset: "utf-8"}
        1: {name: "generator", content: "Gridsome v0.7.20"}
        2: {key: "viewport", name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover"}
        3: {key: "format-detection", name: "format-detection", content: "telephone=no"}
    noscript: Array(1)
        0: {innerHTML: "<style>.g-image--loading{display:none;}</style>"}
    script: []
    style: []
    titleTemplate: "%s - 欢迎使用Gridsome"
    }

router: VueRouter{
    addRoutes: ƒ (routes)
    afterHooks: []
    app: null
    apps: []
    beforeHooks: (2) [ƒ, ƒ]
    fallback: false
    history: HTML5History {router: VueRouter, base: "", current: {…}, pending: null, ready: false, …}
    matcher: {match: ƒ, addRoutes: ƒ}
    mode: "history"
    options: {base: "/", mode: "history", fallback: false, routes: Array(82), scrollBehavior: ƒ}
    resolveHooks: []
}

```


[进一步了解main.js中Client API](/docs/client-api/)

### 布局目录layouts

在`src/layouts`目录中创建组件，在页面page和模板template中共享这个目录下的布局组件.

[进一步学习布局](/docs/layouts/)

### 布面目录pages

在该目录下所有的`.vue`单组件文件都是网站的页面，每个页面的路径与它在目录中的位置有关，无须做什么配置就可以在浏览器中访问，如
`src/pages/Index.vue`，对应的url是 `http://localhost:8080/` , `src/pages/AboutUs.vue` 对应的是 `http://localhost:8080//about-us`.

[进一步学习pages](/docs/pages/)

### 模板目录templates

如果想导入外部数据源，如从WordPress博客中导入帖子到你网站中，那么每个帖子会在templates目录中找到它对应的模板组件，组件文件的名字要与 GraphQL schema中的节点类型node type匹配

[进一步学习templates](/docs/templates/)

### 自定义 index.html

对于Gridsome自动生成的页面，通常需要你重写基本的html模板，非常容易，只需在`src`目录中创建一个新的 `index.html` 文件即可(默认无此文件).

[如何重写index.html](/docs/overriding-index/)

### 自定义 App.vue

The `App.vue` file is the main component that wraps all your pages and templates. You can override the default file by having your own `App.vue` file in your `src` directory. Overriding the default is useful if you want to have a layout that is shared across all your pages.

[如何重写 App.vue](/docs/overriding-app/)

##  `/static` 目录

静态目录下的文件会拷贝到最终打包后的目录 `dist` 中. 比如, **/static/robots.txt** 的最终位置是 https://yoursite.com/robots.txt

## 别名 Aliases

在Gridsome中，可以使用别名 `~` 或 `@` 代表文件夹 `/src` . 比如,  `import Card from '~/components/Card'`

## 推荐

### 静态资源Assets

全局styles, images, fonts 和 icons 通常放在 `src/assets` 目录中.

### 共享或全局组件

组件一般放在`src/components` 目录中，方便文件和模板使用.

### 数据文件

要导入到组件中的数据文件，如 `.json` 或 `.yaml`文件， 可以保存在 `src/data` 目录中.
