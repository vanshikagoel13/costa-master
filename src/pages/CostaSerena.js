import { React, useState } from "react";
// import BannerToscana from "../components/BannerToscana";
import BannerSerena from "../components/BannerSerena";
import Footer from "../components/Footer";
import "../styles/CostaSerena.css";
import ShipDetail from "../components/ShipDetail";
import SerenaFlagship from "../components/SerenaFlagship";
import IdealCabin from "../components/IdealCabin";
// import CostanaFindCruise from "../components/CostanaFindCruise";
import ToscanaArchie from "../components/ToscanaArchie";
import ToscanaColosseo from "../components/ToscanaColosseo";
import ToscanaDream from "../components/ToscanaDream";


const images = [
  {
    id: 1,
    url: "/Pantheon Atrium .jpg",
    title: "The Ship of <u class='underline-textts'>the Gods</u>",
    text: "The ship of the gods Costa Serena is dedicated to the <b>Olympian Gods </b>and the myths of classical anquity, the source of its majesty and greatness.<br/><br/>The spectacle starts at the <b> Pantheon Atrium</b>, with its <b>panoramic lifts</b> that seem to rise to meet the sky and its <b> grandiose murals. </b> It is embellished all over with prized materials, works of art and luxurious decorations.<br/><br/> The majestic areas cocoon <u class='underline-textserena'> g</u>uests in a magical atmosphere of wellbeing. Costa Serena is a unique experience, enriched by evocative beauty.",
  },
];

function CostaSerena() {
  const [isBannerCollapsed, setIsBannerCollapsed] = useState(false);

  const handleBannerExpand = () => {
    setIsBannerCollapsed(false);
  };

  const handleBannerCollapse = () => {
    setIsBannerCollapsed(true);
  };

  return (
    <div>
      <BannerSerena
        onBanner={handleBannerExpand}
        offBanner={handleBannerCollapse}
      />
      {isBannerCollapsed ? null : (
        <>
          <div className="container">
            {images.map((image, index) => (
              <div
                key={image.id}
                className={`row rowser ${
                  index % 2 === 0 ? "flex-row-reverse" : ""
                }`}
              >
                <div className="col-lg-6 d-flex">
                  <div className="image-containerser">
                    <img
                      src={process.env.PUBLIC_URL + image.url}
                      className="img-fluid zoom image-styleser"
                      alt={image.title}
                    />
                  </div>
                </div>
                <div className="col-lg-6 text-outerser d-flex">
                  <div
                    className={`text-containerser align-self-center ${
                      index % 2 !== 0 ? "right-textser" : "right-textser"
                    }`}
                  >
                    {/* <h4 className={`PoppReg ${(index) % 2 !== 0 ? "category-style-rightser" : "category-style-leftser"}`}>{image.category}</h4> */}
                    <h3
                      className={`AltBold ${
                        index % 2 !== 0
                          ? "title-style-rightser"
                          : "title-style-rightser"
                      }`}
                    >
                      <span dangerouslySetInnerHTML={{ __html: image.title }} />
                    </h3>
                    <p
                      className={`AltReg ${
                        index % 2 !== 0
                          ? "text-style-rightser"
                          : "text-style-rightser"
                      }`}
                    >
                      <span dangerouslySetInnerHTML={{ __html: image.text }} />
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <ShipDetail />
          {/* <CostaFlagship /> */}
          <SerenaFlagship />
          <div className="showtime-container">
            <div className="showtime-box">
              <h1 className="showtime-heading PoppBold">
                On board, it's <u class="underline-textser">always showtime</u>
              </h1>
              <p className="showtime-text ALtReg">
                A memorable ship for a memorable cruise. <br /> Costa Serena
                will amaze you with its <b>large outdoor spaces</b> where you
                can enjoy sun and sea, its brightly coloures furnishings, its{" "}
                <b>Italian and international cuisine</b>, designer boutiques
                and, above all, a whole lot of <b>fun for everyone!</b>
                <br />
                Discover the most beautiful areas of the ship now:
              </p>
            </div>
          </div>
          <ToscanaArchie />
          <ToscanaColosseo />
          <ToscanaDream />
          <IdealCabin />
          <Footer />
        </>
      )}
    </div>
  );
}

export default CostaSerena;
