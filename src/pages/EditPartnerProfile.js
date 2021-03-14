import React from "react";

//Components
import HeaderPartner from "../component/micro/HeaderPartner";
import EditProfile from "../component/macro/EditProfile";

export default function EditPartnerProfile() {
  return (
    <div>
      <HeaderPartner />
      <EditProfile title="Partner" />
    </div>
  );
}
