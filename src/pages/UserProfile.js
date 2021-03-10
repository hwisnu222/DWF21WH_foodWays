import React from "react";

//Components
import HeaderAdmin from "../component/HeaderAdmin";
import Profile from "../component/Profile";
import EditProfile from "../component/EditProfile";

export default function UserProfile() {
  return (
    <div>
      <HeaderAdmin />
      <EditProfile />
      <Profile />
    </div>
  );
}
