import React from "react";
import "../styles/DestinationDetail.css";
// import DetailPic from "../images/opendeck.jpg";
import Plate from "../images/plate.png";
// import Glass from "../images/glass.png";
import Pool from "../images/pool.png";
import Cabin from "../images/cabin.png";

function DestinationDetail({ details }) {
  return (
    <div className="allin-des">
      <div class="detail-container-des">
        <div class="row g-0 align-hori-des">
          <div className="col-sm-6 pics-col-des">
            <div class="col-sm-6 pic-col-des">
              <img
                src={process.env.PUBLIC_URL + details.img1}
                alt="Error"
                className="Ship-Img-des"
              ></img>
            </div>
            <div class="col-sm-6 pic-col">
              <img
                src={process.env.PUBLIC_URL + details.img2}
                alt="Error"
                className="Ship-Img-des"
              ></img>
            </div>
          </div>

          <div class="col-sm-7 main-column-2-des flex-column">
            <div class="row h-20">
              <div className="col-sm-12 heading-des">
                <p class="ship-heading-des AltBold">
                  {/* <br /> */}
                  {details.title}
                </p>
              </div>
            </div>
            <div class="row h-80 row-2 justify-content-center">
              <div class="col-sm-4 space-des">
                <img src={Cabin} alt="Error" className="Icon-Img-des"></img>
                {/* <p className="item-count">505</p> */}
                <p className="item-detail-des">{details.text1}</p>
              </div>
              <div class="col-sm-4 space-des">
                <img src={Pool} alt="Error" className="Icon-Img-des"></img>
                {/* <p className="item-count">4</p> */}
                <p className="item-detail-des">{details.text2}</p>
              </div>
              <div class="col-sm-4 space-des">
                <img src={Plate} alt="Error" className="Icon-Img-des"></img>
                {/* <p className="item-count">5</p> */}
                <p className="item-detail-des">{details.text3}</p>
              </div>
              {/* <div class="col-sm-3">
              <img src={Glass} alt="Error" className="Icon-Img"></img>
              <p className="item-count">10</p>
              <p className="item-detail">Bars and Lounges</p>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestinationDetail;
