import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Media from "../components/media"

const Category = ({ data, location, pageContext }) => {
  const posts = data.allMarkdownRemark.edges
  const categoryName = pageContext.cat
  return (
    <Layout location={location}>
      <SEO
        pagetitle={categoryName.toUpperCase()}
        pagedesc={`ORIDURUの${categoryName.toUpperCase()}カテゴリー一覧ページです`}
        pagepath={location.pathname}
      />

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
        {!pageContext.isFirst && (
          <Link
            to={
              pageContext.currentPage === 2
                ? `/category/${pageContext.cat}/`
                : `/category/${pageContext.cat}/${pageContext.currentPage - 1}/`
            }
            className="bl_media_paginationItem fl_alignCenter"
          >
            <span className="bl_media_paginationIcon bl_media_paginationIcon__prev material-icons">
              chevron_left
            </span>
            PREV
          </Link>
        )}
        {!pageContext.isLast && (
          <Link
            to={`/category/${pageContext.cat}/${pageContext.currentPage + 1}/`}
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

export default Category
export const pageQuery = graphql`
  query($cat: String, $skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      skip: $skip
      limit: $limit
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
