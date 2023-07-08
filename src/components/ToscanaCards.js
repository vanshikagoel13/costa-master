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
		url: "/ScrollHome/image8.png",
		title: "Doha",
		days: "7",
		dates: "16 Dec, 23 Dec, 30 Dec 2023; 06 Jan, 13 Jan, 20 Jan, 27 Jan, 29 Jan 03 Feb, 10 Feb, 17 Feb, 24 Feb, 02 Mar 2024",
		loc: "DUBAI – ABU DHABI - DOHA – CRUISING - MUSCAT – DUBAI (7 NIGHTS)",
		// date: "18 Dec 2023",
		price: "₹39,500",
		book: "https://www.costacruiseindia.com/costa-toscana-7-nights-dubai-united-arab-emirates-united-arab-emirates-oman",
	},
	{
		id: 2,
		url: "/ScrollHome/image9.jpg",
		title: "Muscat",
		days: "4",
		dates: "18 Dec, 25 Dec 2023; 01 Jan, 08 Jan, 15 Jan, 22 Jan, 29 Jan 05 Feb, 12 Feb, 19 Feb, 26 Feb, 04 Mar 2024",
		loc: "ABU DHABI – DOHA – CRUISING - MUSCAT – DUBAI",
		// date: "16 Dec 2023",
		price: "₹34,849",
		book: "https://www.costacruiseindia.com/costa-toscana-4-nights-abu-dhabi-united-arab-emirates",
	},
	{
		id: 3,
		url: "/ScrollHome/image7.jpg",
		title: "Dubai",
		days: "2",
		dates: "16 Dec 2023",
		loc: "DUBAI – DUBAI – ABU DHABI (2 NIGHTS)",
		// date: "16 Dec 2023",
		price: "₹17,559",
		book: "https://www.costacruiseindia.com/costa-toscana-2-nights-dubai-united-arab-emirates",
	},
	{
		id: 4,
		url: "/ScrollHome/image6.jpg",
		title: "Abu Dhabi",
		days: "3",
		dates: "22 Dec, 29 Dec 2023; 05 Jan, 12 Jan, 19 Jan, 26 Jan, 02 Feb, 09 Feb, 16 Feb, 23 Feb, 01 Mar, 08 Mar 2024",
		loc: "DUBAI – DUBAI – ABU DHABI (2 NIGHTS)",
		// date: "16 Dec 2023",
		price: "₹26,204",
		book: "https://www.costacruiseindia.com/costa-toscana-3-nights-dubai-united-arab-emirates",
	},
];

function ToscanaCards() {
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

export default ToscanaCards;


{/* <h6 className="departure-tc-1 PoppReg"><small className="text-muted">{image.date}</small></h6> */ }