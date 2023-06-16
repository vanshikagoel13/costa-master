import React, { useState } from "react";
import "../styles/Contact.css";
import contactimg from "../images/contact.png";
import { Button } from "react-bootstrap";
// import styles from "../styles/Contact.css";

function Contact() {
  const handleInputChange = (e) => {
    // Prevent the user from manually typing non-numeric characters
    if (isNaN(e.target.value)) {
      e.target.value = "";
    }
  };
  const [otp, setOtp] = useState(false);

  const handlerOtp = () => {
    setOtp(true);
  };

  const [firstName, setFirstName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dialCode, setDialCodeName] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  }
  const handleDialCodeChange = (event) => {
    setDialCodeName(event.target.value);
  };
  const handleSubmit = async (event) => {
		event.preventDefault();

		// const firstName = event.target.elements.firstName.value;
    // const phoneNumber = event.target.elements.phoneNumber.value;
		// const dialCode = event.target.elements.dialCode.value;
  //  const email = event.target.elements.email.value;

		
  const leadData=
  {
    "firstName": firstName,
    "phoneNumbers": [
      {
        "type": "MOBILE",
        "code": "IN",
        "value": phoneNumber,
        "dialCode": dialCode,
        "primary": true
      }
    ],
    "source": "1148358"
  }
   
			
	  
		try {
		  fetch('https://api.kylas.io/v1/leads/',  {
			'method': 'POST',
			 body: JSON.stringify(leadData),
			'headers': {
			  'Content-Type': "application/json",
			  'api-key': '255396e8-ff72-4479-80df-4582aae58939:8443',
			  'Accept': 'application/json'
			},
		  });
	  
		  console.log('Lead generated successfully:', leadData);
     // setShowModal(false);
		  // Reset the form or show a success message to the user
		} catch (error) {
		  console.error('Failed to generate lead:', error);
     // setShowModal(false);
		  // Handle the error or show an error message to the user
		}
	  };


  return (
    <section id="Contact">
      <div className="card contact-card mb-3">
        <div className="row rowcon g-0">
          <div className="col-lg-6 d-flex" style={{ width: "40%" }}>
            <div className="image-container">
              <img
                src={process.env.PUBLIC_URL + "/Contact Us.png"}
                className="img-fluid  img-style"
              ></img>
            </div>
          </div>
          <div className="col-lg-6 d-flex" style={{ width: "60%" }}>
            <div className="contact-body">
              <h5 className="contact-title KepStd">Get in touch with us</h5>
              <p className="contact-text PoppReg">
                To make your seacation safe and memorable, we have added all the
                necessary precautions.
              </p>

              <form method="POST">
                <div className="first-name">
                  <input
                    type="text"
                    value={firstName}
                    onChange={handleFirstNameChange}
                    placeholder="First Name"
                    className="name-input"
                  />
                </div>
                <div className="row rowcon">
                  <div className="col-md-3 contact-dropdown">
                    <select className="dropdown" value={dialCode} onChange={handleDialCodeChange}>
                      <option value="91">+91</option>
                      <option value="80">+80</option>
                      <option value="65">+65</option>
                    </select>
                  </div>
                  <div className="col-md-9">
                    {/* <input  className={styles['number-input'] } type="number" placeholder="Phone Number"></input> */}
                    <input
                      type="text"
                      pattern="[0-9]*"
                      value={phoneNumber}
                      onChange={handlePhoneNumberChange}
                      onInput={handleInputChange}
                      placeholder="Phone Number"
                      className="phone-contact"
                    />
                  </div>
                </div>
                <button className="otp-container PoppReg">
                Get OTP
                  {/* <h5 className="getotp-button PoppReg"></h5> */}
                </button>
                <div>
                  <input
                    type="text"
                    pattern="[0-9]*"
                    onInput={handleInputChange}
                    placeholder="Enter OTP"
                    className="otp-receiver"
                  />
                </div>

                <button className="contact-button PoppReg" onClick={handleSubmit}>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

{
  /* 

<div className="col-lg-6 d-flex">
	<div className="image-container">
		<img src={image.url} className="img-fluid zoom image-style" alt={image.title} />
	</div>
</div>
<div className="col-lg-6 d-flex">
	<div className={`text-container align-self-end ${(index + 1) % 2 !== 0 ? "right-text" : "left-text"}`}>
		<h4 className={`PoppReg ${(index + 1) % 2 !== 0 ? "category-style-right" : "category-style-left"}`}>{image.category}</h4>
		<h3 className={`AltBold ${(index + 1) % 2 !== 0 ? "title-style-right" : "title-style-left"}`}><span dangerouslySetInnerHTML={{ __html: image.title }} /></h3>
		<p className={`AltReg ${(index + 1) % 2 !== 0 ? "text-style-right" : "text-style-left"}`}><span dangerouslySetInnerHTML={{ __html: image.text }} /></p>
		{index >= 0 && (
			<img
				src={process.env.PUBLIC_URL + subImages[index].url}
				className={`${
				index % 2 !== 0
					? "subimage-style-right"
					: "subimage-style-left"
				}`}
				alt=""
			/>
		)}
	</div>
</div> 

*/
}

{
  /* <div className="row rowcon" style={{ paddingTop: "10px" }}>
                    <div className="col-md-3 otp-container">
                      <p className="contact-otp PoppMed">Get OTP</p>
                    </div>
                    <div className="col-md-9">
                     
                      <input
                        type="text"
                        pattern="[0-9]*"
                        onInput={handleInputChange}
                        placeholder="Enter OTP"
                        className="otp-container-input"
                      />
                    </div>
                  </div> */
}
