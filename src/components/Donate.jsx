import React from "react";

import "./styles/donate.css";

const Donate = () => {
  return (
    <div className="content-template single-container">
      <div className="content-header">
        <h2>Making and maintaining webistes is hard work</h2>
        <p>But we love it</p>
      </div>
      <div
        className="inner-div flex-container donate-container"
        style={{ flexDirection: "column" }}
      >
        <div className="donate-item">
          <h2 className="donation-header">Want to donate to us?</h2>
          <div
            className="secondary-inner-div responsive-resize"
            style={{ width: "800px" }}
          >
            <p style={{ color: "red" }}>
              donation ability is not currently active
            </p>
            <p>
              Before we allow the ability to donate to us, we want to make sure
              this site is in a great state. But don't let that stop you from
              donating to the community! Check out some of the sources we rely
              on, and consider throwing them a couple bucks for everything they
              do.
            </p>
          </div>
        </div>
        <div className="donate-item">
          <h2 className="donation-header">Don't want to donate to us?</h2>
          <div
            className="secondary-inner-div responsive-resize"
            style={{ width: "1000px" }}
          >
            <p>
              No worries! But our site relies on a number of other great
              organizations. Please consider supporting them for everything they
              provide.
            </p>
            <ul>
              <a href="https://www.americanavalancheassociation.org/donate" target="_blank" rel="noreferrer">
                <li className="responsive-li">
                  American Avalanche Association
                </li>
              </a>
              <a href="https://avtraining.org/donate-3/" target="_blank" rel="noreferrer">
                <li className="responsive-li">
								American Institute for Avalanche Research
							</li>
              </a>
              <a href="https://charity.gofundme.com/o/en/campaign/powder-blast-2020" target="_blank" rel="noreferrer">
                <li className="responsive-li">
									Gallatin National Forest Avalanche Center
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Donate;
