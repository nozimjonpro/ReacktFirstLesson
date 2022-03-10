import React from "react";
import "../implement/implement.scss";
import codes from "../../Assets/images/codes.svg";

function Implement() {
  return (
    <section className="implement">
      <div className="container">
        <img
          className="implement__image"
          src={codes}
          alt="Codes picture"
          width={445}
          height={285}
        />
        <div className="implement__info">
            <h2 className="implement__heading">Easy to implement</h2>
            <p className="implement__text">Our API comes with just a few lines of code. You’ll be up and running in no time. We built our documentation page to integrate payments functionality with ease.</p>
            </div>
      </div>
    </section>
  );
}
export default Implement;
