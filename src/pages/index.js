import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Media from "../components/Media"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="" />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        const createdAt = node.frontmatter.createdAt
        const categories = node.frontmatter.categories
        const thumbnail = node.frontmatter.thumbnail.childImageSharp.fluid
        return (
          <Media
            key={node.fields.slug}
            title={title}
            slug={node.fields.slug}
            date={createdAt}
            categories={categories}
            thumbnail={thumbnail}
          />
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___createdAt], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            createdAt(formatString: "YYYY.MM.DD")
            title
            categories
            description
            thumbnail {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
