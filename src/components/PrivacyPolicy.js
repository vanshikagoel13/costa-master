import React, { useState } from "react";
import "../styles/PrivacyPolicy.css";
import Footer from "./Footer";
import Header from "./Header";
// import NewFooter from "./NewFooter";
import CallNowButton from "./CallNowButton";
function PrivacyPolicy() {
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
                <h1 className="main-heading PoppBold">Privacy Policy</h1>
                <hr className="bg-black m-5 w-50 mx-auto" />
              </div>
              {/* <h5 className="main-heading-2">Terms And Conditions</h5> */}

              <div className="content">
                <h6 className="content-sub PoppReg">
                  Welcome to the Costa Cruise India website. These terms and
                  conditions govern your use of our website, including any
                  content, features, or services offered. By accessing or using
                  our website, you agree to comply with these terms and
                  conditions. Please read them carefully.
                </h6>
                <br></br>
                <br></br>
                <br></br>
                <div>
                  <h5 className="fw-bold PoppReg"> Acceptance of Terms</h5>
                  <p className="content-sub PoppReg">
                    By using the Costa Cruise India website, you acknowledge
                    that you have read, understood, and agreed to be bound by
                    these terms and conditions. If you do not agree with any
                    part of these terms, please do not use our website.
                  </p>
                </div>
                <br></br>
                <div>
                  <h5 className="fw-bold PoppReg">Website Content</h5>
                  <p className="content-sub PoppReg">
                    The content provided on the Costa Cruise India website is
                    for general informational purposes only. While we strive to
                    ensure the accuracy and completeness of the information, we
                    make no warranties or representations regarding the
                    reliability, suitability, or availability of the content.{" "}
                  </p>
                </div>
                <br></br>
                <div>
                  <h5 className="fw-bold PoppReg">Intellectual Property</h5>
                  <p className="content-sub PoppReg">
                    All intellectual property rights, including but not limited
                    to copyrights, trademarks, logos, and graphics, used on the
                    Costa Cruise India website are the property of Costa Cruise
                    or its licensors. You are granted a limited, non-exclusive,
                    non-transferable license to access and use the website
                    solely for personal, non-commercial purposes. You must not
                    reproduce, distribute, modify, or exploit any content from
                    our website without our prior written consent.
                  </p>
                </div>
                <br></br>
                <div>
                  <h5 className="fw-bold PoppReg">
                    Third-Party Websites and Content
                  </h5>
                  <p className="content-sub PoppReg">
                    Our website may contain links to third-party websites or
                    resources that are not owned or controlled by Costa Cruise
                    India. We have no control over the content, privacy
                    policies, or practices of these websites and disclaim any
                    responsibility for them. Your use of third-party websites is
                    at your own risk, and you should review the terms and
                    conditions and privacy policies applicable to those
                    websites.
                  </p>
                </div>
                <br></br>
                <div>
                  <h5 className="fw-bold PoppReg">Privacy</h5>
                  <p className="content-sub PoppReg">
                    Your privacy is important to us. Our Privacy Policy outlines
                    how we collect, use, and protect your personal information
                    when you use our website. By using our website, you consent
                    to our collection and use of your personal information as
                    described in the Privacy Policy.
                  </p>
                </div>
                <br></br>
                <div>
                  <h5 className="fw-bold PoppReg">Limitation of Liability</h5>
                  <p className="content-sub PoppReg">
                    To the extent permitted by law, Costa Cruise India and its
                    affiliates, officers, directors, employees, or agents shall
                    not be liable for any direct, indirect, incidental,
                    consequential, or special damages arising out of or in
                    connection with your use of the website or reliance on any
                    content. This includes, but is not limited to, loss of data,
                    loss of profits, or business interruption.
                  </p>
                </div>
                <br></br>
                <div>
                  <h5 className="fw-bold PoppReg">
                    Modifications and Termination
                  </h5>
                  <p className="content-sub PoppReg">
                    Costa Cruise India reserves the right to modify or terminate
                    the website or any part thereof, temporarily or permanently,
                    without prior notice. We may also revise these terms and
                    conditions at any time. Your continued use of the website
                    after any changes constitute your acceptance of the revised
                    terms.
                  </p>
                </div>
                <br></br>
                <div>
                  <h5 className="fw-bold PoppReg">Governing Law</h5>
                  <p className="content-sub PoppReg">
                    These terms and conditions shall be governed by and
                    construed in accordance with the laws of India. Any disputes
                    arising from your use of the Costa Cruise India website
                    shall be subject to the exclusive jurisdiction of the courts
                    in India.
                  </p>
                </div>
                <br></br>
                <br></br>
                <h5 className="fw-bold PoppReg">
                  If you have any questions or concerns about these terms and
                  conditions, please contact us at +91 2261792300
                </h5>

                <hr className="border-dark border-dashed w-100" />
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

export default PrivacyPolicy;
