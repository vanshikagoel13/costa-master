import React from 'react';
import '../styles/Contact.css';
import contactimg from '../images/contact.png';

function Contact() {

	return (

		<section id="Contact" >
			<div className="card contact-card mb-3">
				<div className="row rowcon g-0">
					<div className="col-lg-6 d-flex" style={{ width: "40%" }}>
						<div className="image-container">
							<img src={contactimg} className="img-fluid img-style"></img>
						</div>
					</div>
					<div className="col-lg-6 d-flex" style={{ width: "60%"}}>
						<div className="contact-body">
							<h5 className="contact-title KepStd">Get in touch with us</h5>
							<p className="contact-text AltReg">To make your seacation safe and memorable, we have added all the necessary precautions.</p>

							<form method="POST">
								<div className="first-name">
									<input type="text" placeholder="First Name" className="name-input" />
								</div>
								<div className="row rowcon">
									<div className="col-md-3 contact-dropdown">
										<select className="dropdown">
											<option value="91">+91</option>
											<option value="80">+80</option>
											<option value="65">+65</option>
										</select>
									</div>
									<div className="col-md-9">
										<input className="phone-contact" type="number" placeholder="Phone Number"></input>
									</div>
								</div>
								<button className="contact-button">Submit</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact

{/* 

<div className="col-lg-6 d-flex">
	<div className="image-container">
		<img src={image.url} className="img-fluid zoom image-style" alt={image.title} />
	</div>
</div>
<div className="col-lg-6 d-flex">
	<div className={`text-container align-self-end ${(index + 1) % 2 !== 0 ? "right-text" : "left-text"}`}>
		<h4 className={`PoppReg ${(index + 1) % 2 !== 0 ? "category-style-right" : "category-style-left"}`}>{image.category}</h4>
		<h3 className={`AltBold ${(index + 1) % 2 !== 0 ? "title-style-right" : "title-style-left"}`}><span dangerouslySetInnerHTML={{ __html: image.title }} /></h3>
		<p className={`AltReg ${(index + 1) % 2 !== 0 ? "text-style-right" : "text-style-left"}`}><span dangerouslySetInnerHTML={{ __html: image.text }} /></p>
		{index >= 0 && (
			<img
				src={process.env.PUBLIC_URL + subImages[index].url}
				className={`${
				index % 2 !== 0
					? "subimage-style-right"
					: "subimage-style-left"
				}`}
				alt=""
			/>
		)}
	</div>
</div> 

*/}