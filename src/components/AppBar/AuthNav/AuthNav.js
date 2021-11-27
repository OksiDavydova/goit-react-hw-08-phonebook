import React from "react";
import { NavLink } from "react-router-dom";
const authNav = {
  display: "flex",
  alignItems: "center",
  fontWeight: "500",
};
const authNavItem = {
  margin: "15px",
};

const AuthNav = () => (
  <div style={authNav}>
    <NavLink
      to="/register"
      style={({ isActive }) => ({
        color: isActive ? "yellow" : "white",
      })}
    >
      <span style={authNavItem}>Registration</span>
    </NavLink>
    <NavLink
      to="/login"
      style={({ isActive }) => ({
        color: isActive ? "yellow" : "white",
      })}
    >
      <span style={authNavItem}>Log in</span>
    </NavLink>
  </div>
);

export default AuthNav;
