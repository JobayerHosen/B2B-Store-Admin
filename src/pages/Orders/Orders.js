import React from "react";
import { Col, Row } from "react-bootstrap";
import { Avatar, Navigation, OrderStats } from "../../components";
import OrderContent from "./OrderContent";

const Orders = () => {
  return (
    <div className="view">
      {/*-------------PAGE HEADER-------------*/}
      <header className="header">
        <div className="title-bar">
          <h3>Orders</h3>
          <div></div>
          <div className="d-flex align-items-center">
            <i className="bi bi-search fs-3"></i>
            <Avatar />
          </div>
        </div>
      </header>
      {/* ------------------------------------ */}

      <main className="main text-black">
        {/* ------------NAV------------*/}
        <div className="side-nav">
          <Navigation />
        </div>

        {/* ------------MAIN CONTENT------------*/}
        <div className="content">
          <Row>
            <Col xs="12" md="7" className="mb-3">
              <OrderContent />
            </Col>
            <Col xs="12" md="5" className="mb-3">
              <OrderStats />
            </Col>
          </Row>
        </div>
        {/* ------------------------------------ */}
      </main>
    </div>
  );
};

export default Orders;
