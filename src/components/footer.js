import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="social-icons">
          <div className="icon">
            <iconify-icon icon="logos:slack-icon"></iconify-icon>
          </div>
          <div className="icon">
            <iconify-icon icon="akar-icons:github-fill"></iconify-icon>
          </div>
        </div>
        <div className="footer-cont">
          <div className="logo-footer">
            <div>
              <img
                src="https://www.linkpicture.com/q/logo.36d2d48a.svg"
                type="image"
                alt="ig4"
                className="zuri"
              ></img>
            </div>
            <div>
              <p className="footer-text">HNG Internship 9 Frontend Task</p>
            </div>
            <div>
              <img
                src="https://www.linkpicture.com/q/ingressive.png"
                className="I4G"
                alt="I4G-logo"
                type="image"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
