import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Router } from "@reach/router"
import Header from "./header"
import TabMenu from "./tabmenu"
import Sidebar from "./sidebar"
import Footer from "./footer"

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

  const pathName = `${location.pathname}`

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className="ly_main">
        <div className="ly_container">
          <Router>
            <TabMenu path="/" pathName={pathName} />
            <TabMenu path="/page/*" pathName={pathName} />
            <TabMenu path="category/*" pathName={pathName} />
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
