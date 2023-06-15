import React from 'react';
import { Link } from "react-router-dom";
import "../styles/NewFooter.css";
import "../styles/Fonts.css";

const NewFooter = () => {

	return (

		<div className='cont-footer'>
			<div className='row' style={{backgroundColor: '#0e017e'}}>
				<div className="col custom-col-1-newfooter">
					<div className='column1-settings'>
						<div className='d-flex company-name-sec'>
							<div className='logo-foot '>
								<img src={process.env.PUBLIC_URL + "/logo2.png"} alt="Company Logo" className="company-logo"></img>
							</div>
							<div className='logo-details KepStd'>
								<h2 className='costa-cruise'>Costa Cruises</h2>
								<h6 className='destination'>Destination Of Your Dreams</h6>
							</div>
						</div>
						<div className='foot-content PoppMed'>
							<p>Costa Cruise is an Italian company under Carnival Corporation, known for its Italian style and hospitality. It operates globally, offering routes in the Mediterranean, North Europe, Baltic Sea, Caribbean, North and Central America, South America, UAE, and Asia. From December 2023 to March 2024, their flagship Costa Toscana, powered by LNG, will operate in Dubai with 2,663 cabins and a tonnage of 185,000.</p>
						</div>
						<div className='icon col-lg-3 col-sm-3 col-md-3 d-flex justify-content-start'>
							<a href="https://www.youtube.com/@costacruiseindia4623" className="text-white me-4">
								<i className="fab fa-linkedin fa-lg"></i>
							</a>
							<a href="https://www.instagram.com/costacruisesindia/" className="text-white me-4">
								<i className="fab fa-instagram fa-lg"></i>
							</a>
							<a href="https://www.youtube.com/@costacruiseindia4623" className="text-white me-4">
								<i className="fab fa-twitter fa-lg"></i>
							</a>
							<a href="https://www.facebook.com/CostaCruiseIndia" className="text-white me-4">
								<i className="fab fa-facebook-f fa-lg"></i>
							</a>
							<a href="https://www.youtube.com/@costacruiseindia4623" className="text-white me-4">
								<i className="fab fa-youtube fa-lg"></i>
							</a>
						</div>
						<div className='book-now'>
							<h5 className='PoppBold headers'>Book Now:</h5>
							<h5 className='PoppMed mail-num-details'><i className="fa-solid fa-phone"></i>&nbsp;&nbsp;022-68811111</h5>
						</div>
						<div className='customer-support'>
							<h5 className='PoppBold headers'>Customer Support</h5>
							<h1 className='PoppMed mail-num-details'><i className="fas fa-phone-alt"></i>&nbsp;&nbsp;022-68811111</h1>
							<h1 className='PoppMed mail-num-details'><i className="fas fa-envelope"></i>&nbsp;&nbsp;customercare@us.costa.it</h1>
						</div>
					</div>
				</div>
				<div className='col custom-col-2-newfooter'>
					<h1 className='links-head KepStd'>Links</h1>
					<div className='flex all-links'>
						<p className='links'><Link to="../ContactUs" className="PoppReg link-style">Info about company</Link></p>
						<p className='links'><Link to="../FAQ" className="PoppReg link-style">FAQ</Link></p>
						<p className='links'><Link to="../PrivacyPolicy" className="PoppReg link-style">Privacy Policy</Link></p>
						<p className='links'><Link to="../TermsConditions" className="PoppReg link-style">Terms and Conditions</Link></p>
						<p className='links'><Link to="../Destinations" className="PoppReg link-style">Destinations</Link></p>
						<p className='links'><Link to="../CostaExp" className="PoppReg link-style">Experience</Link></p>
						<p className='links'><Link to="../CostaToscana" className="PoppReg link-style">Costa Toscana</Link></p>
						<p className='links'><Link to="../CostaSerena" className="PoppReg link-style">Costa Serena</Link></p>
					</div>
				</div>
			</div>
		</div>
	)
};

export default NewFooter;
