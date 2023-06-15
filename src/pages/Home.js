import React from "react";
import Sail2 from "../components/sail2";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
// import NewFooter from "../components/NewFooter";
// import BestOfferCard from '../components/BestOfferCard';
// import HomeDestinations from '../components/HomeDestinations';
import Testimonials from "../components/Testimonials";
import Upcoming from "../components/Upcoming";
import Contact from "../components/Contact";
import { useState, useEffect } from "react";
import OfferSection from "../components/OfferSection";
import ScrollHome from "../components/ScrollHome";
// import Popup from "../components/Popup";
import { Modal, FormControl } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Newpopup from "../components/Newpopup";
import "../styles/Home.css";
import CallNowButton from "../components/CallNowButton";

function Home() {
  const [isBannerCollapsed, setIsBannerCollapsed] = useState(false);

  const handleBannerExpand = () => {
    setIsBannerCollapsed(false);
  };

  const handleBannerCollapse = () => {
    setIsBannerCollapsed(true);
  };

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true); // Set showModal to true when the component mounts
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Banner onBanner={handleBannerExpand} offBanner={handleBannerCollapse} />
      {isBannerCollapsed ? null : (
        <div className="vscroll-container">
          {/* <BestOfferCard /> */}
          {/* <HomeDestinations /> */}
          <OfferSection />
          <ScrollHome />
          {/* <Upcoming /> */}
          <Sail2 />
          <Testimonials />
          <Contact />
          <div style={{ marginBottom: "70px" }}></div>
          <CallNowButton />
          <Footer />
          <Modal show={showModal}>
            <Modal.Header onClick={handleCloseModal} closeButton></Modal.Header>
            <Modal.Body>
              <div className="allin-logo-popup">
                <img
                  src={process.env.PUBLIC_URL + "/logo.png"}
                  alt="Logo"
                  className="logo-popup"
                />
              </div>

              <h2 className="heading-popup PoppReg">Don't Miss The Chance</h2>
              <p className="subheading-popup PoppReg">
                Explore a new world of ecstasy and fun with us
              </p>
              <div className="row justify-content-center form-box">
                <div className="col-10 col-md-6 form-input">
                  <form method="POST">
                    <div className="mb-3">
                      <input
                        type="text"
                        id="name"
                        className="input-settings mt-3"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        id="email"
                        className="input-settings"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="tel"
                        id="phone"
                        className="mb-3 input-settings"
                        placeholder="Enter your phone number"
                      />
                      <button type="submit" className="otp-button font-otp-popup PoppReg">
                        Get OTP
                      </button>
                    </div>
                    <div className="mb-3">
                      <input
                        type="text"
                        id="otp"
                        className="input-settings"
                        placeholder="Enter OTP"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <button
                type="button"
                className="btn submit-button PoppReg"
                onClick={handleCloseModal}
              >
                Submit
              </button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </div>
  );
}

export default Home;
