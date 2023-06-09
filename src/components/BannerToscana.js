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
				<video autoPlay loop muted className="background-videots">
					<source
						src={process.env.PUBLIC_URL + "/video_banner.mp4"}
						type="video/mp4"
					/>
				</video>
			</div>
			<div className="banner-contentts">
				<p className="banner-subtitlets">
					Discover
				</p>
				<p className="banner-titlets">Costa Toscana</p>
			</div>
			</>
      		}
		</div>
	);
}

export default BannerToscana;
