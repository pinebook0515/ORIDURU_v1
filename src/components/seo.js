/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({
  pagetitle,
  pagedesc,
  pagepath,
  blogimg,
  pageimg,
  // pageimgw,
  // pageimgh,
}) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          lang
          siteUrl
          locale
        }
      }
    }
  `)

  const title = pagetitle
    ? `${pagetitle} | ${data.site.siteMetadata.title}`
    : data.site.siteMetadata.title

  const description = pagedesc || data.site.siteMetadata.description

  const url = pagepath
    ? `${data.site.siteMetadata.siteUrl}${pagepath}`
    : data.site.siteMetadata.siteUrl

  const imgurl = pageimg
    ? `${data.site.siteMetadata.siteUrl}${pageimg}`
    : blogimg
    ? `${data.site.siteMetadata.siteUrl}${blogimg}`
    : `${data.site.siteMetadata.siteUrl}/ogp.png`

  // const imgw = 1280
  // const imgh = 640
  return (
    <Helmet>
      <html lang={data.site.siteMetadata.lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:site_name" content={data.site.siteMetadata.title} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={data.site.siteMetadata.locale} />

      <meta property="og:image" content={imgurl} />
      {/* <meta property="og:image:width" content={imgw} />
      <meta property="og:image:height" content={imgh} /> */}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={imgurl} />
    </Helmet>
  )
}

export default SEO
