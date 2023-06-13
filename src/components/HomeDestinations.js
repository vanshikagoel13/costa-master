import React from "react";
import PriceCard from "./PriceCard";
import "../styles/Fonts.css";
import "../styles/PriceCard.css";

const images = [
	
	{
		id: 1,
		url: "https://www.costacruises.com/content/dam/costa/inventory-assets/ports/REK/rek-reykjavik-port-1.jpg.image.310.230.medium.jpg",
		title: "Northern Europe",
		loc: "From Bremerhaven",
		date: "08 Jul 2023",
		price: "$2869",
		button: "Explore Cruises",
		text: "Taxes, fees and port expenses are $188.86 per person and are additional to the mentioned price, subject to change",
	},
	{
		id: 2,
		url: "https://www.costacruises.com/content/dam/costa/inventory-assets/ports/IST/ist-istanbul-port.jpg.image.310.230.medium.jpg",
		title: "Mediterranean",
		loc: "From Istanbul",
		date: "20 Oct 2023",
		price: "$699",
		button: "Explore Cruises",
		text: "Taxes, fees and port expenses are $120.52 per person and are additional to the mentioned price, subject to change",
	},
	{
		id: 3,
		url: "https://www.costacruises.com/content/dam/costa/inventory-assets/ports/MRS/mrs-marsiglia-port-1b.jpg.image.310.230.medium.jpg",
		title: "Mediterranean",
		loc: "From Savona",
		date: "30 Oct 2024",
		price: "$899",
		button: "Explore Cruises",
		text: "Taxes, fees and port expenses are $96.39 per person and are additional to the mentioned price, subject to change",
	},
	{
		id: 4,
		url: "https://www.costacruises.com/content/dam/costa/inventory-assets/ports/ILH/ilh-ilheus-port-1.jpg.image.310.230.high.jpg",
		title: "Transoceanic",
		loc: "From Barcelona",
		date: "11 Nov 2023",
		price: "$879",
		button: "Explore Cruises",
		text: "Taxes, fees and port expenses are $162 per person and are additional to the mentioned price, subject to change",
	},
];

function HomeDestinations() {

	return (
		<div className="best-offer-head" style={{ margin: "50px" }}>
			<div>
				<h3 className="PoppBold" style={{ marginBottom: "10px", marginLeft: "10px", fontSize: '32px' }}>
					Our Most Unique Destinations
				</h3>
				<h6 className="PoppReg" style={{ marginBottom: "30px", marginLeft: "10px", fontWeight: 500,  fontSize: '18px' }}>
					Explore some of our most exotic destinations
				</h6>
			</div>
			<div className="card-group">
				{images.map((image) => (
					<PriceCard imagecom={image} />
				))}
			</div>
		</div>
	);
}

export default HomeDestinations;