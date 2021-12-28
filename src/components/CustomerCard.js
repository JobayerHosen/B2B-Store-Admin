import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/CustomerCard.css";

const CustomerCard = ({ customer }) => {
  const { id, name, ordercount, img } = customer;
  return (
    <div className="customer-card shadow rounded mb-3 p-2">
      <div className="img-wrapper">
        {img ? <img src={img} alt="customer image" /> : <h1 className="dynamic-avatar">{name[0]}</h1>}
      </div>
      <div className="w-100">
        <NavLink className="customer-title" to={`/customers/${id}`}>
          <h6>{name}</h6>
        </NavLink>
        <small className="text-muted">{ordercount} orders</small>
      </div>
    </div>
  );
};

export default CustomerCard;
