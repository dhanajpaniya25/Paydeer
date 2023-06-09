import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import logoImg from "../../assests/svg/logo.svg";
import "./Sidebar.css";

const SideBar = () => {
  return (
    <div className="sidebar_design ">
      <img src={logoImg} alt="Logo" className="logo_image" />
      <Dropdown />
      <Dropdown />
      <Dropdown />
      <Dropdown />
      <Dropdown />
      <Dropdown />
      <Dropdown />
      <Dropdown />
      <Dropdown />
      <Dropdown />
      <Dropdown />
      <Dropdown />
      <Dropdown />
    </div>
  );
};

export default SideBar;
