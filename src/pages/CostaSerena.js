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
import CallNowButton from "../components/CallNowButton";
import SerenaCards from "../components/SerenaCards";
// import NewFooter from "../components/NewFooter";

const images = [
  {
    id: 1,
    url: "/Pantheon Atrium 1.png",
    title: "The Ship of <u class='underline-textts'>the Gods</u>",
    text: "The ship of the gods Costa Serena is dedicated to the <b>Olympian Gods </b>and the myths of classical anquity, the source of its majesty and greatness.<br/><br/>The spectacle starts at the <b> Pantheon Atrium</b>, with its <b>panoramic lifts</b> that seem to rise to meet the sky and its <b> grandiose murals. </b> It is embellished all over with prized materials, works of art and luxurious decorations.<br/><br/> The majestic areas cocoon <u class='underline-textserena'> g</u>uests in a magical atmosphere of wellbeing. Costa Serena is a unique experience, enriched by evocative beauty.",
  },
];

const scrollimagesser1 = [
  {
    id: 1,
    url: "/terrayaki/Grand Bar 2.png",
    title: "Grand Bar",
    text: "For special, fun-filled evenings, to the notes of live music.",
  },
  {
    id: 2,
    url: "/terrayaki/Ceres Restaurant 2.png",
    title: "Ceres Restaurants",
    text: "Seating more than 1,000 Guests, this bright and elegant restaurant extends over two levels. It is the location for the most important on-board dinners.",
  },
  {
    id: 3,
    url: "/terrayaki/Luna Lounge 2.png",
    title: "Luna Lounge",
    text: "Luna Lounge, located on deck 5, is a large lounge with a bar, dance floor and lots of entertainment to dance the night away.",
  },
  {
    id: 4,
    url: "/terrayaki/Prometeo Buffet Restaurant 2.png",
    title: "Prometeo Buffet Restaurant",
    text: "Enjoy the spectacle of the sea front row while you dine on the beautiful open-air veranda.",
  },
  {
    id: 5,
    url: "/terrayaki/Cupido lounge 2.png",
    title: "Cupido Ballroom",
    text: "The delightful Cupido Ballroom, inspired by the theme of love is the perfect place to relax to the sound of some soothing romantic hits.",
  },
  {
    id: 6,
    url: "/terrayaki/Disco 22.png",
    title: "Pan Disco",
    text: "This is the place to be, for a long night dancing away to the latest hits.",
  },
  {
    id: 7,
    url: "/terrayaki/Gelato at pay 2.png",
    title: "Gelato Bar",
    text: "We dare you to deny the charm of Costa Serena’s Gelato Bar which will take you right to Italy, serving authentic gelato along with other delicious sweet pastries.",
  },
  // { id: 8, url: "/Archi/Bistro.jpg", text: "Heineken Star Club & Bistro" },
  // { id: 9, url: "/Archi/ferrari.jpg", text: "Ferrari Spazio Bollicine" },
  // { id: 10, url: "/Archi/Bar.jpg", text: "Aperol Spritz Bar" },
];

const cabin = [

	{
		id: 1,
		url: "/Serena-Cabin/cabin1.png",
		text: "Balcony Cabin",
	},
	{
		id: 2,
		url: "/Serena-Cabin/cabin2.png",
		text: "Oceanview Cabin",
	},
	{
		id: 3,
		url: "/Serena-Cabin/cabin3.png",
		text: "Suite Balcony Cabin",
	},
	{
		id: 4,
		url: "/Serena-Cabin/Inside Cabin.png",
		text: "Inside Cabin",
	},
];

const scrollimagesser2 = [
  {
    id: 1,
    url: "/Colosseo/Waterslide.png",
    title: "Waterslides",
    text: " For those who love taking a dip in the pool, there is the Iris Lido water slide, with its most breath-taking panoramic view.",
  },
  {
    id: 2,
    url: "/Colosseo/Central Pool Deck.png",
    title: "Central Pool Deck",
    text: "Our main Central pool deck at the mid of the ship with an automatic roof, pool, jacuzzis and a mega-screen is the perfect place to unwind, rejuvenate and have some fun.",
  },
  {
    id: 3,
    url: "/Colosseo/Samsara Spa.png",
    title: "Samsara Spa",
    text: "More than 6,000 m2 of pleasure and relaxation on two levels, a world in which the cleansing experience of the spa is combined with the fascination of oriental rituals, including steam baths, massages.",
  },
  {
    id: 4,
    url: "/Colosseo/Casino.png",
    title: "Giano Casino",
    text: "Slot machines, roulette and gaming tables await Guests at the Giano Casino.",
  },
  {
    id: 5,
    url: "/Colosseo/Gym.png",
    title: "Gym",
    text: "If you are sporty you can keep in shape in the gym equipped with the latest equipment and large windows that overlook the sea",
  },
  {
    id: 6,
    url: "/Colosseo/Kids Club .png",
    title: "Kids Club",
    text: "Costa Serena offers entertainment for all ages. The Squok Club is a fun-filled and friendly space designed for the youngest children, while older brothers and sisters can make new friends by taking part in the sporting competitions and pool parties. And what do the parents get? Peace of mind thanks to our experienced, attentive staff who are with the children throughout the day.",
  },
  {
    id: 7,
    url: "/Colosseo/Sports Pitch.png",
    title: "Sports Pitch",
    text: "Offering basketball, tennis, volleyball and more right at the top decks of the ship.",
  },
  {
    id: 8,
    url: "/Colosseo/Aft Pool Deck.png",
    title: "Aft Pool Deck",
    text: "Amongst the 3 main pools, this swimming pool is at the backof the ship, flanked by 2 jacuzzis at its side and the perfect area to watch the trail of the ship while it cruises.",
  },
  {
    id: 9,
    url: "/Colosseo/Jogging Track 2.png",
    title: "Jogging Track",
    text: "Run along the edge of the horizon as you float on the waves and breathe in pure fresh sea air: you can do all this as you attempt a circuit on the jogging track.",
  },
];

const scrollimagesser3 = [
  {
    id: 1,
    url: "/Cdream/Conference Room .png",
    title: "Conference Room",
    text: "The Mercurio Conference Room (with seating for more than 100) and other rooms with video wall, audio system, microphones, video projectors, video cameras, screens and technical equipment, are all available upon request.",
  },
  {
    id: 2,
    url: "/Cdream/Costa Shop.png",
    title: "Costa Shop",
    text: "Shopaholic? From souvenirs to big names there is something for all tastes. Choose from a thousand opportunities to make or give yourself a gift.",
  },
  {
    id: 3,
    url: "/Cdream/Excursions.png",
    title: "Excursions",
    text: "An area dedicated to shore excursions, where our tour experts will help organise your sightseeing to the places of interest in the ports we visit",
  },
  {
    id: 4,
    url: "/Cdream/Photoshop.png",
    title: "My moments",
    text: "Prints, digital photos, magnets, original gadgets and many other items to make your cruise unforgettable",
  },
  {
    id: 5,
    url: "/Cdream/Shopping on-board .png",
    title: "Shopping",
    text: "Shopping Gallery, with its exclusive boutiques that are perfect for window shopping or some indulgence. You can purchase beautiful gifts on board, and everything that you may need for your cruise.",
  },
//   {
//     id: 6,
//     url: "/cdream/Disco 2.jpg",
//     title: "Pan Disco",
//     text: "This is the place to be, for a long night dancing away to the latest hits.",
//   },
//   {
//     id: 7,
//     url: "/cdream/Gelato at pay.jpg",
//     title: "Gelato Bar",
//     text: "We dare you to deny the charm of Costa Serena’s Gelato Bar which will take you right to Italy, serving authentic gelato along with other delicious sweet pastries.",
//   },
];

const txt2 = "A memorable ship for a memorable cruise. <br /><br /> Costa Toscana will amaze you with its <b>large outdoor spaces</b> where you can enjoy sun and sea, its brightly coloured furnishings, its <b>Italian and international cuisine</b>, designer boutiques and, above all, a whole lot of <b>fun for everyone!</b><br /><br />Discover the most beautiful areas of the ship now:";

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
         <SerenaCards />
          <div className="containerser">
            {images.map((image, index) => (
              <div
                key={image.id}
                className={`row rowser ${
                  index % 2 === 0 ? "flex-row-reverse" : ""
                }`}
              >
                <div className="col-lg-6 class-serena-img d-flex">
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
                      className={`PoppBold ${
                        index % 2 !== 0
                          ? "title-style-rightser"
                          : "title-style-rightser"
                      }`}
                    >
                      <span dangerouslySetInnerHTML={{ __html: image.title }} />
                    </h3>
                    <p
                      className={`PoppReg ${
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
          {/* <div className="showtime-container">
            <div className="showtime-box">
              <h1 className="showtime-heading PoppBold">
                On board, it's <u class="underline-textser">always showtime</u>
              </h1>
              <p className="showtime-text PoppReg">
                A memorable ship for a memorable cruise. <br /> Costa Serena
                will amaze you with its <b>large outdoor spaces</b> where you
                can enjoy sun and sea, its brightly coloures furnishings, its{" "}
                <b>Italian and international cuisine</b>, designer boutiques
                and, above all, a whole lot of <b>fun for everyone!</b>
                <br />
                Discover the most beautiful areas of the ship now:
              </p>
            </div>
          </div> */}
          <div className="two-column-containerser mx-3">
            <div className="left-columnser">
              <h2 className="l1ser PoppBold">On board, it's <u class="underline-textser">always showtime</u></h2>
            </div>
            <div className="right-columnser">
              <h6 className="l2ser PoppReg">
                <span dangerouslySetInnerHTML={{ __html: txt2 }} />
              </h6>
            </div>
          </div>
          <ToscanaArchie scrollimages={scrollimagesser1}/>
          <ToscanaColosseo scrollimages={scrollimagesser2} />
          <ToscanaDream scrollimages={scrollimagesser3}/>
          <IdealCabin cabin={cabin} />
          <CallNowButton />
          <Footer />
        </>
      )}
    </div>
  );
}

export default CostaSerena;
