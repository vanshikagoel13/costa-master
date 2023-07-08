// import { React, useState } from "react";
// import BannerToscana from "../components/BannerToscana";
// import Footer from "../components/Footer";
// import "../styles/CostaToscana.css";
// import ShipDetail from "../components/ShipDetail";
// import CostaFlagship from "../components/CostaFlagship";
// import IdealCabin from "../components/IdealCabin";
// // import CostanaFindCruise from "../components/CostanaFindCruise";
// import ToscanaArchie from "../components/ToscanaArchie";
// import ToscanaColosseo from "../components/ToscanaColosseo";
// import ToscanaDream from "../components/ToscanaDream";

// const images = [
//   {
//     id: 1,
//     url: "/toscana1.png",
//     title: "The art of <u class='underline-textts'>experiencing the sea</u>",
//     text: "A cruise on Costa Toscana, our new flagship, will be unforgettable.<br /><br />Shows and <b>entertainment featuring international artists</b> await you, as well as swimming pools with slides and water games for all ages, a <b>state-of-the-art</b> spa and gym, and much more.<br /><br />Costa Toscana is also synonymous with <b>excellent cuisine</b> with the widest variety of Italian and international restaurants in the fleet.<br /><br /> And that's not all - Costa Toscana <b>keeps the environment in mind</b>, with LNG propulsion engines making for <b> increasingly sustainable travel.</b>",
//   },
// ];

// function CostaToscana() {
//   const [isBannerCollapsed, setIsBannerCollapsed] = useState(false);

//   const handleBannerExpand = () => {
//     setIsBannerCollapsed(false);
//   };

//   const handleBannerCollapse = () => {
//     setIsBannerCollapsed(true);
//   };

//   return (
//     <div>
//       <BannerToscana
//         onBanner={handleBannerExpand}
//         offBanner={handleBannerCollapse}
//       />
//       {isBannerCollapsed ? null : (
//         <>
//           <div className="container">
//             {images.map((image, index) => (
//               <div
//                 key={image.id}
//                 className={`row rowts ${
//                   index % 2 === 0 ? "flex-row-reverse" : ""
//                 }`}
//               >
//                 <div className="col-lg-6 d-flex">
//                   <div className="image-containerts">
//                     <img
//                       src={process.env.PUBLIC_URL + image.url}
//                       className="img-fluid zoom image-stylets"
//                       alt={image.title}
//                     />
//                   </div>
//                 </div>
//                 <div className="col-lg-6 text-outerts d-flex">
//                   <div
//                     className={`text-containerts align-self-center ${
//                       index % 2 !== 0 ? "right-textts" : "right-textts"
//                     }`}
//                   >
//                     {/* <h4 className={`PoppReg ${(index) % 2 !== 0 ? "category-style-rightts" : "category-style-leftts"}`}>{image.category}</h4> */}
//                     <h3
//                       className={`AltBold ${
//                         index % 2 !== 0
//                           ? "title-style-rightts"
//                           : "title-style-rightts"
//                       }`}
//                     >
//                       <span dangerouslySetInnerHTML={{ __html: image.title }} />
//                     </h3>
//                     <p
//                       className={`AltReg ${
//                         index % 2 !== 0
//                           ? "text-style-rightts"
//                           : "text-style-rightts"
//                       }`}
//                     >
//                       <span dangerouslySetInnerHTML={{ __html: image.text }} />
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <ShipDetail />
//           <CostaFlagship />
//           <div className="showtime-container">
//             <div className="showtime-box">
//               <h1 className="showtime-heading PoppBold">
//                 On board, it's <u class="underline-textts">always showtime</u>
//               </h1>
//               <p className="showtime-text ALtReg">
//                 A memorable ship for a memorable cruise. <br /> Costa Toscana
//                 will amaze you with its <b>large outdoor spaces</b> where you
//                 can enjoy sun and sea, its brightly coloures furnishings, its{" "}
//                 <b>Italian and international cuisine</b>, designer boutiques
//                 and, above all, a whole lot of <b>fun for everyone!</b>
//                 <br />
//                 Discover the most beautiful areas of the ship now:
//               </p>
//             </div>
//           </div>
//           <ToscanaArchie />
//           <ToscanaColosseo />
//           <ToscanaDream />
//           <IdealCabin />
//           <Footer />
//         </>
//       )}
//     </div>
//   );
// }

// export default CostaToscana;

import { React, useState } from "react";
import BannerToscana from "../components/BannerToscana";
import Footer from "../components/Footer";
import "../styles/CostaToscana.css";
import ToscanaShipDetail from "../components/ToscanaShipDetail";
import CostaFlagship from "../components/CostaFlagship";
import IdealCabin from "../components/IdealCabin";
// import CostanaFindCruise from "../components/CostanaFindCruise";
import ToscanaArchie from "../components/ToscanaArchie";
import ToscanaColosseo from "../components/ToscanaColosseo";
import ToscanaDream from "../components/ToscanaDream";
import CallNowButton from "../components/CallNowButton";
import ToscanaCards from "../components/ToscanaCards";
// import NewFooter from "../components/NewFooter";

const images = [
  {
    id: 1,
    url: "/toscana1.png",
    title: "The art of <u class='underline-textts'>experiencing the sea</u>",
    text: "A cruise on Costa Toscana, our new flagship, will be unforgettable.<br /><br />Shows and <b>entertainment featuring international artists</b> await you, as well as swimming pools with slides and water games for all ages, a <b>state-of-the-art</b> spa and gym, and much more.<br /><br />Costa Toscana is also synonymous with <b>excellent cuisine</b> with the widest variety of Italian and international restaurants in the fleet.<br /><br /> And that's not all - Costa Toscana <b>keeps the environment in mind</b>, with LNG propulsion engines making for <b> increasingly sustainable travel.</b>",
  },
];

const cabin = [
  {
    id: 1,
    url: "/ToscanaIdealCabin/Balcony Cabin.jpg",
    text: "Balcony Cabin",
  },
  {
    id: 2,
    url: "/ToscanaIdealCabin/Inside Cabin.jpg",
    text: "Inside Cabin",
  },
  {
    id: 3,
    url: "/ToscanaIdealCabin/Oceanview Cabin.jpg",
    text: "Oceanview Cabin",
  },
];

const scrollimagestos1 = [
  {
    id: 1,
    url: "/archietos/Teppanyaki.jpg",
    title: "Teppanyaki Restaurant",
    text: "For a different type of experience, spend a night in an Oriental-style soft environment, where you can observe the craftsmanship of Japanese chefs.",
  },
  {
    id: 2,
    url: "/archietos/Campari Bar.jpg",
    title: "Campari Bar",
    text: "The Campari Bar will offer a portfolio of Campari liqueur varieties and popcorn flavored with Campari or caramel.",
  },
  {
    id: 3,
    url: "/archietos/Kids Buffet Restaurant.jpg",
    title: "Squok Kids Restaurant",
    text: "Buffet restaurant open for breakfast and lunch.",
  },
  {
    id: 4,
    url: "/archietos/Heinken Bar.jpg",
    title: "Heineken Bar & Bistro",
    text: "The first floating Heineken Star Club & Bistro in the world, a 'contemporary pub' where the gastronomic offer meets the best of Heineken entertainment.",
  },
  {
    id: 5,
    url: "/archietos/Lab Restaurant.jpg",
    title: "Food Lab",
    text: "Come to Food LAB, our seaside cooking school. You can discover all the secrets to becoming a true sushiman or try your hand at creating the perfect aperitif for you and your friends. Put yourself to the test and enjoy your creations! The fun is guaranteed.",
  },
  {
    id: 6,
    url: "/archietos/Pizzeria.png",
    title: "Pummid’Oro Pizzeria ",
    text: "Pizza & mozzarella with selected ingredients and traditional cooking recipes.",
  },
  {
    id: 7,
    url: "/archietos/Archipelago.png",
    title: "Archipelago",
    text: "Discover the new restaurant Archipelago: a brand new location with innovative and sustainable design. Three world-famous chefs with three new menus await you: Bruno Barbieri, Hélène Darroze and Ángel León.",
  },
  {
    id: 8,
    url: "/archietos/Infinity Bar.jpg",
    title: "Infinity Bar",
    text: "One of the best areas on Costa Toscana, the Infinity bar at the back of the ship offers expansive views while enjoying your favourite beverage.",
  },
];

const scrollimagestos2 = [
  {
    id: 1,
    url: "/colosseotos/Colosseo.jpg",
    title: "Colosseo",
    text: "The heart of the ship where something is always happening with different performances, a variety of entertainment and a number of themed lounge bars.",
  },
  {
    id: 2,
    url: "/colosseotos/Piazza Del Campo.jpg",
    title: "Piazza Del Campo",
    text: "There is a grand staircase on the sea with stunning views overlooking the wake of the ship. A perfect place for games and parties with entertainment.",
  },
  {
    id: 3,
    url: "/colosseotos/Splash Aqua Park.png",
    title: "Splash Aqua Park",
    text: "From speedy bends to fast descents, you can test the courage of your friends or play with the whole family. Have fun on our slides, refreshed from the sun in the cool water.",
  },
  {
    id: 4,
    url: "/colosseotos/Kidsclub.png",
    title: "Kids Club",
    text: "We take care of the little ones from 3 to 11 years old, offering many fun and stimulating activities!",
  },
  {
    id: 5,
    url: "/colosseotos/Versilia Beach.jpg",
    title: "Versilia Beach",
    text: "The pool decks are the place of fun and the meeting place par excellence, where you can make new friends while sipping a drink.",
  },
  {
    id: 6,
    url: "/colosseotos/Beauty Spa Solemio.jpg",
    title: "Beauty Spa Solemio ",
    text: "Everything you need for your beauty: hairdresser, facial masks to refresh and tone you, hair removal and manicure, to always be at your best.",
  },
  {
    id: 7,
    url: "/colosseotos/Sports pitch.jpg",
    title: "Sports Pitch",
    text: "Offering basketball, tennis, volleyball and more right at the top decks of the ship.",
  },
  {
    id: 8,
    url: "/colosseotos/Casino.jpg",
    title: "Casino",
    text: "A Casino with 107 slot machines and 10 gaming tables including 4 Roulette, 3 Poker, 2 Fun 21 Blackjack, and 1 Blackjack.",
  },
];

const scrollimagestos3 = [
  {
    id: 1,
    url: "/cdreamtos/Costa Shop1.png",
    title: "Costa Shop",
    text: "Shopaholic? From souvenirs to big names there is something for all tastes. Choose from a thousand opportunities to make or give yourself a gift.",
  },
  {
    id: 2,
    url: "/cdreamtos/Excursions.png",
    title: "Excursions",
    text: "An area dedicated to shore excursions, where our tour experts will help organise your sightseeing to the places of interest in the ports we visit.",
  },
  {
    id: 3,
    url: "/cdreamtos/Photoshop.png",
    title: "My Moments",
    text: "Prints, digital photos, magnets, original gadgets and many other items to make your cruise unforgettable.",
  },
  {
    id: 4,
    url: "/cdreamtos/Shopping on-board .jpg",
    title: "Shopping",
    text: "Shopping Gallery, with its exclusive boutiques that are perfect for window shopping or some indulgence. You can purchase beautiful gifts on board, and everything that you may need for your cruise.",
  },
  {
    id: 5,
    url: "/cdreamtos/Costa Shop1.png",
    title: "Costa Shop",
    text: "Shopaholic? From souvenirs to big names there is something for all tastes. Choose from a thousand opportunities to make or give yourself a gift.",
  },
  {
    id: 6,
    url: "/cdreamtos/Excursions.png",
    title: "Excursions",
    text: "An area dedicated to shore excursions, where our tour experts will help organise your sightseeing to the places of interest in the ports we visit.",
  },
  {
    id: 7,
    url: "/cdreamtos/Photoshop.png",
    title: "My Moments",
    text: "Prints, digital photos, magnets, original gadgets and many other items to make your cruise unforgettable.",
  },
  {
    id: 8,
    url: "/cdreamtos/Shopping on-board .jpg",
    title: "Shopping",
    text: "Shopping Gallery, with its exclusive boutiques that are perfect for window shopping or some indulgence. You can purchase beautiful gifts on board, and everything that you may need for your cruise.",
  },
];

// const txt1 : "A memorable ship for a memorable cruise. <br /> Costa Toscana will amaze you with its <b>large outdoor spaces</b> where you can enjoy sun and sea, its brightly coloures furnishings, its{" "}<b>Italian and international cuisine</b>, designer boutiques and, above all, a whole lot of <b>fun for everyone!</b><br />Discover the most beautiful areas of the ship now:";
const txt1 = "A memorable ship for a memorable cruise. <br /><br /> Costa Toscana will amaze you with its <b>large outdoor spaces</b> where you can enjoy sun and sea, its brightly coloured furnishings, its <b>Italian and international cuisine</b>, designer boutiques and, above all, a whole lot of <b>fun for everyone!</b><br /><br />Discover the most beautiful areas of the ship now:";

function CostaToscana() {

  const [isBannerCollapsed, setIsBannerCollapsed] = useState(false);

  const handleBannerExpand = () => {
    setIsBannerCollapsed(false);
  };

  const handleBannerCollapse = () => {
    setIsBannerCollapsed(true);
  };

  return (
    <div>
      <BannerToscana
        onBanner={handleBannerExpand}
        offBanner={handleBannerCollapse}
      />
      {isBannerCollapsed ? null : (
        <>
          <ToscanaCards />
          <div className="containerts">
            {images.map((image, index) => (
              <div
                key={image.id}
                className={`row rowts ${index % 2 === 0 ? "flex-row-reverse" : ""
                  }`}
              >
                <div className="col-lg-6 class-tosca-img d-flex" >
                  <div className="image-containerts">
                    <img
                      src={process.env.PUBLIC_URL + image.url}
                      className="img-fluid zoom image-stylets"
                      alt={image.title}
                    />
                  </div>
                </div>
                <div className="col-lg-6 text-outerts d-flex">
                  <div
                    className={`text-containerts align-self-center ${index % 2 !== 0 ? "right-textts" : "right-textts"
                      }`}
                  >
                    {/* <h4 className={`PoppReg ${(index) % 2 !== 0 ? "category-style-rightts" : "category-style-leftts"}`}>{image.category}</h4> */}
                    <h3
                      className={`PoppBold ${index % 2 !== 0
                          ? "title-style-rightts"
                          : "title-style-rightts"
                        }`}
                    >
                      <span dangerouslySetInnerHTML={{ __html: image.title }} />
                    </h3>
                    <p
                      className={`PoppReg ${index % 2 !== 0
                          ? "text-style-rightts"
                          : "text-style-rightts"
                        }`}
                    >
                      <span dangerouslySetInnerHTML={{ __html: image.text }} />
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <ToscanaShipDetail />
          <CostaFlagship />
          {/* <div className="showtime-container">
            <div className="showtime-box">
              <h2 className="showtime-heading PoppBold">
                On board, it's <u class="underline-textts">always showtime</u>
              </h2>
              <h6 className="showtime-text PoppReg">
                A memorable ship for a memorable cruise. <br /> Costa Toscana
                will amaze you with its <b>large outdoor spaces</b> where you
                can enjoy sun and sea, its brightly coloures furnishings, its{" "}
                <b>Italian and international cuisine</b>, designer boutiques
                and, above all, a whole lot of <b>fun for everyone!</b>
                <br />
                Discover the most beautiful areas of the ship now:
              </h6>
            </div>
          </div> */}
          <div className="two-column-containerts mx-3">
            <div className="left-columnts">
              <h2 className="l1ts PoppBold">On board, it's <u class="underline-textts">always showtime</u></h2>
            </div>
            <div className="right-columnts">
              <h6 className="l2ts PoppReg">
                <span dangerouslySetInnerHTML={{ __html: txt1 }} />
              </h6>
            </div>
          </div>
          <ToscanaArchie scrollimages={scrollimagestos1} />
          <ToscanaColosseo scrollimages={scrollimagestos2} />
          <ToscanaDream scrollimages={scrollimagestos3} />
          <IdealCabin cabin={cabin} />
          <CallNowButton />
          <Footer />
        </>
      )}
    </div>
  );
}

export default CostaToscana;
