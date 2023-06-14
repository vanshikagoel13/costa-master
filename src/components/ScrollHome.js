// import React from "react";
// import "../styles/ScrollHome.css";
// import "../styles/Fonts.css";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

// const responsive = {

// 	desktop: {
// 		breakpoint: { max: 3000, min: 1300 },
// 		items: 4,
// 		slidesToSlide: 1, 
// 	},

// 	desktopp: {
// 		breakpoint: { max: 1300, min: 1024 },
// 		items: 3,
// 		slidesToSlide: 1, 
// 	},

// 	tablet: {
// 		breakpoint: { max: 1024, min: 600 },
// 		items: 2,
// 		slidesToSlide: 1,
// 	},

// 	mobile: {
// 		breakpoint: { max: 600, min: 0 },
// 		items: 1,
// 		slidesToSlide: 1, 
// 	},
// };

// const images = [
// 	{
// 		id: 1,
// 		url: "/ScrollHome/image1.jpg",
// 		title: "Northern Europe",
// 		dates: "5 departures from",
// 		loc: "From Mumbai",
// 		date: "24 Nov 2023",
// 		price: "₹17,400",
// 	},
// 	{
// 		id: 2,
// 		url: "/ScrollHome/image2.jpg",
// 		title: "Northern Europe",
// 		dates: "8 departures from",
// 		loc: "From Mumbai",
// 		date: "04 Nov 2023",
// 		price: "₹21,950",
// 	},
// 	{
// 		id: 3,
// 		url: "/ScrollHome/image3.jpg",
// 		title: "Northern Europe",
// 		dates: "4 departures from",
// 		loc: "From Cochin",
// 		date: "21 Nov 2023",
// 		price: "₹24,950",
// 	},
// 	{
// 		id: 4,
// 		url: "/ScrollHome/image4.png",
// 		title: "Northern Europe",
// 		dates: "4 departures from",
// 		loc: "From Mumbai",
// 		date: "19 Nov 2023",
// 		price: "₹15,600",
// 	},
// 	{
// 		id: 5,
// 		url: "/ScrollHome/image5.png",
// 		title: "Northern Europe",
// 		dates: "4 departures from",
// 		loc: "From Mumbai",
// 		date: "19 Nov 2023",
// 		price: "$2869",
// 	},
// 	{
// 		id: 6,
// 		url: "/ScrollHome/image6.jpg",
// 		title: "Northern Europe",
// 		dates: "1 departure from",
// 		loc: "From Dubai",
// 		date: "16 Dec 2023",
// 		price: "₹8,559",
// 	},
// 	{
// 		id: 7,
// 		url: "/ScrollHome/image7.jpg",
// 		title: "Northern Europe",
// 		dates: "12 departures from",
// 		loc: "From Dubai",
// 		date: "22 Dec 2023",
// 		price: "₹15,475",
// 	},
// 	{
// 		id: 8,
// 		url: "/ScrollHome/image8.png",
// 		title: "Northern Europe",
// 		dates: "12 departures from",
// 		loc: "From Abu Dhabi",
// 		date: "18 Dec 2023",
// 		price: "₹25,849",
// 	},
// 	{
// 		id: 9,
// 		url: "/ScrollHome/image9.jpg",
// 		title: "Northern Europe",
// 		dates: "12 departures from",
// 		loc: "From Dubai",
// 		date: "16 Dec 2023",
// 		price: "₹18,069",
// 	},
// ];

// function ScrollHome() {

// 	return (

// 		<div className="container-sh">
		
// 			<h3 className="PoppBold" style={{ marginBottom: "1%" }}>
// 				Discover our India & Emirates itineraries - LIVE YOUR HOLIDAY TO THE FULLEST!
// 			</h3>
// 			<h6 className="PoppReg" style={{ marginBottom: "1%", fontWeight: 500 }}>
// 				Explore these marvellous destinations on some of the largest cruise ships and embark on a once-in-a-lifetime journey.
// 			</h6>
// 			<div className="gd-carousel-wrapper" style={{ marginTop: '30px' }}>
// 				<Carousel
// 					responsive={responsive}
// 					showDots={false}
// 					arrows={false}
// 					swipeable={true}
// 					draggable={true}
// 					centerMode={false}
// 					infinite={true}
// 					autoPlay={true}
// 					autoPlaySpeed={2000}
// 					partialVisbile={false}
// 					className="gd-carousel-sh"
					
// 				>
// 					{images.map((image) => {
// 						return (
// 							<div className="card-sh flex" style={{marginRight:'5%'}}>
// 								<div className="image-body-sh" style={{ height: "40%" }}>
// 									<img src={process.env.PUBLIC_URL + image.url} className="card-img-top-sh img-fluid zoom" alt="..."></img>
// 								</div>
// 								<div className="card-body-sh" style={{ justifyContent: "space-between" }}>
// 									<div style={{ justifyItems: "flex-start", marginLeft: "1%", marginRight: "1%", marginTop: "1%", }}>
// 										<h5 className="card-title-sh PoppReg" style={{ fontWeight: "700" }}>{image.title}</h5>
// 										<h6 className="card-subtitle-sh PoppReg">{image.loc}</h6>
// 										<h className="departure-sh PoppReg"><small className="text-muted">{image.dates}<br /></small></h>
// 										<h className="departure-sh-1 PoppReg"><small className="text-muted">{image.date}</small></h>
										
// 										<p className="price-per-person-sh PoppReg"><small className="text-muted">Price per person from</small></p>
// 										<h4 className="price-sh PoppReg">{image.price}</h4>
// 										<p className="taxes-sh PoppReg"><small className="text-muted">Mandatory gratuities, port taxes, taxes are not included in the above price.</small></p>
// 										<button className="button-sh PoppReg">Explore Cruises</button>
// 									</div>
// 								</div>
// 							</div>
// 						);
// 					})}
// 				</Carousel>
// 			</div>
// 		</div>
// 	);
// }

// export default ScrollHome;

import React from "react";
import "../styles/ScrollHome.css";
import "../styles/Fonts.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {

	desktop: {
		breakpoint: { max: 3000, min: 1300 },
		items: 4,
		slidesToSlide: 1, // optional, default to 1.
		// partialVisibilityGutter: 100
	},

	desktopp: {
		breakpoint: { max: 1300, min: 1024 },
		items: 3,
		slidesToSlide: 1, // optional, default to 1.
		// partialVisibilityGutter: 100
	},

	tablet: {
		breakpoint: { max: 1024, min: 600 },
		items: 2,
		slidesToSlide: 1, // optional, default to 1.
		// partialVisibilityGutter: 100
	},

	mobile: {
		breakpoint: { max: 600, min: 0 },
		items: 1,
		slidesToSlide: 1, // optional, default to 1.
		// partialVisibilityGutter: 100
	},
};

const images = [
	{
		id: 1,
		url: "/ScrollHome/image1.jpg",
		title: "Mumbai Taj Hotel, Gateway",
		days: "2",
		dates: "5 departures from",
		loc: "From Mumbai",
		date: "24 Nov 2023",
		price: "₹17,400",
	},
	{
		id: 2,
		url: "/ScrollHome/image2.jpg",
		title: "Mumbai Sea Link",
		days: "3",
		dates: "8 departures from",
		loc: "From Mumbai",
		date: "04 Nov 2023",
		price: "₹21,950",
	},
	{
		id: 3,
		url: "/ScrollHome/image3.jpg",
		title: "Cochin",
		days: "3",
		dates: "4 departures from",
		loc: "From Cochin",
		date: "21 Nov 2023",
		price: "₹24,950",
	},
	{
		id: 4,
		url: "/ScrollHome/image4.png",
		title: "Cochin",
		days: "2",
		dates: "4 departures from",
		loc: "From Mumbai",
		date: "19 Nov 2023",
		price: "₹15,600",
	},
	{
		id: 5,
		url: "/ScrollHome/image5.png",
		title: "Goa",
		days: "5",
		dates: "4 departures from",
		loc: "From Mumbai",
		date: "19 Nov 2023",
		price: "$2869",
	},
	{
		id: 6,
		url: "/ScrollHome/image6.jpg",
		title: "Abu Dhabi",
		days: "2",
		dates: "1 departure from",
		loc: "From Dubai",
		date: "16 Dec 2023",
		price: "₹8,559",
	},
	{
		id: 7,
		url: "/ScrollHome/image7.jpg",
		title: "Dubai",
		days: "3",
		dates: "12 departures from",
		loc: "From Dubai",
		date: "22 Dec 2023",
		price: "₹15,475",
	},
	{
		id: 8,
		url: "/ScrollHome/image8.png",
		title: "Doha",
		days: "4",
		dates: "12 departures from",
		loc: "From Abu Dhabi",
		date: "18 Dec 2023",
		price: "₹25,849",
	},
	{
		id: 9,
		url: "/ScrollHome/image9.jpg",
		title: "Muscat",
		days: "7",
		dates: "12 departures from",
		loc: "From Dubai",
		date: "16 Dec 2023",
		price: "₹18,069",
	},
];

function ScrollHome() {

	return (

		<div className="container-sh">
			<h3 className="PoppBold" style={{ marginBottom: "1%" }}>
				Discover our India & Emirates itineraries - LIVE YOUR HOLIDAY TO THE FULLEST!
			</h3>
			<h6 className="PoppReg" style={{ marginBottom: "1%", fontWeight: 500 }}>
				Explore these marvellous destinations on some of the largest cruise ships and embark on a once-in-a-lifetime journey.
			</h6>
			<div className="gd-carousel-wrapper" style={{ marginTop: '30px' }}>
				<Carousel
					responsive={responsive}
					showDots={false}
					arrows={false}
					swipeable={true}
					draggable={true}
					centerMode={false}
					infinite={true}
					autoPlay={true}
					autoPlaySpeed={2000}
					partialVisbile={false}
					className="gd-carousel-sh"
				>
					{images.map((image) => {
						return (
							<div className="card-sh flex" style={{ marginRight: '5%' }}>
								<div className="image-body-sh" style={{ height: "40%" }}>
									<img src={process.env.PUBLIC_URL + image.url} className="card-img-top-sh img-fluid zoom" alt="..."></img>
									<div className="banner-content-home">
										<h className="banner-title-home PoppReg">{image.days}</h>
										<h className="banner-subtitle-home PoppReg">nights</h>
									</div>
								</div>

								<div className="card-body-sh" style={{ justifyContent: "space-between" }}>
									<div style={{ justifyItems: "flex-start", marginLeft: "1%", marginRight: "1%", marginTop: "1%", }}>
										<h5 className="card-title-sh PoppReg" style={{ fontWeight: "700" }}>{image.title}</h5>
										<h6 className="card-subtitle-sh PoppReg">{image.loc}</h6>
										<h className="departure-sh PoppReg"><small className="text-muted">{image.dates}<br /></small></h>
										<h className="departure-sh-1 PoppReg"><small className="text-muted">{image.date}</small></h>
										<p className="price-per-person-sh PoppReg"><small className="text-muted">Price per person from</small></p>
										<h4 className="price-sh PoppReg">{image.price}</h4>
										<p className="taxes-sh PoppReg"><small className="text-muted">Mandatory gratuities, port taxes, taxes are not included in the above price.</small></p>
										<button className="button-sh PoppReg">Explore Cruises</button>
									</div>
								</div>
							</div>
						);
					})}
				</Carousel>
			</div>
		</div>
	);
}

export default ScrollHome;

