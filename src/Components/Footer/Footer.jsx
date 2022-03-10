import "../Footer/footer.scss";
import FooterIcon from "../../Assets/images/footer_logo.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__left">
          <img src={FooterIcon} alt="" className="footer__logo" />
          <nav className="footer__nav">
            <ul className="footer__nav-list">
              <li className="footer__nav-item">
                <a className="footer__nav-link" href="#footer">
                  Pricing
                </a>
              </li>
              <li className="footer__nav-item">
                <a className="footer__nav-link" href="#footer">
                  About
                </a>
              </li>
              <li className="footer__nav-item">
                <a className="footer__nav-link" href="#footer">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <ul className="footer__socials">
          <li className="footer__social-icon">
            <a href="" className="footer-icon">
              <svg
                width="24"
                height="24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </li>
          <li className="footer__social-icon">
            <a href="" className="footer-icon">
              <svg
                width="24"
                height="20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 2.557a9.83 9.83 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337.608a9.864 9.864 0 0 1-3.127 1.195A4.916 4.916 0 0 0 16.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 0 1 1.671 1.149a4.93 4.93 0 0 0 1.523 6.574 4.903 4.903 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.928 4.928 0 0 0 4.6 3.419A9.9 9.9 0 0 1 0 17.54a13.94 13.94 0 0 0 7.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0 0 24 2.557Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </li>
          <li className="footer__social-icon">
            <a href="" className="footer-icon">
              <svg
                width="24"
                height="24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.4 0h19.2C22.92 0 24 1.08 24 2.4v19.2c0 1.32-1.08 2.4-2.4 2.4H2.4C1.08 24 0 22.92 0 21.6V2.4C0 1.08 1.08 0 2.4 0Zm1.2 20.4h3.6V9.6H3.6v10.8ZM5.4 7.56c-1.2 0-2.16-.96-2.16-2.16 0-1.2.96-2.16 2.16-2.16 1.2 0 2.16.96 2.16 2.16 0 1.2-.96 2.16-2.16 2.16ZM16.8 20.4h3.6v-6.84c0-2.28-1.92-4.2-4.2-4.2-1.08 0-2.4.72-3 1.68V9.6H9.6v10.8h3.6v-6.36c0-.96.84-1.8 1.8-1.8.96 0 1.8.84 1.8 1.8v6.36Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
