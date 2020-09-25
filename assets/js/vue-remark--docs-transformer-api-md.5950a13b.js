(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{FBbX:function(t,e,a){"use strict";a.r(e);var n=a("K+aO"),s=a("Q4w9"),r=a("mGku");function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}r.default.config.optionMergeStrategies;var p={VueRemarkRoot:s.a},c=function(t){var e=t.options.components=t.options.components||{},a=t.options.computed=t.options.computed||{};Object.keys(p).forEach((function(t){"object"===o(p[t])&&"function"==typeof p[t].render||"function"==typeof p[t]&&"function"==typeof p[t].options.render?e[t]=p[t]:a[t]=function(){return p[t]}}))},u=r.default.config.optionMergeStrategies,i="__vueRemarkFrontMatter",l={excerpt:null,title:"Transformer API"};var v=function(t){t.options[i]&&(t.options[i]=l),r.default.util.defineReactive(t.options,i,l),t.options.computed=u.computed({$frontmatter:function(){return t.options[i]}},t.options.computed)},_=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("VueRemarkRoot",[a("h1",{attrs:{id:"transformer-api"}},[a("a",{attrs:{href:"#transformer-api","aria-hidden":"true"}},[t._v("#")]),t._v("Transformer API")]),a("p",[t._v("Transformers are used by the source plugins to parse content. They are automatically used as long as they are installed and found in "),a("code",{pre:!0},[t._v("package.json")]),t._v(".")]),a("h2",{attrs:{id:"mime-types"}},[a("a",{attrs:{href:"#mime-types","aria-hidden":"true"}},[t._v("#")]),t._v("Mime types")]),a("h3",{attrs:{id:"transformermimetypes"}},[a("a",{attrs:{href:"#transformermimetypes","aria-hidden":"true"}},[t._v("#")]),a("code",{pre:!0},[t._v("transformer.mimeTypes()")])]),a("p",[t._v("A transformer must have a static "),a("code",{pre:!0},[t._v("mimeTypes")]),t._v(" method which returns an array of "),a("a",{attrs:{href:"http://svn.apache.org/repos/asf/httpd/httpd/trunk/docs/conf/mime.types",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("mime types")]),t._v(" the transformer should be able to parse.")]),a("h2",{attrs:{id:"parse-content"}},[a("a",{attrs:{href:"#parse-content","aria-hidden":"true"}},[t._v("#")]),t._v("Parse content")]),a("h3",{attrs:{id:"transformerparsesource"}},[a("a",{attrs:{href:"#transformerparsesource","aria-hidden":"true"}},[t._v("#")]),a("code",{pre:!0},[t._v("transformer.parse(source)")])]),a("p",[t._v("A transformer must also implement a "),a("code",{pre:!0},[t._v("parse")]),t._v(" method that will be executed by source plugins to parse content. The method must return a node.")]),a("h2",{attrs:{id:"add-graphql-fields"}},[a("a",{attrs:{href:"#add-graphql-fields","aria-hidden":"true"}},[t._v("#")]),t._v("Add GraphQL fields")]),a("h3",{attrs:{id:"transformerextendnodetype"}},[a("a",{attrs:{href:"#transformerextendnodetype","aria-hidden":"true"}},[t._v("#")]),a("code",{pre:!0},[t._v("transformer.extendNodeType()")])]),a("p",[t._v("Transformers can also extend nodes in the GraphQL schema with additional fields by implementing a "),a("code",{pre:!0},[t._v("extendNodeType")]),t._v(" method. The fields will only be added to nodes it has transformed.")]),a("h2",{attrs:{id:"example"}},[a("a",{attrs:{href:"#example","aria-hidden":"true"}},[t._v("#")]),t._v("Example")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",{pre:!0,attrs:{class:"language-js"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Transformer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mimeTypes")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'application/json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("source")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token spread operator"}},[t._v("...")]),t._v("fields "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token known-class-name class-name"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("source"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      fields\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("extendNodeType")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" graphql "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// custom GraphQL fields for transformed node")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property-access"}},[t._v("exports")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token maybe-class-name"}},[t._v("Transformer")])])])])}),[],!1,null,null,null);"function"==typeof c&&c(_),"function"==typeof v&&v(_);e.default=_.exports},Q4w9:function(t,e,a){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}}}]);