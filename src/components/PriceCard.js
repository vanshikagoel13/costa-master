import React from 'react';
// import OfferPic from '../images/travel.jpeg';
import '../styles/PriceCard.css';

function PriceCard({ imagecom }) {
	
	return (

		<div className="card mx-2">
			<img src={imagecom.url} className="card-img-top" alt="..."></img>
			<div className="card-body card-allin">
				<h5 className="card-title PoppReg" style={{fontWeight: "700"}}>{imagecom.title}</h5>
				<h6 className="card-title card-subtitle PoppReg">{imagecom.loc}</h6>
				<p className="card-text departure PoppReg"><small className="text-muted">Departure Date</small></p>
				<p className="card-text departure-date PoppReg"><small className="text-muted">{imagecom.date}</small></p>
				<p className="card-text price-per-person PoppReg"><small className="text-muted">Price per person</small></p>
				<h4 className="price PoppReg">{imagecom.price}</h4>
				<p className="card-text taxes PoppReg"><small className="text-muted">{imagecom.text}</small></p>
				{/* <button className="button AltReg">{imagecom.button}</button> */}
			</div>
		</div>
	);
}

export default PriceCard;