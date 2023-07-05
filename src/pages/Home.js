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

  const phoneNum = "Enter your phone number <u className='red-color-ast'>*</u>"
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

  const [firstName, setFirstName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [thankYou, setThankYou] = useState(false);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  }
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleCloseThankYou = () => {
    setThankYou(false);
  };

  const handleSubmit = async (event) => {

    console.log("submit triggered");

    setThankYou(true);

    event.preventDefault();

    const leadData =
    {
      "firstName": firstName,
      "phoneNumbers": [
        {
          "type": "MOBILE",
          "code": "IN",
          "value": phoneNumber,
          "dialCode": 91,
          "primary": true
        }
      ],
      "emails": [
        {
          "type": "OFFICE",
          "value": email,
          "primary": true
        }
      ],
      "source": "1148358"
    }

    try {
      fetch('https://api.kylas.io/v1/leads/', {
        'method': 'POST',
        body: JSON.stringify(leadData),
        'headers': {
          'Content-Type': "application/json",
          'api-key': '255396e8-ff72-4479-80df-4582aae58939:8443',
          'Accept': 'application/json'
        },
      });

      console.log('Lead generated successfully:', leadData);
      console.log(leadData);

      setShowModal(false);
      // Reset the form or show a success message to the user
    } catch (error) {
      console.error('Failed to generate lead:', error);
      setShowModal(false);
      // Handle the error or show an error message to the user
    }
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
            <form method="POST" onSubmit={handleSubmit}>
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

                  {/* <form method="POST" onSubmit={handleSubmit}> */}
                    <div className="mb-3">
                      <input
                        type="text"
                        id="name"
                        value={firstName}
                        onChange={handleFirstNameChange}
                        className="input-settings mt-3"
                        placeholder="Enter your name*"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        className="input-settings"
                        placeholder="Enter your email*"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="tel"
                        id="phone"
                        className="mb-3 input-settings"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                        placeholder="Enter your phone number*"
                        required
                      />
                      <button type="button" className="otp-button font-otp-popup PoppReg">
                        Get OTP
                      </button>
                    </div>
                    <div className="mb-3">
                      <input
                        type="text"
                        id="otp"
                        className="input-settings"
                        placeholder="Enter OTP*"
                        // required
                      />
                    </div>
                  {/* </form> */}
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <button
                // type="button"
                className="submit btn submit-button PoppReg"
                // onClick={handleSubmit}
              >
                Submit
              </button>
            </Modal.Footer>
            </form>
          </Modal>

          <Modal show={thankYou}>
            <Modal.Header onClick={handleCloseThankYou} closeButton></Modal.Header>
            <Modal.Body>
              <div className="allin-logo-popup">
                <img
                  src={process.env.PUBLIC_URL + "/logo.png"}
                  alt="Logo"
                  className="logo-popup"
                />
              </div>
              <p>&nbsp;</p>
              <h2 className="heading-popup PoppReg">Thank you for reaching out!</h2>
              <p className="subheading-popup PoppReg">
                Our executives shall shortly connect with you.
              </p>
              <p>&nbsp;</p>
            </Modal.Body>
          </Modal>
        </div>
      )}
    </div>
  );
}

export default Home;
