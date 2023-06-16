// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import "../styles/OfferSection.css";
// import { useState, useEffect } from "react";

// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 1,
//     slidesToSlide: 1, 
//     partialVisibilityGutter: 10,
//   },

//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 1,
//     slidesToSlide: 1,
//     partialVisibilityGutter: 10,
//   },

//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//     slidesToSlide: 1, 
//     partialVisibilityGutter: 10,
//   },
// };

// const images = [
//   {
//     id: 1,
//     url: "/Offer-Section/offer1.png",
//     cta: "Know more",
//   },
//   {
//     id: 2,
//     url: "/Offer-Section/offer1.png",
//     cta: "Know more",
//   },
//   {
//     id: 3,
//     url: "/Offer-Section/offer1.png",
//     cta: "Book your cruise",
//   },
// ];

// function OfferSection() {
//   const [tog, setTog] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       const screenWidth = window.innerWidth;
  
//       if (screenWidth < 1000) {
//         setTog(true);
//       } else {
//         setTog(false);
//       }
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);
//   return (
//     <div className="container-offersec">
//       <h3 className="PoppBold heading-offersection">Irresistible Deals</h3>
//       <h6
//         className="PoppReg subhead-offersection"
//         style={{ marginBottom: "1%", fontWeight: 500 }}
//       >
//         Grab the hottest deals now and embark on your ultimate getaway with
//         Costa Cruise
//       </h6>
//       <div className="offer-zone-os">
//         <Carousel
//           responsive={responsive}
//           showDots={true}
//           arrows={false}
//           swipeable={true}
//           centerMode={!tog ? true : false}
//           infinite={true}
//           autoPlay={true}
//           autoPlaySpeed={2000}
//           className="allin-offer"
//           itemClass="carousel-item-new"
//           preventMovementUntilSwipeScrollTolerance={false}
          
//         >
//           {images.map((image) => {
//             return (
//                 <div className="item-flag-os " key={image.id}>
//                   <div className="image-container-flag-os component-background-offer">
//                     <img
//                       className="image-carousel-flag-os"
//                       src={process.env.PUBLIC_URL + image.url}
//                       key={image.id}
//                     />
//                   </div>
//                   <div className="content-offer-pos">
//                     <a href="#" className="image-cta PoppMed font-nav-cta" >{image.cta} -&gt;</a>
//                   </div>
//                 </div>
//             );
//           })}
//         </Carousel>
//       </div>
//     </div>
//   );
// }

// export default OfferSection;

import "../styles/OfferSection.css";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [

	{
		id: 1,
		url: "/Offer-Section/Homev1.png",
		cta: "Know more",
	},
	{
		id: 2,
		url: "/Offer-Section/Homev2.png",
		cta: "Know more",
	},
	{
		id: 3,
		url: "/Offer-Section/Homev3.png",
		cta: "Book your cruise",
	},
];

function OfferSection() {

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
	};

	const [tog, setTog] = useState(false);

	useEffect(() => {

		const handleResize = () => {

			const screenWidth = window.innerWidth;

			if (screenWidth < 1000) {

				setTog(true);
			} else {

				setTog(false);
			}
		};

		// Add event listener to detect window resize
		window.addEventListener("resize", handleResize);

		// Clean up the event listener on component unmount
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (

		<div className="container-offersec">
			<h3 className="PoppBold heading-offersection">Irresistible Deals</h3>
			<h4
				className="PoppReg subhead-offersection"
				style={{ marginBottom: "1%", fontWeight: 500 }}
			>
				Grab the hottest deals now and embark on your ultimate getaway with
				Costa Cruise
			</h4>
			<div>
				<Slider {...settings}>
					{images.map((item) => (
						<div className="image-container-offer" key={item.id}>
							<div className="component-background-offer">
								<img src={process.env.PUBLIC_URL + item.url} className="background-image-offer"></img>
							</div>
							<div className="banner-content-offer">
								<h5 className="banner-subtitle-offer cta-hover-offer PoppBold">{item.cta}&nbsp;&rarr;</h5>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
}

export default OfferSection;

