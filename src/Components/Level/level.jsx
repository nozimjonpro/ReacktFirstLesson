import React from "react";
import "../Level/level.scss";


function Level() {
  return (
    <section className="level">
      <div className="container">
          <ul className="level__list">
              <li className="level__item">
                  <h3 className="level__heading">Personal Finances</h3>
                  <p className="level__text">Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account. </p>
              </li>
              <li className="level__item">
                  <h3 className="level__heading">Banking & Coverage</h3>
                  <p className="level__text">With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.</p>
              </li>
              <li className="level__item">
                  <h3 className="level__heading">Consumer Payments</h3>
                  <p className="level__text">It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account.</p>
              </li>
          </ul></div>
    </section>
  );
}

export default Level;
