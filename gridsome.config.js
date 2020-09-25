const nodeExternals = require('webpack-node-externals')

module.exports = {
  siteName: 'Gridsome官网',
  //siteUrl: `https://www.gridsome.org`,
  siteUrl: 'https://youshengyouse.github.io',
  pathPrefix: '/gridsome.org',

  titleTemplate: '%s - 欢迎使用Gridsome',
  siteDescription: 'Gridsome基于Vue.js开发，用于构建静态网站和应用，速度超快的开源框架 🚀.',

  chainWebpack (config, { isServer }) {
    config.module.rules.delete('svg')
    config.module.rule('svg')
      .test(/\.svg$/)
      .use('vue')
      .loader('vue-loader')
      .end()
      .use('svg-to-vue-component')
      .loader('svg-to-vue-component/loader')

    if (isServer) {
      config.externals(nodeExternals({
        whitelist: [
          /\.css$/,
          /\?vue&type=style/,
          /vue-instantsearch/,
          /instantsearch.js/,
          /typeface-league-spartan/
        ]
      }))
    }
  },

  // 模板
  templates: {
    BlogPost: '/blog/:year/:month/:day/:slug',
    Contributor: '/contributor/:id',
    Starter: '/starters/:title',
    Platform: '/starters/platform/:id',
    Example: node => node.path
  },

  plugins: [
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-127625720-1'
      }
    },
    {
      use: '@gridsome/plugin-critical',
      options: {
        paths: ['/'],
        width: 1300,
        height: 900
      }
    },

    // 插件用法 https://cnpmjs.org/package/@gridsome/vue-remark




    {
      use: '@gridsome/vue-remark',
      options: {
        index: ['README'],
        baseDir: './docs', // .md文件放置的目录
        pathPrefix: '/docs', // 路由前缀
        typeName: 'DocPage', // 必需
        template: './src/templates/DocPage.vue',
        plugins: [
          '@gridsome/remark-prismjs'
        ],
        remark: {
          autolinkHeadings: {
            content: {
              type: 'text',
              value: '#'
            }
          }
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'examples/*.md',
        typeName: 'Example',
        remark: {
          plugins: [
            '@gridsome/remark-prismjs'
          ]
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BlogPost',
        path: './blog/*/index.md',
        refs: {
          author: 'Contributor'
        },
        remark: {
          plugins: [
            '@gridsome/remark-prismjs'
          ]
        }
      }
    }
    ,
    {
      use: '~/src/plugins/theme/',
      options: {
        theme: 'blueOcean'       
        }
    }
  ]
}
