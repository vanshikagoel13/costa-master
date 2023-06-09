import React, { useState } from "react";
import "../styles/Hstyle.css";
import "../styles/Fonts.css";
import "../styles/HomeHeader.css";
import { Link, Route } from 'react-router-dom';

function HomeHeader({ isExpanded, onExpand, onCollapse }) {

	const [isNavCollapsed, setIsNavCollapsed] = useState(true);

	const handleNavCollapse = () => {

		setIsNavCollapsed(!isNavCollapsed);

		if (isExpanded) {
			onCollapse();
		} else {
			onExpand();
		}
	};

	const navLinkStyle = {

		fontSize: isNavCollapsed ? "13px" : "20px",
		fontWeight: 750,
		margin: isNavCollapsed ? "0" : "10px",
		color: isNavCollapsed ? "#fff" : "#000",
	};

	return (
		<>
			<nav className="navbar navbar-expand-lg bh-transparent mt-2">
				<div className="container-fluid">
					<button
						className="navbar-toggler hhcustom-navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded={!isNavCollapsed}
						aria-label="Toggle navigation"
						onClick={handleNavCollapse}
						style={{
							fontSize: "1.0rem",
							marginLeft: "15px",
							// backgroundColor: "#000",
						}}
					>
						<span className="navbar-toggler-icon hhnavbar-toggler-icon"></span>
					</button>

					<Link className={`navbar-brand mx-auto`} to="../">
						<img
							src={process.env.PUBLIC_URL + "/logo.png"}
							alt="Costa"
							width="65"
							height="50"
							style={{ marginLeft: isNavCollapsed ? "0px" : "62px" }}
						/>
					</Link>

					<div className={`collapse navbar-collapse ${isNavCollapsed ? "" : "show"}`} id="navbarSupportedContent">
						<ul className="navbar-nav me-auto flex-grow-1 m-2 mb-lg-0">
							<li>
								<Link className="nav-link AltReg" to="../Destinations" style={navLinkStyle}>
									Destinations
								</Link>
							</li>
							<li>
								<Link className="nav-link AltReg" to="../CostaExp" style={navLinkStyle}>
									Costa Experience
								</Link>
							</li>
							<li className="nav-item px-2">
								<Link className="nav-link AltReg" to="../CostaToscana" style={navLinkStyle}>
									Costa Toscana
								</Link>
							</li>
							<li className="nav-item px-2">
								<Link className="nav-link AltReg" to="#" style={navLinkStyle}>
									Costa Serene
								</Link>
							</li>
						</ul>
					</div>

					<div className="d-flex justify-content-end">
						{/* <ul className={`navbar-nav ${isNavCollapsed ? "ml-auto" : "ms-auto"} ml-lg-0`}>
							<li className="nav-item px-3"> */}
								<Link to="#" className="nav-link" style={navLinkStyle}>
									<i className="fas fa-phone-alt fa-lg "></i>
									<span className="d-lg-inline d-none">
										1-800-462-6782 (1-800-Go-Costa)
									</span>
								</Link>
							{/* </li>
						</ul> */}
					</div>
				</div>
			</nav>
		</>
	);
}

export default HomeHeader;
