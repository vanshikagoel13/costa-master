import React from "react";
import "../styles/ShipDetail.css";
import DetailPic from "../images/opendeck.jpg";
import Plate from "../images/plate.png";
import Glass from "../images/glass.png";
import Pool from "../images/pool.png";
import Cabin from "../images/cabin.png";

function ShipDetail() {
  return (
    <div className="allin">
    <div class="detail-container">
      <div class="row g-0">
        <div class="col-sm-3 pic-col">
          <img src={DetailPic} alt="Error" className="Ship-Img"></img>
        </div>
        <div class="col-sm-9 main-column-2 d-flex flex-column">
          <div class="row h-30">
            <div className="col-sm-12">
              <p class="ship-heading AltBold"><br/>The ship's details</p>
            </div>
          </div>
          <div class="row h-70 row-2 d-flex justify-content-between">
            <div class="col-sm-3">
              <img src={Cabin} alt="Error" className="Icon-Img"></img>
              <p className="item-count">505</p>
              <p className="item-detail">Balcony Cabins</p>
            </div>
            <div class="col-sm-3">
              <img src={Pool} alt="Error" className="Icon-Img"></img>
              <p className="item-count">4</p>
              <p className="item-detail">Swimming Pools and Hot Tubs</p>
            </div>
            <div class="col-sm-3">
              <img src={Plate} alt="Error" className="Icon-Img"></img>
              <p className="item-count">5</p>
              <p className="item-detail">Restaurants</p>
            </div>
            <div class="col-sm-3">
              <img src={Glass} alt="Error" className="Icon-Img"></img>
              <p className="item-count">10</p>
              <p className="item-detail">Bars and Lounges</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ShipDetail;
