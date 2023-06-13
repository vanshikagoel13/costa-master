import React from "react";
import "../styles/banner2.css";
import "../styles/Fonts.css";
import HomeHeader from "../components/HomeHeader";
import { useState } from "react";

function Banner({ onBanner, offBanner }) {

	const [isHeaderExpanded, setIsHeaderExpanded] = useState(false);
	const [where, setWhere] = useState(false);
	const [when, setWhen] = useState(false);
	const [who, setWho] = useState(false);

	const settWhere = () => {

		setWhere(!where);
		
		if (when) {
			settWhen(!when);
		}

		if (who) {
			settWho(!who);
		}
	}

	const settWhen = () => {

		setWhen(!when);
		
		if (where) {
			settWhere(!where);
		}

		if (who) {
			settWho(!who);
		}
	}

	const settWho = () => {

		setWho(!who);

		if (where) {
			settWhere(!where);
		}

		if (when) {
			settWhen(!when);
		}
	}

	const handleHeaderExpand = () => {
		setIsHeaderExpanded(true);
		offBanner();
	};

	const handleHeaderCollapse = () => {
		setIsHeaderExpanded(false);
		onBanner();
	};

	return (

		<div className="banner">
			<div className="banner-header">
				<HomeHeader
					isExpanded={isHeaderExpanded}
					onExpand={handleHeaderExpand}
					onCollapse={handleHeaderCollapse}
				/>
			</div>
			{isHeaderExpanded ? null :
				<>
					<div className="component-background">
						<video autoPlay loop muted className="background-video">
							<source src={process.env.PUBLIC_URL + "/Homebannervideo.mp4"} type="video/mp4" />
						</video>
					</div>
					<div className="banner-content">
						<h1 className="banner-title">Book Your Cruise</h1>
						<p className="banner-subtitle">Discover the world from the unique perpective of the sea</p>
						<div className="d-flex" style={{ width: '100%' }}>
							<div className="d-flex" style={{ width: '80%' }}>
								<div className="banner-3">
									<button onClick={settWhere} aria-haspopup="true" style={{ width: '100%', height: '100%', borderRadius: '5px', textAlign: 'left', border: 'none', }}>
										<div className="inner-banner-3">
											<h className="title PoppMed">WHERE ARE YOU GOING?</h>
											<div className="d-flex" style={{ alignitems: 'center', marginTop: '1%' }}>
												<i className="fas fa-map-marker-alt" style={{ fontSize: '1.5em' }}></i>
												<h className="sub-title PoppMed">Any Destination</h>
											</div>
										</div>
									</button>
								</div>
								<div className="banner-3">
									<button onClick={settWhen} aria-haspopup="true" style={{ width: '100%', height: '100%', borderRadius: '5px', textAlign: 'left', border: 'none', }}>
										<div className="inner-banner-3">
											<h className="title PoppMed">WHEN?</h>
											<div className="d-flex" style={{ alignitems: 'center', marginTop: '1%' }}>
												<i className="far fa-calendar-alt" style={{ fontSize: '1.5em' }}></i>
												<h className="sub-title PoppMed">Month - Year</h>
											</div>
										</div>
									</button>
								</div>
								<div className="banner-3">
									<button onClick={settWho} aria-haspopup="true" style={{ width: '100%', height: '100%', textAlign: 'left', border: 'none', borderRadius: '5px' }}>
										<div className="inner-banner-3">
											<h className="title PoppMed">WHO'S COMING?</h>
											<div className="d-flex" style={{ marginTop: '1%' }}>
												<i className="fas fa-users" style={{ fontSize: '1.4em' }}></i>
												<h className="sub-title PoppMed">Adults</h>
											</div>
										</div>
									</button>
								</div>
								<div className="banner-3">
									<button aria-haspopup="true" style={{ width: '100%', height: '100%', textAlign: 'left', border: 'none', backgroundColor: 'rgb(255, 221, 2)', borderRadius:'5px' }}>
										<div className="sett">
											<div className="d-flex justify-content-center align-items-center" style={{ marginTop: '1%' }}>
												<i className="fas fa-search" style={{ fontSize: '1.4em' }}></i>
												<h className="sub-title PoppMed">Search</h>
											</div>
										</div>
									</button>
								</div>
							</div>
						</div>
					</div>
					{!where ? null :
						<div className="where" style={{ width: '40%'}}>
							<div style={{ margin: '2%' }}>
								<div className="row row-ban">
									<div className="col-lg-6 col-sm-6 d-flex">
										<button aria-haspopup="true" style={{ display: 'flex', width: '100%', height: '100%', textAlign: 'left', border: '0.5px solid grey', padding: '0', margin: '0' }}>
											<img className="img-settings" src={process.env.PUBLIC_URL + '/ScrollHome/image1.jpg'} alt=".."></img>
											<p className="where-text">Mumbai</p>
										</button>
									</div>
									<div className="col-lg-6 col-sm-6 d-flex">
										<button aria-haspopup="true" style={{ display: 'flex', width: '100%', height: '100%', textAlign: 'left', border: '0.5px solid grey', padding: '0', margin: '0' }}>
											<img className="img-settings" src={process.env.PUBLIC_URL + '/ScrollHome/image4.png'} alt=".."></img>
											<p className="where-text">Kochi</p>
										</button>
									</div>
								</div>
								<div className="row row-ban">
									<div className="col-lg-6 col-sm-6 d-flex">
										<button aria-haspopup="true" style={{ display: 'flex', width: '100%', height: '100%', textAlign: 'left', border: '0.5px solid grey', padding: '0', margin: '0' }}>
											<img className="img-settings" src={process.env.PUBLIC_URL + '/ScrollHome/image7.jpg'} alt=".."></img>
											<p className="where-text">Dubai</p>
										</button>
									</div>
									<div className="col-lg-6 col-sm-6 d-flex">
										<button aria-haspopup="true" style={{ display: 'flex', width: '100%', height: '100%', textAlign: 'left', border: '0.5px solid grey', padding: '0', margin: '0' }}>
											<img className="img-settings" src={process.env.PUBLIC_URL + '/ScrollHome/image6.jpg'} alt=".."></img>
											<p className="where-text">Abu Dhabi</p>
										</button>
									</div>
								</div>
							</div>
						</div>
					}
					{!when ? null : 
						<p>Hello</p>
					}
				</>
			}
		</div>
	);
}

export default Banner;
