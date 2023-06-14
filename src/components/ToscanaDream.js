// import React from "react";
import React, { useState } from "react";
import "../styles/ToscanaDream.css";
import "../styles/test.css";
import "../styles/Fonts.css";
// import TrySlider from "../components/TrySlider";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// const scrollimages = [
// 	{
// 		id: 1,
// 		url: "/Cdream/Conference Room .jpg",
// 		title: "Conference Room",
// 		text: "The Mercurio Conference Room (with seating for more than 100) and other rooms with video wall, audio system, microphones, video projectors, video cameras, screens and technical equipment, are all available upon request.",
// 	},
// 	{
// 		id: 2,
// 		url: "/Cdream/Costa Shop.png",
// 		title: "Costa Shop",
// 		text: "Shopaholic? From souvenirs to big names there is something for all tastes. Choose from a thousand opportunities to make or give yourself a gift.",
// 	},
// 	{
// 		id: 3,
// 		url: "/Cdream/Excursions.png",
// 		title: "Excursions",
// 		text: "An area dedicated to shore excursions, where our tour experts will help organise your sightseeing to the places of interest in the ports we visit",
// 	},
// 	{
// 		id: 4,
// 		url: "/Cdream/Photoshop.png",
// 		title: "My moments",
// 		text: "Prints, digital photos, magnets, original gadgets and many other items to make your cruise unforgettable",
// 	},
// 	{
// 		id: 5,
// 		url: "/Cdream/Shopping on-board .jpg",
// 		title: "Shopping",
// 		text: "Shopping Gallery, with its exclusive boutiques that are perfect for window shopping or some indulgence. You can purchase beautiful gifts on board, and everything that you may need for your cruise.",
// 	},
	//   {
	//     id: 6,
	//     url: "/cdream/Disco 2.jpg",
	//     title: "Pan Disco",
	//     text: "This is the place to be, for a long night dancing away to the latest hits.",
	//   },
	//   {
	//     id: 7,
	//     url: "/cdream/Gelato at pay.jpg",
	//     title: "Gelato Bar",
	//     text: "We dare you to deny the charm of Costa Serena’s Gelato Bar which will take you right to Italy, serving authentic gelato along with other delicious sweet pastries.",
	//   },
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

function ToscanaDream({scrollimages}) {
	const [currImage, setCurrImage] = useState(1);

	const handleClick = (imageId) => {
		console.log("Image clicked:", imageId);
		setCurrImage(imageId);
	};

	return (

		<div className=" container containertd" style={{ backgroundColor: "rgb(240, 239, 239)" }}>
			<div className="row g-0 testtd">
				<div className="col d-flex img-decortd" style={{ width: "75%", position: "relative" }}>
					<div className="custom-col-2-td">
						<div className="image-containertd" style={{ position: "relative", zIndex: "1" }}>
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
											<div className={ image.id == currImage ? "image-container overlay" : "image-container" } 
												onClick={() => handleClick(image.id)}
											>
												<img
													key={image.id}
													className="image-carousel"
													style={{ filter: image.id == currImage 
														? "brightness(60%) saturate(120%) hue-rotate(180deg)"
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
				<div className="col d-flex text-decortd" style={{ width: "25%" }}>
					<div className="custom-col-1-td" style={{ width: "100%", display: "d-flex", position:'relative' }}>
						<p className="categorytd PoppReg">SERVICES ON BOARD</p>
						<h1 className="titletd PoppBold">
							{scrollimages[currImage - 1].title}
						</h1>
						<p className="subtitletd PoppReg">
							{scrollimages[currImage - 1].text}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ToscanaDream;
