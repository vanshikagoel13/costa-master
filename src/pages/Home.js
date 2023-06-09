import React from 'react';
import Sail2 from '../components/sail2';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import BestOfferCard from '../components/BestOfferCard';
import HomeDestinations from '../components/HomeDestinations';
import Testimonials from '../components/Testimonials';
import Upcoming from '../components/Upcoming';
import Contact from '../components/Contact';
import { useState } from "react";

function Home() {

	const [isBannerCollapsed, setIsBannerCollapsed] = useState(false);

	const handleBannerExpand = () => {
		setIsBannerCollapsed(false);
	};

	const handleBannerCollapse = () => {
		setIsBannerCollapsed(true);
	};

	return (

		<div>
			<Banner 
				onBanner={handleBannerExpand}
				offBanner={handleBannerCollapse}
			/>
			{isBannerCollapsed ? null :
				<>
					<BestOfferCard />
					<HomeDestinations />
					<Upcoming />
					<Sail2 />
					<Testimonials />
					<Contact />
					<div style={{ marginBottom: "70px" }}></div>
					<Footer />
				</>
			}
		</div>
	)
}

export default Home