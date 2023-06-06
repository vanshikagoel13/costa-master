import React from "react";
// import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../components/Header.js";
import HorizontalScroll from "../components/HorizontalScroll.js";
import "../styles/CostaExp.css";
import "../styles/Fonts.css";
import GridText from "../components/GridText.js";
import Footer from "../components/Footer.js";

const images = [
	// {
	// 	id: 1,
	// 	url: "https://www.costacruises.com/content/dam/costa/costa-asset/discovery/shorex/C442_Scegli_escursione_696x423_2.jpg.image.696.420.high.jpg",
	// 	category: "OUR TOURS",
	// 	title: "The longest Shore Excursions ever",
	// 	text: "In every destination real travel experiences await you, the discovery of new and unexpected places, with no hurry whatsoever.",
	// },
	{
		id: 1,
		url: "https://www.costacruises.com/content/dam/costa/costa-asset/discovery/new-pillars-2021/C442_Una_nuova_esperienza_di_gusto_3Renditions_696x423.jpg",
		category: "RESTAURANTS & BARS",
		title: "A new <u class='underline-textcs'>taste experience</u>",
		text: "The exploration of new places begins at the table. Each night, you’ll be treated to a signature dish by world-renowned chefs.",
	},
	{
		id: 2,
		url: "https://www.costacruises.com/content/dam/costa/costa-asset/discovery/new-pillars-2021/C442_Emozioni_a_non_finire_3Renditions_696x423.jpg.image.696.420.high.jpg",
		category: "ENTERTAINMENT",
		title: "Endless <u class='underline-textcs'>thrills</u>",
		text: "A dip in the pool, an aperitif with friends, a spectacular show with acrobats at the theatre... a world of thrills and laughter awaits you!",
	},
	{
		id: 3,
		url: "https://www.costacruises.com/content/dam/costa/costa-asset/images/people/C442_Benessere_696x423_v5.jpg.image.696.420.high.jpg",
		category: "SPORT, BEAUTY & RELAX",
		title: "All the <u class='underline-textcs'>wellness</u> you deserve",
		text: "Take time for yourself: a relaxing massage, a yoga class or, for the really sporty, a gym overlooking the sea are at your disposal.",
	},
	{
		id: 4,
		url: "https://www.costacruises.com/content/dam/costa/costa-asset/discovery/new-pillars-2021/C442_Il_tuo_risveglio_sul_mare_3Renditions_696x423.jpg.image.696.420.high.jpg",
		category: "YOUR CABIN",
		title: "<u class='underline-textcs'>Wake up on the sea</u>",
		text: "Every day a different vista: the perfect way to start the next day of your vacation.",
	},
	{
		id: 5,
		url: "https://www.costacruises.com/content/dam/costa/costa-asset/discovery/new-pillars-2021/C442_Anche_in_vacanza_dalla_parte_del_mare_3Renditions_696x423.jpg.image.696.420.high.jpg",
		category: "SUSTAINABILITY",
		title: "Even on vacation, <u class='underline-textcs'>we’re looking out for the sea</u>",
		text: "The environment is <b>one of our priorities.</b> Find out how to enjoy a vacation as a <b>responsible explorer.</b>",
	},
];

const subImages = [

	{ subid: 2, url: "/sub1.png" },
	{ subid: 3, url: "/sub2.png" },
	{ subid: 4, url: "/sub3.png" },
	{ subid: 5, url: "/sub4.png" },
	{ subid: 6, url: "/sub5.png" },
];

const txt1 = "Our aim is to accompany you as you explore <b>the world in the most sustainable, delicious, relaxing and surprising way.</b>";

function CostaExp() {

	// const [isLeft, setIsLeft] = useState(false);

	// const handleLeftSide = () => {
	//   setIsLeft(!isLeft);
	// };

	return (
		<div className="v-scrollcs">
			<Header />
			<HorizontalScroll />
			<div className="two-column-containercs mx-3">
				<div className="left-columncs">
					<h2 className="l1cs AltBold">A new way to travel</h2>
				</div>
				<div className="right-columncs">
					<p className="l2cs AltReg"><span dangerouslySetInnerHTML={{ __html: txt1 }} /></p>
					<p className="l2cs AltReg">
						There are so many new things to tell you about: find out now what
						awaits you on your next cruise, both on board and ashore.{" "}
					</p>
				</div>
			</div>
			<div className="container">
				{images.map((image, index) => (
					<div key={image.id} className={`row rowcs ${(index + 1) % 2 === 0 ? "flex-row-reverse" : ""}`}>
						<div className="col-lg-6 d-flex">
							<div className="image-containercs">
								<img src={image.url} className="img-fluid zoom image-stylecs" alt={image.title} />
							</div>
						</div>
						<div className="col-lg-6 d-flex">
							<div className={`text-container align-self-end ${(index + 1) % 2 !== 0 ? "right-textcs" : "left-textcs"}`}>
								<h4 className={`PoppReg ${(index + 1) % 2 !== 0 ? "category-style-rightcs" : "category-style-leftcs"}`}>{image.category}</h4>
								<h3 className={`AltBold ${(index + 1) % 2 !== 0 ? "title-style-rightcs" : "title-style-leftcs"}`}><span dangerouslySetInnerHTML={{ __html: image.title }} /></h3>
								<p className={`AltReg ${(index + 1) % 2 !== 0 ? "text-style-rightcs" : "text-style-leftcs"}`}><span dangerouslySetInnerHTML={{ __html: image.text }} /></p>
								{/* <button className={`${index % 2 !== 0 ? "button-right" : "button-left"}`}>Find out more...</button> */}
								{index >= 0 && (
									<img
										src={process.env.PUBLIC_URL + subImages[index].url}
										className={`${
										index % 2 !== 0
											? "subimage-style-rightcs"
											: "subimage-style-leftcs"
										}`}
										alt=""
									/>
								)}
							</div>
						</div>
					</div>
				))}
			</div>
			{/* <div>
				<h3 className="sec-last-head">And it doesn't stop there...</h3>
				<p className="sec-last-text">
					Find out how to make the most of your cruise
				</p>
			</div> */}
			{/* <div className="last-image-scroller">
				<div className="last-image">
					<img
						className="image-last-style"
						src={process.env.PUBLIC_URL + "/ceImage1.png"}
						alt="last image"
					></img>
				</div>
			</div> */}
			<GridText />
			<Footer />
		</div>
	);
}


export default CostaExp;