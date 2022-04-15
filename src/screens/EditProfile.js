import React from "react";
import "./EditProfile.css";

const Editprofile = () => {
  return (
    <div className="profile_edit">
      <div className="display_container">
        <div className="icons_container">
          <div className="back_arrow">
            <img src="./images/arrow.svg" alt="arrow button" />
          </div>
          <div className="right_panel">
            <img
              src={"./images/notification.svg"}
              className="bell"
              alt="bell icon notification button"
            />
            <div className="profile_image">
              <img
                src="./influencers/lady.svg"
                alt="random girl profile images brown background girl"
              />
            </div>
          </div>
        </div>
        <img src="./influencers/lady.svg" alt="random girl profile images brown background girl" />
      </div>
      <div className="influencer_details">
        <p className="display_name">Cara Delevingn</p>
        <p className="real_name">Cara Delevingn</p>

        <div className="followers_card_container">
          <div className="instagram card">
            <p className="number">80K</p>
            <p className="platform">Instagram Followers</p>
          </div>
          <div className="facebook card">
            <div className="number">60K</div>
            <p className="platform">Instagram Likes</p>
          </div>
          <div className="twitter card">
            <div className="number">70K</div>
            <p className="platform">Facebook Followers</p>
          </div>
          <div className="insta_likes card">
            <div className="number">180K</div>
            <p className="platform">Twitter Followers</p>
          </div>
        </div>

        <div className="button_container">
          <button className="primary_button">Edit Profile</button>
        </div>
      </div>
    </div>
  );
};

export default Editprofile;
