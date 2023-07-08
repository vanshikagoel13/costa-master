import React from 'react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import '../styles/CallNowButton.css';
import { Modal, FormControl } from "react-bootstrap";
import { useState, useEffect } from "react";


function CallNowButton() {

  const [callButton, setCallButton] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const handleOpenEnquiry = () =>{
    setShowModal(true);
  }

  const handleCloseEnquiry = () =>{
    setShowModal(false);
  }


  const handleOpenCall = () => {
    setCallButton(!callButton);
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
      setEmail('');
      setPhoneNumber('');
      setFirstName('');
      // Reset the form or show a success message to the user
    } catch (error) {
      console.error('Failed to generate lead:', error);
      setShowModal(false);
      // Handle the error or show an error message to the user
    }
  };


  return (
    <div className="floating-buttons">
      <a onClick={handleOpenEnquiry} className="message-button">
        {/* <FaMessageAlt /> */}
        <i className='fa-solid fa-message'></i>
      </a>
      <a onClick={handleOpenCall} className="call-button">
        {/* <FaPhoneAlt /> */}
        <i className='fa-solid fa-phone'></i>
      </a>
      <a href="https://wa.me/+919820185084" className="whatsapp-button">
        {/* <FaWhatsapp /> */}
        <i class="fa-brands fa-whatsapp"></i>
      </a>
      <Modal show={showModal}>
          <Modal.Header onClick={handleCloseEnquiry} closeButton></Modal.Header>
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
      <Modal show={callButton}>
        <Modal.Header onClick={handleOpenCall} closeButton></Modal.Header>
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
          You can call us on: <u>2261792300</u>
          </p>
          <p>&nbsp;</p>
        </Modal.Body>
      </Modal>

    </div>
  )
}

export default CallNowButton