import React, { useState } from "react";
import "../styles/Hstyle.css";

function Header() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const navLinkStyle = {
    fontSize: isNavCollapsed ? "15px" : "20px",
    fontWeight: 750,
    margin: isNavCollapsed ? "0" : "10px",
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bh-transparent mt-2">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={!isNavCollapsed}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
            style={{
              fontSize: "1.0rem",
              marginLeft: "15px",
              // backgroundColor: "#000",
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <a className={`navbar-brand mx-auto`} href="#">
            <img
              src={process.env.PUBLIC_URL + "/logo.png"}
              alt="Costa"
              width="65"
              height="50"
              style={{ marginLeft: isNavCollapsed ? "20px" : "60px" }}
            />
          </a>

          <div
            className={`collapse navbar-collapse ${
              isNavCollapsed ? "" : "show"
            }`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto flex-grow-1 m-2 mb-lg-0">
              <li
                className={`nav-item px-2 ${
                  isNavCollapsed ? "mb-2" : "mb-lg-0"
                }`}
              >
                <a
                  className="nav-link"
                  aria-current="page"
                  href="#"
                  style={navLinkStyle}
                >
                  Destinations
                </a>
              </li>
              <li className="nav-item active px-2">
                <a className="nav-link" href="#" style={navLinkStyle}>
                  Costa Experience
                </a>
              </li>
              <li className="nav-item px-2">
                <a
                  className="nav-link"
                  href="#"
                  // role="button"
                  // data-bs-toggle="dropdown"
                  // aria-expanded="false"
                  style={navLinkStyle}
                >
                  Costa Toscana
                </a>
                {/* <ul className="dropdown-menu">
								<li>
									<a className="dropdown-item" href="#">
										Action
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Another action
									</a>
								</li>
								<li>
									<hr className="dropdown-divider" />
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Something else here
									</a>
								</li>
							</ul> */}
              </li>
              <li className="nav-item px-2">
                <a className="nav-link" href="#" style={navLinkStyle}>
                  Costa Serene
                </a>
              </li>
            </ul>
          </div>

          <div className="d-flex justify-content-end">
            <ul
              className={`navbar-nav ${
                isNavCollapsed ? "ml-auto" : "ms-auto"
              } ml-lg-0`}
            >
              <li className="nav-item px-3">
                <a href="#" className="nav-link" style={navLinkStyle}>
                  <i className="fas fa-phone-alt fa-lg"></i>
                  <span className="d-lg-inline d-none">
                    1-800-462-6782 (1-800-Go-Costa)
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        className={`d-flex align-items-center ${isNavCollapsed ? "" : "show"}`}
      >
        {isNavCollapsed && (
          <div className="d-flex">
            <a
              href="#"
              className="nav-link me-2 home-text"
              style={{ marginLeft: 25, fontSize: 12 }}
            >
              Home
            </a>
            <span className="nav-link me-2 home-text" style={{ fontSize: 12 }}>
              &mdash;&mdash; Travel with Costa
            </span>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
