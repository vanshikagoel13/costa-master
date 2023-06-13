import React from 'react';
import "../styles/Fonts.css";
import "../styles/ExpSub.css";

function ExpSub ({ cont }) {

	const contLength = Object.keys(cont).length;
	// console.log("contLength:", contLength);

	return (

		<>
			{contLength === 11 ?
				<div className="d-flex" style={{ backgroundColor: 'lightgrey' }}>
					<div style={{ width: '100%' }}>
						<p className="PoppMed sub-head-text-1">{cont.h1}</p>
						<div className="d-flex" style={{ justifyContent: 'space-between' }}>
							<div className="small-box" style={{ width:'25%'}}>
								<div style={{height: '50%', width: '40%'}}>
									<img src={process.env.PUBLIC_URL + "i4.png"} className="chotu" alt="" />
								</div>
								<div style={{height: '50%'}}>
									<p className="PoppMed sub-head-text">{cont.t1}</p>
								</div>
							</div>
							<div className="small-box" style={{ width:'25%'}}>
								<div style={{height: '50%', width: '40%'}}>
									<img src={process.env.PUBLIC_URL + "i4.png"} className="chotu" alt="" />
								</div>
								<div style={{height: '50%'}}>
									<p className="PoppMed sub-head-text">{cont.t2}</p>
								</div>
							</div>
							<div className="small-box" style={{ width:'25%'}}>
								<div style={{height: '50%', width: '40%'}}>
									<img src={process.env.PUBLIC_URL + "i4.png"} className="chotu" alt="" />
								</div>
								<div style={{height: '50%'}}>
									<p className="PoppMed sub-head-text">{cont.t3}</p>
								</div>
							</div>
							<div className="small-box" style={{ width:'25%'}}>
								<div style={{height: '50%', width: '40%'}}>
									<img src={process.env.PUBLIC_URL + "i4.png"} className="chotu" alt="" />
								</div>
								<div style={{height: '50%'}}>
									<p className="PoppMed sub-head-text">{cont.t4}</p>
								</div>
							</div>
						</div>
					</div>
					{/* <div className="d-flex" style={{ width: '40%' }}>
						<div className="image-wrapper">
							<img src={process.env.PUBLIC_URL + "piazza.jpg"} className="imagine" alt="" />
						</div>
						<div className="image-wrapper">
							<img src={process.env.PUBLIC_URL + "piazza.jpg"} className="imagine" alt="" />
						</div>
					</div> */}
				</div>
				:
				<div className="d-flex" style={{ backgroundColor: 'lightgrey' }}>
					<div style={{ width: '100%' }}>
						<p className="PoppMed sub-head-text-1">{cont.h1}</p>
						<div className="d-flex" style={{ justifyContent: 'space-between' }}>
							<div className="small-box" style={{ width:'33.33%'}}>
								<div style={{height: '50%', width: '40%'}}>
									<img src={process.env.PUBLIC_URL + "i4.png"} className="chotu" alt="" />
								</div>
								<div style={{height: '30%'}}>
									<p className="PoppMed sub-head-text">{cont.t1}</p>
								</div>
							</div>
							<div className="small-box" style={{ width:'33.33%'}}>
								<div style={{height: '50%', width: '40%'}}>
									<img src={process.env.PUBLIC_URL + "i4.png"} className="chotu" alt="" />
								</div>
								<div style={{height: '30%'}}>
									<p className="PoppMed sub-head-text">{cont.t2}</p>
								</div>
							</div>
							<div className="small-box" style={{ width:'33.33%'}}>
								<div style={{height: '50%', width: '40%'}}>
									<img src={process.env.PUBLIC_URL + "i4.png"} className="chotu" alt="" />
								</div>
								<div style={{height: '30%'}}>
									<p className="PoppMed sub-head-text">{cont.t3}</p>
								</div>
							</div>
						</div>
					</div>
					{/* <div className="d-flex" style={{ width: '40%' }}>
						<div className="image-wrapper">
							<img src={process.env.PUBLIC_URL + "piazza.jpg"} className="imagine" alt="" />
						</div>
						<div className="image-wrapper">
							<img src={process.env.PUBLIC_URL + "piazza.jpg"} className="imagine" alt="" />
						</div>
					</div> */}
				</div>
			}
		</>
	);
}

export default ExpSub;