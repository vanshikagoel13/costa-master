import React from "react";
import "../styles/ShipDetail.css";
import DetailPic from "../images/Costa Toscana Image.jpg";
import Plate from "../images/plate.png";
import Glass from "../images/glass.png";
import Pool from "../images/pool.png";
import Cabin from "../images/cabin.png";

function ToscanaShipDetail() {

	return (

		<div className="allin">
			<div class="detail-container">
				<div className="d-flex test" style={{ backgroundColor: 'rgb(240, 239, 239)' }}>
					<div className="d-flex" style={{ width: '30%' }}>
						<div className="image-wrapper-sd">
							<img src={DetailPic} className="imagine" alt="" />
						</div>
					</div>
					<div style={{ width: '100%' }}>
						<p className="PoppBold sub-head-text-1-sd">The Ship's Details</p>
						<div className="d-flex" style={{ justifyContent: 'space-between' }}>
							<div className="small-box-sd" style={{ width: '25%' }}>
								<div style={{ height: '45%', width: '40%' }}>
									<img src={Cabin} className="chotu-sd" alt="" />
								</div>
								<div style={{ height: '50%' }}>
									<p className="PoppReg sub-head-text-sd">2600</p>
									<p className="PoppReg sub-head-text-sd">Balcony Cabins</p>
								</div>
							</div>
							<div className="small-box-sd" style={{ width: '25%' }}>
								<div style={{ height: '45%', width: '40%' }}>
									<img src={Pool} className="chotu-sd" alt="" />
								</div>
								<div style={{ height: '50%' }}>
									<p className="PoppReg sub-head-text-sd">13</p>
									<p className="PoppReg sub-head-text-sd">Swimming Pools & Hot Tubs</p>
								</div>
							</div>
							<div className="small-box" style={{ width: '25%' }}>
								<div style={{ height: '45%', width: '40%' }}>
									<img src={Plate} className="chotu-sd" alt="" />
								</div>
								<div style={{ height: '50%' }}>
									<p className="PoppReg sub-head-text-sd">11</p>
									<p className="PoppReg sub-head-text-sd">Restaurants</p>
								</div>
							</div>
							<div className="small-box-sd" style={{ width: '25%' }}>
								<div style={{ height: '45%', width: '40%' }}>
									<img src={Glass} className="chotu-sd" alt="" />
								</div>
								<div style={{ height: '50%' }}>
									<p className="PoppReg sub-head-text-sd">19</p>
									<p className="PoppReg sub-head-text-sd">Bars & Lounges</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ToscanaShipDetail;
