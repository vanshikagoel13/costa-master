import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../components/Header.js";
import HorizontalScroll from "../components/HorizontalScroll.js";
import "../styles/Destinations.css";
import "../styles/Fonts.css";
// import Footer from "../components/Footer.js";
import NewFooter from "../components/NewFooter.js";
import HomeDestinations from "../components/HomeDestinations.js";
// import BestOfferCardfrom "../components/BestOfferCard.js";
// import DestinationDetail from "../components/DestinationDetail.js";
import DestinationSubBanner from "../components/DestinationSubBanner.js";
import CallNowButton from "../components/CallNowButton.js";

const images = [
	{
		id: 1,
		url: "/Destination/IndiaDestination.png",
		title: "<u class='underline-textds'>India</u>",
		subtitle: "A tapestry of colours",
		text1: "Prepare to be enchanted by the alluring beauty of India, where a vibrant tapestry of colors creates a mesmerizing backdrop. Picture azure blues merging seamlessly with the earthy browns, ochres, and greens of coffee and spice plantations, crafting an infinite palette ",
		text: "Prepare to be enchanted by the alluring beauty of India, where a vibrant tapestry of colors creates a mesmerizing backdrop. Picture azure blues merging seamlessly with the earthy browns, ochres, and greens of coffee and spice plantations, crafting an infinite palette of breathtaking beauty. Every corner of this enchanting landscape holds a story that will awaken your senses and leave an indelible mark on your soul. Embark on a journey that will take you from the magnificence of Mumbai to the serene blue hues of Goa and Kochi Lakshwadeep. Explore the cultural richness, heritage, and sheer beauty that India has to offer as you cruise in ultimate style with Costa. Uncover the secrets of ancient civilizations, witness architectural marvels, and immerse yourself in a tapestry of traditions and vibrant celebrations.",
	},
	{
		id: 2,
		url: "/Destination/Mediterranean.png",
		title: "<u class='underline-textds'>Mediterranean</u>",
		subtitle: "Sunny and astounding, all year round",
		text1:"Choose your cruise and embark at your nearest port, either in winter or summer. Depart from the Ligurian beaches of Savona or from the lively Marseilles seafront. With confidence in our decades of experience, allow us take you on a cruise across the Mediterranean Sea. ",
		text: "Choose your cruise and embark at your nearest port, either in winter or summer. Depart from the Ligurian beaches of Savona or from the lively Marseilles seafront. With confidence in our decades of experience, allow us take you on a cruise across the Mediterranean Sea. Be seduced by magic sunsets and savour the best recipes and typical local dishes. Find the right route for you: choose to embark on a journey of discovery in the Eastern Mediterranean and be overwhelmed by the charms of sailing, from Dubrovnik to Athens and onward to the Aegean Sea, and end with a few days in the splendid Greek islands, with a stopover in Santorini and Mykonos, with their crystalline waters, white sandy beaches and beautiful, deep blue sky. If you're looking for history and nightlife, opt instead for the Western Mediterranean and let us guide you to the places of interest, monuments and works of art in Barcelona and Palma de Mallorca. The fun continues to the lights of Ibiza, the most sensual of the Balearic Islands, and even further, passing through the pillars of Hercules and sailing to the shores of Madeira, the Canary Islands archipelago, and Lisbon.",
	},

	{
		id: 3,
		url: "/Destination/NorthEurope.png",
		title: "<u class='underline-textds'>North Europe</u>",
		subtitle: "A sense of discovery",
		text1: "The unspoiled, proud beauty of the wilderness that dominates the northern seas reflects the characteristics of the Viking people, once masters of these waters. Admire the majesty of the Norwegian fjords aboard our Costa ships on our cruises in the North Sea. ",
		text: "The unspoiled, proud beauty of the wilderness that dominates the northern seas reflects the characteristics of the Viking people, once masters of these waters. Admire the majesty of the Norwegian fjords aboard our Costa ships on our cruises in the North Sea. We sail through majestic labyrinths of water, carved by sea that has penetrated for miles into the heart of the land, and admire epic landscapes, including picturesque Norse villages at the base of cliffs and mountains with impressive cascading waterfalls fed by glaciers. The beauty of modern cities like Oslo and Stockholm is a joy to behold, as is the wealth of Tallinn and Copenhagen, with the beautiful little mermaid of Hans Christian Andersen's story winking at us from her rock in the middle of the sea. ",
	},
	{
		id: 4,
		url: "/Destination/Caribbean.png",
		title: "<u class='underline-textds'>Caribbean</u>",
		subtitle: "A tropical wonder",
		text1: "A rainbow of colours creates the allure of this location, where the clear blues of the sea and sky mix with the infinite variety of the browns, ochres and greens of coffee and spices plantations, all framed in a breathtaking scenery. The cities you will visit during the Caribbean cruise come alive with music and fragrances ",
		text: "A rainbow of colours creates the allure of this location, where the clear blues of the sea and sky mix with the infinite variety of the browns, ochres and greens of coffee and spices plantations, all framed in a breathtaking scenery. The cities you will visit during the Caribbean cruise come alive with music and fragrances, while nature, the one and only mistress of these islands, offers exotic animals and colourful mosaics of flowers and fruit lit by the sun. In every corner here you’ll experience the resonating sound of the sea, the ancient memory of pirate stories and the rhythm of music celebrating a distant Africa that has transformed over the centuries. From the Antilles to the Dominican Republic, from the Bahamas to Barbados: with Costa Cruises you will find all the best of the Caribbean. ",
	},
	{
		id: 5,
		url: "/Destination/UAE.png ",
		title: "<u class='underline-textds'>Dubai and the Emirates</u>",
		subtitle: "One land, a thousand and one souls",
		text1: "Every house and every street in the desert has been painstakingly reclaimed from the suffocating presence of the sand. That's why in the UAE everything aims at greatness, excess and amazement. Magnificent mosques, one of the highest skyscrapers in the world, hotels with more stars ",
		text: "Every house and every street in the desert has been painstakingly reclaimed from the suffocating presence of the sand. That's why in the UAE everything aims at greatness, excess and amazement. Magnificent mosques, one of the highest skyscrapers in the world, hotels with more stars than the vault of the sky, theme parks from the Guinness Book of Records. This is a country where, against the backdrop of a harsh and difficult nature to tame, there is no lack of luxury, beauty, shopping and, above all, a crystal clear sea for fantastic diving. A thrill not to be missed during our cruise to Dubai is watching the sunset as the blackest of nights is created, full of stars, peace and immense beauty.",
	},
];

const scrollimages = [

	{ id: 1, url: "/DestinationBanner/India Banner - Destination.png" },
	{ id: 2, url: "/DestinationBanner/Lakshadweep Banner - Destination .png" },
];

const details = [
	{
		id: 1,
		i1: "/Destination/November to December.png",
		i2: "/Destination/2-5 Nights to explore.png",
		i3: "/Destination/Departure.png",
		img1: "/Destination/Santorini.png",
		img2: "/Destination/Savona.png",
		title: "A summer that never ends",
		text1: "From November to December",
		text2: "2 to 5 Nights to explore",
		text3: "Departure from Indian ports",
	},
	{
		id: 2,
		i1: "/Destination/November to December.png",
		i2: "/Destination/2-5 Nights to explore.png",
		i3: "/Destination/Departure.png",
		img1: "/Destination/Santorini.png",
		img2: "/Destination/Savona.png",
		title: "A summer that never ends",
		text1: "From January to December",
		text2: "4 to 15 days to explore",
		text3: "Departures from all over Italy",
	},
	{
		id: 3,
		i1: "/Destination/November to December.png",
		i2: "/Destination/2-5 Nights to explore.png",
		i3: "/Destination/Departure.png",
		img1: "/Destination/Copenhagen.png",
		img2: "/Destination/Copenhagen2.png",
		title: "A summer in the North",
		text1: "From May to September",
		text2: "8 to 15 days to explore",
		text3: "Flight + cruise packages",
	},
	{
		id: 4,
		i1: "/Destination/November to December.png",
		i2: "/Destination/2-5 Nights to explore.png",
		i3: "/Destination/Departure.png",
		img1: "/Destination/Copenhagen.png",
		img2: "/Destination/Copenhagen2.png",
		title: "A winter in the sun",
		text1: "From December to March",
		text2: "8 to 15 days to explore",
		text3: "Flight + cruise packages",
	},
	{
		id: 5,
		i1: "/Destination/November to December.png",
		i2: "/Destination/2-5 Nights to explore.png",
		i3: "/Destination/Departure.png",
		img1: "/Destination/Dubai_image2.jpg",
		img2: "/Destination/Dubai.png",
		title: "A winter between sea and desert",
		text1: "From November to March",
		text2: "8 to 15 days to explore",
		text3: "Flight + cruise packages",
	},
];

// const subImages = [
// 	{ subid: 2, url: "/sub1.png" },
// 	{ subid: 3, url: "/sub2.png" },
// 	{ subid: 2, url: "/sub1.png" },
// 	{ subid: 3, url: "/sub2.png" },
// 	{ subid: 2, url: "/sub1.png" },
// ];

const htext = " ";

function Destinations() {

	const [isHeaderExpanded, setIsHeaderExpanded] = useState(false);

	const handleHeaderExpand = () => {
		setIsHeaderExpanded(true);
	};

	const handleHeaderCollapse = () => {
		setIsHeaderExpanded(false);
	};

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
	};

	return (

		<div className="v-scrollds">
			<Header
				isExpanded={isHeaderExpanded}
				onExpand={handleHeaderExpand}
				onCollapse={handleHeaderCollapse}
			/>
			{isHeaderExpanded ? null : (
				<>
					<HorizontalScroll scrollimg={[scrollimages, htext]} />
					<div className="two-column-containerds mx-3">
						<div className="left-columnds">
							<h1 className="l1ds PoppBold">Explore the World</h1>
						</div>
						<div className="right-columnds">
							<h3 className="l2ds PoppReg">
								We take you to discover unique destinations of India: from the
								white beaches of Lakshadweep to the enchanting culture & nature
								of Kochin & Goa. India awaits your exploration! You just have to
								pack your bags!.{" "}
							</h3>
						</div>
					</div>
					<div className="container" style={{ marginBottom: "80px" }}>
						{images.map((image, index) => (
							<div key={image.id} className={`row rowds ${(index + 1) % 2 === 0 ? "flex-row-reverse" : ""}`}>
								<div className="col-lg-6 d-flex">
									<div className="image-containerds">
										<img src={process.env.PUBLIC_URL + image.url} className="img-fluid zoom image-styleds" alt={image.title}/>
									</div>
								</div>
								<div className="col-lg-6 d-flex">
									<div className={`text-container ${(index + 1) % 2 !== 0 ? "right-textds" : "left-textds"}`}  style={{alignSelf: 'flex-end'}}>
										<h3 className={`PoppBold ${(index + 1) % 2 !== 0 ? "title-style-rightds" : "title-style-leftds"}`}>
											<span dangerouslySetInnerHTML={{ __html: image.title }} />
										</h3>
										<h3 className={`PoppReg ${(index + 1) % 2 !== 0 ? "subtitle-style-rightds" : "subtitle-style-leftds"}`}>
											<span dangerouslySetInnerHTML={{ __html: image.subtitle }}/>
										</h3>
										<p className={`PoppReg ${(index + 1) % 2 !== 0 ? "text-style-rightds" : "text-style-leftds"}`}>
											{!readMore[index] ? (
												<>
													<span>
														{image.text1}{' '}
														<a href="#" className="clickable-text-ds PoppReg" onClick={() => xyz(index)}>
															See More-&gt;
														</a>
													</span>
												</>
											) : (
												<>
													<span>
														{image.text}{' '}
														<a href="#" className="clickable-text-ds PoppReg" onClick={() => xyz(index)}>
															See Less-&gt;
														</a>
													</span>
												</>
											)}
										</p>
										{index >= 0 && (
											<DestinationSubBanner details={details[index]} className={`${(index + 1) % 2 !== 0 ? "subimage-style-rightds" : "subimage-style-leftds"}`} alt=""/>
										)}
									</div>
								</div>
							</div>
						))}
					</div>
					<HomeDestinations />
					<CallNowButton />
					<NewFooter />
				</>
			)}
		</div>
	);
}

export default Destinations;