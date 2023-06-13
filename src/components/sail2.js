import { React, useState } from "react";
import "../styles/sail2.css";
import "../styles/Fonts.css";
import Card from "./InfoCard";
import InfoCard from "./InfoCard";

const expr1 = [
	{
		id: "1",
		title: "Accomodation",
		text: "The cabin of your dreams, every Costa cabin is comfortable and cozy. The perfect place to relax after a busy day of activities and socializing, both on board and ashore. Costa has different types of cabins in terms of size and location that enable you to find the space that best suits your needs. We have Inside, Ocean View, Balcony or Suite cabins available, all of which are designed to provide maximum comfort, elegance and relaxation.",
		images: [
			{ iid: "1", url: "/Experiences/Accomodation/cabin1.jpg" },
			{ iid: "2", url: "/Experiences/Accomodation/cabin2.jpg" },
			{ iid: "3", url: "/Experiences/Accomodation/cabin3.jpg" },
			{ iid: "4", url: "/Experiences/Accomodation/cabin4.jpg" },
		],

	},
	{
		id: "2",
		title: "Wedding",
		text: "Your wedding day should be everything you have dreamed of and more. From having implemented the biggest-ever wedding at sea, let Costa Cruises make your dreams come true as we take care of every detail, leaving you free to revel in the joy and romance of this extraordinary occasion. ",
		images: [
			{ iid: "1", url: "/Experiences/Wedding/Wedding picture 1.jpg" },
			{ iid: "2", url: "/Experiences/Wedding/Wedding picture 2.jpeg" },
			{ iid: "3", url: "/Experiences/Wedding/Wedding picture 3.jpg" },
			{ iid: "4", url: "/Experiences/Wedding/Wedding picture 4.jpg" },
			{ iid: "5", url: "/Experiences/Wedding/Wedding picture 5.jpg" },
		],
	},
	{
		id: "3",
		title: "Corporate",
		text: "We make conducting meetings, rewards, recognition, conferences and workshops at sea on a Costa cruise not only one of the most efficient but also economical ways to stage your event. We have hosted events of some of the top corporates in India and you will be amazed at how easy and affordable it is to conduct an event onboard a Costa Cruise ship, giving that wow factor to your clients or employees. So, let's help combine some work and some fun onboard your next Costa Cruise.",
		images: [
			{ iid: "1", url: "/Experiences/Corporate/ci1.jpg" },
			{ iid: "2", url: "/Experiences/Corporate/ci2.jpeg" },
			{ iid: "3", url: "/Experiences/Corporate/ci3.jpg" },
			{ iid: "4", url: "/Experiences/Corporate/ci4.jpg" },
		],
	},
];

const expr2 = [
	{
		id: "1",
		title: "Destinations",
		text: "Your holiday starts with your imagery. What does your gut say? Where does your heart take you? Imagine yourself already there. We take you to discover every corner of the world: from exploring the shores of Incredible India, to the white beaches of the Caribbean to the unspoiled nature of Northern Europe, from the silence of the desert in the United Arab Emirates to the bright colors of South America. The world is all to be explored: you just have to pack your bags!",
		images: [
			{ iid: "1", url: "/Experiences/Destination/Cruise 1.png" },
			{ iid: "2", url: "/Experiences/Destination/Dubai 1.png" },
			{ iid: "3", url: "/Experiences/Destination/gateway of india.png" },
			{ iid: "4", url: "/Experiences/Destination/India 1.png" },
			{ iid: "5", url: "/Experiences/Destination/Muscat 1.png" }
		],
	},
	{
		id: "2",
		title: "Entertainment",
		text: "Let yourself be carried away by the entertainment. Whether you’re on board for a romantic trip for two, on cruise with your family or friends, we are here to ensure you have fun and live out your dreams. Every day you can wake up and plunge into the swimming pool, challenge your friends in the games room, and do a bit of shopping in our stores. And in the evening, shows and special performances are waiting for you at the theatre, to make every moment of your vacation unforgettable!",
		images: [
			{ iid: "1", url: "/Experiences/Entertainment/Entertainment 1.jpg" },
			{ iid: "2", url: "/Experiences/Entertainment/Entertainment 2(1).jpg" },
			{ iid: "3", url: "/Experiences/Entertainment/Entertainment 2.jpg" },
			{ iid: "4", url: "/Experiences/Entertainment/Entertainment 3.jpg" },
			{ iid: "5", url: "/Experiences/Entertainment/Entertainment4.jpg" },
		],
	},
	{
		id: "3",
		title: "Food",
		text: "Explore our delicious Indian & international cuisine onboard. Meals by the pool and mouth-watering dinners at the restaurant: every day you have the choice of a relaxed bite to eat at the buffet, or a more traditional dinner in the main restaurant catering to a variety of tastes and dietary preferences.",
		images: [
			{ iid: "1", url: "/Experiences/Food/Beverage 1.png" },
			{ iid: "2", url: "/Experiences/Food/Beverage 2.png" },
			{ iid: "3", url: "/Experiences/Food/Food 1.png" },
			{ iid: "4", url: "/Experiences/Food/Food 2.png" },
			{ iid: "5", url: "/Experiences/Food/Indian Chef.jpg" },
			{ iid: "6", url: "/Experiences/Food/Indian food.png" },
		],
	},
];


function Sail2() {

	const [seeMore, setSeeMore] = useState(false);

	const onPressHandle = () => {

		setSeeMore(!seeMore);
	};

	return (

		<section id="Sail">
			<div className="sail">
				<div className="sail-content">
					<div className="sail-heading">
						<h1 className="sail-title PoppBold" style={{ marginBottom: "1%" }}>
							Costa Cruises, believe your eyes
						</h1>
						<p className="sail-subtitle PoppReg" style={{ marginBottom: "1%", fontWeight: 500 }}>
							Are you thinking of treating yourself to a memorable holiday? For
							more than 75 years the ships of the historic Costa Cruises brand
							have plied the seas of the world, providing dream holidays with
							the utmost in terms of fun and relaxation. Are you ready to look
							at the world with new eyes? We are waiting for you onboard to
							embark on an unforgettable journey!
						</p>
						{!seeMore ?
							<>
								<div className="sail-videos-container row flex-wrap">
									<div className="sail-video-box col-md">
										<iframe
											width="100%"
											height="100%"
											src="https://www.youtube.com/embed/bymaa1FzhJ4?list=PLID-JYl2JnP2J_1Zi21Gryunn-RtGM12r"
											title="Costa Toscana Ship Tour"
											frameborder="0"
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
										></iframe>
									</div>
									<div className="sail-video-box col-md">
										<iframe
											width="100%"
											height="100%"
											src="https://www.youtube.com/embed/eGYRBQjQPo0?list=PLID-JYl2JnP2r142TPXzos-htwaNwK-F5"
											title="Adel Sajan and Sana Khan’s wedding on Costa Fascinosa"
											frameborder="0"
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
										></iframe>
									</div>
								</div>
								<button
									className="sail-button PoppReg"
									// style={{ fontWeight: "700" }}
									onClick={onPressHandle}
								>
									See More
								</button>
							</> : <>
								<div className="sail-videos-container row flex-wrap">
									<div className="sail-video-box col-md">
										<iframe
											width="100%"
											height="100%"
											src="https://www.youtube.com/embed/bymaa1FzhJ4?list=PLID-JYl2JnP2J_1Zi21Gryunn-RtGM12r"
											title="Costa Toscana Ship Tour"
											frameborder="0"
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
										></iframe>
									</div>
									<div className="sail-video-box col-md">
										<iframe
											width="100%"
											height="100%"
											src="https://www.youtube.com/embed/eGYRBQjQPo0?list=PLID-JYl2JnP2r142TPXzos-htwaNwK-F5"
											title="Adel Sajan and Sana Khan’s wedding on Costa Fascinosa"
											frameborder="0"
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
										></iframe>
									</div>
								</div>
								<div className="sail-videos-container row flex-wrap">
									<div className="sail-video-box col-md">
										<iframe
											width="100%"
											height="100%"
											src="https://www.youtube.com/embed/S1uxOeVsKr0"
											title="Costa Cruise Brand Video"
											frameborder="0"
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
										></iframe>
									</div>
									<div className="sail-video-box col-md">
										<iframe
											width="100%"
											height="100%"
											src="https://www.youtube.com/embed/lAYds1sRqP0"
											title="Costa Serena Sailing in India"
											frameborder="0"
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
										></iframe>
									</div>
								</div>
								<div className="sail-videos-container row flex-wrap">
									<div className="sail-video-box col-md">
										<iframe
											width="100%"
											height="100%"
											src="https://www.youtube.com/embed/S1uxOeVsKr0"
											title="Costa Cruise Brand Video"
											frameborder="0"
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
										></iframe>
									</div>
									<div className="sail-video-box col-md">
										<iframe
											width="100%"
											height="100%"
											src="https://www.youtube.com/embed/lAYds1sRqP0"
											title="Costa Serena Sailing in India"
											frameborder="0"
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
										></iframe>
									</div>
								</div>
								<button
									className="sail-button PoppReg"
									// style={{ fontWeight: "500" }}
									onClick={onPressHandle}
								>
									See Less
								</button>
							</>
						}
					</div>
				</div>
			</div>
			{/* <div style={{ marginBottom: "2%" }}> </div> */}
			{/* <div className="sail">
				<div className="card-settings">
					<div className="card-group cg">
						{expr1.map((com) => (
							<InfoCard comp={com} />
						))}
						<div class="w-100 row-settings"></div>
						{expr2.map((com) => (
							<InfoCard comp={com} />
						))}
					</div>
				</div>
			</div> */}
		</section>
	);
}

export default Sail2;
