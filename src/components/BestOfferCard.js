import React from "react";
import PriceCard from "./PriceCard";
import "../styles/Fonts.css";
import "../styles/PriceCard.css";

const images = [
  {
    id: 1,
    url: "https://www.costacruises.com/content/dam/costa/inventory-assets/ports/GTU/gtu-grandturks-port-1.jpg.image.310.230.high.jpg",
    title: "Transoceanic",
    loc: "From Savona",
    date: "08 Dec 2023",
    price: "$2,329",
    text: "Taxes, fees and port expenses are $153.67 per person and are additional to the mentioned price, subject to change",
	// button: "Learn more...."
  },
  {
    id: 2,
    url: "https://www.costacruises.com/content/dam/costa/inventory-assets/ports/DXB/dubai.jpg.image.310.230.high.jpg",
    title: "Dubai and UAE",
    loc: "From Dubai",
    date: "06 Jan 2024",
    price: "$769",
	// button: "Learn more....",
    text: "Taxes, fees and port expenses are $94.69 per person and are additional to the mentioned price, subject to change",
  },
  {
    id: 3,
    url: "https://www.costacruises.com/content/dam/costa/inventory-assets/ports/LRM/lrm-la%20romana-port-1.jpg.image.310.230.high.jpg",
    title: "Caribbean",
    loc: "From La Romana",
    date: "21 Jan 2024",
    price: "$719",
	// button: "Learn more....",
    text: "Taxes, fees and port expenses are $113.91 per person and are additional to the mentioned price, subject to change",
  },
  {
    id: 4,
    url: "https://www.costacruises.com/content/dam/costa/inventory-assets/ports/BUE/buenos-aires.jpg.image.310.230.high.jpg",
    title: "South America",
    loc: "From Buenos Aires",
    date: "21 Feb 2024",
    price: "$709",
	// button: "Learn more....",
    text: "Taxes, fees and port expenses are $199.13 per person and are additional to the mentioned price, subject to change",
  },
];

function BestOfferCard() {
  return (
    <div className="best-offer-head" style={{ margin: "50px" }}>
      <div>
        <h3
          className="PoppBold"
          style={{ marginBottom: "10px", marginLeft: "10px" }}
        >
          Discover the Caribbean, Emirates and South America
        </h3>
        <h6
          className="PoppReg"
          style={{ marginBottom: "30px", marginLeft: "10px", fontWeight: 500 }}
        >
          Escape the winter cold with these sunny destinations
        </h6>
      </div>
      <div className="card-group">
        {images.map((image) => (
          <PriceCard imagecom={image} />
        ))}

        {/* <PriceCard imagecom={"#"} />
        <PriceCard imagecom={"#"} />
        <PriceCard imagecom={"#"} /> */}
      </div>
    </div>
  );
}
export default BestOfferCard;
