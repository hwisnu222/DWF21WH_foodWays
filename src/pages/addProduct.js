import React from "react";
import HeaderPartner from "../component/micro/HeaderPartner";
import AddProductPartner from "../component/macro/AddProductPartner";
import HeaderAdmin from "../component/micro/HeaderAdmin";

export default function AddProduct() {
  return (
    <div>
      <HeaderPartner />
      <AddProductPartner />
    </div>
  );
}
