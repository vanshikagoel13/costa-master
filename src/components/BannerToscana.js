import React from "react";
import "../styles/bannertoscana.css";
import HomeHeader from "../components/HomeHeader";
import { useState } from "react";

function BannerToscana({ onBanner, offBanner }) {

	const [isHeaderExpanded, setIsHeaderExpanded] = useState(false);

	const handleHeaderExpand = () => {
		setIsHeaderExpanded(true);
		offBanner();
	};

	const handleHeaderCollapse = () => {
		setIsHeaderExpanded(false);
		onBanner();
	};

	return (
		<div className="bannerts">
			<div className="banner-headerts">
				<HomeHeader
					isExpanded={isHeaderExpanded}
					onExpand={handleHeaderExpand}
					onCollapse={handleHeaderCollapse}
				/>
			</div>
			{ isHeaderExpanded ? null : 
      		<>
			<div className="component-backgroundts">
                <img src={process.env.PUBLIC_URL + "/Toscana/Costa Toscana Banner Image.jpg"} className="background-imagets">
                </img>
			</div>
			<div className="banner-contentts">
				<p className="banner-subtitlets PoppReg">
					Discover
				</p>
				<p className="banner-titlets PoppBold">Costa Toscana</p>
				<button className="booknow-button-banner-toscana PoppReg">Book Your Cruise &rarr;</button>
			</div>
			</>
      		}
		</div>
	);
}

export default BannerToscana;
