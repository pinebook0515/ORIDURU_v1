const path = require(`path`)
const _ = require("lodash")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const categoryTemplate = path.resolve("./src/templates/category.js")

  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                date
                categories
              }
            }
          }
        }
        categoriesGroup: allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___categories) {
            fieldValue
            totalCount
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })

  const perPage = 8
  const length = posts.length
  const pages = Math.ceil(length / perPage)

  Array.from({ length: pages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/` : `/page/${i + 1}/`,
      component: path.resolve("./src/templates/blog-template.js"),
      context: {
        skip: perPage * i,
        limit: perPage,
        currentPage: i + 1,
        isFirst: i + 1 === 1,
        isLast: i + 1 === pages,
      },
    })
  })

  const category = result.data.categoriesGroup.group

  category.forEach(cat => {
    const perPage = 8
    const catPosts = cat.totalCount
    const catPages = Math.ceil(catPosts / perPage)

    Array.from({ length: catPages }).forEach((_, i) => {
      createPage({
        path:
          i === 0
            ? `/category/${cat.fieldValue}/`
            : `/category/${cat.fieldValue}/${i + 1}/`,
        component: categoryTemplate,
        context: {
          cat: cat.fieldValue,
          skip: perPage * i,
          limit: perPage,
          currentPage: i + 1,
          isFirst: i + 1 === 1,
          isLast: i + 1 === catPages,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
