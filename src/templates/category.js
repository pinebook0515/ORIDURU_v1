import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Media from "../components/Media"

const Category = ({ data, location, pageContext }) => {
  const posts = data.allMarkdownRemark.edges
  const categoryName = pageContext.cat
  return (
    <Layout location={location}>
      <SEO title={categoryName.toUpperCase()} />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        const date = node.frontmatter.date
        const categories = node.frontmatter.categories
        const thumbnail = node.frontmatter.thumbnail.childImageSharp.fluid
        return (
          <Media
            key={node.fields.slug}
            title={title}
            slug={node.fields.slug}
            date={date}
            categories={categories}
            thumbnail={thumbnail}
          />
        )
      })}
    </Layout>
  )
}

export default Category
export const pageQuery = graphql`
  query($cat: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { in: [$cat] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY.MM.DD")
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
