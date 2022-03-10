import "./header.scss";
import logo from "../../Assets/images/header_logo.svg";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <a className="header__logo" href="#logojon">
          <img
            className="header__logo-image"
            src={logo}
            alt="Company logo image"
            width={135}
            height={38}
          />
        </a>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a className="nav__link" href="#link">
                Pricing
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#link">
                About
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <button className="header__button">Schedule a demo</button>
      </div>
    </header>
  );
}

export default Header;
