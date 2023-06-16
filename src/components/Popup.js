import React, { useState } from "react";
import "../styles/Popup.css";
// import logo from "../images/logo.svg";

function Popup() {
  const [isOpen, setIsOpen] = useState(true);

  function closeForm() {
    setIsOpen(false);
  }

  if (!isOpen) {
    return null; // Render nothing if the form is closed
  }
  return (
    <div className="popup">
      <button className="close-button" onClick={closeForm}>
        <span className="cross-icon">&#x2716;</span>
      </button>
      <div className="row justify-content-center align-items-center">
        <div className="col-12 text-center">
          <img src={process.env.PUBLIC_URL + "/logo.png"} alt="Logo" className="logo" />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 text-center">
          <h2 className="heading">Don't Miss The Chance</h2>
          <p className="subheading">
            Explore a new world of ecstasy and fun with us
          </p>
        </div>
      </div>
      <div className="row justify-content-center form-box">
        <div className="col-10 col-md-6 form-input">
          <form method="POST">
            <div className="mb-3">
              <input
                type=""
                id="name"
                className="form-control"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-3">
              <input
                type="tel"
                id="phone"
                className="form-control mb-3"
                placeholder="Enter your phone number"
              />
              <button type="submit" className="otp-button">
                Get OTP
              </button>
            </div>
            <div className="mb-3">
              <input
                type=""
                id="otp"
                className="form-control"
                placeholder="Enter OTP"
              />
            </div>
            <button type="submit" className="btn submit-button ">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Popup;
