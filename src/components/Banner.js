import React from "react";
import "../styles/banner2.css";
import HomeHeader from "../components/HomeHeader";
import { useState } from "react";

function Banner() {
  
  const [isHeaderExpanded, setIsHeaderExpanded] = useState(false);

  const handleHeaderExpand = () => {
    setIsHeaderExpanded(true);
  };

  const handleHeaderCollapse = () => {
    setIsHeaderExpanded(false);
  };

  return (
    <div className="banner">
      <div className="banner-header">
        <HomeHeader 
          isExpanded={isHeaderExpanded}
          onExpand={handleHeaderExpand}
          onCollapse={handleHeaderCollapse}
        />
      </div>
      {/* { isHeaderExpanded ? null : 
      <> */}
      <div className="component-background">
        <video autoPlay loop muted className="background-video">
          <source src={process.env.PUBLIC_URL + "/video_banner.mp4"} type="video/mp4" />
        </video>
      </div>
      <div className="banner-content">
        <h1 className="banner-title">Book Your Cruise</h1>
        <p className="banner-subtitle">Discover the world from the unique perpective of the sea</p>
      </div>
      {/* </>
      } */}
    </div>
  );
}

export default Banner;
