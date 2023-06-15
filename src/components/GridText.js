import React from "react";
import "../styles/gridTexts.css";
import "../styles/Fonts.css";

function GridText() {

	const t1 = "<b>All of the waste</b> was collected on board is separated and <b>sorted</b>. In this way, waste is managed with the utmost respect for the environment and becomes resources to be rescued for innovative projects in a circular economy."; 
	const t2 = "We have almost totaly eliminated items of <b>disposable plastic</b>. We have also replaced single-use samples, eliminating microplastics from products for cleaning, cosmetics and spa products.";
	const t3 = "Fresh water is a limited resource, which is why <b>two-thirds of the water used on board comes from the sea</b>: the water is desalinated and purified, making it perfect for use on board."; 	
	const t4 = "For Costa Smeralda and Costa Toscana we have chosen the <b>most innovative propulsion system in the cruise industry</b>. Liquefied natural gas (or LNG) is the most advanced technology currently that guarantees the emission reduction for the best environment performance.";
 
	return (
		<>
			<div className="container con-style">
				<h3 className="heading-gridtext PoppBold">Protecting the sea is our priority</h3>
				<div className="row rowgt" style={{marginBottom:'-2%'}}>
					<div className="col-sm-6 col-lg-3 col-style">
						<div className="img">
							<img
								src={process.env.PUBLIC_URL + "/i1.png"}
								className="image-styles"
							></img>
						</div>
						<p style = {{paddingLeft: "10px"}} className="PoppBold grid-title">Reuse, not waste</p>
						<p className="text-style PoppReg"><span dangerouslySetInnerHTML={{ __html: t1 }} /></p>
					</div>
					<div className="col-sm-6 col-lg-3 col-style">
						<div className="img">
							<img
								src={process.env.PUBLIC_URL + "/i2.png"}
								className="image-styles"
							></img>
						</div>
						<p style = {{paddingLeft: "10px"}} className="PoppBold grid-title">Even less plastic on board</p>
						<p className="text-style PoppReg"><span dangerouslySetInnerHTML={{ __html: t2 }} /></p>
					</div>
					<div className="col-sm-6 col-lg-3 col-style">
						<div className="img">
							<img
								src={process.env.PUBLIC_URL + "/i3.png"}
								className="image-styles"
							></img>
						</div>
						<p style = {{paddingLeft: "10px"}} className="PoppBold grid-title">Water, the most precious asset</p>
						<p className="text-style PoppReg"><span dangerouslySetInnerHTML={{ __html: t3 }} /></p>
					</div>
					<div className="col-sm-6 col-lg-3 col-style">
						<div className="img">
							<img
								src={process.env.PUBLIC_URL + "/i4.png"}
								className="image-styles"
							></img>
						</div>
						<p style = {{paddingLeft: "10px"}} className="PoppBold grid-title">LNG fueled ships</p>
						<p className="text-style PoppReg"><span dangerouslySetInnerHTML={{ __html: t4 }} /></p>
					</div>
				</div>
			</div>
		</>
	);
}

export default GridText;
