import React, { useState } from "react";
import "../styles/FAQ.css";
import Footer from "./Footer.js";
import TextBox from "./TextBox.js";
import Header from "./Header";
// import NewFooter from "./NewFooter";
import CallNowButton from "./CallNowButton";
function FAQ() {
	const [isHeaderExpanded, setIsHeaderExpanded] = useState(false);
	const handleHeaderExpand = () => {
		setIsHeaderExpanded(true);
	};

	const handleHeaderCollapse = () => {
		setIsHeaderExpanded(false);
	};
	return (
		<>
			<div className="v-scroll">
				<Header
					isExpanded={isHeaderExpanded}
					onExpand={handleHeaderExpand}
					onCollapse={handleHeaderCollapse}
				/>
				{isHeaderExpanded ? null : (
					<div>
						<div className="background-image-flow">
							<svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ position: 'absolute', height: '100%', width: '100%' }}>
								<path d="M-4.28,31.98 C63.99,87.09 373.81,-16.23 511.51,21.16 L500.00,149.60 L-0.00,149.60 Z" fill="#b9e8fc" fill-opacity="1"></path>
							</svg>
						</div>
						<div className="ship-container">
							<img src={process.env.PUBLIC_URL + '/ship_faq.png'} className="image-ship" alt="Image"></img>
						</div>
						<div className="heading">
							<h3 className="head-faq PoppBold" >Frequently Asked<br />Questions</h3>
							{/* <hr className="bg-black m-5 widset mx-auto" /> */}
						</div>
						<div className="allin-faq">
							<div className="scroll-container">
								<div className="container container-faq">
									<TextBox
										question="What destinations can cruise do?"
										answer="Pretty much all around the world from India, Asia, Australia/New Zealand, the Bahamas, Bermuda, Canada/New England, the Caribbean, Europe, Hawaii, Mexico, the Pacific Northwest, Panama Canal, South America, Alaska, and Transatlantic. One of the best ways to visit multiple countries and destinations during one vacation is on a cruise. Our exciting India sailings options covering Mumbai, Goa & Cochin ports are scheduled in November and December 2023 and Emirates sailing options covering Dubai, Abu Dhabi, Doha and Muscat ports are scheduled from December 2023 to March 2024, bringing cruising closer to home. Check with our Team for the cruise calendar for more information on the destinations."
									/>
									<TextBox
										question="Is Indian Food available onboard?"
										answer="For our India sailings onboard Costa Serena in Nov & Dec 2023 there will be wide spread buffets with Indian, Jain & international cuisine. For all our other itineraries, it is always available on request."
									/>
									<TextBox
										question="Is a cruise vacation affordable?"
										answer="A cruise vacation is highly affordable! You get cruise accommodation, all meals, inclusive activities and entertainment included in the price you pay. The extra you spend maybe on your alcoholic and beverage purchases, on your shore excursions, duty-free Shopping onboard and personal items."
									/>
									<TextBox
										question="Anniversary celebration onboard?"
										answer="Celebrating a birthday, a wedding anniversary or honeymoon aboard the ship is a truly unique opportunity. You can buy special packages with cakes and other items directly onboard."
									/>
									<TextBox
										question="Can a disabled person go on a Costa Cruise?"
										answer="In order to ensure that disabled people can enjoy a wonderful cruise holiday, any information regarding special requirements must be supplied at the time of booking. Disabled person is required to travel with an accompanying person or their own wheelchair. A limited number of wheelchairs is available on our ships for any emergencies. All our ships have a number of dedicated and fully equipped cabins which are free of architectural barriers."
									/>
									<TextBox
										question="What are the different types of accommodation/stay available on board?"
										answer="There are normally four types of cabins on board ships: Inside cabins that are comfortable with no view. Outside cabins are cabins that have fixed windows that cannot be opened, but provide you with a sea view. Balcony cabins are cabins that have a balcony attached to the cabin. Suites cabins are little larger areas with bedroom, sitting space with panorama windows or balcony attached. All the cabins are very comfortable and well furnished, equipped with television, private bath and shower and hair dryer."
									/>
									<TextBox
										question="What is included & not included in a cruise package:"
										answer="From full board accommodation (excluding drinks, other than tea/ coffee for tea time & breakfast) to on-board activities, including sports and wellness facilities, to evening entertainment, Costa Cruises includes everything you could wish for on holiday. Extra services (drinks, excursions, wellness treatments, personal items) and onboard gratuities incase not prepaid prior cruise. To help you plan, we suggest you limit your luggage to a maximum of one bag per person, if traveling on cruises of 3-5 days duration, and no more than two bags per person, for cruises of 6 days or longer. In addition, you must personally carry-on any boarding documentation (passports, Visas, I.D), valuables, medications and items which require special handling. Airline Luggage Restrictions If traveling by air, guests are encouraged to contact the airlines directly to determine luggage restrictions and fees"
									/>
									<TextBox
										question="Will I feel bored on the ship?"
										answer="Your cruise ship is a floating resort and with so many things to do and explore, it will probably take you a couple of days to get familiar with your surroundings. The cruise ship is huge and there is plenty of space"
									/>
									<TextBox
										question="What do I do once I have boarded?"
										answer="When boarding, check your cabin number on your cruise ticket. You can go there directly. You will find your key on the bed when you arrive. Your luggage will be delivered to your cabin as soon as possible. But most importantly grab for Cruise Newsletter, to get more information on all the activities, food onboard, so you can start your vacation."
									/>
									<TextBox
										question="Which languages are spoken onboard?"
										answer="Our crew and guests come from all over the world and one of the reasons our ships are so special is the international atmosphere that reigns on board. You will have no difficulty communicating with our staff. Even the entertainment and shows are designed for an international audience: music, dance and mimes: here the official language is the music! On land, you can choose in which language to participate in our exclusive excursions."
									/>
									<TextBox
										question="Is there entertainment for children?"
										answer="For children over three years who are toilet-trained (do not require nappies) there are several entertaining activities available for the duration of the cruise. Simply register your children when boarding and you’ll receive a detailed programme of activities dedicated to them. Activities may vary according to the season, the ship and the number of people involved. Entertainment is not provided for children under three years of age."
									/>
									<TextBox
										question="Who do I contact If I need?"
										answer="On every ship you will find the Hospitality Office open 24 hours a day providing information, assistance and even a booking service available during the cruise."
									/>
									<TextBox
										question="What kind of clothes should I bring on a cruise?"
										answer="You are free to wear what you want on a cruise: the atmosphere is informal and casual. Garments must however be suitable for the environments, season, destination and occasion: more formal for the gala dinner, more comfortable and casual for day time and excursions. A jacket or shawl is always recommended"
									/>
									<TextBox
										question="What are the Luggage tags for?"
										answer="The luggage tags are used when boarding to allow the identification and delivery of your baggage to your cabin. On board, at the end of the cruise, you will receive your tags indicating your priority, to facilitate disembarkation. Please note that it is mandatory to attach the tags to your baggage."
									/>
									<TextBox
										question="How does one know about the activities onboard while cruising?"
										answer="The Cruise Daily Newsletter printed every day and handed in the cabin or is available in soft copy . It will contain details of activities planned for the next day, restaurant opening times, news about the port of call, the excursions available and lots of other useful information you may need."
									/>
									<TextBox
										question="Can people contact me while I’m on board?"
										answer="Thanks to agreements with different trading partners, satellite mobile radio coverage is available on all ships in the fleet that allows customers of the main mobile phone operators to send and receive calls and text messages, and also use data services offshore. Your subscription must be enabled for international roaming. Rates are determined by your operator depending on your service plan, please contact them for more information. If we sail near the coast, your phone may connect to a terrestrial operator, in which case you will receive a text message stating the costs that will be incurred. On board you can make calls from your cabin using the satellite phone."
									/>
									<TextBox
										question="How do I pay onboard?"
										answer="On board, each Adult Guest will receive a personal Card and all expenditure will be charged directly to the relevant cabin account. Cruise will issue a receipt for each purchase, which must be signed by the guest. At the end of the cruise and before landing, you will receive a final bill showing all the purchases made on board. The Card is already activated on delivery and will automatically charge your purchases to the cabin account. However, within 48 hours of boarding you must register your personal credit card (Visa, Mastercard and American Express) or your debit card to ensure that costs charged to the card are covered. Alternatively, you can pay a cash deposit (it may be necessary to supplement this sum later if the expenses incurred exceed the deposit). The card may be temporarily disabled in the first 48 hours if the costs exceed 200 euros/dollars (if not covered by a cash deposit or a registered credit/debit card)."
									/>
									<TextBox
										question="Smoking allowed on board?"
										answer="Smoking-cigarettes cigars and pipes – is forbidden in all public areas of the ship except the areas marked as Cigar Lounge. Electronic cigarettes may only be used in the cabins and in the areas marked as 'Cigar Lounge'. In some public areas, smoking is allowed only in designated outdoor Smoking Points equipped with ashtrays. Smoking is not allowed in cabins. In order to avoid a fire hazard, it is very important to always extinguish and dispose of cigarettes in the appropriate ashtrays and never throw them from the ship when still alight."
									/>
									<TextBox
										question="Is there a casino onboard?"
										answer="You will find a Casino with slot machines, roulette and gambling tables on all Costa ships. Access is restricted to adults and opening times are limited to when the ship is sailing. Bets can be placed in the on-board currency (subject to the legal limit of €999.99). If you play using the Costa Card, the daily limit on bets will be €500 if you registered your Credit Card and €100 if you made the deposit in cash."
									/>
									<TextBox
										question="Where can I buy excursion on board?"
										answer="In your cabin you will find the Tour Magazine with information on the excursions available in each port. Trip Office staff will always be available to give advice and make bookings during the opening hours stated in the Logbook. You can also book excursions on board."
									/>
									<TextBox
										question="Cruise offer medical assistance onboard?"
										answer="Each ship has a modern infirmary on board, open at the times stated in the Logbook, and a 24-hour in-cabin medical service. Primary care provided by doctors and nursing staff is chargeable. Sea sickness pills are available free of charge from the Hospitality Office/Customer Services. Special medical needs must be reported at the time of booking. Guests should be aware that over-the-counter medications are not available for purchase on board. Medication is only available on prescription following a medical examination. We recommend that guests bring all their usual medications with them. Guests can contact the Contact Centre with specific questions about their trip."
									/>

									<TextBox
										question="Is Internet browsing possible on board and in the cabin?"
										answer="Every ship in the fleet offers 24-hour satellite Internet access. You can connect to the on-board Wi-Fi with your personal computer, iPad, iPhone, smartphone or using the PCs at the Internet Point. Instructions for gaining access and service costs are available once on board. You can access the Internet with a single device at a time, the cost of the service will be charged directly to your Costa account, you can choose between metered mode (pay per use) or use one of the several prepaid plans available. To access the PCs at the Internet Point, just swipe your Costa Card or follow the instructions to log in manually. Wi-Fi is available in the public areas of the ship and in all cabins. For full details, please visit the (Internet and telephony services) section or contact the Hospitality Office/Customer Services on board."
									/>
									<TextBox
										question="How can I find my way around the ship?"
										answer="Ships are easy to find your way around. Simple, intuitive videos are shown on the screens installed in public areas of ships with all the information you need, from finding your cabin to when your baggage will be delivered. There are numerous maps on each floor and you'll also find one showing the main areas of the ship on the pouch containing your cabin key. The most pleasant way to discover all the areas of the ship is however to take a walk around."
									/>
									<TextBox
										question="How can I store my valuables safely?"
										answer="You can store your valuables directly in the cabin. Each cabin is equipped with a safe. In order to avoid blocking the safe, please to read the operating instructions carefully and avoid putting electronic devices (cell phones, smartphones) switched on inside because they can interfere with the opening mechanism."
									/>
									<TextBox
										question="What will the temperature be like on board?"
										answer="The temperature on board is pleasant, however, it is advisable to bring warmer clothing to cope with sudden changes in temperature between the outside and inside and in enclosed spaces with air conditioning. You can control the temperature individually in your cabin using the thermostat."
									/>
									<TextBox
										question="How can I share the experience I’ve just had on a cruise?"
										answer="At the end of each cruise you will be asked to fill out a short online questionnaire. The opinion of our Guests is important to us, and helps us to keep improving. There are many ways of becoming part of the Cruises social media world: find us on Facebook and Instagram or discover the latest news on the official blog."
									/>
								</div>
							</div>
							<Footer />
							<CallNowButton />
						</div>
					</div>
				)}
			</div>
		</>
	);
}

export default FAQ;
