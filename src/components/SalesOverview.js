import millify from "millify";
import React from "react";
import { Col, Row } from "react-bootstrap";

const SalesOverview = () => {
  return (
    <div className="mx-auto h-100 dashboard-card mb-3" style={{ maxWidth: "1000px" }}>
      <div className="d-flex justify-content-between">
        <h5>Overview</h5>
      </div>
      <Row className="h-100">
        <Col xs="6">
          <div className="overview-card mb-3">
            <i className="bi bi-bar-chart-fill icon-shaded shade-blue"></i>
            <div>
              <small className="text-muted m-0">Sales</small>
              <h4>${millify(7560)}</h4>
            </div>
          </div>
        </Col>
        <Col xs="6">
          <div className="overview-card mb-3">
            <i className="bi bi-graph-up-arrow icon-shaded shade-secondary"></i>
            <div>
              <small className="text-muted m-0">Revenue</small>
              <h4>${millify(3407)}</h4>
            </div>
          </div>
        </Col>
        <Col xs="6">
          <div className="overview-card mb-3">
            <i className="bi bi-currency-exchange icon-shaded shade-danger"></i>
            <div>
              <small className="text-muted m-0">Cost</small>
              <h4>${millify(2752)}</h4>
            </div>
          </div>
        </Col>
        <Col xs="6">
          <div className="overview-card mb-3">
            <i
              className="bi bi-lightning-charge-fill
 icon-shaded shade-success"
            ></i>
            <div>
              <small className="text-muted m-0">Profit</small>
              <h4>${millify(2350)}</h4>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SalesOverview;
