import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div>
      <footer
        className="text-center text-lg-start text-white"
        style={{ backgroundColor: "#1078FC ", marginTop: "40px" }}
      >
        <section
          className="d-flex justify-content-between p-3 mb-0"
          style={{ backgroundColor: "#1078FC " }}
        >
          <div className="logo-wrapper me-5">
            <img
              src={process.env.PUBLIC_URL + "/logo2.png"}
              alt="Company Logo"
              className="logo"
              style={{ height: "80%" }}
            />
          </div>
          {/* <div className="top-right-text">
            <span>
              <a
                className="usa"
                href="https://www.costacruises.com/welcome.html"
              >
                USA - Choose your Country/Region
              </a>
            </span>
          </div> */}
        </section>
        <section>
          <div className="container text-center mt-3">
            <div className="row mt-3 justify-content-between">
              <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-4">
                <h5 className="text-uppercase heading-footer fw-bold PoppReg">
                  COMPANY INFORMATION
                </h5>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "80px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <ul className="ul">
                  <li>
                    <Link className="link-style PoppReg" to="../ContactUs">
                      Info about company
                    </Link>
                  </li>
                  <li>
                    <Link className="link-style PoppReg" to="../FAQ">
                      FAQs
                    </Link>
                  </li>
                  {/* <li>
                    <Link className="link-style" to="../ContactUs">
                      Contact us
                    </Link>
                  </li> */}
                  <li>
                    <Link className="link-style PoppReg" to="../PrivacyPolicy">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link className="link-style PoppReg" to="../TermsConditions">
                      Terms and Conditions
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-4">
                <h5 className="text-uppercase heading-footer fw-bold PoppReg">
                  USEFUL LINKS
                </h5>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "80px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <ul className="ul">
                  <li>
                    <Link to="../Destinations" className="link-style PoppReg">
                      Destinations
                    </Link>
                  </li>
                  <li>
                    <Link to="../CostaExp" className="link-style PoppReg">
                      Experience
                    </Link>
                  </li>
                  <li>
                    <Link to="../CostaToscana" className="link-style PoppReg">
                      Costa Toscana
                    </Link>
                  </li>
                  <li>
                    <Link to="../CostaSerena" className="link-style PoppReg">
                      Costa Serena
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-4">
                <h5 className="text-uppercase heading-footer text-align-center fw-bold PoppReg">
                  OUR FOUNDATION
                </h5>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "80px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <div className="logo-wrapper d-flex justify-content-center me-5">
                  <img
                    src={process.env.PUBLIC_URL + "/foundationLogo.png"}
                    alt="Company Logo"
                    style={{ height: "80%", marginLeft: "14%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="d-flex justify-content-between p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          <div className="logo-wrapper gst-size me-5 PoppReg">
            © 2023 Costa Cruises S.p.A. - GST No. xxxxxxxxxxx - All rights
            reserved
          </div>
          {/* Copyright */}
          <div className="icon col-lg-3 col-sm-3 col-md-3 d-flex justify-content-end">
            <a
              href="https://www.facebook.com/CostaCruiseIndia"
              className="text-white me-4"
            >
              <i className="fab fa-facebook-f icon size-icon"></i>
            </a>
            <a
              href="https://www.instagram.com/costacruisesindia/"
              className="text-white me-4"
            >
              <i className="fab fa-instagram icon  size-icon"></i>
            </a>
            <a
              href="https://www.youtube.com/@costacruiseindia4623"
              className="text-white me-4"
            >
              <i className="fab fa-youtube icon size-icon"></i>
            </a>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default Footer;
