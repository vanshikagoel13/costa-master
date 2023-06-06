import React from "react";
import "../styles/Upcoming.css";
import UpcomingImg from "../images/travel.jpeg";

function UpcomingGridRow() {
  return (
    <div className="row container-settings">
      <div className="col-md-3 col-sm-6 grid-img">
        <img src={UpcomingImg} alt="error"></img>
      </div>
      <div className="col-md-2 col-sm-4 cell-2">
        <h4 className="Date PoppReg" style={{fontWeight:"700"}}>Wed, 31 May</h4>
        <h5 className="nights">3 <i class="bi bi-moon-fill filled-moon" style={{color:"grey"}}></i></h5>
        {/* <p>Goodnight <i class="bi bi-moon"></i></p> */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/react-icons@4.3.1/fi/feather.css"
        />
        <span className="icon">
          <i className="feather feather-moon"></i>
        </span>
      </div>
      <div className="col-md-4 col-sm-4 cell-3">
        <h4 className="destination-text  PoppBold">
          Kochi <span className="arrow">&gt;</span>
        </h4>
        <h4 className="destination-text PoppBold" >Chennai</h4>
      </div>
      <div className="col-md-3 col-sm-4 cell-4">
        <div className="col-lg-6 col-md-6 col-sm-6 cell-4-sub-1">
          <h5 className="From PoppReg">From</h5>
          <h5 className="price-grid PoppReg">&#8377; 36,852</h5>
          <p className="per-guest PoppReg">per guest</p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6">
          <a href="#" className="Book-Now PoppBold">
            Book Now &gt;
          </a>
        </div>
      </div>
    </div>
  );
}

export default UpcomingGridRow;
