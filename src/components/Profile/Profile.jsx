import React from "react";
import css from "./Profile.module.css";
import MyPosts from "./Myposts/MyPosts";

const Profile = () => {
  return (
    <div>
      <div>
        <img src="https://p.bigstockphoto.com/rwyznvNQ76U2liDFDH6g_bigstock-Yachts-In-City-Bay-At-Hot-Summ-283784740.jpg" />
      </div>
      <div>
        <MyPosts />
      </div>
    </div>
  );
};

export default Profile;
