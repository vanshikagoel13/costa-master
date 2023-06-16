import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../components/Header.js";
import HorizontalScroll from "../components/HorizontalScroll.js";
import "../styles/CostaExp.css";
import "../styles/Fonts.css";
import GridText from "../components/GridText.js";
import Footer from "../components/Footer.js";
// import SubBanner from "../components/subBanner.js";
import ExpSub from "../components/ExpSub.js";
import CallNowButton from "../components/CallNowButton.js";
// import NewFooter from "../components/NewFooter";
const images = [

	{
		id: 0,
		url: "https://www.costacruises.com/content/dam/costa/costa-asset/discovery/new-pillars-2021/C442_Il_tuo_risveglio_sul_mare_3Renditions_696x423.jpg.image.696.420.high.jpg",
		category: "YOUR CABIN",
		title: "<u class='underline-textcs'>Wake up on the sea</u>",
		text1: "Choose your cabin or suite on your Costa Cruises ship, the most intimate part of your cruise. For pampering, relaxation and every comfort, every Costa cabin is comfortable and cozy. The perfect place to relax after a busy day of activities and socializing, both on board and ashore. ",
		text: "Choose your cabin or suite on your Costa Cruises ship, the most intimate part of your cruise. For pampering, relaxation and every comfort, every Costa cabin is comfortable and cozy. The perfect place to relax after a busy day of activities and socializing, both on board and ashore. Costa has different types of cabins in terms of size and location that enable you to find the space that best suits your needs. We have Inside, Ocean View, Balcony or Suite cabins available, all of which are designed to provide maximum comfort, elegance and relaxation. Every cabin has a private bathroom, air conditioning with adjustable thermostat, Interactive flat-screen satellite TV, 24-hour room service (for a fee), Steward service always available, Safe, Wifi available (for a fee), Hair dryer, Fresh linens changed regularly (sheets and towels). Also, on Costa Serena ship for India sailings, we have tea kettles available in the cabin for your special brew. In almost all cabins the single beds can be converted into doubles, some are interconnecting and therefore perfect for families. Those who choose the mini Suites, Suites or grand Suites also have a living area with private balcony to enjoy breakfast while contemplating the beauty of the sea, and other delights such as Jacuzzi or hydromassage shower. ",
		h1: "A dream come true",
		i1: "/ExpImages/Privileged Location.png",
		i2: "/ExpImages/A terrace to be experienced.png",
		i3: "/ExpImages/Comfort and a touch of luxury.png",
		t1: "Privileged Location",
		t2: "A terrace to be experienced",
		t3: "Comfort and a touch of luxury",
	},
	{
		id: 1,
		url: "https://www.costacruises.com/content/dam/costa/costa-asset/images/people/C442_Benessere_696x423_v5.jpg.image.696.420.high.jpg",
		category: "SPORT, BEAUTY & RELAX",
		title: "Wellness with a view and the <u class='underline-textcs'>one you deserve</u>",
		text1: "Take time for yourself: a relaxing massage and a yoga class are at your disposal, or for the really sporty, a gym overlooking the sea. Choose the best way to relax on board our ships. A massage before dinner? A dip in the hot tub after a great shore excursion? Or, why not simply sunbathe ",
		text: "Take time for yourself: a relaxing massage and a yoga class are at your disposal, or for the really sporty, a gym overlooking the sea. Choose the best way to relax on board our ships. A massage before dinner? A dip in the hot tub after a great shore excursion? Or, why not simply sunbathe on the highest deck of the ship? And if you are really athletic, put on your running shoes and challenge yourself by running on our jogging track, or working out in our state-of-the-art gyms! Our Spa’s onboard are some of the biggest at sea and offer pleasure and relaxation, a world in which the cleansing experience of the spa is combined with the fascination of oriental rituals, including steam baths, massages with volcanic stones, oil-based treatments and ancient Ayurvedic rituals. Have fun! ",
		h1: "Don't miss out on board",
		i1: "/ExpImages/Massages & beauty treatments.png",
		i2: "/ExpImages/Sports activities and tournaments.png",
		i3: "/ExpImages/Swimming pools and hot tubs.png",
		i4: "/ExpImages/Sports activities and tournaments.png",
		t1: "Massages & beauty treatments",
		t2: "Gym and fitness classes",
		t3: "Swimming pools and hot tubs",
		t4: "Sports activities and tournaments",
	},
	{
		id: 2,
		url: "https://www.costacruises.com/content/dam/costa/costa-asset/discovery/new-pillars-2021/C442_Emozioni_a_non_finire_3Renditions_696x423.jpg.image.696.420.high.jpg",
		category: "ENTERTAINMENT",
		title: "Endless <u class='underline-textcs'>thrills</u>",
		text1: "Whether you’re on board for a romantic trip for two, or on a cruise with your family or friends, we are here to ensure you have fun and live out your dreams. Every day you can wake up and plunge into the swimming pool, challenge your friends in the games room, and allow yourself to do shopping ",
		text: "Whether you’re on board for a romantic trip for two, or on a cruise with your family or friends, we are here to ensure you have fun and live out your dreams. Every day you can wake up and plunge into the swimming pool, challenge your friends in the games room, and allow yourself to do a bit of shopping in our stores. And in the evening, shows and special performances are waiting for you at the theatre spectacular shows await you from musicals, comedy shows, acrobats, games and much more... there is something for everyone! ",
		i1: "/ExpImages/Slides and Water Parks.png",
		i2: "/ExpImages/Shows at the theatre.png",
		i3: "/ExpImages/Casino and games room.png",
		i4: "/ExpImages/Disco and piano bar.png",
		h1: "360° of fun",
		t1: "Slides and Water Parks",
		t2: "Shows at the theatre",
		t3: "Casino and games room",
		t4: "Disco and piano bar",
	},
	{
		id: 3,
		url: "https://www.costacruises.com/content/dam/costa/costa-asset/discovery/new-pillars-2021/C442_Una_nuova_esperienza_di_gusto_3Renditions_696x423.jpg",
		category: "FOOD",
		title: "Set sail with Costa Cruise and <u class='underline-textcs'>taste the world</u>",
		text1: "A culinary adventure awaits! From classic Italian delicacies to tangy street chaats, explore a wide range of cuisine options. Let the world's best chefs create a dining experience like never before. Pack your appetite and join us as we sail through a sea of flavors, treating your palate to an array ",
		text: "A culinary adventure awaits! From classic Italian delicacies to tangy street chaats, explore a wide range of cuisine options. Let the world's best chefs create a dining experience like never before. Pack your appetite and join us as we sail through a sea of flavors, treating your palate to an array of unforgettable delights. Let your taste buds be your guide, and prepare to indulge in a culinary experience that will leave you longing for more. Bon appétit! ",
		h1: "Unique flavours on board",
		i1: "/ExpImages/Signature dishes from international chefs.png",
		i2: "/ExpImages/Wine bars and themed restaurants.png",
		i3: "/ExpImages/Aperitifs and cocktails.png",
		i4: "/ExpImages/Ice cream parlours and chocolate bars.png",
		t1: "Signature dishes from international chefs",
		t2: "Wine bars and themed restaurants",
		t3: "Aperitifs and cocktails",
		t4: "Ice cream parlours and chocolate bars",
	},
	{
		id: 4,
		url: "https://www.costacruises.com/content/dam/costa/costa-asset/images/people/C442_Benessere_696x423_v5.jpg.image.696.420.high.jpg",
		category: "SHOPPING",
		title: "Shall we go <u class='underline-textcs'>shopping?</u>",
		text1: "Yes, you can also go shopping while on a cruise! On board you will find lots of cruise shops to make your purchases. From a brand-name bag to the perfect dress for a romantic evening. Did you know that on board there is a Duty Free shop? ",
		text: "Yes, you can also go shopping while on a cruise! On board you will find lots of cruise shops to make your purchases. From a brand-name bag to the perfect dress for a romantic evening. Did you know that on board there is a Duty Free shop? Drop by to purchase a new perfume that reminds you of your holiday or to choose a sunscreen for an excursion to the beach. We have something for everyone. From watches to sunglasses, from beauty products to gadgets and Costa souvenirs. You'll be spoilt for choice. ",
		h1: "For a perfect shopping spree",
		i1: "/ExpImages/Jewellery and watches.png",
		i2: "/ExpImages/Fashion and accessories.png",
		i3: "/ExpImages/Perfumes and cosmetics.png",
		i4: "/ExpImages/Gadgets and souvenirs.png",
		t1: "Jewellery and watches",
		t2: "Fashion and accessories",
		t3: "Perfumes and cosmetics",
		t4: "Gadgets and souvenirs",
	},
	{
		id: 5,
		url: "https://www.costacruises.com/content/dam/costa/costa-asset/discovery/new-pillars-2021/C442_Anche_in_vacanza_dalla_parte_del_mare_3Renditions_696x423.jpg.image.696.420.high.jpg",
		category: "SUSTAINABILITY",
		title: "Even on holiday, <u class='underline-textcs'>we’re looking out for the sea</u>",
		text1: "Choosing a Costa cruise means experiencing a holiday that respects the environment and the local communities you’ll meet each day in the destinations we explore. What does it mean to be a responsible explorer? It means discovering new destinations in harmony ",
		text: "Choosing a Costa cruise means experiencing a holiday that respects the environment and the local communities you’ll meet each day in the destinations we explore. What does it mean to be a responsible explorer? It means discovering new destinations in harmony with our surroundings, really getting to know the communities that live there, helping us to build a more equitable future for coming generations. ",
		h1: "Sustainability on board means:",
		i1: "/ExpImages/Differentiated waste collection.png",
		i2: "/ExpImages/Less plastic.png",
		i3: "/ExpImages/Careful water consumption.png",
		i4: "/ExpImages/Technologically advanced ships.png",
		t1: "Differentiated waste collection",
		t2: "Less plastic",
		t3: "Careful water consumption",
		t4: "Technologically advanced ships",
	},
];

// const subImages = [

// 	{ subid: 2, url: "/sub1.png" },
// 	{ subid: 3, url: "/sub2.png" },
// 	{ subid: 4, url: "/sub3.png" },
// 	{ subid: 5, url: "/sub4.png" },
// 	{ subid: 6, url: "/sub5.png" },
// 	{ subid: 7, url: "/sub5.png" },
// ];

const scrollimages = [

	{ id: 1, url: "ExperienceBanner/Experience Page - 11.png" },
	{ id: 2, url: "ExperienceBanner/Experience Page - 22.png" },
];

const txt1 = "Our aim is to accompany you as you explore <b>the world in the most sustainable, delicious, relaxing and surprising way.</b>";
const htext = "Unmissable News";

function CostaExp() {

	const [isHeaderExpanded, setIsHeaderExpanded] = useState(false);
	const [readMore, setReadMore] = useState(() => {

		const initialReadMore = Array(images.length).fill(false);
		return initialReadMore;
	});

	const onPressHandle = (index) => {

		setReadMore((prevState) => {

			const updatedReadMore = [...prevState];
			updatedReadMore[index] = !updatedReadMore[index];
			return updatedReadMore;
		});
	};

	const xyz = (index) => {

		onPressHandle(index);
	}

	const handleHeaderExpand = () => {
		setIsHeaderExpanded(true);
	};

	const handleHeaderCollapse = () => {
		setIsHeaderExpanded(false);
	};

	return (

		<div className="v-scrollcs">
			<Header
				isExpanded={isHeaderExpanded}
				onExpand={handleHeaderExpand}
				onCollapse={handleHeaderCollapse}
			/>
			{isHeaderExpanded ? null :
				<>
					<HorizontalScroll scrollimg={[scrollimages, htext]} />
					<div className="two-column-containercs mx-3">
						<div className="left-columncs">
							<h2 className="l1cs PoppBold">A new way to travel</h2>
						</div>
						<div className="right-columncs">
							<h6 className="l2cs PoppReg">
								A Costa cruise is a daily experience of pleasure, filled with care and dedication. Bright and elegant rooms, menus by starred chefs, local cuisines, long excursions to share with your loved ones, but also theater, shows, and entertainment for every age and tastes.{" "}
							</h6>
						</div>
					</div>
					<div className="container">
						{images.map((image, index) => (
							<div key={image.id} className={`row rowcs ${(index + 1) % 2 === 0 ? "flex-row-reverse" : ""}`}>
								<div className="col-lg-6 d-flex">
									<div className="image-containercs" style={{width: '100%'}}>
										<img src={process.env.PUBLIC_URL+ image.url} className="img-fluid zoom image-stylecs" alt={image.title} />
									</div>
								</div>
								<div className="col-lg-6 d-flex">
									<div className={`text-container align-self-end ${(index + 1) % 2 !== 0 ? "right-textcs" : "left-textcs"}`}>
										<h4 className={`PoppReg ${(index + 1) % 2 !== 0 ? "category-style-rightcs" : "category-style-leftcs"}`}>{image.category}</h4>
										<h3 className={`PoppBold ${(index + 1) % 2 !== 0 ? "title-style-rightcs" : "title-style-leftcs"}`}><span dangerouslySetInnerHTML={{ __html: image.title }} /></h3>
										<p className={`PoppReg ${(index + 1) % 2 !== 0 ? "text-style-rightcs" : "text-style-leftcs"}`}>
											{!readMore[index] ? (
												<>
													<span>{image.text1}{' '}
														<a href="#" className="clickable-text PoppReg" onClick={() => xyz(index)}>
															See More &rarr;
														</a>
													</span>
												</>
											) : (
												<>
													<span>{image.text}{' '}
														<a href="#" className="clickable-text PoppReg" onClick={() => xyz(index)}>
															See Less &rarr;
														</a>
													</span>
												</>
											)}
										</p>
										<ExpSub cont={image} />
									</div>
								</div>
							</div>
						))}
					</div>
					<GridText />
					<CallNowButton />
					<Footer />
				</>
			}
		</div>
	);
}

export default CostaExp;