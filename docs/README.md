# 介绍

> Gridsome是一个基于Vue.js 开发的 [Jamstack](/docs/jamstack) 框架，用来构建静态网站和应用， [fast by default](/docs/fast-by-default/) 🚀.

## 为什么选择Gridsome?

- 前端使用**Vue.js** - 简单、流行的前端框架.
- **Data sourcing** - Use any Headless CMSs, APIs or Markdown-files for data.
- **Local development with hot-reloading** - See code changes in real-time.
- **File-based page routing** - Any `Name.vue` file in `src/pages` is a static route.
- **动态路由** - Any `[param].vue` file in `src/pages` is a dynamic route.
- **Static file generation** - Deploy securely to any CDN or static web host.
- **GraphQL data layer** - Simpler data management with a centralized data layer.
- **Automatic Code Splitting** - Builds ultra performance into every page.
- **插件丰富** - Find a plugin for any job.

## 什么是Jamstack?

**Gridsome is a Jamstack framework**. Jamstack lets you build fast and secure sites and apps delivered by pre-rendering files and serving them directly from a CDN, removing the requirement to manage or run web servers.

[Learn more about the Jamstack](/docs/jamstack).

## 工作原理

Gridsome **generates static html** that hydrates into a **Vue SPA** once loaded in the browser. This means you can build both **static websites** & **dynamic apps** with Gridsome.

Gridsome builds one `.html` file and one `.json` file for every page. After first page load it only uses the `.json` files to prefetch and load data for the next pages. It also builds a `.js` bundle for each page that needs it (code splitting).

It uses [vue-router](https://router.vuejs.org/) for SPA routing, and [vue-meta](https://vue-meta.nuxtjs.org/) for managing `<head>`.

Gridsome adds a `57kB min gzip` JS bundle size by default.(vue.js, vue-router, vue-meta and some for image lazy loading).

[Learn more about how it works.](/docs/how-it-works)

## 前提条件

必须具备有基本的 HTML, CSS, [Vue.js](https://vuejs.org)  知识，并且知道如何使用 [终端命令](https://www.linode.com/docs/tools-reference/tools/using-the-terminal/). 最好了解 [GraphQL](https://www.graphql.com/) 的工作原理(不是必须)。

Gridsome 需要安装[Node.js](https://nodejs.org/) (v8.3+) ，推荐使用 [Yarn](https://yarnpkg.com).

## 如何安装

> 参考视频：https://www.youtube.com/watch?v=uF3K3IpRfhE&ab_channel=AndreMadarang

### 1. 安装Gridsome CLI 命令行工具

- 使用**YARN:** `yarn global add @gridsome/cli`
- 使用 **NPM:** `npm install --global @gridsome/cli`

### 2. 新建 一个 Gridsome 项目

1. `gridsome create my-gridsome-site` 新建项目，它会从 `https://github.com/gridsome/gridsome-starter-default`克隆官方提供的starter模板
2. `cd my-gridsome-site` 
3. `gridsome develop` 启动本地dev server，`http://localhost:8080`
4. 可以开始快乐编程了 🎉🙌

博客实例

```sh
$ gridsome create gridsome-example # 克隆下载 https://github.com/gridsome/gridsome-starter-default.git
$ cd gridsome-example
$ code . # 打开目录看下
$ gridsome develop
```



### 3. 下一步

1. 在 `src/pages` 文件夹，新建 `.vue` 组件，创建页面路由

   ```js
   <!--
     新建文件 \projects\gridsome-example\src\pages\Contact.vue
     这里使用了Layout,它是全局组件，在哪里定义的，另外还有哪些全局组件
     这里的metaInfo会出现在哪里
     不需要定义路由，直接在浏览器中输入 http://192.168.0.106:8081/contact/ 就可以访问
   -->
   <template>
     <Layout>
       <h1>联系我们</h1>
       <p>QQ:768287201</p>
     </Layout>
   </template>
   
   <script>
   export default {
     metaInfo: {
       title: '联系我们'
     }
   }
   </script>
   ```

   创建路由

   ```js
   // \projects\gridsome-example\src\layouts\Default.vue
   // g-link与router-link很象，g-link也是一个全局组件
   // $static.metadata这里的$static代表的是?
   // <static-query>部分
   // 这里没有script标签，数据由static-query标签提供
   
   <template>
     <div class="layout">
       <header class="header">
         <strong>
           <g-link to="/">{{ $static.metadata.siteName }}</g-link>
         </strong>
         <nav class="nav">
           <g-link class="nav__link" to="/">Home</g-link>
           <g-link class="nav__link" to="/about/">About</g-link>
           <g-link class="nav__link" to="/contact/">联系我们</g-link>
         </nav>
       </header>
       <slot/>
     </div>
   </template>
   
   <static-query>
   query {
     metadata {
       siteName
     }
   }
   </static-query>
   
   <style>
   body {
     font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
     margin:0;
     padding:0;
     line-height: 1.5;
   }
   
   .layout {
     max-width: 760px;
     margin: 0 auto;
     padding-left: 20px;
     padding-right: 20px;
   }
   
   .header {
     display: flex;
     justify-content: space-between;
     align-items: center;
     margin-bottom: 20px;
     height: 80px;
   }
   
   .nav__link {
     margin-left: 20px;
   }
   </style>
   ```

   新建布局，可以使用多个布局，复制Default.vue为Blog.vue，稍做修改，能与Default.vue区分开来就行，将上面的Contact.vue改为使用Blog.vue布局

   ```js
   // ~是别名，代表src目录，使用@也行
   // 布局由原来的的Layout改为了BlogLayout
   // metaInfo.title说是html中head的title值
   // <BlogLayout>... </BlogLayout>，也可以写成 <blog-layout>...</blog-layout>
   <template>
     <BlogLayout>
       <h1>联系我们</h1>
       <p>QQ:768287201</p>
     </BlogLayout>
   </template>
   
   <script>
   import BlogLayout from '~/layouts/Blog'
   export default {
     components: { BlogLayout },
     metaInfo: {
       title: '联系我们'
     }
   }
   </script>
   ```

   将BlogLayout注册为全局组件，这样在Contact.vue中就可以直接使用，无须import后在components中注册

   ```js
   //\projects\gridsome-example\src\main.js
   
   // This is the main.js file. Import global CSS and scripts here.
   // The Client API can be used here. Learn more: gridsome.org/docs/client-api
   
   import DefaultLayout from '~/layouts/Default.vue'
   import BlogLayout from '~/layouts/Blog'
   
   export default function (Vue, { router, head, isClient }) {
     // Set default layout as a global component
     Vue.component('Layout', DefaultLayout)
     Vue.component('BlogLayout', BlogLayout)
   }
   ```

   pages下面的vue文件，在浏览器中是可以直接访问的，如 `http://192.168.0.106:8081/blog-html/blog-post-one`，对应的文件是`pages/BlogHtml/BlogPostOne.vue`

   ```js
   // \projects\gridsome-example\src\pages\Blog-Html\BlogPostOne.vue
   // 目录名BlogHtml为blogHtml，Blog-Html，blog-html都一样
   
   <template>
     <blog-layout>
       <h1>第30届金鹰奖提名公布</h1>
       <p>9月15日晚上8点，第30届金鹰奖提名发布会在厦门举办，线上多个平台同步直播，这是金鹰节首次采用发布会+晚会形式公布提名，自然备受关注，话不多说，直接来看看具体的提名名单吧！</p>
     </blog-layout>
   </template>
   
   <script>
   export default {
     metaInfo: {
       title: '第一篇博客'
     }
   }
   </script>
   ```

   给博客插入一张图片，两个问题，图片应该放在哪个文件夹下，在src中如何导入图片

   ```html
   <!-- 图片放在 博客同一目录下 -->
   <img src="./post-1.jpg" alt="海报" srcset="">
   ```

   同上面，再建一条博客 叫 BlogPostTwo.vue

   

   将2篇博客都出现在首页

   ```html
   <!--首页 \projects\gridsome-example\src\pages\Index.vue-->
   <ul>
       <li>
           <g-link to="/Blog-html/Blog-post-one">第30届金鹰奖提名公布</g-link>
       </li>
       <li>
           <g-link to="/Blog-html/Blog-post-two">瑞丽计划三天完成全员核酸检测</g-link>
       </li>
   </ul>
   ```

   

   

   明天接着看 https://www.youtube.com/watch?v=uF3K3IpRfhE&ab_channel=AndreMadarang

   

2. 执行 `gridsome build` ，在 `/dist` 目录会生成静态文件

#### 进一步学习

- [Core concepts](/docs/core-concepts/)
- [How to host & deploy](/docs/deployment/)

import Newsletter from '@/components/Newsletter.vue'

<div>
  <Newsletter/>
</div>

## 同类选择

- **[VuePress.](https://vuepress.vuejs.org/)** Another static site generator for Vue.js. It uses local markdown files for content and is perfect for documentation sites. It is possible to build anything in VuePress and Markdown (Like a blog f.ex).

- **[Nuxt.](https://nuxtjs.org/)** A Universal Vue.js Framework for server-side rendered (SSR) apps and websites. It also has a static site generator feature, but the main focus is SSR.

- **[Gatsby.js](https://www.gatsbyjs.org/)** Gridsome is highly inspired by Gatsby.js (React.js based), which collects data sources and generates a static site from it. Gridsome is an alternative for Gatsby.js.
