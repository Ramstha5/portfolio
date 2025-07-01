import React from "react";
import Navbar from "./Navbar";
import SocialMedia from "./SocialMedia";
import Name from "./Name";

const Profile = () => {
  return (
    <>
      <header>
        <div>
          <Name />
          <Navbar />
        </div>
        <SocialMedia />
      </header>
    </>
  );
};

export default Profile;


