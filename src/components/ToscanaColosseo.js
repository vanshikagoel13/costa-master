import React from 'react';
import "../styles/ToscanaColosseo.css"
import "../styles/Fonts.css"
import TrySlider from '../components/TrySlider';

const scrollimages = [

	{ id: 1, url: "/costaflagimg2.png", text: "Colosseo" },
	{ id: 2, url: "/piazza.jpg", text: "Piazza del Campo" },
	{ id: 3, url: "/squok.jpg", text: "Squok Club" },
	{ id: 4, url: "/aqua.jpg", text: "Splash Aqua Park" },
	{ id: 5, url: "/versilia.jpg", text: "Versilia Beach" },
	{ id: 6, url: "/costaflagimg2.png", text: "Colosseo" },
	{ id: 7, url: "/piazza.jpg", text: "Piazza del Campo" },
	{ id: 8, url: "/squok.jpg", text: "Squok Club" },
	{ id: 9, url: "/aqua.jpg", text: "Splash Aqua Park" },
	{ id: 10, url: "/versilia.jpg", text: "Versilia Beach" },
];

function ToscanaColosseo() {

	return (

		<div className=' container containertc' style={{ backgroundColor: "rgb(240, 239, 239)" }}>
			<div className='row g-0'>
				<div className="col-lg-6 custom-col-1-tc d-flex" style={{ width: "25%" }}>
					<div style={{ width: "100%" }}>
						<p className='categorytc AltReg'>FUN & WELLNESS</p>
						<h1 className='titletc PoppBold'>Colosseo</h1>
						<p className='subtitletc AltReg'>The heart of the ship where something is always happening with different performances, a variety of entertainment and a number of themed lounge bars.</p>
					</div>
				</div>
				<div className="col-lg-6 d-flex" style={{ width: "75%", position: "relative" }}>
					<div className='custom-col-2-tc'>
						<div className="image-containertc" style={{ position: "relative", zIndex: "1"}}>
							<img src={process.env.PUBLIC_URL + "/costaflagimg2.png"} className="img-fluid img-style" style={{ width: "100%", height: "100%", objectFit: "cover" }}></img>
						</div>
						<TrySlider scrollimages={scrollimages}/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ToscanaColosseo