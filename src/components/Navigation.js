import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/Navigation.css";

const Navigation = () => {
  return (
    <>
      <nav className="navigation">
        <div className="logo">
          <h1>
            <i className="bi bi-shop me-2 fs-3"></i>B2B Store Admin
          </h1>
        </div>
        <NavLink className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")} to="/">
          <i className="bi bi-house-door"></i>
          <span>Home</span>
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")} to="/orders">
          <i className="bi bi-bag-check"></i>
          <span>Orders</span>
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")} to="/products">
          <i className="bi bi-grid"></i>
          <span>Products</span>
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")} to="/manage">
          <i className="bi bi-layers"></i>
          <span>Manage</span>
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")} to="/account">
          <i className="bi bi-person"></i>
          <span>Account</span>
        </NavLink>
      </nav>
    </>
  );
};

export default Navigation;
