(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"9oCR":function(t,s,a){"use strict";a.r(s);var e=a("K+aO"),n=a("Q4w9"),r=a("mGku");function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}r.default.config.optionMergeStrategies;var o={VueRemarkRoot:n.a},c=function(t){var s=t.options.components=t.options.components||{},a=t.options.computed=t.options.computed||{};Object.keys(o).forEach((function(t){"object"===p(o[t])&&"function"==typeof o[t].render||"function"==typeof o[t]&&"function"==typeof o[t].options.render?s[t]=o[t]:a[t]=function(){return o[t]}}))},l=r.default.config.optionMergeStrategies,i="__vueRemarkFrontMatter",v={excerpt:null,title:"项目配置"};var _=function(t){t.options[i]&&(t.options[i]=v),r.default.util.defineReactive(t.options,i,v),t.options.computed=l.computed({$frontmatter:function(){return t.options[i]}},t.options.computed)},u=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("VueRemarkRoot",[a("h1",{attrs:{id:"项目配置"}},[a("a",{attrs:{href:"#%E9%A1%B9%E7%9B%AE%E9%85%8D%E7%BD%AE","aria-hidden":"true"}},[t._v("#")]),t._v("项目配置")]),a("p",[t._v("项目必需有配置文件 "),a("code",{pre:!0},[t._v("gridsome.config.js")]),t._v(" . 插件和项目设置就是这里配置，下面是一个基本配置:")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",{pre:!0,attrs:{class:"language-js"}},[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property-access"}},[t._v("exports")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  siteName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Gridsome'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  siteUrl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://www.gridsome.org'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),a("h2",{attrs:{id:"sitename"}},[a("a",{attrs:{href:"#sitename","aria-hidden":"true"}},[t._v("#")]),t._v("siteName")]),a("ul",[a("li",[t._v("类型"),a("code",{pre:!0},[t._v("string")])]),a("li",[t._v("默认值"),a("code",{pre:!0},[t._v("<dirname>")])])]),a("p",[t._v("设置项目的名字，通常它会出现在title tag中")]),a("h2",{attrs:{id:"sitedescription"}},[a("a",{attrs:{href:"#sitedescription","aria-hidden":"true"}},[t._v("#")]),t._v("siteDescription")]),a("ul",[a("li",[t._v("Type "),a("code",{pre:!0},[t._v("string")])]),a("li",[t._v("Default "),a("code",{pre:!0},[t._v("''")])])]),a("p",[t._v("站点描述.")]),a("h2",{attrs:{id:"siteurl"}},[a("a",{attrs:{href:"#siteurl","aria-hidden":"true"}},[t._v("#")]),t._v("siteUrl")]),a("ul",[a("li",[t._v("Type "),a("code",{pre:!0},[t._v("string")])]),a("li",[t._v("Default "),a("code",{pre:!0},[t._v("''")])])]),a("h2",{attrs:{id:"pathprefix"}},[a("a",{attrs:{href:"#pathprefix","aria-hidden":"true"}},[t._v("#")]),t._v("pathPrefix")]),a("ul",[a("li",[t._v("Type "),a("code",{pre:!0},[t._v("string")])]),a("li",[t._v("Default "),a("code",{pre:!0},[t._v("''")])])]),a("p",[t._v("Gridsome assumes your project is served from the root of your domain.\nChange this option to "),a("code",{pre:!0},[t._v("'/my-app'")]),t._v(" if your project will be hosted in a\nsubdirectory called "),a("code",{pre:!0},[t._v("my-app")]),t._v(".")]),a("h2",{attrs:{id:"titletemplate"}},[a("a",{attrs:{href:"#titletemplate","aria-hidden":"true"}},[t._v("#")]),t._v("titleTemplate")]),a("ul",[a("li",[t._v("Type "),a("code",{pre:!0},[t._v("string")])]),a("li",[t._v("Default "),a("code",{pre:!0},[t._v("%s - <siteName>")])])]),a("p",[t._v("设置标签title的模板，其中 "),a("code",{pre:!0},[t._v("%s")]),t._v(" 是占位符，它会被页面metaInfo中指定的title替换")]),a("h2",{attrs:{id:"plugins"}},[a("a",{attrs:{href:"#plugins","aria-hidden":"true"}},[t._v("#")]),t._v("plugins")]),a("ul",[a("li",[t._v("类型"),a("code",{pre:!0},[t._v("Array")])]),a("li",[t._v("默认"),a("code",{pre:!0},[t._v("[]")])])]),a("p",[t._v("用到的插件都放在 "),a("code",{pre:!0},[t._v("plugins")]),t._v(" 中，它是一个数组.")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",{pre:!0,attrs:{class:"language-js"}},[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property-access"}},[t._v("exports")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      use"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@gridsome/source-filesystem'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      options"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'blog/**/*.md'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        route"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/blog/:year/:month/:day/:slug'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        typeName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Post'")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),a("p",[a("a",{attrs:{href:"/plugins/"}},[t._v("进一步了解如何使用插件")])]),a("h2",{attrs:{id:"templates"}},[a("a",{attrs:{href:"#templates","aria-hidden":"true"}},[t._v("#")]),t._v("templates")]),a("ul",[a("li",[t._v("Type "),a("code",{pre:!0},[t._v("object")])]),a("li",[t._v("Default "),a("code",{pre:!0},[t._v("{}")])])]),a("p",[t._v("为集全定义路由和模板.")]),a("p",[a("a",{attrs:{href:"/docs/templates/"}},[t._v("进一步学习模板")])]),a("h2",{attrs:{id:"metadata"}},[a("a",{attrs:{href:"#metadata","aria-hidden":"true"}},[t._v("#")]),t._v("metadata")]),a("ul",[a("li",[t._v("Type "),a("code",{pre:!0},[t._v("object")])]),a("li",[t._v("Default "),a("code",{pre:!0},[t._v("{}")])])]),a("p",[t._v("给GraphQL schema 添加全局 metadata.")]),a("p",[a("a",{attrs:{href:"/docs/metadata/"}},[t._v("进一步学习全局metadata")])]),a("h2",{attrs:{id:"icon"}},[a("a",{attrs:{href:"#icon","aria-hidden":"true"}},[t._v("#")]),t._v("icon")]),a("ul",[a("li",[t._v("Type "),a("code",{pre:!0},[t._v("string | Object")])]),a("li",[t._v("Default "),a("code",{pre:!0},[t._v("'./src/favicon.png'")])])]),a("p",[t._v("Gridsome will use any image located at "),a("code",{pre:!0},[t._v("src/favicon.png")]),t._v(" as favicon and\ntouchicon by default, but you can define another path or sizes etc. The icon\nshould be a square and minimum 16 pixels. The favicon will be resized to 16, 32,\n96 pixels. And the touchicon will be resized to 76, 152, 120, 167, 180 pixels by\ndefault.")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",{pre:!0,attrs:{class:"language-js"}},[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property-access"}},[t._v("exports")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  icon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./src/my-icon.png'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),a("p",[t._v("Use a different image for touch icons:")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",{pre:!0,attrs:{class:"language-js"}},[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property-access"}},[t._v("exports")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  icon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    favicon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./src/my-favicon.png'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    touchicon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./src/my-touchicon.png'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),a("p",[t._v("Define custom sizes and disable effects on iOS < 7 devices:")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",{pre:!0,attrs:{class:"language-js"}},[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property-access"}},[t._v("exports")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  icon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    favicon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      src"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./src/my-favicon.png'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      sizes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("96")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    touchicon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      src"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./src/my-touchicon.png'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      sizes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("76")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("152")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("120")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("167")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      precomposed"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),a("h2",{attrs:{id:"configurewebpack"}},[a("a",{attrs:{href:"#configurewebpack","aria-hidden":"true"}},[t._v("#")]),t._v("configureWebpack")]),a("ul",[a("li",[t._v("Type "),a("code",{pre:!0},[t._v("Object | Function")])])]),a("p",[t._v("The option will be merged with the internal config if it is an object.")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",{pre:!0,attrs:{class:"language-js"}},[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property-access"}},[t._v("exports")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  configureWebpack"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// merged with the internal config")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),a("p",[t._v("If the option is a function, it will get the internal config as its first argument. You can either modify the argument or return a new config object that will override the internal webpack config.")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",{pre:!0,attrs:{class:"language-js"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" merge "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'webpack-merge'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property-access"}},[t._v("exports")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("configureWebpack")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("merge")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* custom config */")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),a("h2",{attrs:{id:"chainwebpack"}},[a("a",{attrs:{href:"#chainwebpack","aria-hidden":"true"}},[t._v("#")]),t._v("chainWebpack")]),a("ul",[a("li",[t._v("Type "),a("code",{pre:!0},[t._v("Function")])])]),a("p",[t._v("A function that will receive an instance of ChainableConfig powered by\n"),a("a",{attrs:{href:"https://github.com/neutrinojs/webpack-chain",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("webpack-chain")]),t._v(".")]),a("h2",{attrs:{id:"runtimecompiler"}},[a("a",{attrs:{href:"#runtimecompiler","aria-hidden":"true"}},[t._v("#")]),t._v("runtimeCompiler")]),a("ul",[a("li",[t._v("Type "),a("code",{pre:!0},[t._v("boolean")])]),a("li",[t._v("Default "),a("code",{pre:!0},[t._v("false")])])]),a("p",[t._v("Include the Vue template compiler at runtime.")]),a("h2",{attrs:{id:"configureserver"}},[a("a",{attrs:{href:"#configureserver","aria-hidden":"true"}},[t._v("#")]),t._v("configureServer")]),a("ul",[a("li",[t._v("Type "),a("code",{pre:!0},[t._v("Function")])])]),a("p",[t._v("Configure the development server.")]),a("p",[a("a",{attrs:{href:"/docs/server-api#apiconfigureserverfn"}},[t._v("Read more about configuring the development server")])]),a("h2",{attrs:{id:"permalinkstrailingslash"}},[a("a",{attrs:{href:"#permalinkstrailingslash","aria-hidden":"true"}},[t._v("#")]),t._v("permalinks.trailingSlash")]),a("ul",[a("li",[t._v("Type "),a("code",{pre:!0},[t._v("boolean")])]),a("li",[t._v("Default "),a("code",{pre:!0},[t._v("true")])])]),a("p",[t._v("Appends a trailing slash to pages and templates by default.")]),a("p",[t._v("Pages with "),a("a",{attrs:{href:"/docs/dynamic-routing/"}},[t._v("dynamic routes")]),t._v(" will not include a trailing slash when this option is enabled and must have extra rewrite rules on the server to work properly. Also, static paths for "),a("code",{pre:!0},[t._v("<g-link>")]),t._v(" will not include a trailing slash automatically but should be included in the path:")]),a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",{pre:!0,attrs:{class:"language-html"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("g-link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("to")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/about-us/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("About us"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("g-link")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])])]),a("h2",{attrs:{id:"permalinksslugify"}},[a("a",{attrs:{href:"#permalinksslugify","aria-hidden":"true"}},[t._v("#")]),t._v("permalinks.slugify")]),a("ul",[a("li",[t._v("Type "),a("code",{pre:!0},[t._v("function | object")])])]),a("p",[t._v("Use a custom slugify method. Default slugifyer is "),a("a",{attrs:{href:"https://github.com/sindresorhus/slugify",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("@sindresorhus/slugify")]),t._v(".")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",{pre:!0,attrs:{class:"language-js"}},[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property-access"}},[t._v("exports")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  permalinks"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    slugify"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      use"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'another-slugify-library'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      options"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),a("h2",{attrs:{id:"csssplit"}},[a("a",{attrs:{href:"#csssplit","aria-hidden":"true"}},[t._v("#")]),t._v("css.split")]),a("ul",[a("li",[t._v("Type "),a("code",{pre:!0},[t._v("boolean")]),a("em",[t._v("Default: "),a("code",{pre:!0},[t._v("false")])])])]),a("p",[t._v("Split CSS into multiple chunks. Splitting is disabled by default. Splitting CSS can result in weird behaviors.")]),a("h2",{attrs:{id:"cssloaderoptions"}},[a("a",{attrs:{href:"#cssloaderoptions","aria-hidden":"true"}},[t._v("#")]),t._v("css.loaderOptions")]),a("ul",[a("li",[t._v("Type "),a("code",{pre:!0},[t._v("Object")])]),a("li",[t._v("Default "),a("code",{pre:!0},[t._v("{}")])])]),a("p",[t._v("Pass options to CSS-related loaders. For example:")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",{pre:!0,attrs:{class:"language-js"}},[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property-access"}},[t._v("exports")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  css"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    loaderOptions"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      scss"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// options here will be passed to sass-loader")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      less"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// options here will be passed to less-loader")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),a("p",[t._v("Supported loaders are:")]),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/webpack-contrib/css-loader",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("css-loader")])]),a("li",[a("a",{attrs:{href:"https://github.com/postcss/postcss-loader",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("postcss-loader")])]),a("li",[a("a",{attrs:{href:"https://github.com/webpack-contrib/sass-loader",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("sass-loader")])]),a("li",[a("a",{attrs:{href:"https://github.com/webpack-contrib/less-loader",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("less-loader")])]),a("li",[a("a",{attrs:{href:"https://github.com/shama/stylus-loader",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("stylus-loader")])])]),a("h2",{attrs:{id:"host"}},[a("a",{attrs:{href:"#host","aria-hidden":"true"}},[t._v("#")]),t._v("host")]),a("ul",[a("li",[t._v("Type "),a("code",{pre:!0},[t._v("string")])]),a("li",[t._v("Default "),a("code",{pre:!0},[t._v("'localhost'")])])]),a("h2",{attrs:{id:"port"}},[a("a",{attrs:{href:"#port","aria-hidden":"true"}},[t._v("#")]),t._v("port")]),a("ul",[a("li",[t._v("Type "),a("code",{pre:!0},[t._v("number")])]),a("li",[t._v("Default "),a("code",{pre:!0},[t._v("8080")])])]),a("h2",{attrs:{id:"outputdir"}},[a("a",{attrs:{href:"#outputdir","aria-hidden":"true"}},[t._v("#")]),t._v("outputDir")]),a("ul",[a("li",[t._v("Type "),a("code",{pre:!0},[t._v("string")])]),a("li",[t._v("Default "),a("code",{pre:!0},[t._v("'dist'")])])]),a("p",[t._v("当使用 "),a("code",{pre:!0},[t._v("gridsome build")]),t._v(" 构建后生成的文件，放在该目录中.")])])}),[],!1,null,null,null);"function"==typeof c&&c(u),"function"==typeof _&&_(u);s.default=u.exports},Q4w9:function(t,s,a){"use strict";s.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}}}]);