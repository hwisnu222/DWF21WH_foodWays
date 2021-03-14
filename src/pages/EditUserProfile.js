import React from "react";

//Components
import HeaderAdmin from "../component/micro/HeaderAdmin";
import EditProfile from "../component/macro/EditProfile";

export default function EditUserProfile() {
  return (
    <div>
      <HeaderAdmin />
      <EditProfile title="" linkEdit="/edit-user-profile" />
    </div>
  );
}
