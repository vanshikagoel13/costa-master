import React from "react";
import "../styles/Footer.css";
function Footer() {
  return (
    <div>
      <footer
        className="text-center text-lg-start text-white"
        style={{ backgroundColor: "#1078FC ", marginTop: "40px" }}
      >
        {/* Section: Social media */}
        <section
          className="d-flex justify-content-between p-4"
          style={{ backgroundColor: "#1078FC " }}
        >
          {/* Left */}
          <div className="logo-wrapper me-5">
            <img
              src={process.env.PUBLIC_URL + "/logo2.png"}
              alt="Company Logo"
              className="logo"
              style={{ height: "80%" }}
            />
            {/* <span>Get connected with us on social networks:</span> */}
          </div>
          {/* Left */}

          {/* Right */}
          <div className="top-right-text">
            <span>
              <a
                className="usa"
                href="https://www.costacruises.com/welcome.html"
              >
                USA - Choose your Country/Region
              </a>
            </span>
          </div>
          {/* <div>

            <a href="" className="text-white me-4">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-google"></i>
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-github"></i>
            </a>
          </div> */}
          {/* Right */}
        </section>
        {/* Section: Social media */}

        {/* Section: Links */}
        <section>
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h6 className="text-uppercase fw-bold">COMPANY INFORMATION</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <ul className="ul">
                  <li>
                    <a className="link-style" href="#">
                      The Company
                    </a>
                  </li>
                  <li>
                    <a className="link-style" href="#">
                      Sustainability
                    </a>
                  </li>
                  <li>
                    <a className="link-style" href="#">
                      Legal Notes
                    </a>
                  </li>
                  <li>
                    <a className="link-style" href="#">
                      Work with us
                    </a>
                  </li>
                  <li>
                    <a className="link-style" href="#">
                      Web Accessibility Statement
                    </a>
                  </li>
                  <li>
                    <a className="link-style" href="#">
                      Business Partner Code of Conduct
                    </a>
                  </li>
                </ul>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold">
                  SERVICES FOR COMPANIES
                </h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <ul className="ul">
                  <li>
                    <a href="#!" className="link-style">
                      Costa Press Center
                    </a>
                  </li>
                </ul>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold">USEFUL LINKS</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <ul className="ul">
                  <li>
                    <a href="#!" className="link-style">
                      Contact us
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="link-style">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="link-style">
                      Travel ealth requirements
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="link-style">
                      Useful info
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="link-style">
                      Carefree Travel Protection
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="link-style">
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="link-style">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="link-style">
                      Cookie
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="link-style">
                      Passenger bill of rights
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="link-style">
                      List of prohibited articles
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="link-style">
                      Sitemap
                    </a>
                  </li>
                </ul>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold">OUR FOUNDATION</h6>
                <div className="logo-wrapper me-5">
                  <img
                    src={process.env.PUBLIC_URL + "/foundationLogo.png"}
                    alt="Company Logo"
                    className="logo"
                    style={{ height: "80%" }}
                  />
                  {/* <span>Get connected with us on social networks:</span> */}
                </div>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links */}

        {/* Copyright */}
        <section
          className="d-flex justify-content-between p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          <div
            className="logo-wrapper me-5"
            // style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2023 Costa Cruises S.p.A. - VAT No. IT 0254900108 - All rights
            reserved
          </div>
          {/* Copyright */}
          <div className="icon">
            <a href="#!" className="text-white me-4">
              <i className="fab fa-twitter icon"></i>
            </a>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-facebook-f icon"></i>
            </a>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-youtube icon"></i>
            </a>
          </div>
        </section>
      </footer>
      {/* Footer */}
    </div>
  );
}

export default Footer;
