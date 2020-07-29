import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const post_title = post.frontmatter.title || post.fields.slug
  const createdAt = post.frontmatter.createdAt
  const updatedAt = post.frontmatter.updatedAt
  const description = post.frontmatter.description
  const category = post.frontmatter.categories
  const thumbnail = post.frontmatter.thumbnail.childImageSharp.fluid

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={description || post.excerpt}
      />
      <div className="bl_thumbnail">
        <Image fluid={thumbnail} />
      </div>
      <div className="bl_postDate_wrapper fl_start">
        <time className="bl_postDate fl_alignCenter">
          <span className="bl_postDateIcon material-icons">date_range</span>
          {createdAt}
        </time>
        {updatedAt ? (
          <time className="bl_postDate fl_alignCenter">
            <span className="bl_postDateIcon material-icons">update</span>
            {updatedAt}
          </time>
        ) : (
          ""
        )}
      </div>
      <h1 className="bl_postTitle">{post_title}</h1>

      <div className="bl_postLabels fl_start">
        {category.map(cat => {
          return (
            <a href={`/category/${cat}`} className="el_label" key={cat}>
              {cat.toUpperCase()}
            </a>
          )
        })}
      </div>

      <div className="bl_postContent_wrapper">
        <article
          dangerouslySetInnerHTML={{ __html: post.html }}
          className="bl_postContent"
        ></article>
        <Link to="/" className="bl_toTop fl_alignCenter">
          記事一覧へ
        </Link>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        createdAt(formatString: "YYYY.MM.DD")
        updatedAt(formatString: "YYYY.MM.DD")
        description
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 1280) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        categories
      }
    }
  }
`
