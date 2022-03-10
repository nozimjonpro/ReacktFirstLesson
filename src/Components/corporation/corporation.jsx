import React from "react";
import hp from "../../Assets/images/hp.svg";
import "../corporation/corporation.scss";

function Corporation() {
  return (
    <section className="corporation">
      <div className="container">
        <div className="corporation__info">
          <h2 className="corporation__heading">Who we work with</h2>
          <p className="corporation__text">
            Today, millions of people around the world have successfully
            connected their accounts to apps they love using our API. We provide
            developers with the tools they need to create easy and accessible
            experiences for their users.
          </p>
          <button className="corporation__button">About Us</button>
        </div>
        <div className="corporation__companies">
         <ul className="corporation__list">
         <li className="corporation__item">
            <img className="corporation__image" src={hp} alt="" />
          </li>
          <li className="corporation__item">
            <img className="corporation__image" src={hp} alt="" />
          </li>
          <li className="corporation__item">
            <img className="corporation__image" src={hp} alt="" />
          </li>
          <li className="corporation__item">
            <img className="corporation__image" src={hp} alt="" />
          </li>
          <li className="corporation__item">
            <img className="corporation__image" src={hp} alt="" />
          </li>
          <li className="corporation__item">
            <img className="corporation__image" src={hp} alt="" />
          </li></ul>
        </div>
      </div>
    </section>
  );
}

export default Corporation;
