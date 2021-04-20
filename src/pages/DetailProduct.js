import React, { useContext } from "react";
import { UserContext } from "../context/userContext";
import { RoleContext } from "../context/roleContext";

// Component
import Detail from "../component/macro/Detail";
import HeaderPartner from "../component/micro/HeaderPartner";
import HeaderAdmin from "../component/micro/HeaderAdmin";
import Header from "../component/micro/Header";

export default function DetailProduct() {
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
      <Detail />
    </div>
  );
}
