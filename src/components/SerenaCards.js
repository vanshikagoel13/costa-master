import React from "react";
import "../styles/ToscanaCards.css";
import "../styles/Fonts.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState, useEffect } from "react";
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
		dates: "06 Dec, 17 Dec, 22 Dec 2023",
		loc: "MUMBAI – GOA – MUMBA",
		// date: "24 Nov 2023",
		price: "₹26,400",
		book: "https://www.costacruiseindia.com/costa-serena-2-nights-mumbai-goa-mumbai",
	},
	{
		id: 2,
		url: "/ScrollHome/image2.jpg",
		title: "Mumbai Sea Link",
		days: "2",
		dates: "24 Nov, 01 Dec, 08 Dec, 15 Dec 2023 ",
		loc: "MUMBAI – CRUISING – MUMBAI ",
		// date: "04 Nov 2023",
		price: "₹26,400",
		book: "https://www.costacruiseindia.com/costa-serena-2-nights-mumbai-cruising-mumbai",
	},
	{
		id: 3,
		url: "/ScrollHome/image3.jpg",
		title: "Cochin",
		days: "3",
		dates: "21 Nov, 12 Dec 2023",
		loc: "COCHIN – CRUISING – GOA MORMUGAO – MUMBAI",
		// date: "21 Nov 2023",
		price: "₹33,950",
		book: "https://www.costacruiseindia.com/costa-serena-3-nights-cochin-cruising-goa-mumbai",
	},
	{
		id: 4,
		url: "/ScrollHome/image4.png",
		title: "Cochin",
		days: "2",
		dates: "19 Nov, 26 Nov, 10 Dec, 24 Dec 2023",
		loc: "MUMBAI – CRUISING – COCHIN",
		// date: "19 Nov 2023",
		price: "₹24,600",
		book: "https://www.costacruiseindia.com/costa-serena-2-nights-mumbai-cruising-cochin",
	},
	{
		id: 5,
		url: "/ScrollHome/image5.png",
		title: "Goa",
		days: "3",
		dates: "04 Nov, 07 Nov, 03 Dec, 19 Dec 2023 ",
		loc: "MUMBAI – CRUISING – GOA MORMUGAO – MUMBAI",
		// date: "19 Nov 2023",
		price: "₹30,950",
		book: "https://www.costacruiseindia.com/costa-serena-3-nights-mumbai-cruising-goa-mumbai",
	},
	{
		id: 6,
		url: "/ScrollHome/image2.jpg",
		title: "Mumbai",
		days: "3",
		dates: "10 Nov, 13 Nov, 16 Nov, 29 Dec 2023",
		loc: "MUMBAI – GOA MORMUGAO - GOA MORMUGAO – MUMBAI",
		// date: "16 Dec 2023",
		price: "₹33,950",
		book: "https://www.costacruiseindia.com/costa-serena-3-nights-mumbai-goa-goa-mumbai-diwali-new-year",
	},
	{
		id: 7,
		url: "/ScrollHome/image1.jpg",
		title: "Lakshwadweep",
		days: "3",
		dates: "28 Nov, 26 Dec 2023",
		loc: "COCHIN – AGATTI ISLAND INDIA, LAKSHADWEEP – CRUISING - MUMBAI",
		// date: "22 Dec 2023",
		price: "₹33,950",
		book: "https://www.costacruiseindia.com/costa-serena-3-nights-cochin-lakshadweep-cruising-mumbai",
	},
    {
		id: 8,
		url: "/ScrollHome/image3.jpg",
		title: "Cochin",
		days: "5",
		dates: "26 Nov, 24 Dec 2023",
		loc: "8.	MUMBAI – CRUISING – COCHIN- AGATTI ISLAND INDIA, LAKSHADWEEP – CRUISING - MUMBAI",
		// date: "22 Dec 2023",
		price: "₹51,900",
		book: "https://www.costacruiseindia.com/costa-serena-5-nights-mumbai-cruising-cochin-lakshadweep-cruising-mumbai",
	},
    {
		id: 9,
		url: "/ScrollHome/image5.png",
		title: "Goa",
		days: "5",
		dates: "19 Nov, 10 Dec 2023",
		loc: "MUMBAI – CRUISING – COCHIN- CRUISING – GOA MORMUGAO - MUMBAI",
		// date: "22 Dec 2023",
		price: "₹51,900",
		book: "https://www.costacruiseindia.com/costa-serena-5-nights-mumbai-cruising-cochin-cruising-goa-mumbai",
	},

	// {
	// 	id: 8,
	// 	url: "/ScrollHome/image8.png",
	// 	title: "Doha",
	// 	days: "4",
	// 	dates: "12 departures from",
	// 	loc: "From Abu Dhabi",
	// 	date: "18 Dec 2023",
	// 	price: "₹25,849",
	// 	book: "#",
	// },
	// {
	// 	id: 9,
	// 	url: "/ScrollHome/image9.jpg",
	// 	title: "Muscat",
	// 	days: "7",
	// 	dates: "12 departures from",
	// 	loc: "From Dubai",
	// 	date: "16 Dec 2023",
	// 	price: "₹18,069",
	// 	book: "#",
	// },
];

function SerenaCards() {
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
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	return (

		<div className="container-tc">
			{/* <h3 className=" heading-scrollhome PoppBold" style={{ marginBottom: "1%" }}>
				Discover our India & Emirates itineraries - LIVE YOUR HOLIDAY TO THE FULLEST!
			</h3>
			<h6 className=" subheading-scrollhome PoppReg" style={{ marginBottom: "1%", fontWeight: 500 }}>
				Explore these marvellous destinations on some of the largest cruise ships and embark on a once-in-a-lifetime journey.
			</h6> */}
			<div className="gd-carousel-wrapper" style={{ marginTop: '30px' }}>
				<Carousel
					responsive={responsive}
					showDots={false}
					arrows={!tog1 ? true : false}
					swipeable={true}
					draggable={true}
					centerMode={false}
					infinite={true}
					autoPlay={true}
					autoPlaySpeed={2000}
					partialVisbile={false}
					className="gd-carousel-tc"
				>
					{images.map((image) => {
						return (
							<div className="card-tc flex" style={{ marginRight: '5%' }}>
								<div className="image-body-tc" style={{ height: "40%" }}>
									<img src={process.env.PUBLIC_URL + image.url} className="card-img-top-tc img-fluid zoom" alt="..."></img>
									<div className="banner-content-home">
										<h6 className="banner-title-home PoppReg">{image.days}</h6>
										<h6 className="banner-subtitle-home PoppReg">nights</h6>
									</div>
								</div>

								<div className="card-body-tc" style={{ height: '60%' }}>
									<div style={{ margin: '1%', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between'}}>
										<div style={{display:'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%'}}>
											<div>
												<h5 className="card-title-tc PoppReg" style={{ fontWeight: "700" }}>{image.title}</h5>
												<h6 className="card-subtitle-tc PoppReg">{image.loc}</h6>
											</div>
											<div style={{ justifyContent: 'flex-end' }}>
												<h6 className="departure-tc PoppReg"><small className="text-muted">Departure Dates</small></h6>
												<h6 className="departure-tc-1 PoppReg"><small className="text-muted">{image.dates}<br /></small></h6>
											</div>
										</div>
										<div style={{ justifyContent: 'flex-end' }}>
											<p className="price-per-person-tc PoppReg"><small className="text-muted">Price per person from</small></p>
											<h4 className="price-tc PoppReg">{image.price}</h4>
											<p className="taxes-tc PoppReg"><small className="text-muted">Mandatory gratuities, port taxes, taxes are not included in the above price.</small></p>
											<a href={image.book} style={{ textDecoration: 'none' }}><button className="button-tc PoppReg">Book Now</button></a>
										</div>
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

export default SerenaCards;

