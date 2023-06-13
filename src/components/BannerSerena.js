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
                <img src={process.env.PUBLIC_URL + "/bannerserena.jpg"} className="background-imageser">
                </img>
			</div>
			<div className="banner-contentser">
				<p className="banner-subtitleser shadow-text">
					Discover
				</p>
				<p className="banner-titleser shadow-text">Costa Serena</p>
				<p className="banner-titleser2 shadow-text">Sailing India Nov & Dec 2023</p>
			</div>
			</>
      		}
		</div>
	);
}

export default BannerSerena;