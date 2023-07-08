import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/ToscanaFlagScroll.css";
import React, {useEffect, useState} from "react";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 100
  },

  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 100
  },

  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 100
  },
};

function ToscanaFlagScroll({ scrollimg }) {
  const [tog, setTog] = useState(false);

	useEffect(() => {

		const handleResize = () => {

			const screenWidth = window.innerWidth;

			if (screenWidth < 800) {

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
    <div>
      <Carousel
        responsive={responsive}
        showDots={true}
        arrows={false}
        swipeable={true}
        centerMode={!tog ? true : false}
        infinite={true}
        // partialVisbile={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        preventMovementUntilSwipeScrollTolerance={false}
      >
        {scrollimg.map((image) => {
          return (
            <div className="item-flag" key={image.id}>
              <div className="image-container-flag carousel-dots">
                <img
                  className="image-carousel-flag"
                  src={process.env.PUBLIC_URL + image.url}
                  key={image.id}
                />
                {/* <div className='image-text'>{image.text}</div> */}
                <p className="cabin-below-text-flag PoppReg">{image.text}</p>
              </div>
              
            </div>
          );
        })}
      </Carousel>
      <p></p>
    </div>
  );
}

export default ToscanaFlagScroll;
