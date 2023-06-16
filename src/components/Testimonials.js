import React from "react";
import "../styles/Testimonials.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const content = [
  {
    id: "1",
    text: "If there is one thing the Italians do brilliantly, it is celebrations, food & family – just like us Indians!! It is wonderful that Costa is luring Indians to enjoy a holiday, visit places and celebrate – all on the luxuries of a cruise. They have understood that like them, Indians love to travel with a large group of family and friends and will not compromise on food which is why they have made every effort to ensure there is plenty of Indian cuisine on board for vegetarians too.",
    name: "Sarina",
    url: "/Testimonials/Sarina.jpg",
  },
  {
    id: "2",
    text: "This was my third time onboard Costa Cruises. I had cruised with my large family of 20 of us on Costa Victoria when they were sailing from Mumbai to Cochin in 2019. We were really happy with all the services, food, and drinks. The staff were very friendly, and the way they took care of us with their hospitality was commendable.",
    name: "Krishna Nair",
    url: "/Testimonials/Krishna Nair.jpeg",
  },
  {
    id: "3",
    text: "I have cruised on Costa several times, my first cruise being in 2015. The grandeur of the ships combined with their hospitality has made mair loyal cruising traveller. What I like most onboard is their endless enentertainment,hich is world-class. Very excited for Costa Cruises to be starting their India sailings from Nov 2023 on the biggest ship. ",
    name: "Savita Vig",
    url: "/Testimonials/Savita Vig .jpeg",
  },
  {
    id: "4",
    text: "Costa Cruise provided me with a voyage filled with fine luxury and cherished memories. From the moment I stepped on board, I was greeted with impeccable service, luxurious accommodations, and exquisite gourmet options. Their attention to detail and the world-class entertainment made every moment truly unforgettable. I am already planning my next cruise vacation with Costa Cruise!",
    name: "Sanket Bolinjkar",
    url: "/Testimonials/testimon4.jpeg",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 100
  },

  tablet: {
    breakpoint: { max: 1024, min: 700 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 100
  },

  mobile: {
    breakpoint: { max: 700, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 100
  },
};

function Testimonials() {
  return (
    <section id="Testimonials">
      <div className="test-box">
        <div className="test-content">
          <div className="test-heading" >
            <h3 className="test-title PoppBold" style={{ fontWeight: 600 }}>
              Testimonials
            </h3>
            <p className="test-subtitle PoppReg" style={{ fontWeight: 400 }}>
              What our customers are saying about us
            </p>
            <div className="test-videos ">
               {/* <div className="container container-tesimonial"> */}
                <div className="row row-testimonial" > 
                <Carousel
                  responsive={responsive}
                  showDots={false}
                  arrows={false}
                  draggable={true}
                  swipeable={true}
                  centerMode={false}
                  infinite={true}
                  autoPlay={true}
                  autoPlaySpeed={2000}
                  partialVisbile={false}
                >
                  {content.map((cont) => {
                    return (
                      <div key={cont.id} className="col-sm-4 box col-setting" >
                        <div
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <img
                            className="star-setting"
                            src={process.env.PUBLIC_URL + "/4star.png"}
                          ></img>
                        </div>
                        <div
                          style={{
                            // flexGrow: "1",
                            display: "flex",
                            justifyContent: "space-between",
                            flexDirection: "column",
                            height: "85%",
                            // backgroundColor:'purple'
                          }}
                        >
                          <div style={{ justifyContent: "flex-start" }}>
                            <p className="text-setting PoppReg">{cont.text}</p>
                          </div>
                          <div
                            className="end-allin"
                            // style={{ justifyContent: "flex-end" }}
                          >
                            <div
                              className="row align-items-end"
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "flex-end",
                              }}
                            >
                              <div className="col-sm d-flex align-items-center info-set">
                                <div className="circular-image-container3 mx-3">
                                  <img
                                    src={process.env.PUBLIC_URL + cont.url}
                                    className="dp3-setting"
                                  />
                                </div>
                                <div className="ml-3 info-setting">
                                  <h3
                                    className="name PoppReg"
                                    style={{ fontWeight: 700 }}
                                  >
                                    {cont.name}
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  </Carousel> 
                {/* </div> */}
              </div> 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
