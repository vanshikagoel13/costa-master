import React, { useState } from "react";
import "../styles/ContactUs.css";
import Footer from "./Footer";
import Header from "./Header"
// import NewFooter from "./NewFooter";
import CallNowButton from "./CallNowButton";
function ContactUs() {
  const [isHeaderExpanded, setIsHeaderExpanded] = useState(false);
  const handleHeaderExpand = () => {
    setIsHeaderExpanded(true);
  };

  const handleHeaderCollapse = () => {
    setIsHeaderExpanded(false);
  };
  return (
    <>
      <div>
        <Header
          isExpanded={isHeaderExpanded}
          onExpand={handleHeaderExpand}
          onCollapse={handleHeaderCollapse}
        />
        {isHeaderExpanded ? null : (
          <>
            <div className="contactus-box">
              <div className="heading-contact">
                <h2 className="Main-Heading PoppBold">Contact Us</h2>
              </div>
              
              <div className="content">
                <h6 className="content-sub PoppReg">
                  We are passionate about what we do and we want to make sure
                  that your cruise experience is the best you’ve ever had, as
                  only Italian hospitality knows how. Costa Cruises is here to
                  help you make your booking, answer any questions you may have
                  and clear up any issues. Below is a list of links where you
                  can find information and e-mail addresses you can write to for
                  whatever you need.<br></br>
                  Please be aware: these email addresses are for the Indian
                  residents only.
                  <br></br>
                  <br></br>
                  <br></br>
                  To enter in your country of residence's website go to the
                  change country page.
                </h6>
              </div>

              <div className="contact-info justify-content-between align-content-center">
                <hr className="bg-black m-0 w-100 mb-3" />
                <div className="grid-contact-container align-content-center">
                  <div className="grid-contact-item PoppReg">Cruise Customer Service</div>
                  <div className="grid-contact-item PoppReg">info@costacruiseindia.com</div>
                </div>
                <hr className="bg-black m-0 w-100 mt-3 mb-3" />
                <div className="grid-contact-container">
                  <div className="grid-contact-item PoppReg">Phone number</div>
                  <div className="grid-contact-item PoppReg">+91 9820185084</div>
                </div>
                <hr className="bg-black m-0 w-100 mt-3 mb-3" />
                <div className="grid-contact-container">
                  <div className="grid-contact-item PoppReg">Telephone number</div>
                  <div className="grid-contact-item PoppReg">+91 2261792300</div>
                </div>
                <hr className="bg-black m-0 w-100 mt-3 mb-3" />
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                {/* <div class="grid-contact-container">
                  <div class="grid-contact-item PoppReg">
                    Group, Incentives & Meetings
                  </div>
                  <div class="grid-contact-item PoppReg">groupsales@us.costa.it</div>
                </div>
                <hr className="bg-black m-0 w-100 mt-3" />
                <div class="grid-contact-container">
                  <div class="grid-contact-item PoppReg">Job Opportunities</div>
                  <div class="grid-contact-item PoppReg">
                    Onboard personnel<br></br>Shoreside personnel
                  </div>
                </div>
                <hr className="bg-black m-0 w-100 mt-3 PoppReg" />
                <div class="grid-contact-container">
                  <div class="grid-contact-item PoppReg">
                    Privacy Policy<br></br> Personal data processing statutory
                    notice
                  </div>
                  <div class="grid-contact-item PoppReg">privacy@costa.it</div>
                </div>
                <hr className="bg-black m-0 w-100 mt-3" /> */}
              </div>
            </div>
            <Footer />
            <CallNowButton />
          </>
        )}
      </div>
    </>
  );
}

export default ContactUs;
