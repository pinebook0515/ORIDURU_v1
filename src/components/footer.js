import React from "react"
import { Link } from "gatsby"

const FooterTabMenuItem = ({ pathName, catLink, children }) => {
  return (
    <li
      className={
        pathName === catLink || (pathName.includes("/page/") && catLink === "/")
          ? "bl_tabNav_item bl_footerNav_item js-active"
          : pathName.includes(`/category/${catLink}`)
          ? "bl_tabNav_item bl_footerNav_item js-active"
          : "bl_tabNav_item bl_footerNav_item"
      }
    >
      {children}
    </li>
  )
}

const Footer = ({ pathName }) => {
  return (
    <footer className="ly_footer">
      <p className="bl_copyright">©ORIDURU ALL Rights Reserved.</p>
      <nav className="bl_tabNav_wrapper bl_footerNav_wrapper sp_only">
        <ul className="bl_tabNav bl_footerNav fl_alignCenter">
          <FooterTabMenuItem pathName={pathName} catLink="/">
            <Link to="/" className="bl_tabNav_link bl_footerNav_link">
              <svg
                className="bl_tabNav_icon bl_footerNav_icon"
                width="15"
                height="9"
                viewBox="0 0 15 9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 5H1.66667V3.33333H0V5ZM0 8.33333H1.66667V6.66667H0V8.33333ZM0 1.66667H1.66667V0H0V1.66667ZM3.33333 5H15V3.33333H3.33333V5ZM3.33333 8.33333H15V6.66667H3.33333V8.33333ZM3.33333 0V1.66667H15V0H3.33333Z" />
              </svg>
              <span className="bl_tabNav_text bl_footerNav_text">NEW</span>
            </Link>
          </FooterTabMenuItem>
          <FooterTabMenuItem pathName={pathName} catLink="habit">
            <Link
              to="/category/habit/"
              className="bl_tabNav_link bl_footerNav_link"
            >
              <svg className="bl_tabNav_icon bl_footerNav_icon" width="15" height="17" viewBox="0 0 324 360" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M324 324V72C324 52.146 307.854 36 288 36H252V0H216V36H108V0H72V36H36C16.146 36 0 52.146 0 72V324C0 343.854 16.146 360 36 360H288C307.854 360 324 343.854 324 324ZM108 288H72V252H108V288ZM108 216H72V180H108V216ZM180 288H144V252H180V288ZM180 216H144V180H180V216ZM252 288H216V252H252V288ZM252 216H216V180H252V216ZM288 126H36V90H288V126Z"/>
              </svg>
              <span className="bl_tabNav_text bl_footerNav_text">HABIT</span>
            </Link>
          </FooterTabMenuItem>
          <FooterTabMenuItem pathName={pathName} catLink="tech">
            <Link
              to="/category/tech/"
              className="bl_tabNav_link bl_footerNav_link"
            >
              <svg
                className="bl_tabNav_icon bl_footerNav_icon"
                width="17"
                height="11"
                viewBox="0 0 17 11"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.29 9.01L2.38 5.1L6.29 1.19L5.1 0L0 5.1L5.1 10.2L6.29 9.01ZM10.71 9.01L14.62 5.1L10.71 1.19L11.9 0L17 5.1L11.9 10.2L10.71 9.01V9.01Z" />
              </svg>
              <span className="bl_tabNav_text bl_footerNav_text">TECH</span>
            </Link>
          </FooterTabMenuItem>
          <FooterTabMenuItem pathName={pathName} catLink="book">
            <Link
              to="/category/book/"
              className="bl_tabNav_link bl_footerNav_link"
            >
              <svg
                className="bl_tabNav_icon bl_footerNav_icon"
                width="12"
                height="17"
                viewBox="0 0 12 17"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.0598 2.95939L10.4604 0.975884C10.607 0.881754 10.7061 0.717305 10.7061 0.529553C10.7061 0.236798 10.4693 0 10.176 0H2.00183C1.45046 0 0.946653 0.224909 0.586527 0.586526C0.22491 0.946652 -0.000506411 1.45046 8.54349e-07 2.00132V14.9247C8.54349e-07 15.647 0.585544 16.2325 1.30779 16.2325H10.8983C11.5066 16.2325 12 15.7396 12 15.1313V4.04474C12 3.49141 11.5908 3.03865 11.0598 2.95939ZM2.00183 2.94353C1.73976 2.94353 1.50744 2.8385 1.33554 2.66761C1.16414 2.49473 1.05911 2.26288 1.05911 2.00132C1.05911 1.73976 1.16414 1.50743 1.33554 1.33503C1.50744 1.16411 1.73976 1.05911 2.00183 1.05911H9.67371L10.2434 2.94353H2.00183Z" />
              </svg>
              <span className="bl_tabNav_text bl_footerNav_text">BOOK</span>
            </Link>
          </FooterTabMenuItem>
          <FooterTabMenuItem pathName={pathName} catLink="essay">
            <Link
              to="/category/essay/"
              className="bl_tabNav_link bl_footerNav_link"
            >
              <svg
                className="bl_tabNav_icon bl_footerNav_icon"
                width="16"
                height="18"
                viewBox="0 0 16 18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.3418 0C15.3418 0 14.6886 0.994817 10.4221 2.46698C6.07258 3.96773 3.39522 10.075 3.39522 10.075C2.75032 11.3258 0.202578 16.5245 0.202578 16.5245C-0.498895 17.8665 0.78705 18.6597 1.54073 17.2738C2.98762 14.6124 3.92039 12.1806 6.11983 12.1113C9.32675 12.0103 11.5201 9.15437 10.8302 9.28621C9.92163 9.68994 7.91994 9.31697 9.09932 9.13184C11.9305 8.90002 13.674 6.73077 13.106 6.58301C12.1019 6.97743 11.1664 6.60333 10.9829 6.48963C15.9795 5.87053 15.3418 0 15.3418 0Z" />
              </svg>
              <span className="bl_tabNav_text bl_footerNav_text">ESSAY</span>
            </Link>
          </FooterTabMenuItem>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
