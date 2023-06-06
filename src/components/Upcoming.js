import React from "react";
import "../styles/Upcoming.css";
import Row from "./UpcomingGridRow";
import '../styles/Fonts.css';
function Upcoming() {
  return (
    <section id="Upcoming">
      <div className="container upcoming-container">
        <h3
          className="KepStd" 
          style={{ marginBottom: "20px", marginLeft: "10px", marginTop: "70px", paddingTop: "20px", fontWeight:"800", fontSize: "40px" }}
        >
          Upcoming Cruises 
        </h3>
        <h6
          className="AltReg"
          style={{ marginBottom: "40px", marginLeft: "10px", fontWeight: "600", color:"purple" }}
        >
          Filter by origin, destination or offers &gt;
        </h6>
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
      </div>
    </section>
  );
}

export default Upcoming;
