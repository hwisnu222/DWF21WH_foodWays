import React, { useContext } from "react";
import { UserContext } from "../context/userContext";

// Component
import Detail from "../component/macro/Detail";
import HeaderAdmin from "../component/micro/HeaderAdmin";
import Header from "../component/micro/Header";

export default function DetailProduct() {
  const [stateLogin, dispatchLogin] = useContext(UserContext);

  return (
    <div>
      {stateLogin.isLogin ? <HeaderAdmin /> : <Header />}
      <Detail />
    </div>
  );
}
