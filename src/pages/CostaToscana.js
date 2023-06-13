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
import ShipDetail from "../components/ShipDetail";
import CostaFlagship from "../components/CostaFlagship";
import IdealCabin from "../components/IdealCabin";
// import CostanaFindCruise from "../components/CostanaFindCruise";
import ToscanaArchie from "../components/ToscanaArchie";
import ToscanaColosseo from "../components/ToscanaColosseo";
import ToscanaDream from "../components/ToscanaDream";

const images = [
	{
		id: 1,
		url: "/toscana1.png",
		title: "The art of <u class='underline-textts'>experiencing the sea</u>",
		text: "A cruise on Costa Toscana, our new flagship, will be unforgettable.<br /><br />Shows and <b>entertainment featuring international artists</b> await you, as well as swimming pools with slides and water games for all ages, a <b>state-of-the-art</b> spa and gym, and much more.<br /><br />Costa Toscana is also synonymous with <b>excellent cuisine</b> with the widest variety of Italian and international restaurants in the fleet.<br /><br /> And that's not all - Costa Toscana <b>keeps the environment in mind</b>, with LNG propulsion engines making for <b> increasingly sustainable travel.</b>",
	},
];

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
					<div className="container">
						{images.map((image, index) => (
							<div key={image.id} className={`row rowts ${index % 2 === 0 ? "flex-row-reverse" : ""}`}>
								<div className="col-lg-6 d-flex">
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
											className={`AltBold ${index % 2 !== 0
													? "title-style-rightts"
													: "title-style-rightts"
												}`}
										>
											<span dangerouslySetInnerHTML={{ __html: image.title }} />
										</h3>
										<p
											className={`AltReg ${index % 2 !== 0
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
					<ShipDetail />
					<CostaFlagship />
					<div className="showtime-container">
						<div className="showtime-box">
							<h1 className="showtime-heading PoppBold">
								On board, it's <u class="underline-textts">always showtime</u>
							</h1>
							<p className="showtime-text ALtReg">
								A memorable ship for a memorable cruise. <br /> Costa Toscana
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

export default CostaToscana;

