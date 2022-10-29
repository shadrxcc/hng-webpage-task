import React from 'react';

const ProfileImg = () => {
  return (
    <>
      <div className="pfp">
        <div>
          <img
            className="pic"
            src="https://www.linkpicture.com/q/logo-1_1.jpg"
            alt="profile-pic"
          ></img>
        </div>
        <div>
          <h3 className='username'>Shadrach Akaade</h3>
        </div>
      </div>
    </>
  );
};

export default ProfileImg
