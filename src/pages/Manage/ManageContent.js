import React from "react";
import { Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const ManageContent = () => {
  return (
    <section className="mx-auto overview mb-3" style={{ maxWidth: "1000px" }}>
      <div className="d-flex justify-content-between">
        <h5>Manage</h5>
      </div>
      <Row>
        <Col xs="6" md="3">
          <div className="rounded shadow p-3 mb-3">
            <h6 className="text-muted text-uppercase">Orders</h6>
            <h3>340</h3>
            <NavLink className="text-decoration-none" to="/orders">
              <p className="text-end p-0 m-0">
                Manage<i className="bi bi-chevron-right"></i>
              </p>
            </NavLink>
          </div>
        </Col>
        <Col xs="6" md="3">
          <div className="rounded shadow p-3 mb-3">
            <h6 className="text-muted text-uppercase">Customers</h6>
            <h3>125</h3>
            <NavLink className="text-decoration-none" to="/customers">
              <p className="text-end p-0 m-0">
                Manage<i className="bi bi-chevron-right"></i>
              </p>
            </NavLink>
          </div>
        </Col>
        <Col xs="6" md="3">
          <div className="rounded shadow p-3 mb-3">
            <h6 className="text-muted text-uppercase">Products</h6>
            <h3>34</h3>
            <NavLink className="text-decoration-none" to="/products">
              <p className="text-end p-0 m-0">
                Manage<i className="bi bi-chevron-right"></i>
              </p>
            </NavLink>
          </div>
        </Col>
        <Col xs="6" md="3">
          <div className="rounded shadow p-3 mb-3">
            <h6 className="text-muted text-uppercase">Payments</h6>
            <h3>$2740</h3>
            <NavLink className="text-decoration-none" to="/payments">
              <p className="text-end p-0 m-0">
                Manage<i className="bi bi-chevron-right"></i>
              </p>
            </NavLink>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default ManageContent;
