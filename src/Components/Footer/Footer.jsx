import "../Footer/footer.scss";
import FooterIcon from "../../Assets/images/footer_logo.svg";
import Facebook from "../../Assets/images/facebook.svg"
import tewitter from "../../Assets/images/tewitter.svg"
import linkedin from "../../Assets/images/linkedin.svg"

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
            <img src={Facebook} alt="" className="footer-icon" />
          </li>
          <li className="footer__social-icon">
            <img src={tewitter} alt="" className="footer-icon" />
          </li>
          <li className="footer__social-icon">
           <img src={linkedin} alt="" className="footer-icon" />
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
