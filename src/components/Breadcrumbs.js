import React from "react"
import { Link } from "gatsby"

const Breadcrumbs = () => {
  return (
    <ul className="bl_breadcrumbs">
      <li className="bl_breadcrumbs_item">
        <a href="" className="bl_breadcrumbs_link">
          TOP
        </a>
      </li>
      <li className="bl_breadcrumbs_item">
        <a href="" className="bl_breadcrumbs_link">
          CODE
        </a>
      </li>
      <li className="bl_breadcrumbs_item">
        <span className="bl_breadcrumbs_link bl_breadcrumbs_link__current">
          「Code Kitchenという実験的なメディアを作った。ゆるゆると更新していく」
        </span>
      </li>
    </ul>
  )
}

export default Breadcrumbs
