import React from "react";
import "../styles/SerenaFlagship.css";
// import ToscanaFlagScroll from "./ToscanaFlagScroll";

const scrollimages = [
	{ id: 1, url: "/costaflagimg1.png" },
	{ id: 2, url: "/costaflagimg2.png" },
	{ id: 3, url: "/costaflagimg3.png" },
	{ id: 4, url: "/costaflagimg4.png" },
];

function CostaFlagship() {
	return (
		<div className="allin-flagship-sf">
			<div className="container-flagship-sf">
				<h1 className="heading-flagship-sf PoppBold">
					Welcome to the largest cruise ship in Indian water “Costa Serena”
				</h1>
				<p className="text-flagship-sf PoppReg">
					Climb aboard Costa Serena: you will discover a whole new way to enjoy the sea in Indian waters
				</p>
				<div className="flag-scroll-container-sf">
					<div className="toscana-flag-scroll-sf">
						<img
							src={process.env.PUBLIC_URL + 'flagshipserena1.png'}
							className="img-fluid-serenaflag"
							alt={'Flagship'}
						/>
						{/* <p className="below-text-flag AltReg"></p> */}
					</div>
				</div>
				<p></p>
			</div>
		</div>
	);
}

export default CostaFlagship;
