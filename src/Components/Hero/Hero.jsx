import "./hero.scss";
import Phone from '../../Assets/images/phone.svg';
import '../../App.scss'

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__info">
          <h1 className="hero__heading">
            Start building with our APIs for absolutely free.
          </h1>
          <div className="hero__input-box">
            <input
              className="hero__input"
              type="text"
              placeholder="johnappleseed@mail.com"
            />
            <a className="hero__link" href="#heroLink">
              Schedule a Demo
            </a>
            <p className="hero__text">Have any questions? <a className="hero__text-link" href="#link"> Contact Us</a></p>
          </div>
        </div>
        <img className="hero__image" src={Phone} alt="Phone image" width={263} height={500} />
      </div>
    </section>
  );
}

export default Hero;
