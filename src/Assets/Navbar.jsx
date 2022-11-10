import React from "react";
import { Input } from "@chakra-ui/react";
import gkarthub from "./LoadingImage/gkarthub.jpg";

const Navbar = () => {
  return (
    <div
      className="navbar"
      style={{ display: "flex" }}
    >
      <img src={gkarthub} alt="" className="logo"/>
      <div>
        <Input placeholder="Search for books" style={{ color: "black" }} className="input" />
      </div>
      <div
      className="navbarContent"
        style={{
            margin:"8px",
          display: "flex",
          gap: "1rem",
          color: "white",
          justifyContent: "center",
        }}
      >
        <h5>About</h5>
        <h5>Contact</h5>
        <h5>Sign In</h5>
        <h5>Sign Up</h5>
      </div>
    </div>
  );
};

export default Navbar;
