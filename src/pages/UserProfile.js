import React from "react";

//Components
import HeaderAdmin from "../component/micro/HeaderAdmin";
import Profile from "../component/macro/ProfilePartner";
import EditProfile from "../component/macro/EditProfile";

export default function UserProfile() {
  return (
    <div>
      <HeaderAdmin />
      <EditProfile />
      <Profile />
    </div>
  );
}
