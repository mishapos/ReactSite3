/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   //   const { createNodeField } = actions
//   //   if (node.internal.type === `MarkdownRemark`) {
//   //     const slug = createFilePath({ node, getNode, basePath: `pages` })
//   //     createNodeField({
//   //       node,
//   //       name: `slug`,
//   //       value: slug,
//   //     })
//   //   }
//   console.log(node.internal.type)
// }

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allFile(
        sort: { fields: name }
        filter: { extension: { in: ["png", "jpg"] } }
      ) {
        edges {
          node {
            name
          }
        }
      }
    }
  `)

  result.data.allFile.edges.forEach(({ node }) => {
    createPage({
      path: node.name,
      component: path.resolve(`./src/templates/image-page.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        name: node.name,
      },
    })
  })
}
