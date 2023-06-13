import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/OfferSection.css";
import { useState, useEffect } from "react";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 10,
  },

  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 10,
  },

  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 10,
  },
};

const images = [
  {
    id: 1,
    url: "/Offer-Section/offer1.png",
    cta: "Know more",
  },
  {
    id: 2,
    url: "/Offer-Section/offer1.png",
    cta: "Know more",
  },
  {
    id: 3,
    url: "/Offer-Section/offer1.png",
    cta: "Book your cruise",
  },
];

// const [tog, setTog] = useState(false);

// const setToggle = () => {
//     setTog(!tog);
// }

function OfferSection() {
  const [tog, setTog] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      // Modify the below value (800) as per your desired screen width breakpoint
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
      <h2 className="PoppBold heading-offersection">Irresistible Deals</h2>
      <h4
        className="PoppReg subhead-offersection"
        style={{ marginBottom: "1%", fontWeight: 500 }}
      >
        Grab the hottest deals now and embark on your ultimate getaway with
        Costa Cruise
      </h4>
      <div className="offer-zone-os">
        <Carousel
          responsive={responsive}
          showDots={true}
          arrows={false}
          swipeable={true}
          centerMode={!tog ? true : false}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          className="allin-offer"
          itemClass="carousel-item-new"
          preventMovementUntilSwipeScrollTolerance={false}
          
        >
          {images.map((image) => {
            return (
                <div className="item-flag-os " key={image.id}>
                  <div className="image-container-flag-os component-background-offer">
                    <img
                      className="image-carousel-flag-os"
                      src={process.env.PUBLIC_URL + image.url}
                      key={image.id}
                    />
                  </div>
                  <div className="content-offer-pos">
                    <a href="#" className="image-cta PoppMed font-nav-cta" >{image.cta} -&gt;</a>
                  </div>
                </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default OfferSection;
