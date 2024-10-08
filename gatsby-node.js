const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(edge => {
      const id = edge.node.id

      createPage({
        // path: edge.node.fields.slug,
        path: edge.node.frontmatter.slug,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}/index.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    const { createNodeField } = actions

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
// add a field listing all positions in each department in the department section
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  createTypes(`
    type MarkdownRemarkFrontmatterDepartmentsSectionDepartment {
      positions: [MarkdownRemark] @link(by: "frontmatter.department", from: "name")
    }
  `);
};