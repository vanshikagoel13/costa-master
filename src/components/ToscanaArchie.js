import React from 'react';
import "../styles/ToscanaArchie.css"
import "../styles/Fonts.css"
import TrySlider from '../components/TrySlider';

const scrollimages = [

	{ id: 1, url: "/archi.jpg", text: "Archipelago" },
	{ id: 2, url: "/Food LAB.jpg", text: "Food LAB" },
	{ id: 3, url: "/Bistro.jpg", text: "Heineken Star Club & Bistro" },
	{ id: 4, url: "/ferrari.png", text: "Ferrari Spazio Bollicine" },
	{ id: 5, url: "/Bar.jpg", text: "Aperol Spritz Bar" },
	{ id: 6, url: "/archi.jpg", text: "Archipelago" },
	{ id: 7, url: "/Food LAB.jpg", text: "Food LAB" },
	{ id: 8, url: "/Bistro.jpg", text: "Heineken Star Club & Bistro" },
	{ id: 9, url: "/ferrari.png", text: "Ferrari Spazio Bollicine" },
	{ id: 10, url: "/Bar.jpg", text: "Aperol Spritz Bar" },
];

function ToscanaArchie() {

	return (

		<div className=' container containerta' style={{ backgroundColor: "rgb(240, 239, 239)" }}>
			<div className='row g-0'>
				<div className="col-lg-6 custom-col-1 d-flex" style={{ width: "25%" }}>
					<div style={{ width: "100%" }}>
						<p className='categoryta AltReg'>RESTAURANTS AND BARS</p>
						<h1 className='titleta PoppBold'>Archipelago</h1>
						<p className='subtitleta AltReg'>Discover the new restaurant Archipelago: a brand new location with innovative and sustainable design. Three world-famous chefs with three new menus await you: Bruno Barbieri, Hélène Darroze and Ángel León.</p>
					</div>
				</div>
				<div className="col-lg-6 d-flex" style={{ width: "75%", position: "relative" }}>
					<div className='custom-col-2'>
						<div className="image-containerta" style={{ position: "relative", zIndex: "1"}}>
							<img src={process.env.PUBLIC_URL + "/travel.jpeg"} className="img-fluid img-style" style={{ width: "100%", height: "100%", objectFit: "cover" }}></img>
						</div>
						<TrySlider scrollimages={scrollimages}/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ToscanaArchie