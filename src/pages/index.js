import React from "react";

// Components
import Header from "../component/Header";
import HeaderAdmin from "../component/HeaderAdmin";
import Home from "../component/Home";

export default function Index() {
  return (
    <div>
      <HeaderAdmin />
      <Home />
      <Header />
      <Home />
    </div>
  );
}
