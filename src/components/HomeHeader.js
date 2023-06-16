import React, { useState } from "react";
import "../styles/Hstyle.css";
import "../styles/Fonts.css";
import "../styles/HomeHeader.css";
import { Link, Route } from "react-router-dom";

function HomeHeader({ isExpanded, onExpand, onCollapse }) {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [imgUrll, setImgUrll] = useState("/logo2.png");

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);

    if (isExpanded) {
      onCollapse();
    } else {
      onExpand();
    }

    if (!isNavCollapsed) {
      setImgUrll("/logo2.png");
    }
    else {
      setImgUrll("/logo.png");
    }
  };

  const navLinkStyle = {
    fontSize: isNavCollapsed ? "14.5px" : "20px",
    fontWeight: 750,
    marginLeft: isNavCollapsed ? "15px" : "0px",
    marginRight: isNavCollapsed ? "15px" : "0px",
    marginTop: isNavCollapsed ? "0" : "10px",
    marginBottom: isNavCollapsed ? "0" : "10px",
    color: isNavCollapsed ? "#fff" : "#000",
    // textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
    // backgroundColor: "pink",
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bh-transparent mt-2">
        <div className="container-fluid">
          <button
            className={
              isNavCollapsed
                ? "navbar-toggler sizeofmenu hhcustom-navbar-toggler"
                : "navbar-toggler sizeofmenu nncustom-navbar-toggler"
            }
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={!isNavCollapsed}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}

            style={{
              fontSize: "1.0rem",
              // color: isNavCollapsed ? "#000" : "#000",
              // borderColor: isNavCollapsed ? "#000" : "#000",
              // marginLeft: "15px",
              // backgroundColor: "#000",
            }}
          >
            <span
              className={
                !isNavCollapsed
                  ? "navbar-toggler-icon nnnavbar-toggler-icon"
                  : "navbar-toggler-icon hhnavbar-toggler-icon"
              }
            ></span>
          </button>

          <Link className={`navbar-brand mx-auto`} to="../">
            <img
              src={process.env.PUBLIC_URL + imgUrll}
              alt="Costa"
              width="75"
              height="60"
            // style={imgBanner}
            />
          </Link>

          <div
            className={`collapse navbar-collapse ${isNavCollapsed ? "" : "show"
              }`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto flex-grow-1 m-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link font-nav PoppReg"
                  to="../Destinations"
                  style={navLinkStyle}
                >
                  Destinations
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link font-nav PoppReg"
                  to="../CostaExp"
                  style={navLinkStyle}
                >
                  Costa Experience
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link font-nav PoppReg"
                  to="../CostaToscana"
                  style={navLinkStyle}
                >
                  Costa Toscana
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link font-nav PoppReg"
                  to="../CostaSerena"
                  style={navLinkStyle}
                >
                  Costa Serena
                </Link>
              </li>
            </ul>
          </div>

          {/* <div className="d-flex justify-content-end">
            <Link to="#" className="nav-link" style={navLinkStyle}>
              <i className="fas fa-phone-alt fa-lg "></i>
              <span className="d-lg-inline d-none">
                1-800-462-6782 (1-800-Go-Costa)
              </span>
            </Link>
          </div> */}
        </div>
      </nav>
    </>
  );
}

export default HomeHeader;
