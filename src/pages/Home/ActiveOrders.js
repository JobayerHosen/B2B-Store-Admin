import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import OrderContent from "../Orders/OrderContent";

const ActiveOrders = () => {
  const [filter, setFilter] = useState("Pending");
  return (
    <section className="mx-auto overview mb-3" style={{ maxWidth: "1000px" }}>
      <div className="d-flex justify-content-between">
        <h5>Active Orders</h5>
        <NavLink className="text-muted text-decoration-none" to="/orders">
          <p className="text-end p-0 m-0">
            View More<i className="bi bi-chevron-right"></i>
          </p>
        </NavLink>
      </div>

      <div className="d-flex">
        <Button
          onClick={() => setFilter("Pending")}
          variant="outline-secondary"
          className={`rounded-pill py-1 me-3 ${filter === "Pending" && "bg-primary"}`}
        >
          Pending
        </Button>
        <Button
          onClick={() => setFilter("Shipped")}
          variant="outline-secondary"
          className={`rounded-pill py-1 me-3 ${filter === "Shipped" && "bg-primary"}`}
        >
          Shipped
        </Button>
        <Button
          onClick={() => setFilter("Accepted")}
          variant="outline-secondary"
          className={`rounded-pill py-1 me-3 ${filter === "Accepted" && "bg-primary"}`}
        >
          Accepted
        </Button>
      </div>

      <OrderContent filter={{ status: filter }} />
    </section>
  );
};

export default ActiveOrders;
