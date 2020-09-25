const path = require('path')
const fs = require('fs-extra')
const execa = require('execa')
const yaml = require('js-yaml')
const Prism = require('prismjs')

// highlight page-query and static-query in html
Prism.languages.html.graphql = {
  pattern: /(<(page|static)-query[\s\S]*?>)[\s\S]*?(?=<\/(page|static)-query>)/i,
  inside: Prism.languages.graphql,
  lookbehind: true,
  greedy: true
}

module.exports = function (api) {

  /**
   * loadSource的参数是一个匿名函数，该函数的参数是
   * {
          graphql: [Function: graphql],
          resolve: [Function: resolve],
          slugify: [Function: slugify],
          addCollection: [Function: addCollection],
          getCollection: [Function: getCollection],
          getNodeByUid: [Function: getNodeByUid],
          getNode: [Function: getNode],
          addMetadata: [Function: addMetadata],
          store: {
            createUniqueId: [Function: createUniqueId],
            createReference: [Function: createReference]
          },
          addContentType: [Function: addContentType],
          getContentType: [Function: getContentType],
          addMetaData: [Function: addMetaData],
          createTypeName: [Function: createTypeName],
          createReference: [Function: createReference],
          makeUid: [Function: makeUid],
          makeTypeName: [Function: makeTypeName],
          GraphQLSchema: [Function: GraphQLSchema],
          GraphQLScalarType: [Function: GraphQLScalarType],
          GraphQLObjectType: [Function: GraphQLObjectType],
          GraphQLInterfaceType: [Function: GraphQLInterfaceType],
          GraphQLUnionType: [Function: GraphQLUnionType],
          GraphQLEnumType: [Function: GraphQLEnumType],
          GraphQLInputObjectType: [Function: GraphQLInputObjectType],
          GraphQLList: [Function: GraphQLList],
          GraphQLNonNull: [Function: GraphQLNonNull],
          GraphQLDeprecatedDirective: @deprecated,
          GraphQLInt: Int,
          GraphQLFloat: Float,
          GraphQLString: String,
          GraphQLBoolean: Boolean,
          GraphQLID: ID,
          GraphQLJSON: JSON,
          addSchema: [Function: addSchema],
          addSchemaTypes: [Function: addSchemaTypes],
          addSchemaResolvers: [Function: addSchemaResolvers],
          addSchemaFieldExtension: [Function: addSchemaFieldExtension],
          schema: {
            createEnumType: [Function],
            createObjectType: [Function],
            createUnionType: [Function],
            createScalarType: [Function],
            createInterfaceType: [Function],
            createInputType: [Function]
          }
        }
   */
  api.loadSource(async ({ addMetadata, addCollection }) => {
    let gridsomeVersion = ''

    try {
      const { stdout } = await execa('npm', ['show', 'gridsome', 'version'])
      gridsomeVersion = stdout
    } catch (err) {
      console.warn('Failed to get gridsome version from npm.')
    }

    addMetadata('gridsomeVersion', gridsomeVersion)

    // contributors
    const authorsPath = path.join(__dirname, 'contributors/contributors.yaml')
    const authorsRaw = await fs.readFile(authorsPath, 'utf8')
    const authorsJson = yaml.safeLoad(authorsRaw)
    const authors = addCollection('Contributor')

    authorsJson.forEach(({ id, name: title, ...fields }) => {
      authors.addNode({
        id,
        title,
        internal: {
          origin: authorsPath
        },
        ...fields
      })
    })

    // Starters
    const startersPath = path.join(__dirname, 'starters/starters.yaml')
    const startersRaw = await fs.readFile(startersPath, 'utf8')
    const startersJson = yaml.safeLoad(startersRaw)
    const starters = addCollection('Starter')

    // Connect author field to Contributors & Platforms
    starters.addReference('author', 'Contributor')
    starters.addReference('platforms', 'Platform')

    startersJson.forEach((starter, index) => {
      starters.addNode({
        ...starter,
        index,
        internal: {
          origin: startersPath
        }
      })
    })

    // Platforms
    const platformsPath = path.join(__dirname, 'platforms/platforms.yaml')
    const platformsRaw = await fs.readFile(platformsPath, 'utf8')
    const platformsJson = yaml.safeLoad(platformsRaw)
    const platforms = addCollection('Platform')

    // Connect author field to Contributors
    platformsJson.forEach((platform, index) => {
      platforms.addNode({
        ...platform,
        index,
        internal: {
          origin: platformsPath
        }
      })
    })

  })

  api.createPages(({ createPage }) => {
    createPage({
      path: '/plugins/:id*',
      component: './src/templates/Plugin.vue'
    })
  })
}
