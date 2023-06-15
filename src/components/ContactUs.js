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
      <div className="v-scrollcs">
        <Header
          isExpanded={isHeaderExpanded}
          onExpand={handleHeaderExpand}
          onCollapse={handleHeaderCollapse}
        />
        {isHeaderExpanded ? null : (
          <>
            <div className="contact-box">
              <div className="heading">
                <h1 className="Main-Heading PoppBold">Contact Us</h1>
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
                  Please be aware: these email addresses are for the USA
                  residents only.
                  <br></br>
                  <br></br>
                  <br></br>
                  To enter in your country of residence's website go to the
                  change country page.
                </h6>
              </div>

              <div className="contact-info">
                <hr className="bg-black m-0 w-100 " />
                <div class="grid-contact-container">
                  <div class="grid-contact-item PoppReg">Costa Club information</div>
                  <div class="grid-contact-item PoppReg">costaclub@us.costa.it</div>
                </div>
                <hr className="bg-black m-0 w-100 mt-3" />
                <div class="grid-contact-container">
                  <div class="grid-contact-item PoppReg">
                    Cruise Information / reservation​
                  </div>
                  <div class="grid-contact-item PoppReg">
                    Please call 1-800-462-6782
                  </div>
                </div>
                <hr className="bg-black m-0 w-100 mt-3" />

                <div class="grid-contact-container">
                  <div class="grid-contact-item PoppReg">
                    Post Cruise Customer Service
                  </div>
                  <div class="grid-contact-item PoppReg">customercare@us.costa.it</div>
                </div>
                <hr className="bg-black m-0 w-100 mt-3" />
                <div class="grid-contact-container">
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
                <hr className="bg-black m-0 w-100 mt-3" />
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
