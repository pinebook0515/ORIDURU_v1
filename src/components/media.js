import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

const Media = ({ title, slug, date, thumbnail, categories }) => {
  return (
    <div className="bl_media fl_start">
      <figure className="bl_media_imgWrapper">
        <Image
          fluid={thumbnail}
          objectFit="contain"
          className="bl_thumbnail_img"
        />
      </figure>
      <div className="bl_media_body">
        <h2 className="bl_media_title">
          <Link to={slug} className="bl_media_link">
            {title}
          </Link>
        </h2>
        <div className="bl_media_labels fl_start">
          {categories.map(cat => {
            return (
              <Link to={`/category/${cat}/`} className="el_label" key={cat}>
                {cat.toUpperCase()}
              </Link>
            )
          })}
        </div>
        <span className="bl_media_date el_date">{date}</span>
      </div>
    </div>
  )
}

export default Media
