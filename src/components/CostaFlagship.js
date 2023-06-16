import React from "react";
import "../styles/CostaFlagship.css";
import ToscanaFlagScroll from "./ToscanaFlagScroll";
const scrollimages = [
  { id: 1, url: "/costaflagimg1.png" },
  { id: 2, url: "/costaflagimg2.png" },
  { id: 3, url: "/costaflagimg3.png" },
  { id: 4, url: "/costaflagimg4.png" },
  // { id: 1, url: "/c1.png" },
  // { id: 2, url: "/c2.png" },
];
// const htext = "";
function CostaFlagship() {
  return (
    <div className="allin-flagship">
      <div className="container-flagship">
        <h1 className="heading-flagship PoppBold">
          Welcome to the new Costa flagship
        </h1>
        <p className="text-flagship PoppReg">
          Climb aboard Costa Toscana: you will discover a whole new way to enjoy
          the sea
        </p>
        <div className="flag-scroll-container">
          <div className="toscana-flag-scroll">
            <ToscanaFlagScroll scrollimg={scrollimages} />
            <p className="below-text-flag PoppReg">A 'smart city', more than a ship: Costa Toscana was designed to offer a mix of technology, comfort and care for the environment.</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default CostaFlagship;
