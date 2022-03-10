import React from "react";
import "../../Components/simple/simple.scss";
import phone from "../../Assets/images/phone.svg"

function Simple() {
  return (
    <section className="simple">
      <div className="container">
        <div className="simple__info">
          <h2 className="simple__heading">Simple UI & UX</h2>
          <p className="simple__text">
            Our pre-built form is easy to integrate in your app or website’s
            checkout flow and designed to optimize conversion.
          </p>
        </div>

        <ul className="simple__image-list">
          <li className="simple__item">
            <img className="simple__image" src={phone} alt="" width={265} height={500}/>
          </li>
          <li className="simple__item">
            <img className="simple__image" src={phone} alt="" width={265} height={500}/>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Simple;
