import React, { useState } from "react";
import { div } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import OrderContent from "../Orders/OrderContent";

const ActiveOrders = () => {
  const [filter, setFilter] = useState("Pending");
  return (
    <section className="mx-auto dashboard-card overview mb-3" style={{ maxWidth: "1000px" }}>
      <div className="d-flex flex-wrap justify-content-between mb-2">
        <h5>Active Orders</h5>

        <NavLink className="text-muted text-decoration-none" to="/orders">
          <small>
            View All
            <i className="bi bi-chevron-right"></i>
          </small>
        </NavLink>
      </div>

      {/* FILTER  */}
      <div className="d-flex align-items-center mb-2">
        <div
          onClick={() => setFilter("Pending")}
          className={`rounded-pill border py-1 px-2 me-2 ${filter === "Pending" && "bg-warning"}`}
        >
          <small>Pending</small>
        </div>
        <div
          onClick={() => setFilter("Shipped")}
          className={`rounded-pill border py-1 px-2 me-2 ${filter === "Shipped" && "bg-blue"}`}
        >
          <small>Shipped</small>
        </div>
        <div
          onClick={() => setFilter("Accepted")}
          className={`rounded-pill border py-1 px-2 me-2 ${filter === "Accepted" && "bg-success"}`}
        >
          <small>Accepted</small>
        </div>
      </div>

      <OrderContent filter={{ status: filter }} />
    </section>
  );
};

export default ActiveOrders;
