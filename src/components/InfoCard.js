import React from "react";
import OfferPic from "../images/travel.jpeg";
import "../styles/infoCard.css";

function InfoCard({ comp }) {

	return (
		
		<div className="card card-info mx-2">
			<img src={OfferPic} className="card-img-top" alt="..."></img>
			<div className="card-body">
				<h5 className="card-title-info PoppReg" style={{ fontWeight: 1000 }}>{comp.title}</h5>
				<h6 className="card-title-info card-subtitle AltReg">{comp.text}</h6>
				<button className="button-info PoppReg" style={{ fontWeight: "600" }}>Explore More</button>
			</div>
		</div>
	);
}

export default InfoCard;
