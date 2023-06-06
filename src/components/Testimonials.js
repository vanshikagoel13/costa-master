import React from "react";
import "../styles/Testimonials.css";
// import ss1 from "../images/ss1.png";
// import ss2 from "../images/ss2.png";
// import ss3 from "../images/ss3.png";

function Testimonials() {
  return (
    <section id="Testimonials">
      <div className="test-box">
        <div className="test-content">
          <div className="test-heading">
            <h1 className="test-title PoppReg" style={{fontWeight:600}}>Testimonials</h1>
            <p className="test-subtitle PoppReg" style={{fontWeight:400}}>
              What our customers are saying about us
            </p>
            <div className="test-videos">
              <div className="container">
                <div className="row">
                  <div className="col-sm box col-setting">
                    <img
                      className="star-setting"
                      src={process.env.PUBLIC_URL + "/4star.png"}
                    ></img>
                    <p className="text-setting AltReg">
                      Recently went on a voyage with Cordelia from Chennai to
                      Vishakpatnam with a family of forty. Overall, the
                      experience was awesome and the hospitality.
                    </p>
                    <div className="container">
                      <div className="row">
                        <div className="col-sm d-flex align-items-center info-set">
                          <img
                            src={process.env.PUBLIC_URL + "/travel.jpg"}
                            className="dp-setting"
                          ></img>
                          <div className="ml-3 info-setting">
                            <h3 className="name PoppReg" style={{fontWeight:700}}>Kiran Gorantla</h3>
                            <h4 className="loc PoppReg" style={{fontWeight:700}}>Mumbai, India</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm box col-setting">
                    <img
                      className="star-setting"
                      src={process.env.PUBLIC_URL + "/4star.png"}
                    ></img>
                    <p className="text-setting AltReg">
                      Recently went on a voyage with Cordelia from Chennai to
                      Vishakpatnam with a family of forty. Overall, the
                      experience was awesome and the hospitality.
                    </p>
                    <div className="container">
                      <div className="row">
                        <div className="col-sm d-flex align-items-center info-set">
                          <img
                            src={process.env.PUBLIC_URL + "/travel.jpeg"}
                            className="dp-setting"
                          ></img>
                          <div className="ml-3 info-setting">
                            <h3 className="name PoppReg" style={{fontWeight:700}}>Pooja Nair</h3>
                            <h4 className="loc PoppReg" style={{fontWeight:700}}>Bangalore, India</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm box col-setting">
                    <img
                      className="star-setting"
                      src={process.env.PUBLIC_URL + "/4star.png"}
                    ></img>
                    <p className="text-setting AltReg">
                      Recently went on a voyage with Cordelia from Chennai to
                      Vishakpatnam with a family of forty. Overall, the
                      experience was awesome and the hospitality.
                    </p>
                    <div className="container">
                      <div className="row">
                        <div className="col-sm d-flex align-items-center info-set">
                          <img
                            src={process.env.PUBLIC_URL + "/travel.jpg"}
                            className="dp-setting"
                          />
                          <div className="ml-3 info-setting">
                            <h3 className="name PoppReg" style={{fontWeight:700}}>Rohit</h3>
                            <h4 className="loc PoppReg" style={{fontWeight:700}}>Bangalore, India</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
