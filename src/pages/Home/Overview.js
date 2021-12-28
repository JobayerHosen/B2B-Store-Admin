import React from "react";
import { Col, Row } from "react-bootstrap";

const Overview = () => {
  return (
    <section className="mx-auto overview mb-3" style={{ maxWidth: "1000px" }}>
      <div className="d-flex justify-content-between">
        <h5>Overview</h5>
        <p className="text-muted">
          Details <i className="bi bi-chevron-right"></i>
        </p>
      </div>
      <Row>
        <Col xs="6" md="3">
          <div className="rounded shadow p-3 mb-3">
            <h6 className="text-muted text-uppercase">Active Orders</h6>
            <h3>35</h3>
          </div>
        </Col>
        <Col xs="6" md="3">
          <div className="rounded shadow p-3 mb-3">
            <h6 className="text-muted text-uppercase">Total Orders</h6>
            <h3>340</h3>
          </div>
        </Col>
        <Col xs="6" md="3">
          <div className="rounded shadow p-3 mb-3">
            <h6 className="text-muted text-uppercase">Total Sales</h6>
            <h3>$2752</h3>
          </div>
        </Col>
        <Col xs="6" md="3">
          <div className="rounded shadow p-3 mb-3">
            <h6 className="text-muted text-uppercase">Product View</h6>
            <h3>4350</h3>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Overview;
