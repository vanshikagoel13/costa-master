// import React from "react";
// import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.css";
// import Header from "../components/Header.js";
// import HorizontalScroll from "../components/HorizontalScroll.js";
// import "../styles/CostaExp.css";
// import Footer from "../components/Footer.js";

// const images = [
//   {
//     id: 1,
//     url: "https://www.costacruises.com/content/dam/costa/costa-asset/discovery/shorex/C442_Scegli_escursione_696x423_2.jpg.image.696.420.high.jpg",
//     category: "OUR TOURS",
//     title: "The longest Shore Excursions ever",
//     text: "In every destination real travel experiences await you, the discovery of new and unexpected places, with no hurry whatsoever.",
//   },
//   {
//     id: 2,
//     url: "https://www.costacruises.com/content/dam/costa/costa-asset/discovery/new-pillars-2021/C442_Una_nuova_esperienza_di_gusto_3Renditions_696x423.jpg",
//     category: "RESTAURANTS & BARS",
//     title: "A new taste experience",
//     text: "The exploration of new places begins at the table. Each night, you’ll be treated to a signature dish by world-renowned chefs.",
//   },
//   {
//     id: 3,
//     url: "https://www.costacruises.com/content/dam/costa/costa-asset/discovery/new-pillars-2021/C442_Emozioni_a_non_finire_3Renditions_696x423.jpg.image.696.420.high.jpg",
//     category: "ENTERTAINMENT",
//     title: "Endless thrills",
//     text: "A dip in the pool, an aperitif with friends, a spectacular show with acrobats at the theatre... a world of thrills and laughter awaits you!",
//   },
//   {
//     id: 4,
//     url: "https://www.costacruises.com/content/dam/costa/costa-asset/images/people/C442_Benessere_696x423_v5.jpg.image.696.420.high.jpg",
//     category: "SPORT, BEAUTY & RELAX",
//     title: "All the wellness you deserve",
//     text: "Take time for yourself: a relaxing massage, a yoga class or, for the really sporty, a gym overlooking the sea are at your disposal.",
//   },
//   {
//     id: 5,
//     url: "https://www.costacruises.com/content/dam/costa/costa-asset/discovery/new-pillars-2021/C442_Il_tuo_risveglio_sul_mare_3Renditions_696x423.jpg.image.696.420.high.jpg",
//     category: "YOUR CABIN",
//     title: "Wake up on the sea",
//     text: "Every day a different vista: the perfect way to start the next day of your vacation.",
//   },
//   {
//     id: 6,
//     url: "https://www.costacruises.com/content/dam/costa/costa-asset/discovery/new-pillars-2021/C442_Anche_in_vacanza_dalla_parte_del_mare_3Renditions_696x423.jpg.image.696.420.high.jpg",
//     category: "SUSTAINABILITY",
//     title: "Even on vacation, we’re looking out for the sea",
//     text: "The environment is one of our priorities. Find out how to enjoy a vacation as a responsible explorer.",
//   },
// ];

// function Costa_exp() {
//   // const [isLeft, setIsLeft] = useState(false);

//   // const handleLeftSide = () => {
//   //   setIsLeft(!isLeft);
//   // };

//   return (
//     <div className="v-scroll">
//       <Header />
//       <HorizontalScroll />
//       <div className="two-column-container">
//         <div className="left-column">
//           <h2 className="l1">A new way to travel</h2>
//         </div>
//         <div className="right-column">
//           <p className="l2">
//             Our aim is to accompany you as you explore the world in the most
//             sustainable, delicious, relaxing and surprising way.{" "}
//           </p>
//           <p className="l2">
//             There are so many new things to tell you about: find out now what
//             awaits you on your next cruise, both on board and ashore.{" "}
//           </p>
//         </div>
//       </div>
//       <div className="container">
//         {images.map((image, index) => (
//           <div
//             key={image.id}
//             className={`row ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
//           >
//             <div className="col-lg-6 d-flex align-items-center">
//               <div className="image-container">
//                 <img
//                   src={image.url}
//                   className="image-style"
//                   alt={image.title}
//                 />
//               </div>
//             </div>
//             <div className="col-lg-6 d-flex align-items-center">
//               <div
//                 className={`text-container ${
//                   index % 2 !== 0 ? "right-text" : "left-text"
//                 }`}
//               >
//                 <h4
//                   className={`category-style ${
//                     index % 2 !== 0
//                       ? "category-style-right"
//                       : "category-style-left"
//                   }`}
//                 >
//                   {image.category}
//                 </h4>
//                 <h3
//                   className={`title-style ${
//                     index % 2 !== 0 ? "title-style-right" : "title-style-left"
//                   }`}
//                 >
//                   {image.title}
//                 </h3>
//                 <p
//                   className={`text-style ${
//                     index % 2 !== 0 ? "text-style-right" : "text-style-left"
//                   }`}
//                 >
//                   {image.text}
//                 </p>
//                 <button
//                   className={`button ${
//                     index % 2 !== 0 ? "button-right" : "button-left"
//                   }`}
//                 >
//                   Find out more...
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div>
//         <h3 className="sec-last-head">And it doesn't stop there...</h3>
//         <p className="sec-last-text">
//           Find out how to make the most of your cruise
//         </p>
//       </div>
//       <div className="last-image-scroller">
//         <div className="last-image">
//           <img
//             className="image-last-style"
//             src={process.env.PUBLIC_URL + "/ceImage1.png"}
//             alt="last image"
//           ></img>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default Costa_exp;
import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../components/Header.js";
import HorizontalScroll from "../components/HorizontalScroll.js";
import Footer from "../components/Footer.js"
import "../styles/CostaExp.css";

const images = [
  {
    id: 1,
    url: "https://www.costacruises.com/content/dam/costa/costa-asset/discovery/shorex/C442_Scegli_escursione_696x423_2.jpg.image.696.420.high.jpg",
    category: "OUR TOURS",
    title: "The longest Shore Excursions ever",
    text: "In every destination real travel experiences await you, the discovery of new and unexpected places, with no hurry whatsoever.",
  },
  {
    id: 2,
    url: "https://www.costacruises.com/content/dam/costa/costa-asset/discovery/new-pillars-2021/C442_Una_nuova_esperienza_di_gusto_3Renditions_696x423.jpg",
    category: "RESTAURANTS & BARS",
    title: "A new taste experience",
    text: "The exploration of new places begins at the table. Each night, you’ll be treated to a signature dish by world-renowned chefs.",
  },
  {
    id: 3,
    url: "https://www.costacruises.com/content/dam/costa/costa-asset/discovery/new-pillars-2021/C442_Emozioni_a_non_finire_3Renditions_696x423.jpg.image.696.420.high.jpg",
    category: "ENTERTAINMENT",
    title: "Endless thrills",
    text: "A dip in the pool, an aperitif with friends, a spectacular show with acrobats at the theatre... a world of thrills and laughter awaits you!",
  },
  {
    id: 4,
    url: "https://www.costacruises.com/content/dam/costa/costa-asset/images/people/C442_Benessere_696x423_v5.jpg.image.696.420.high.jpg",
    category: "SPORT, BEAUTY & RELAX",
    title: "All the wellness you deserve",
    text: "Take time for yourself: a relaxing massage, a yoga class or, for the really sporty, a gym overlooking the sea are at your disposal.",
  },
  {
    id: 5,
    url: "https://www.costacruises.com/content/dam/costa/costa-asset/discovery/new-pillars-2021/C442_Il_tuo_risveglio_sul_mare_3Renditions_696x423.jpg.image.696.420.high.jpg",
    category: "YOUR CABIN",
    title: "Wake up on the sea",
    text: "Every day a different vista: the perfect way to start the next day of your vacation.",
  },
  {
    id: 6,
    url: "https://www.costacruises.com/content/dam/costa/costa-asset/discovery/new-pillars-2021/C442_Anche_in_vacanza_dalla_parte_del_mare_3Renditions_696x423.jpg.image.696.420.high.jpg",
    category: "SUSTAINABILITY",
    title: "Even on vacation, we’re looking out for the sea",
    text: "The environment is one of our priorities. Find out how to enjoy a vacation as a responsible explorer.",
  },
];

function Costa_exp() {
  // const [isLeft, setIsLeft] = useState(false);

  // const handleLeftSide = () => {
  //   setIsLeft(!isLeft);
  // };

  return (
    <div className="v-scroll">
      <Header />
      <HorizontalScroll />
      <div className="two-column-container">
        <div className="left-column">
          <h2 className="l1">A new way to travel</h2>
        </div>
        <div className="right-column">
          <p className="l2">
            Our aim is to accompany you as you explore the world in the most
            sustainable, delicious, relaxing and surprising way.{" "}
          </p>
          <p className="l2">
            There are so many new things to tell you about: find out now what
            awaits you on your next cruise, both on board and ashore.{" "}
          </p>
        </div>
      </div>
      <div className="container">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`row ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
          >
            <div className="col-lg-6 col-md-12 d-flex align-items-center">
              <div className="image-container">
                <img
                  src={image.url}
                  className="img-fluid zoom image-style"
                  alt={image.title}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 d-flex align-items-center">
              <div
                className={`text-container ${
                  index % 2 !== 0 ? "right-text" : "left-text"
                }`}
              >
                <h4
                  className={`${
                    index % 2 !== 0
                      ? "category-style-right"
                      : "category-style-left"
                  }`}
                >
                  {image.category}
                </h4>
                <h3
                  className={`${
                    index % 2 !== 0 ? "title-style-right" : "title-style-left"
                  }`}
                >
                  {image.title}
                </h3>
                <p
                  className={`${
                    index % 2 !== 0 ? "text-style-right" : "text-style-left"
                  }`}
                >
                  {image.text}
                </p>
                <button
                  className={`${
                    index % 2 !== 0 ? "button-right" : "button-left"
                  }`}
                >
                  Find out more...
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h3 className="sec-last-head">And it doesn't stop there...</h3>
        <p className="sec-last-text">
          Find out how to make the most of your cruise
        </p>
      </div>
      <div className="last-image-scroller">
        <div className="last-image">
          <img
            className="image-last-style"
            src={process.env.PUBLIC_URL + "/ceImage1.png"}
            alt="last image"
          ></img>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Costa_exp;

/*
function Costa_exp() {
  return (
	<div className="v-scroll">
	  <Header />
	  <HorizontalScroll />
	  <div className="two-column-container">
		<div className="left-column">
		  <h2 className="l1">A new way to travel</h2>
		</div>
		<div className="right-column">
		  <p className="l2">
			Our aim is to accompany you as you explore the world in the most
			sustainable, delicious, relaxing and surprising way.{" "}
		  </p>
		  <p className="l2">
			There are so many new things to tell you about: find out now what
			awaits you on your next cruise, both on board and ashore.{" "}
		  </p>
		</div>
	  </div>
	</div>
  );
}

*/
