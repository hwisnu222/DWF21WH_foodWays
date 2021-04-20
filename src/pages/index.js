import React, { useContext } from "react";

import { RoleContext } from "../context/roleContext";

// Components
import Header from "../component/micro/Header";
import HeaderAdmin from "../component/micro/HeaderAdmin";
import HeaderPartner from "../component/micro/HeaderPartner";
import Home from "../component/macro/Home";

export default function Index() {
  const [roleUser, dispatchRole] = useContext(RoleContext);
  const { role } = roleUser;

  return (
    <div>
      {role == "" ? (
        <Header />
      ) : role == "user" ? (
        <HeaderAdmin />
      ) : (
        <HeaderPartner />
      )}
      <Home />
    </div>
  );
}
