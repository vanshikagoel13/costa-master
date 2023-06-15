import React, { useState, useEffect } from "react";
import "../styles/ToscanaArchie.css";
import "../styles/Fonts.css";
// import TrySlider from "../components/TrySlider";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/test.css";

// const scrollimages = [
// 	{
// 		id: 1,
// 		url: "/terrayaki/Grand Bar .jpg",
// 		title: "Grand Bar",
// 		text: "For special, fun-filled evenings, to the notes of live music.",
// 	},
// 	{
// 		id: 2,
// 		url: "/terrayaki/Ceres Restaurant .jpg",
// 		title: "Ceres Restaurants",
// 		text: "Seating more than 1,000 Guests, this bright and elegant restaurant extends over two levels. It is the location for the most important on-board dinners.",
// 	},
// 	{
// 		id: 3,
// 		url: "/terrayaki/Luna Lounge.jpg",
// 		title: "Luna Lounge",
// 		text: "Luna Lounge, located on deck 5, is a large lounge with a bar, dance floor and lots of entertainment to dance the night away.",
// 	},
// 	{
// 		id: 4,
// 		url: "/terrayaki/Prometeo Buffet Restaurant.jpg",
// 		title: "Prometeo Buffet Restaurant",
// 		text: "Enjoy the spectacle of the sea front row while you dine on the beautiful open-air veranda.",
// 	},
// 	{
// 		id: 5,
// 		url: "/terrayaki/Cupido lounge.jpg",
// 		title: "Cupido Ballroom",
// 		text: "The delightful Cupido Ballroom, inspired by the theme of love is the perfect place to relax to the sound of some soothing romantic hits.",
// 	},
// 	{
// 		id: 6,
// 		url: "/terrayaki/Disco 2.jpg",
// 		title: "Pan Disco",
// 		text: "This is the place to be, for a long night dancing away to the latest hits.",
// 	},
// 	{
// 		id: 7,
// 		url: "/terrayaki/Gelato at pay.jpg",
// 		title: "Gelato Bar",
// 		text: "We dare you to deny the charm of Costa Serena’s Gelato Bar which will take you right to Italy, serving authentic gelato along with other delicious sweet pastries.",
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

function ToscanaArchie({ scrollimages }) {

	const [tog1, setTog1] = useState(false);

	useEffect(() => {

		const handleResize = () => {

			const screenWidth = window.innerWidth;

			if (screenWidth < 741) {

				setTog1(true);
			} else {

				setTog1(false);
			}
		};

		// Add event listener to detect window resize
		window.addEventListener("resize", handleResize);

		// Clean up the event listener on component unmount
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const [currImage, setCurrImage] = useState(1);

	const handleClick = (imageId) => {
		console.log("Image clicked:", imageId);
		setCurrImage(imageId);
	};

	return (
		<div
			className="container containerta"
			style={{ backgroundColor: "rgb(240, 239, 239)" }}
		>
			<div className="row g-0 testta">
				<div className="col custom-col-1-ta d-flex text-decorta" style={{ width: "25%" }}>
					<div style={{ width: "100%" }}>
						<p className="categoryta PoppReg">RESTAURANTS AND BARS</p>
						<h1 className="titleta PoppBold">
							{scrollimages[currImage - 1].title}
						</h1>
						<p className="subtitleta PoppReg">
							{scrollimages[currImage - 1].text}
						</p>
					</div>
				</div>
				<div
					className="col d-flex img-decorta"
					style={{ width: "75%", position: "relative" }}
				>
					<div className="custom-col-2-ta">
						<div
							className="image-containerta"
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
								arrows={!tog1 ? true : false}
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
																? "brightness(60%) saturate(120%) hue-rotate(180deg)"
																: "brightness(80%)",
													}}
													src={process.env.PUBLIC_URL + image.url}
												/>
												<div className="image-text" style={{ cursor: 'grab' }}>{image.title}</div>
											</div>
										</div>
									);
								})}
							</Carousel>
						</div>

						{/* <TrySlider scrollimages={scrollimages} /> */}
					</div>
				</div>
			</div>
		</div>
	);
}

export default ToscanaArchie;
