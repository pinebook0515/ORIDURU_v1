import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Media from "../components/media"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  const pages = data.allMarkdownRemark.totalCount
  const perPage = 8

  return (
    <Layout location={location} title={siteTitle}>
      <SEO pagetitle="" pagedesc="" pageimg="" />
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
      <div className="bl_media_pagination fl_end">
        {pages > perPage && (
          <Link
            to={`/page/2`}
            className="bl_media_paginationItem fl_alignCenter"
          >
            NEXT
            <span className="bl_media_paginationIcon bl_media_paginationIcon__next material-icons">
              chevron_right
            </span>
          </Link>
        )}
      </div>
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
      sort: { fields: [frontmatter___date], order: DESC }
      skip: 0
      limit: 8
    ) {
      totalCount
      edges {
        node {
          excerpt
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
