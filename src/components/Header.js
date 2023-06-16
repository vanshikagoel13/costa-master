import React, { useState } from "react";
import "../styles/Header.css";
import "../styles/Fonts.css";
import { Link } from 'react-router-dom';

function Header({ isExpanded, onExpand, onCollapse }) {

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
		fontSize: isNavCollapsed ? "14.5px" : "20px",
		fontWeight: 750,
		marginLeft: isNavCollapsed ? "15px" : "0px",
		marginRight: isNavCollapsed ? "15px" : "0px",
		marginTop: isNavCollapsed ? "0" : "10px",
		marginBottom: isNavCollapsed ? "0" : "10px",
		color: "#000",
	};

	return (
		<>
			<nav className="navbar navbar-expand-lg bh-transparent mt-2">
				<div className="container-fluid">
					<button
						className={isNavCollapsed
							? "navbar-toggler sizeofmenu custom-navbar-toggler"
							: "navbar-toggler sizeofmenu newcustom-navbar-toggler"
						}
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded={!isNavCollapsed}
						aria-label="Toggle navigation"
						onClick={handleNavCollapse}
						style={{
							fontSize: "1.0rem",
							// marginLeft: "15px",
							// backgroundColor: "#000",
						}}
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					<Link className={`navbar-brand mx-auto`} to="../">
						<img
							src={process.env.PUBLIC_URL + "/logo.png"}
							alt="Costa"
							width="75"
							height="60"
						// style={navLinkStyle}
						/>
					</Link>

					<div className={`collapse navbar-collapse ${isNavCollapsed ? "" : "show"}`} id="navbarSupportedContent">
						<ul className="navbar-nav me-auto flex-grow-1 m-2 mb-lg-0">
							<li className={`nav-item ${isNavCollapsed ? "mb-2" : "mb-lg-0"}`}>
								<Link className="nav-link font-nav2 PoppReg" to="../Destinations" style={navLinkStyle}>
									Destinations
								</Link>
							</li>
							<li>
								<Link className="nav-link font-nav2 PoppReg" to="../CostaExp" style={navLinkStyle}>
									Costa Experience
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link font-nav2 PoppReg" to="../CostaToscana" style={navLinkStyle}>
									Costa Toscana
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link font-nav2 PoppReg" to="../CostaSerena" style={navLinkStyle}>
									Costa Serena
								</Link>
							</li>
						</ul>
					</div>

					{/* <div className="d-flex justify-content-end">
						<ul className={`navbar-nav ${isNavCollapsed ? "ml-auto" : "ms-auto"} ml-lg-0`}>
							<li className="nav-item px-2">
								<Link to="#" className="nav-link" style={navLinkStyle}>
									<i className="fas fa-phone-alt fa-lg "></i>
									<span className="d-lg-inline d-none">
										1-800-462-6782 (1-800-Go-Costa)
									</span>
								</Link>
							</li>
						</ul>
					</div> */}
				</div>
			</nav>
		</>
	);
}

export default Header;
