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
          <FooterTabMenuItem pathName={pathName} catLink="life">
            <Link
              to="/category/life/"
              className="bl_tabNav_link bl_footerNav_link"
            >
              <svg
                className="bl_tabNav_icon bl_footerNav_icon"
                width="17"
                height="12"
                viewBox="0 0 17 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.842 1.2246C16.6892 0.863679 16.436 0.559008 16.1164 0.342889C15.7972 0.126804 15.4072 -0.000463574 14.9944 1.26898e-06H13.6962H12.9734H12.9294H1.69884C1.46635 1.26898e-06 1.241 0.0475483 1.03733 0.13381C0.731464 0.263401 0.473643 0.47786 0.290594 0.748332C0.107446 1.01884 -0.000364309 1.34951 9.25013e-07 1.69897V4.87564C-0.000131887 5.8192 0.191583 6.72199 0.538588 7.54184C1.05891 8.77159 1.92621 9.81572 3.01886 10.554C4.1109 11.2923 5.43265 11.7242 6.84826 11.724C7.79173 11.7242 8.69439 11.5323 9.51414 11.1856C10.7441 10.6651 11.788 9.79789 12.5263 8.70525C12.6683 8.49574 12.7984 8.27729 12.9168 8.05184C12.9355 8.05184 12.9542 8.0537 12.9735 8.0537C13.5271 8.0537 14.0586 7.94095 14.541 7.73681C15.2647 7.43048 15.8778 6.92095 16.3119 6.27854C16.746 5.63682 17.0005 4.85797 17 4.0267C17 3.40773 17 2.90241 17 2.55202C17 2.20117 17 2.00596 17 2.00547C17 1.73084 16.944 1.46509 16.842 1.2246ZM15.4658 2.55205C15.4658 2.90245 15.4658 3.40776 15.4658 4.02674C15.4658 4.37311 15.3962 4.6989 15.2703 4.9968C15.0819 5.44328 14.7645 5.82528 14.3666 6.09436C14.1102 6.26708 13.8219 6.39249 13.5111 6.46069C13.632 5.95139 13.6965 5.42077 13.6963 4.87564V1.53398H14.9945C15.0617 1.53398 15.1217 1.54733 15.1777 1.57077C15.2614 1.60613 15.335 1.66663 15.3859 1.74233C15.4367 1.8185 15.4656 1.90523 15.4658 2.00553C15.4658 2.006 15.4658 2.2012 15.4658 2.55205Z" />
              </svg>
              <span className="bl_tabNav_text bl_footerNav_text">LIFE</span>
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
