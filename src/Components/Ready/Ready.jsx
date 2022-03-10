import React from "react";
import '../Ready/ready.scss'

function Ready() {
  return (
    <section className="ready">
      <div className="container">
        <h2 className="ready__heading">Ready to start?</h2>
        <div className="ready__input-box">
          <input className="ready__input" type="text" placeholder="Enter email address"/>
          <button className="ready__button">Schedule a demo</button>
        </div>
      </div>
    </section>
  );
}

export default Ready;