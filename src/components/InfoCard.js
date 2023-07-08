import React from "react";
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
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Carousel
          responsive={responsive}
          showDots={false}
          arrows={false}
          swipeable={true}
          centerMode={false}
          // infinite={true}
          autoPlay={false}
          // autoPlaySpeed={2000}
          partialVisbile={false}
        >
          {comp.images.map((image) => {
            return (
              <div className="image-body-ic zoom">
                <img
                  src={process.env.PUBLIC_URL + image.url}
                  className="card-img-top-ic"
                  alt="..."
                ></img>
              </div>
            );
          })}
        </Carousel>
      </div>
      <div
        className="card-body"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          paddingLeft: "0",
        }}
      >
        <div style={{ justifyContent: "flex-start" }}>
          <h5 className="card-title-info PoppBold" style={{ fontWeight: 1000 }}>
            {comp.title}
          </h5>
          <h6 className="card-subtitle PoppReg">{comp.text}</h6>
        </div>
        {/* <div style={{justifyContent:'flex-end', alignItems:'center'}}>
					<button className="button-info PoppReg" style={{ fontWeight: "600" }}>Explore More</button>
				</div> */}
      </div>
    </div>
  );
}

export default InfoCard;
