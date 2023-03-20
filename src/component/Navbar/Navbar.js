import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        margin: "5%",
        paddingBottom: "10%",
      }}
    >
      <Link to={"/medicineForm"}> MedicineDetails</Link>
      <Link to={"/cart"}>Cart</Link>
    </div>
  );
};

export default Navbar;
