import moment from "moment";
import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./styles/OrderCard.css";

const OrderCard = ({ order }) => {
  const { id, status, grandTotal, items, date, paymentMethod, customer } = order;

  return (
    <div className="list-item order-card">
      {/* LIST LEFT SIDE  */}
      <NavLink to={`/order-details/${id}`}>
        <div className="list-item-left">
          <div className="list-item-img">
            <img src={[items[0]?.image]} />
          </div>
          <div className="list-main-info">
            <div>
              <small className="fw-bold my-0 me-3">Order #{id}</small>
              <small className={`text-muted status ${status.toLowerCase()}`}>{status}</small>
            </div>
            <div>
              <span className="fw-bold me-3">${grandTotal}</span>
              <small className="text-muted me-3">{items?.length} Items</small>
            </div>
          </div>
        </div>
      </NavLink>

      {/* LIST RIGHT SIDE  */}
      <div className="list-item-right">
        <div className="list-item-details">
          <small className="text-muted my-0 me-2">{moment(date).calendar()}</small>
          <span className="shade-warning p-0 px-2 rounded-pill fw-bold ">{paymentMethod}</span>
        </div>
        <i className="bi bi-three-dots-vertical ms-2"></i>
      </div>
    </div>
  );
};

export default OrderCard;
