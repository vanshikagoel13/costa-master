import React from 'react';
import "../styles/Fonts.css";
import "../styles/subBanner.css";
import Plate from "../images/plate.png";
function subBanner({ cont }) {

	const contLength = Object.keys(cont).length;
	// console.log("contLength:", contLength);

	return (

		<>
			{contLength === 10 ?
				<div className="d-flex" style={{ backgroundColor: 'lightgrey' }}>
					<div style={{ width: '60%' }}>
						<p className="PoppReg sub-head-text-1">{cont.h1}</p>
						<div className="d-flex" style={{ justifyContent: 'space-between' }}>
							<div className="small-box" style={{ width:'25%'}}>
								<div style={{height: '50%', width: '40%'}}>
									<img src={Plate} className="chotu" alt="" />
								</div>
								<div style={{height: '50%'}}>
									<p className="PoppReg sub-head-text">{cont.t1}</p>
								</div>
							</div>
							<div className="small-box" style={{ width:'25%'}}>
								<div style={{height: '50%', width: '40%'}}>
									<img src={Plate} className="chotu" alt="" />
								</div>
								<div style={{height: '50%'}}>
									<p className="PoppReg sub-head-text">{cont.t2}</p>
								</div>
							</div>
							<div className="small-box" style={{ width:'25%'}}>
								<div style={{height: '50%', width: '40%'}}>
									<img src={Plate} className="chotu" alt="" />
								</div>
								<div style={{height: '50%'}}>
									<p className="PoppReg sub-head-text">{cont.t3}</p>
								</div>
							</div>
							<div className="small-box" style={{ width:'25%'}}>
								<div style={{height: '50%', width: '40%'}}>
									<img src={Plate} className="chotu" alt="" />
								</div>
								<div style={{height: '50%'}}>
									<p className="PoppReg sub-head-text">{cont.t4}</p>
								</div>
							</div>
						</div>
					</div>
					<div className="d-flex" style={{ width: '40%' }}>
						<div className="image-wrapper">
							<img src={process.env.PUBLIC_URL + "piazza.jpg"} className="imagine" alt="" />
						</div>
						<div className="image-wrapper">
							<img src={process.env.PUBLIC_URL + "piazza.jpg"} className="imagine" alt="" />
						</div>
					</div>
				</div>
				:
				<div className="d-flex" style={{ backgroundColor: 'lightgrey' }}>
					<div style={{ width: '60%' }}>
						<p className="PoppReg sub-head-text-1">{cont.h1}</p>
						<div className="d-flex" style={{ justifyContent: 'space-between' }}>
							<div className="small-box" style={{ width:'33.33%'}}>
								<div style={{height: '60%', width: '40%'}}>
									<img src={Plate} className="chotu" alt="" />
								</div>
								<div style={{height: '40%'}}>
									<p className="PoppReg sub-head-text">{cont.t1}</p>
								</div>
							</div>
							<div className="small-box" style={{ width:'33.33%'}}>
								<div style={{height: '60%', width: '40%'}}>
									<img src={Plate} className="chotu" alt="" />
								</div>
								<div style={{height: '40%'}}>
									<p className="PoppReg sub-head-text">{cont.t2}</p>
								</div>
							</div>
							<div className="small-box" style={{ width:'33.33%'}}>
								<div style={{height: '60%', width: '40%'}}>
									<img src={Plate} className="chotu" alt="" />
								</div>
								<div style={{height: '40%'}}>
									<p className="PoppReg sub-head-text">{cont.t3}</p>
								</div>
							</div>
						</div>
					</div>
					<div className="d-flex" style={{ width: '40%' }}>
						<div className="image-wrapper">
							<img src={process.env.PUBLIC_URL + "piazza.jpg"} className="imagine" alt="" />
						</div>
						<div className="image-wrapper">
							<img src={process.env.PUBLIC_URL + "piazza.jpg"} className="imagine" alt="" />
						</div>
					</div>
				</div>
			}
		</>
	);
}

export default subBanner;