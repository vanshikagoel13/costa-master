import React from "react";
import "../styles/Upcoming.css";
// import UpcomingImg from "../images/travel.jpeg";

function UpcomingGridRow({content}) {
  return (
    <div className="row container-settings">
      <div className="col-md-3 col-sm-6 cell-1 grid-img">
        <img src={process.env.PUBLIC_URL+content.url} className="image-upcoming-set" alt="error"></img>
      </div>
      <div className="col-md-2 col-sm-4 cell-2">
        <h4 className="Date PoppReg" style={{fontWeight:"700"}}>{content.date}</h4>
        <h5 className="nights">{content.nights}<i class="bi bi-moon-fill filled-moon" style={{color:"grey"}}></i></h5>
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
          <span dangerouslySetInnerHTML={{ __html: content.itenray }} />
        </h4>
        {/* <h4 className="destination-text PoppBold" >Chennai</h4> */}
      </div>
      <div className="col-md-3 col-sm-4 cell-4">
        <div className="col-lg-6 col-md-6 col-sm-6 cell-4-sub-1">
          <h5 className="From PoppReg">From</h5>
          <h5 className="price-grid PoppBold">{content.rupee}</h5>
          <p className="per-guest PoppReg">per person</p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 mx-1 cell-4-sub-2">
          <a href="#" className="Book-Now PoppBold">
            Book Now &gt;
          </a>
        </div>
      </div>
    </div>
  );
}

export default UpcomingGridRow;
