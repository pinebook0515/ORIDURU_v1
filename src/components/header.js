import React from "react"
import { Link } from "gatsby"
import logo from "../images/logo.png"
import logo_wh from "../images/logo_wh.png"

const onClick = () => {
  const button = document.querySelector(".bl_hamburgerBtn")
  const menu = document.querySelector(".bl_hamburgerMenu_wrapper")
  button.classList.toggle("js-active")
  menu.classList.toggle("js-open")
}

const Header = () => {
  const rootPath = `${__PATH_PREFIX__}/`

  return (
    <header className="ly_header">
      <div className="ly_header_inner">
        <h1 className="bl_headerLogo">
          <Link to={rootPath} className="bl_headerLogo_link">
            <img src={logo} alt="ORIDURU" className="bl_headerLogo_img" />
          </Link>
        </h1>
        <button type="button" className="bl_hamburgerBtn" onClick={onClick}>
          <span className="bl_hamburgerBtn_bar bl_hamburgerBtn_bar1"></span>
          <span className="bl_hamburgerBtn_bar bl_hamburgerBtn_bar2"></span>
          <span className="bl_hamburgerBtn_bar bl_hamburgerBtn_bar3"></span>
        </button>
      </div>
      <nav className="bl_hamburgerMenu_wrapper">
        <Link to={rootPath} className="bl_hamburgerMenuLogo_link">
          <img
            src={logo_wh}
            alt="ORIDURU"
            className="bl_hamburgerMenuLogo_img"
          />
        </Link>

        <div className="fl_center">
          <ul className="bl_hamburgerMenu">
          <li className="bl_hamburgerMenu_item">
              <Link
                to="/category/habit/"
                className="bl_hamburgerMenu_link fl_start fl_alignCenter"
              >
                <div className="bl_hamburgerMenu_iconBox fl_center fl_directionColumn fl_alignCenter">
                  <svg className="bl_hamburgerMenu_icon" width="15" height="17" viewBox="0 0 324 360" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M324 324V72C324 52.146 307.854 36 288 36H252V0H216V36H108V0H72V36H36C16.146 36 0 52.146 0 72V324C0 343.854 16.146 360 36 360H288C307.854 360 324 343.854 324 324ZM108 288H72V252H108V288ZM108 216H72V180H108V216ZM180 288H144V252H180V288ZM180 216H144V180H180V216ZM252 288H216V252H252V288ZM252 216H216V180H252V216ZM288 126H36V90H288V126Z" fill="#728885"/>
                  </svg>
                  <span className="bl_hamburgerMenu_catName">HABIT</span>
                </div>
                <span className="bl_hamburgerMenu_text bl_hamburgerMenu_text__white">
                  習慣化に役立つこと
                </span>
              </Link>
            </li>
            <li className="bl_hamburgerMenu_item">
              <Link
                to="/category/tech/"
                className="bl_hamburgerMenu_link fl_start fl_alignCenter"
              >
                <div className="bl_hamburgerMenu_iconBox fl_center fl_directionColumn fl_alignCenter">
                  <svg
                    className="bl_hamburgerMenu_icon"
                    width="17"
                    height="11"
                    viewBox="0 0 17 11"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6.29 9.01L2.38 5.1L6.29 1.19L5.1 0L0 5.1L5.1 10.2L6.29 9.01ZM10.71 9.01L14.62 5.1L10.71 1.19L11.9 0L17 5.1L11.9 10.2L10.71 9.01V9.01Z" />
                  </svg>
                  <span className="bl_hamburgerMenu_catName">TECH</span>
                </div>
                <span className="bl_hamburgerMenu_text bl_hamburgerMenu_text__white">
                  技術に関する気づきやアウトプット
                </span>
              </Link>
            </li>       
            <li className="bl_hamburgerMenu_item">
              <Link
                to="/category/book/"
                className="bl_hamburgerMenu_link fl_start fl_alignCenter"
              >
                <div className="bl_hamburgerMenu_iconBox fl_center fl_directionColumn fl_alignCenter">
                  <svg
                    className="bl_hamburgerMenu_icon"
                    width="12"
                    height="17"
                    viewBox="0 0 12 17"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11.0598 2.95939L10.4604 0.975884C10.607 0.881754 10.7061 0.717305 10.7061 0.529553C10.7061 0.236798 10.4693 0 10.176 0H2.00183C1.45046 0 0.946653 0.224909 0.586527 0.586526C0.22491 0.946652 -0.000506411 1.45046 8.54349e-07 2.00132V14.9247C8.54349e-07 15.647 0.585544 16.2325 1.30779 16.2325H10.8983C11.5066 16.2325 12 15.7396 12 15.1313V4.04474C12 3.49141 11.5908 3.03865 11.0598 2.95939ZM2.00183 2.94353C1.73976 2.94353 1.50744 2.8385 1.33554 2.66761C1.16414 2.49473 1.05911 2.26288 1.05911 2.00132C1.05911 1.73976 1.16414 1.50743 1.33554 1.33503C1.50744 1.16411 1.73976 1.05911 2.00183 1.05911H9.67371L10.2434 2.94353H2.00183Z" />
                  </svg>
                  <span className="bl_hamburgerMenu_catName">BOOK</span>
                </div>
                <span className="bl_hamburgerMenu_text bl_hamburgerMenu_text__white">
                  読んだ本から得た気づき
                </span>
              </Link>
            </li>
            <li className="bl_hamburgerMenu_item">
              <Link
                to="/category/essay/"
                className="bl_hamburgerMenu_link fl_start fl_alignCenter"
              >
                <div className="bl_hamburgerMenu_iconBox fl_center fl_directionColumn fl_alignCenter">
                  <svg
                    className="bl_hamburgerMenu_icon"
                    width="16"
                    height="18"
                    viewBox="0 0 16 18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15.3418 0C15.3418 0 14.6886 0.994817 10.4221 2.46698C6.07258 3.96773 3.39522 10.075 3.39522 10.075C2.75032 11.3258 0.202578 16.5245 0.202578 16.5245C-0.498895 17.8665 0.78705 18.6597 1.54073 17.2738C2.98762 14.6124 3.92039 12.1806 6.11983 12.1113C9.32675 12.0103 11.5201 9.15437 10.8302 9.28621C9.92163 9.68994 7.91994 9.31697 9.09932 9.13184C11.9305 8.90002 13.674 6.73077 13.106 6.58301C12.1019 6.97743 11.1664 6.60333 10.9829 6.48963C15.9795 5.87053 15.3418 0 15.3418 0Z" />
                  </svg>
                  <span className="bl_hamburgerMenu_catName">ESSAY</span>
                </div>
                <span className="bl_hamburgerMenu_text bl_hamburgerMenu_text__white">
                  自分の考えや意見
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
