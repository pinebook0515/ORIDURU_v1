import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Iframely from "../components/iframely"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const postTitle = post.frontmatter.title || post.fields.slug
  const date = post.frontmatter.date
  const formatttedDate = post.frontmatter.dateJP
  const description = post.frontmatter.description
  const category = post.frontmatter.categories
  const thumbnail = post.frontmatter.thumbnail.childImageSharp.fluid
  const thumbnailUrl = thumbnail.src

  console.log(data.site.siteMetadata);

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        pagetitle={postTitle}
        pagedesc={description}
        pagepath={location.pathname}
        pageimg={thumbnailUrl}
        blogimg={thumbnailUrl}
        />
      <Iframely />
      <div className="bl_thumbnail">
        <Img fluid={thumbnail} />
      </div>
      <div className="bl_postDate_wrapper fl_start">
        <time className="bl_postDate" dateTime={date}>
          <span className="bl_postDateIcon material-icons">date_range</span>
          {formatttedDate}
        </time>
      </div>
      <h1 className="bl_postTitle">{postTitle}</h1>

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
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        dateJP: date(formatString: "YYYY.MM.DD")
        date
        description
        thumbnail {
          absolutePath
          childImageSharp {
            fluid(maxWidth: 1280) {
              src
              ...GatsbyImageSharpFluid
            }
          }
        }
        categories
      }
    }
  }
`
