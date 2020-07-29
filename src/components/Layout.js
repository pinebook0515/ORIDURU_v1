import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Router } from "@reach/router"

import Header from "./Header"
import TabMenu from "./TabMenu"
import Sidebar from "./Sidebar"
import Footer from "./Footer"

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const pathName = location.pathname

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className="ly_main">
        <div className="ly_container">
          {/* <Breadcrumbs /> */}
          <Router>
            <TabMenu path="/" pathName={pathName} />
            <TabMenu path="/category/*" pathName={pathName} />
          </Router>
          <div className="fl_spaceBetween">
            <div className="ly_mainContent">{children}</div>
            <Sidebar pathName={pathName} />
          </div>
        </div>
      </main>
      <Footer pathName={pathName} />
    </>
  )
}

export default Layout
