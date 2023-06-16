import React from "react";
import "../styles/bannerserena.css";
import HomeHeader from "../components/HomeHeader";
import { useState } from "react";

function BannerSerena({ onBanner, offBanner }) {

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
		<div className="bannerser">
			<div className="banner-headerser">
				<HomeHeader
					isExpanded={isHeaderExpanded}
					onExpand={handleHeaderExpand}
					onCollapse={handleHeaderCollapse}
				/>
			</div>
			{ isHeaderExpanded ? null : 
      		<>
			<div className="component-backgroundser">
                <img src={process.env.PUBLIC_URL + "/bannerserena1.png"} className="background-imageser">
                </img>
			</div>
			<div className="banner-contentser">
				<p className="banner-subtitleser PoppReg">
					Discover
				</p>
				<p className="banner-titleser PoppBold">Costa Serena</p>
				<p className="banner-titleser2 PoppMed">Sailing India Nov & Dec 2023</p>
				<button className="booknow-button-banner-serena PoppReg">Book Your Cruise &rarr;</button>
			</div>
			</>
      		}
		</div>
	);
}

export default BannerSerena;
