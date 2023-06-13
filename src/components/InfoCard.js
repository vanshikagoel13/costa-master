import React from "react";
import OfferPic from "../images/travel.jpeg";
import "../styles/infoCard.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {

	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 1,
		slidesToSlide: 1, // optional, default to 1.
		// partialVisibilityGutter: 100
	},

	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 1,
		slidesToSlide: 1, // optional, default to 1.
		// partialVisibilityGutter: 100
	},

	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
		slidesToSlide: 1, // optional, default to 1.
		// partialVisibilityGutter: 100
	},
};

function InfoCard({ comp }) {

	return (

		<div className="card card-info mx-2">
			<div style={{display:'flex', flexDirection:'column'}}>
				<Carousel
					responsive={responsive}
					showDots={false}
					arrows={false}
					swipeable={true}
					centerMode={false}
					infinite={true}
					autoPlay={true}
					autoPlaySpeed={2000}
					partialVisbile={false}
				>
					{comp.images.map((image) => {
						return (
							<div className="image-body-ic zoom">
								<img src={process.env.PUBLIC_URL + image.url} className="card-img-top-ic" alt="..."></img>
							</div>
						);
					})}
				</Carousel>
			</div>
			<div className="card-body" style={{display: 'flex', flexDirection:'column', justifyContent:'space-between'}}>
				<div style={{justifyContent:'flex-start', marginBottom:'3%'}}>
					<h5 className="card-title-info PoppReg" style={{ fontWeight: 1000 }}>{comp.title}</h5>
					<h6 className="card-title-info card-subtitle AltReg">{comp.text}</h6>
				</div>
				<div style={{justifyContent:'flex-end', alignItems:'center'}}>
					<button className="button-info PoppReg" style={{ fontWeight: "600" }}>Explore More</button>
				</div>
			</div>
		</div>
	);
}

export default InfoCard;

/*
<div className="container-sh">
			{/* <div> }
			<h3 className="PoppBold" style={{ marginBottom: "1%" }}>
				Discover our India & Emirates itineraries - LIVE YOUR HOLIDAY TO THE FULLEST!
			</h3>
			<h6 className="PoppReg" style={{ marginBottom: "1%", fontWeight: 500 }}>
				Explore these marvellous destinations on some of the largest cruise ships and embark on a once-in-a-lifetime journey.
			</h6>
			<div className="gd-carousel-wrapper">
				<Carousel
					responsive={responsive}
					showDots={false}
					arrows={true}
					swipeable={true}
					centerMode={false}
					infinite={true}
					autoPlay={true}
					autoPlaySpeed={2000}
					partialVisbile={false}
					className="gd-carousel"
				>
					{images.map((image) => {
						return (
							<div className="card-sh mx-4 flex">
								<div className="image-body-sh" style={{ height: "40%" }}>
									<img src={process.env.PUBLIC_URL + image.url} className="card-img-top-sh" alt="..."></img>
								</div>
								<div className="card-body-sh" style={{ justifyContent: "space-between" }}>
									<div style={{ justifyItems: "flex-start", marginLeft: "1%", marginRight: "1%", marginTop: "1%",}}>
										<h5 className="card-title-sh PoppReg" style={{ fontWeight: "700" }}>{image.title}</h5>
										<h6 className="card-subtitle-sh PoppReg">{image.loc}</h6>
										<p className="departure-sh PoppReg"><small className="text-muted">{image.days}</small></p>
										<p className="departure-sh PoppReg"><small className="text-muted">Departure Dates: {image.date}</small></p>
										{/* <p className="card-text-sh departure-date-sh PoppReg"><small className="text-muted">{image.date}</small></p>}
									</div>
									<div style={{ justifyItems: "flex-end", marginLeft: "1%", marginRight: "1%",}}>
										<p className="price-per-person-sh PoppReg"><small className="text-muted">Price per person</small></p>
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
			{/* </div> }
		</div>

*/