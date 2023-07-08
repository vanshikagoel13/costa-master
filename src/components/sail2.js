import { React, useState, useRef, useEffect } from "react";
import "../styles/sail2.css";
import "../styles/Fonts.css";
import InfoCard from "./InfoCard";

const expr1 = [
	{
		id: "1",
		title: "Accomodation",
		text: "The cabin of your dreams, every Costa cabin is comfortable and cozy. The perfect place to relax after a busy day of activities and socializing, both on board and ashore. Costa has different types of cabins in terms of size and location that enable you to find the space that best suits your needs.",
		images: [
			{ iid: "1", url: "/Experiences/Accomodation/cabin1.jpg" },
			// { iid: "2", url: "/Experiences/Accomodation/cabin2.jpg" },
			// { iid: "3", url: "/Experiences/Accomodation/cabin3.jpg" },
			// { iid: "4", url: "/Experiences/Accomodation/cabin4.jpg" },
		],

	},
	{
		id: "2",
		title: "Wedding",
		text: "Your wedding day should be everything you have dreamed of and more. From having implemented the biggest-ever wedding at sea, let Costa Cruises make your dreams come true as we take care of every detail, leaving you free to revel in the joy and romance of this extraordinary occasion. ",
		images: [
			// { iid: "1", url: "/Experiences/Wedding/Wedding picture 1.jpg" },
			{ iid: "1", url: "/Experiences/Wedding/Wedding picture 2.jpeg" },
			// { iid: "3", url: "/Experiences/Wedding/Wedding picture 3.jpg" },
			// { iid: "4", url: "/Experiences/Wedding/Wedding picture 4.jpg" },
			// { iid: "5", url: "/Experiences/Wedding/Wedding picture 5.jpg" },
		],
	},
	{
		id: "3",
		title: "Corporate",
		text: "We make conducting meetings, rewards, recognition, conferences and workshops at sea on a Costa cruise not only one of the most efficient but also economical ways to stage your event. So, let's help combine some work and some fun onboard your next Costa Cruise.",
		images: [
			// { iid: "1", url: "/Experiences/Corporate/ci1.jpg" },
			{ iid: "1", url: "/Experiences/Corporate/ci2.jpeg" },
			// { iid: "3", url: "/Experiences/Corporate/ci3.jpg" },
			// { iid: "4", url: "/Experiences/Corporate/ci4.jpg" },
		],
	},
];

const expr2 = [
	{
		id: "1",
		title: "Destinations",
		text: "Your holiday starts with your imagery. What does your gut say? Where does your heart take you? Imagine yourself already there. We take you to discover every corner of the world: you just have to pack your bags!",
		images: [
			// { iid: "1", url: "/Experiences/Destination/Cruise 1.png" },
			// { iid: "2", url: "/Experiences/Destination/Dubai 1.png" },
			{ iid: "1", url: "/Experiences/Destination/gateway of india.png" },
			// { iid: "4", url: "/Experiences/Destination/India 1.png" },
			// { iid: "5", url: "/Experiences/Destination/Muscat 1.png" }
		],
	},
	{
		id: "2",
		title: "Entertainment",
		text: "Let yourself be carried away by the entertainment. Every day you can wake up and plunge into the swimming pool, challenge your friends in the games room, and do a bit of shopping in our stores. And in the evening, shows and special performances are waiting for you at the theatre, to make every moment of your vacation unforgettable!",
		images: [
			{ iid: "1", url: "/Experiences/Entertainment/Entertainment 1.jpg" },
			// { iid: "2", url: "/Experiences/Entertainment/Entertainment 2(1).jpg" },
			// { iid: "3", url: "/Experiences/Entertainment/Entertainment 2.jpg" },
			// { iid: "4", url: "/Experiences/Entertainment/Entertainment 3.jpg" },
			// { iid: "5", url: "/Experiences/Entertainment/Entertainment4.jpg" },
		],
	},
	{
		id: "3",
		title: "Food",
		text: "Explore our delicious Indian & international cuisine onboard. Meals by the pool and mouth-watering dinners at the restaurant: every day you have the choice of a relaxed bite to eat at the buffet, or a more traditional dinner in the main restaurant catering to a variety of tastes and dietary preferences.",
		images: [
			// { iid: "1", url: "/Experiences/Food/Beverage 1.png" },
			// { iid: "2", url: "/Experiences/Food/Beverage 2.png" },
			{ iid: "1", url: "/Experiences/Food/Food 1.png" },
			// { iid: "4", url: "/Experiences/Food/Food 2.png" },
			// { iid: "5", url: "/Experiences/Food/Indian Chef.jpg" },
			// { iid: "6", url: "/Experiences/Food/Indian food.png" },
		],
	},
];

function Sail2() {

	const [seeMore, setSeeMore] = useState(false);

	const onPressHandle = () => {

		setSeeMore(!seeMore);
	};

	const [isVideoPlaying, setIsVideoPlaying] = useState([false, false, false, false]);

	const handleThumbnailClick = (index) => {

		setIsVideoPlaying((prev) => {

			const newState = [...prev];
			newState[index] = !newState[index];
			return newState;
		});
	};

	const videoPlayerRef = useRef(null);

	useEffect(() => {
		if (isVideoPlaying[0]) {
			// Access the iframe element using the ref
			const videoPlayer = videoPlayerRef.current;

			// Ensure the iframe element is available
			if (videoPlayer && videoPlayer.contentWindow && videoPlayer.contentWindow.postMessage) {
				// Send a postMessage command to the YouTube player to play the video
				videoPlayer.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
			}
		}
	}, [isVideoPlaying]);

	return (

		<section id="Sail">
			<div className="sail">
				<div className="sail-content">
					<div className="sail-heading">
						<h3 className="sail-title PoppBold" style={{ marginBottom: "1%" }}>
							Costa Cruises, believe your eyes
						</h3>
						<h6 className="sail-subtitle PoppReg" style={{ marginBottom: "1%", fontWeight: 500 }}>
							Are you thinking of treating yourself to a memorable holiday? For
							more than 75 years the ships of the historic Costa Cruises brand
							have plied the seas of the world, providing dream holidays with
							the utmost in terms of fun and relaxation. Are you ready to look
							at the world with new eyes? We are waiting for you onboard to
							embark on an unforgettable journey!
						</h6>
						{!seeMore ?
							<>
								<div className="sail-videos-container row flex-wrap">
									<div className="sail-video-box col-md" style={{ marginRight: '10px' }}>
										{!isVideoPlaying[0] && (
											<img
												src={process.env.PUBLIC_URL + '/Thumbnails/Costa Toscana Ship Tour.png'}
												alt="Thumbnail"
												className="thumbnail-sail"
												onClick={() => handleThumbnailClick(0)}
											/>
										)}
										{isVideoPlaying[0] && (
											<iframe
												ref={videoPlayerRef} // Assign the ref to the iframe element
												id="videoPlayer"
												width="100%"
												height="100%"
												src="https://www.youtube.com/embed/bymaa1FzhJ4?autoplay=1"
												title="Costa Toscana Ship Tour"
												frameborder="0"
												allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen; autoplay;"
											></iframe>
										)}
									</div>
									<div className="sail-video-box col-md" style={{ marginRight: '10px' }}>
										{!isVideoPlaying[1] && (
											<img
												src={process.env.PUBLIC_URL + '/Thumbnails/Wedding.png'}
												alt="Thumbnail"
												className="thumbnail-sail"
												onClick={() => handleThumbnailClick(1)}
											/>
										)}
										{isVideoPlaying[1] && (
											<iframe
												width="100%"
												height="100%"
												src="https://www.youtube.com/embed/eGYRBQjQPo0?autoplay=1"
												title="Adel Sajan and Sana Khan’s wedding on Costa Fascinosa"
												frameborder="0"
												allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
											></iframe>
										)}
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
									<div className="sail-video-box col-md" style={{ marginRight: '10px' }}>
										{!isVideoPlaying[0] && (
											<img
												src={process.env.PUBLIC_URL + '/Thumbnails/Costa Toscana Ship Tour.png'}
												alt="Thumbnail"
												className="thumbnail-sail"
												onClick={() => handleThumbnailClick(0)}
											/>
										)}
										{isVideoPlaying[0] && (
											<iframe
												width="100%"
												height="100%"
												src="https://www.youtube.com/embed/bymaa1FzhJ4?autoplay=1"
												title="Costa Toscana Ship Tour"
												frameborder="0"
												allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
											></iframe>
										)}
									</div>
									<div className="sail-video-box col-md" style={{ marginRight: '10px' }}>
										{!isVideoPlaying[1] && (
											<img
												src={process.env.PUBLIC_URL + '/Thumbnails/Wedding.png'}
												alt="Thumbnail"
												className="thumbnail-sail"
												onClick={() => handleThumbnailClick(1)}
											/>
										)}
										{isVideoPlaying[1] && (
											<iframe
												width="100%"
												height="100%"
												src="https://www.youtube.com/embed/eGYRBQjQPo0?autoplay=1"
												title="Adel Sajan and Sana Khan’s wedding on Costa Fascinosa"
												frameborder="0"
												allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
											></iframe>
										)}
									</div>
								</div>
								<div className="sail-videos-container row flex-wrap">
									<div className="sail-video-box col-md" style={{ marginRight: '10px' }}>
										{!isVideoPlaying[2] && (
											<img
												src={process.env.PUBLIC_URL + '/Thumbnails/Costa Cruise Brand Video.png'}
												alt="Thumbnail"
												className="thumbnail-sail"
												onClick={() => handleThumbnailClick(2)}
											/>
										)}
										{isVideoPlaying[2] && (
											<iframe
												width="100%"
												height="100%"
												src="https://www.youtube.com/embed/S1uxOeVsKr0?autoplay=1"
												title="Costa Cruise Brand Video"
												frameborder="0"
												allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
											></iframe>
										)}
									</div>
									<div className="sail-video-box col-md" style={{ marginRight: '10px' }}>
										{!isVideoPlaying[3] && (
											<img
												src={process.env.PUBLIC_URL + '/Thumbnails/Costa Serena Sailing.png'}
												alt="Thumbnail"
												className="thumbnail-sail"
												onClick={() => handleThumbnailClick(3)}
											/>
										)}
										{isVideoPlaying[3] && (
											<iframe
												width="100%"
												height="100%"
												src="https://www.youtube.com/embed/lAYds1sRqP0?autoplay=1"
												title="Costa Serena Sailing in India"
												frameborder="0"
												allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
											></iframe>
										)}
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
			<div className="sail">
				<div className="card-settings" style={{ width: '100%' }}>
					<div className="card-group cg">
						{expr1.map((com) => (
							<InfoCard comp={com} />
						))}
						<div className="w-100 row-settings"></div>
						{expr2.map((com) => (
							<InfoCard comp={com} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Sail2;
