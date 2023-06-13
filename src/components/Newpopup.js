import React, { useState } from "react";
import "../styles/Newpopup.css";

function Newpopup() {
  const [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  if (!isOpen) {
    return null; // Render nothing if the modal is closed
  }

  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <img
                src={process.env.PUBLIC_URL + "/logo.png"}
                alt="Logo"
                className="logo"
              />
              <button
                type="button"
                className="close"
                onClick={closeModal}
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <h2 className="heading">Don't Miss The Chance</h2>
              <p className="subheading">
                Explore a new world of ecstasy and fun with us
              </p>
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
                    {/* <button type="submit" className="btn submit-button ">
                      Submit
                    </button> */}
                  </form>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button type="button" className="btn submit-button">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Newpopup;
