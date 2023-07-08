import React from 'react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import '../styles/CallNowButton.css';
import { Modal, FormControl } from "react-bootstrap";
import { useState, useEffect } from "react";

function CallNowButton() {

  const [callButton, setCallButton] = useState(false);

  const handleOpenCall = () => {
    setCallButton(!callButton);
  };

  return (
    <div className="floating-buttons">
      <a onClick={handleOpenCall} className="call-button">
        {/* <FaPhoneAlt /> */}
        <i className='fa-solid fa-phone'></i>
      </a>
      <a href="https://wa.me/+919820185084" className="whatsapp-button">
        {/* <FaWhatsapp /> */}
        <i class="fa-brands fa-whatsapp"></i>
      </a>
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