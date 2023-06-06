import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Hstyle.css";
import "../styles/Fonts.css";

function HorizontalScroll() {
	const items = [
		{ id: 1, url: "/c1.png" },
		{ id: 2, url: "/c2.png" },
	];

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
	};

	return (
		<div className="horizontal-scroll-container">
			<h3 className="header-style AltBold" >Unmissable news</h3>
			<div>
				<Slider {...settings}>
					{items.map((item) => (
						<div className="image-container" key={item.id} style={{ backgroundColor: 'pink' }}>
							<img
								src={process.env.PUBLIC_URL + item.url}
								alt={`Image ${item.id}`}
								className="img-fluid zoom"
							/>
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
}

export default HorizontalScroll;
