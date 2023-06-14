import React from "react";
import ToscanaFlagScroll from "./ToscanaFlagScroll";
import "../styles/IdealCabin.css";


function IdealCabin({cabin}) {

	return (
	
		<div className="allin-idealcabin">
			<div className="container-idealcabin">
				<h1 className="heading-idealcabin PoppBold">Find your ideal cabin!</h1>
				<p className="text-idealcabin PoppReg">Atmosphere designed with care</p>
				{/* <div className="image-ideal-container">
					<img
						className="image-ideal-cabin"
						src={process.env.PUBLIC_URL + "/idealcabin.png"}
					></img>
					{/* <img className='image-ideal-cabin' src={process.env.PUBLIC_URL+"/travel.jpeg"}></img> */
				/* </div> */} 
				<div className="flag-scroll-container image-ideal-container">
					<div className="toscana-flag-scroll">
						<ToscanaFlagScroll scrollimg={cabin} />
						{/* <p className="lasttext-idealcabin AltReg">Oceanview Cabin</p> */}
						{/* <p className="cabin-below-text-flag AltReg">Oceanview Cabin</p> */}
					</div>
				</div>
				{/* <div className="allin-text-last-ideal1">
					<div className="allin-text-last-ideal">
						<p className="lasttext-idealcabin AltReg">Oceanview Cabin</p>
					</div>
				</div> */}
			</div>
		</div>
	);
}

export default IdealCabin;
