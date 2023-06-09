import React from 'react';
import "../styles/ToscanaDream.css"
import "../styles/Fonts.css"
import TrySlider from '../components/TrySlider';

const scrollimages = [

	{ id: 1, url: "/cdream.png", text: "C-Dream" },
	{ id: 2, url: "/shop.jpeg", text: "Costa Shop" },
	{ id: 3, url: "/tours.jpeg", text: "My Tours" },
	{ id: 4, url: "/moments.jpg", text: "My Moments" },
	{ id: 5, url: "/gallery.jpg", text: "Galleria Shops" },
	{ id: 6, url: "/cdream.png", text: "C-Dream" },
	{ id: 7, url: "/shop.jpeg", text: "Costa Shop" },
	{ id: 8, url: "/tours.jpeg", text: "My Tours" },
	{ id: 9, url: "/moments.jpg", text: "My Moments" },
	{ id: 10, url: "/gallery.jpg", text: "Galleria Shops" },
];

function ToscanaDream() {

	return (

		<div className=' container containertd' style={{ backgroundColor: "rgb(240, 239, 239)" }}>
			<div className='row g-0'>
				<div className="col-lg-6 d-flex" style={{ width: "75%", position: "relative" }}>
					<div className='custom-col-2-td'>
						<div className="image-containertd" style={{ position: "relative", zIndex: "1" }}>
							<img src={process.env.PUBLIC_URL + "/cdream.png"} className="img-fluid img-style" style={{ width: "100%", height: "100%", objectFit: "cover" }}></img>
						</div>
						<TrySlider scrollimages={scrollimages} />
					</div>
				</div>
				<div className="col-lg-6 custom-col-1-td d-flex" style={{ width: "25%" }}>
					<div style={{ width: "100%", display: 'd-flex' }}>
						<p className='categorytd AltReg'>SERVICES ON BOARD</p>
						<h1 className='titletd PoppBold'>C-Dream</h1>
						<p className='subtitletd AltReg'>C-Dream is the free consulting service you can find on board each ship and where you can book your next cruise. If you wish to continue living your dream by imagining a thousand other experiences and emotions around the world, our Personal Cruise Consultants will study your next vacation with you.</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ToscanaDream