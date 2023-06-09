import React from "react";
import "../styles/sail2.css";
import "../styles/Fonts.css";
import Card from "./InfoCard";
import InfoCard from "./InfoCard";

const expr1 = [
	{
		id: "1",
		title: "Accomodation",
		text: "Wake up to breathtaking views await you every morning while you sail to a different location every day.",
	},
	{
		id: "2",
		title: "Destinations",
		text: "A cruise vacation with Cordelia Cruises takes you to some of the most gorgeous Indian and international destinations.",
	},
	{
		id: "3",
		title: "Food & Beverages",
		text: "Dwell into the delightful experience of our onboard dining. Our restaurants and bars are simply unmissable.",
	},
];

const expr2 = [
	{
		id: "1",
		title: "Accomodation",
		text: "Wake up to breathtaking views await you every morning while you sail to a different location every day.",
	},
	{
		id: "2",
		title: "Destinations",
		text: "A cruise vacation with Cordelia Cruises takes you to some of the most gorgeous Indian and international destinations.",
	},
	{
		id: "2",
		title: "Food & Beverages",
		text: "Dwell into the delightful experience of our onboard dining. Our restaurants and bars are simply unmissable.",
	},
];

function sail2() {

	return (
		<section id="Sail" style={{ marginTop: "70px" }}>
			<div className="sail">
				<div className="sail-content">
					<div className="sail-heading">
						<h1 className="sail-title PoppReg" style={{ fontWeight: "600" }}>Sail In Style And Comfort</h1>
						<p className="sail-subtitle AltReg">
							Embark on a journey like no other Costa Cruises. Enjoy Premium
							amenities on board as you take forgetable excursions to the
							stunning shores of Sri Lanks.
						</p>
						<div className="sail-videos-container">
							<div className="sail-video-box">
								<iframe
									src="https://www.youtube.com/embed/1Wdn9kM72p0"
									title="YouTube video player"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									allowfullscreen
									style={{ height: "100%", width: "100%" }}
								></iframe>
							</div>
							<div className="sail-video-box">
								<iframe
									src="https://www.youtube.com/embed/1Wdn9kM72p0"
									title="YouTube video player"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									allowfullscreen
									style={{ height: "100%", width: "100%" }}
								></iframe>
							</div>
						</div>
						<button className="sail-button PoppReg" style={{ fontWeight: "700" }}>See More</button>
					</div>
				</div>
			</div>
			<div style={{ marginBottom: "70px" }}> </div>
			<div className="sail">
				<div className="card-settings">
					<div className="card-group">
						{expr1.map((com) => (
							<InfoCard comp={com} />
						))}
						<div class="w-100 row-settings"></div>
						{expr2.map((com) => (
							<InfoCard comp={com} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default sail2;
