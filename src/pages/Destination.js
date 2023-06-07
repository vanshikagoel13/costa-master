import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../components/Header.js";
import HorizontalScroll from "../components/HorizontalScroll.js";
import "../styles/Destination.css";
import "../styles/Fonts.css";
import Footer from "../components/Footer.js";
import HomeDestinations from "../components/HomeDestinations.js";

const images = [

	{
		id: 1,
		url: "https://www.costacruises.com/content/dam/costa/inventory-assets/destinations/ME/C031-mediterraneo.jpg.image.696.420.high.jpg",
		title: "<u class='underline-textds'>Mediterranean</u>",
		price: "Starting from <u class='starting-priceds'>$90</u>",
		price2: "Taxes, fees and port expenses are $23.44 per person and are additional to the price displayed. Subject to change.",
		text: "Your Mediterranean cruise will consist of history, culture, stunning landscapes and iconic tourist destinations. The “Mare Nostrum” (Mediterranean Sea) is the cradle of civilization, and provides dazzling landscapes that change with every season.",
	},
	{
		id: 2,
		url: "https://www.costacruises.com/content/dam/costa/inventory-assets/destinations/NO/desktop/Img_1_Top_NordEuropa_1680x786bis.jpeg.image.696.420.high.jpeg",
		price: "Starting from <u class='starting-priceds'>$289</u>",
		price2: "Taxes, fees and port expenses are $58.80 per person and are additional to the price displayed. Subject to change.",
		title: "<u class='underline-textds'>Northern Europe</u>",
		text: "The clear, cold, sharp light will accompany us on our way to Northern Europe. Embark on a unique experience among mazes of rock, where the glaciers along the sea and small, colorful villages welcome us like in a fairy tale.",
	},
	{
		id: 3,
		url: "https://www.costacruises.com/content/dam/costa/inventory-assets/destinations/CA/desktop/Img_1_Top_Caraibi_1680x786.jpg.image.696.420.high.jpg",
		price: "Starting from <u class='starting-priceds'>$629</u>",
		price2: "Taxes, fees and port expenses are $64.10 per person and are additional to the price displayed. Subject to change.",
		title: "<u class='underline-textds'>Caribbean</u>",
		text: "If you love the sea, beaches and dreams, and maybe you like music and good food, then our Caribbean cruise is the ideal solution. We head towards “treasure island”, full of good humor and shining sun.",
	},
];

const scrollimages = [

	{ id: 1, url: "/dc1.png" },
	{ id: 2, url: "/dc2.png" },
	{ id: 3, url: "/dc3.png" },
];

const txt1 = "Our aim is to accompany you as you explore <b>the world in the most sustainable, delicious, relaxing and surprising way.</b>";
const htext = " ";

function CostaExp() {

	return (

		<div className="v-scrollds">
			<Header />
			<HorizontalScroll scrollimg={[scrollimages,htext]} />
			<div className="two-column-containerds mx-3">
				<div className="left-columnds">
					<h2 className="l1ds AltBold">Explore the World</h2>
				</div>
				<div className="right-columnds">
					{/* <p className="l2ds AltReg"><span dangerouslySetInnerHTML={{ __html: txt1 }} /></p> */}
					<p className="l2ds AltReg">
						We take you to discover every corner of the world: from the white
						beaches of the Caribbean to the unspoiled nature of Northern Europe,
						from the silence of the desert in the Arab Emirates to the bright
						colors of South America. The world is all to be explored: you just
						have to pack your bags!.{" "}
					</p>
				</div>
			</div>
			<div className="container">
				{images.map((image, index) => (
					<div key={image.id}	className={`row rowds ${(index + 1) % 2 === 0 ? "flex-row-reverse" : ""}`}>
						<div className="col-lg-6 d-flex">
							<div className="image-containerds">
								<img src={image.url} className="img-fluid zoom image-styleds" alt={image.title} />
							</div>
						</div>
						<div className="col-lg-6 d-flex">
							<div className={`text-container align-self-center ${(index + 1) % 2 !== 0 ? "right-textds" : "left-textds" }`}>
								<h3 className={`AltBold ${(index + 1) % 2 !== 0 ? "title-style-rightds" : "title-style-leftds" }`}> 
									<span dangerouslySetInnerHTML={{ __html: image.title }} />
								</h3>
								<p className={`AltReg ${(index + 1) % 2 !== 0 ? "text-style-rightds" : "text-style-leftds" }`}>
									<span dangerouslySetInnerHTML={{ __html: image.text }} />
								</p>
								<h4 className={`PoppReg ${(index + 1) % 2 !== 0 ? "price-style-rightds" : "price-style-leftds" }`}>
									<span dangerouslySetInnerHTML={{ __html: image.price}} />
								</h4>
								<p className={`PoppReg ${(index + 1) % 2 !== 0 ? "tax-style-rightds" : "tax-style-leftds" }`}>
									<span dangerouslySetInnerHTML={{ __html: image.price2 }} />
								</p>
								<div style={{ display: "flex", justifyContent: "space-between"}}>
									<button className={`PoppReg itin-buttonds`} style={{ width: "calc(50% - 5px)" }}>
										Look at the itinenaries &rarr;
									</button>
									<button className={`PoppReg dis-buttonds`} style={{ width: "calc(50% - 5px)" }}>
										Know more &rarr;
									</button>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
			<HomeDestinations />
			<Footer />
		</div>
	);
}

export default CostaExp;
