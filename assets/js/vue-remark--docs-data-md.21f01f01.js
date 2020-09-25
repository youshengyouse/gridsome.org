(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{FozH:function(t,a,s){"use strict";s.r(a);var n=s("K+aO"),e=s("Q4w9"),r=s("mGku");function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}r.default.config.optionMergeStrategies;var o={VueRemarkRoot:e.a},c=function(t){var a=t.options.components=t.options.components||{},s=t.options.computed=t.options.computed||{};Object.keys(o).forEach((function(t){"object"===p(o[t])&&"function"==typeof o[t].render||"function"==typeof o[t]&&"function"==typeof o[t].options.render?a[t]=o[t]:s[t]=function(){return o[t]}}))},l=r.default.config.optionMergeStrategies,u="__vueRemarkFrontMatter",v={excerpt:null,title:"Data"};var i=function(t){t.options[u]&&(t.options[u]=v),r.default.util.defineReactive(t.options,u,v),t.options.computed=l.computed({$frontmatter:function(){return t.options[u]}},t.options.computed)},_=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("VueRemarkRoot",[s("h1",{attrs:{id:"data"}},[s("a",{attrs:{href:"#data","aria-hidden":"true"}},[t._v("#")]),t._v("Data")]),s("h2",{attrs:{id:"data-store-and-graphql"}},[s("a",{attrs:{href:"#data-store-and-graphql","aria-hidden":"true"}},[t._v("#")]),t._v("Data store and GraphQL")]),s("p",[t._v("Data from source plugins are stored in an internal data store. You can use "),s("a",{attrs:{href:"https://graphql.org/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("GraphQL")]),t._v(" to access that data in your pages, templates or any other Vue component in your project. GraphQL is a declarative query language especially useful for retrieving only the data you ask for. Which again will result in smaller bundles.")]),s("h4",{attrs:{id:"usage-in-a-pages-or-templates"}},[s("a",{attrs:{href:"#usage-in-a-pages-or-templates","aria-hidden":"true"}},[t._v("#")]),t._v("Usage in a pages or templates")]),s("p",[t._v("Start by adding a top-level "),s("code",{pre:!0},[t._v("<page-query>")]),t._v(" block in your Vue component. Then write a "),s("a",{attrs:{href:"https://graphql.github.io/learn/queries/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("query")]),t._v(" inside it. The results will be available as a "),s("code",{pre:!0},[t._v("$page")]),t._v(" object in your templates.")]),s("p",[t._v("Read more about "),s("a",{attrs:{href:"/docs/fetching-data/"}},[t._v("importing data")]),t._v(" or the "),s("a",{attrs:{href:"/docs/data-store-api/"}},[t._v("Data Store API")])]),s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",{pre:!0,attrs:{class:"language-html"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Layout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ $page.post.title }}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Layout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("page-query")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token graphql"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("query")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  post"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    title\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("page-query")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])])]),s("p",[t._v("Read more about querying data in "),s("a",{attrs:{href:"/docs/querying-data#query-data-in-pages"}},[t._v("pages")]),t._v(" or "),s("a",{attrs:{href:"/docs/querying-data#query-data-in-templates"}},[t._v("templates")])]),s("h4",{attrs:{id:"usage-in-any-component"}},[s("a",{attrs:{href:"#usage-in-any-component","aria-hidden":"true"}},[t._v("#")]),t._v("Usage in any component")]),s("p",[s("code",{pre:!0},[t._v("<page-query>")]),t._v(" only works for pages and templates. But you can use a "),s("code",{pre:!0},[t._v("<static-query>")]),t._v(" block to retrieve data in any other component. The results will be available as a "),s("code",{pre:!0},[t._v("$static")]),t._v(" object in your templates.")]),s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",{pre:!0,attrs:{class:"language-html"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Layout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ $static.post.title }}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Layout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("static-query")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token graphql"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("query")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  post"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    title\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("static-query")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])])]),s("p",[t._v("Read more about querying data in "),s("a",{attrs:{href:"/docs/querying-data#query-data-in-components"}},[t._v("components")])]),s("h2",{attrs:{id:"pages-and-page-context"}},[s("a",{attrs:{href:"#pages-and-page-context","aria-hidden":"true"}},[t._v("#")]),t._v("Pages and page context")]),s("p",[t._v("Every page that is created programmatically can have its own context with any data. The page context will be available as a "),s("code",{pre:!0},[t._v("$context")]),t._v(" object in your templates.")]),s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",{pre:!0,attrs:{class:"language-html"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Layout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ $context.title }}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Layout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])])]),s("p",[t._v("Read more about the "),s("a",{attrs:{href:"/docs/pages-api/"}},[t._v("Pages API")])]),s("h2",{attrs:{id:"local-json-and-yaml-files"}},[s("a",{attrs:{href:"#local-json-and-yaml-files","aria-hidden":"true"}},[t._v("#")]),t._v("Local JSON and YAML files")]),s("p",[t._v("Gridsome includes webpack loaders for importing "),s("a",{attrs:{href:"https://www.json.org/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("JSON")]),t._v(" and "),s("a",{attrs:{href:"https://yaml.org/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("YAML")]),t._v(" files into your components.")]),s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",{pre:!0,attrs:{class:"language-html"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Layout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ myData.title }}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Layout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword module"}},[t._v("import")]),t._v(" myData "),s("span",{pre:!0,attrs:{class:"token keyword module"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'~/data/my-data.yaml'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword module"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword module"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      myData\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])])])])}),[],!1,null,null,null);"function"==typeof c&&c(_),"function"==typeof i&&i(_);a.default=_.exports},Q4w9:function(t,a,s){"use strict";a.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}}}]);