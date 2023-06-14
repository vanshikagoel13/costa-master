import React, { useState } from "react";
import "../styles/ToscanaColosseo.css";
import "../styles/Fonts.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import TrySlider from "../components/TrySlider";

// const scrollimages = [
// 	{
// 		id: 1,
// 		url: "/colosseo/Waterslide.jpg",
// 		title: "Waterslides",
// 		text: " For those who love taking a dip in the pool, there is the Iris Lido water slide, with its most breath-taking panoramic view.",
// 	},
// 	{
// 		id: 2,
// 		url: "/colosseo/Central Pool Deck.jpg",
// 		title: "Central Pool Deck",
// 		text: "Our main Central pool deck at the mid of the ship with an automatic roof, pool, jacuzzis and a mega-screen is the perfect place to unwind, rejuvenate and have some fun.",
// 	},
// 	{
// 		id: 3,
// 		url: "/colosseo/Samsara Spa.png",
// 		title: "Samsara Spa",
// 		text: "More than 6,000 m2 of pleasure and relaxation on two levels, a world in which the cleansing experience of the spa is combined with the fascination of oriental rituals, including steam baths, massages.",
// 	},
// 	{
// 		id: 4,
// 		url: "/colosseo/Casino.jpg",
// 		title: "Giano Casino",
// 		text: "Slot machines, roulette and gaming tables await Guests at the Giano Casino.",
// 	},
// 	{
// 		id: 5,
// 		url: "/colosseo/Gym.jpg",
// 		title: "Gym",
// 		text: "If you are sporty you can keep in shape in the gym equipped with the latest equipment and large windows that overlook the sea",
// 	},
// 	{
// 		id: 6,
// 		url: "/colosseo/Kids Club .jpg",
// 		title: "Kids Club",
// 		text: "Costa Serena offers entertainment for all ages. The Squok Club is a fun-filled and friendly space designed for the youngest children, while older brothers and sisters can make new friends by taking part in the sporting competitions and pool parties. And what do the parents get? Peace of mind thanks to our experienced, attentive staff who are with the children throughout the day.",
// 	},
// 	{
// 		id: 7,
// 		url: "/colosseo/Sports Pitch.jpg",
// 		title: "Sports Pitch",
// 		text: "Offering basketball, tennis, volleyball and more right at the top decks of the ship.",
// 	},
// 	{
// 		id: 8,
// 		url: "/colosseo/Aft Pool Deck.jpeg",
// 		title: "Aft Pool Deck",
// 		text: "Amongst the 3 main pools, this swimming pool is at the backof the ship, flanked by 2 jacuzzis at its side and the perfect area to watch the trail of the ship while it cruises.",
// 	},
// 	{
// 		id: 9,
// 		url: "/colosseo/Jogging Track 2.jpg",
// 		title: "Jogging Track",
// 		text: "Run along the edge of the horizon as you float on the waves and breathe in pure fresh sea air: you can do all this as you attempt a circuit on the jogging track.",
// 	},
// ];

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 5,
		slidesToSlide: 1, // optional, default to 1.
	},

	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
		slidesToSlide: 1, // optional, default to 1.
	},

	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
		slidesToSlide: 1, // optional, default to 1.
	},
};
function ToscanaColosseo({scrollimages}) {
	const [currImage, setCurrImage] = useState(1);

	const handleClick = (imageId) => {
		console.log("Image clicked:", imageId);
		setCurrImage(imageId);
	};

	return (
		<div
			className=" container containertc"
			style={{ backgroundColor: "rgb(240, 239, 239)" }}
		>
			<div className="row g-0 testtc">
				<div
					className="col custom-col-1-tc d-flex text-decortc"
					style={{ width: "25%" }}
				>
					<div style={{ width: "100%" }}>
						<p className="categorytc PoppReg">FUN & WELLNESS</p>
						<h1 className="titletc PoppBold">{scrollimages[currImage - 1].title}</h1>
						<p className="subtitletc PoppReg">{scrollimages[currImage - 1].text}</p>
					</div>
				</div>
				<div
					className="col d-flex img-decortc"
					style={{ width: "75%", position: "relative" }}
				>
					<div className="custom-col-2-tc">
						<div
							className="image-containertc"
							style={{ position: "relative", zIndex: "1" }}
						>
							<img
								src={process.env.PUBLIC_URL + scrollimages[currImage - 1].url}
								className="img-fluid img-style"
								style={{ width: "100%", height: "100%", objectFit: "cover" }}
							></img>
						</div>
						<div className="gd-carousel-wrapper">
							<Carousel
								responsive={responsive}
								showDots={false}
								swipeable={true}
								infinite={true}
								autoPlay={true}
								autoPlaySpeed={3000}
								className="gd-carousel"
								preventMovementUntilSwipeScrollTolerance={false}
							>
								{scrollimages.map((image) => {
									return (
										<div className="item" key={image.id}>
											<div
												className={
													image.id == currImage
														? "image-container overlay"
														: "image-container"
												}
												onClick={() => handleClick(image.id)}
											>
												<img
													key={image.id}
													className="image-carousel"
													style={{
														filter:
															image.id == currImage
																? "brightness(60%) saturate(150%) hue-rotate(180deg)"
																: "brightness(80%)",
													}}
													src={process.env.PUBLIC_URL + image.url}
												/>
												<div className="image-text PoppReg" style={{ cursor: 'grab' }}>{image.title}</div>
											</div>
										</div>
									);
								})}
							</Carousel>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ToscanaColosseo;
