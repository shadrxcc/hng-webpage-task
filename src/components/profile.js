import React from 'react';
import { Icon } from "@iconify/react";

const ProfileImg = () => {
  return (
    <>
      <div className="pfp">
        <div className="menu-share">
          <span className="menu">
            <Icon className="iconrct" icon="carbon:overflow-menu-horizontal" />
          </span>
          <span className="share">
            <Icon className="iconrct" icon="bx:share" hFlip={true} />
          </span>
        </div>
        <div>
          <img
            id="profile__img"
            src="https://www.linkpicture.com/q/logo-1_1.jpg"
            alt="profile-pic"
          ></img>
        </div>
        <div>
          <h3 id="twitter">shadrxcc</h3>
        </div>
        <div>
          <h3 id="slack" hidden>
            sheddy sk.
          </h3>
        </div>
      </div>
    </>
  );
};

export default ProfileImg
