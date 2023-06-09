import React from "react";
import "../styles/IdealCabin.css";

function IdealCabin() {
  return (
    <div className="allin-idealcabin">
      <div className="container-idealcabin">
        <h1 className="heading-idealcabin PoppBold">Find your ideal cabin!</h1>
        <p className="text-idealcabin AltReg">Atmosphere designed with care</p>
        <div className="image-ideal-container">
          <img
            className="image-ideal-cabin"
            src={process.env.PUBLIC_URL + "/idealcabin.png"}
          ></img>
          {/* <img className='image-ideal-cabin' src={process.env.PUBLIC_URL+"/travel.jpeg"}></img> */}
        </div>
        <div className="allin-text-last-ideal1">
          <div className="allin-text-last-ideal">
            <p className="lasttext-idealcabin AltReg">Oceanview Cabin</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IdealCabin;
