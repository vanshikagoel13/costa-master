import React from 'react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import '../styles/CallNowButton.css';

function CallNowButton() {
  return (
    <div className="floating-buttons">
    <a href="tel:2261792300" className="call-button">
      <FaPhoneAlt />
    </a>
    <a href="https://wa.me/+919820185084" className="whatsapp-button">
      <FaWhatsapp />
    </a>
  </div>
  )
}

export default CallNowButton