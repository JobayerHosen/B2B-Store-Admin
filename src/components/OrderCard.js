import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./styles/OrderCard.css";

const OrderCard = ({ order }) => {
  const { id, status, grandTotal, items, date, paymentMethod } = order;

  return (
    <div className="order-card shadow rounded mb-3 p-2">
      <div className="d-flex w-100 justify-content-between align-items-center">
        <p className=" fw-bold my-0">Order #{id}</p>
        <p className="text-muted my-0">{date}</p>
      </div>
      <div className="d-flex align-items-center my-2">
        <div className="img-wrapper border rounded">
          <img src={[items[0]?.image]} alt="order image" />
        </div>
        <div className="w-100">
          <h6 className="text-muted">{items?.length} Items</h6>
          <h5 className="fw-bold">${grandTotal}</h5>
        </div>
        <p className="fs-5 fw-bolder text-secondary">{paymentMethod}</p>
      </div>
      <div className="d-flex w-100 justify-content-between align-items-center border-top pt-1">
        <span className={`text-muted fw-bold status ${status.toLowerCase()}`}>{status}</span>
        <NavLink to={`/orders/${id}`}>
          <Button className="rounded-pill py-0 fw-bold" variant="outline-secondary">
            Details
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default OrderCard;
