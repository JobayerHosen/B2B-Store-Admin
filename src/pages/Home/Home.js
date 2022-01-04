import React from "react";
import { Col, Row } from "react-bootstrap";
import { Avatar, Navigation, SalesOverview, Statistics } from "../../components";
import ActiveOrders from "./ActiveOrders";

const Home = () => {
  return (
    <div className="view">
      {/*-------------PAGE HEADER-------------*/}
      <header className="header">
        <div className="title-bar">
          <h4>Home</h4>
          <div></div>
          <div className="d-flex align-items-center">
            <i className="bi bi-bell fs-3"></i>
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
          <div className="mb-4">
            <Row>
              <Col xs="12" md="6">
                <SalesOverview />
              </Col>
              <Col xs="12" md="6">
                <Statistics />
              </Col>
            </Row>
          </div>
          <ActiveOrders />
        </div>
        {/* ------------------------------------ */}
      </main>
    </div>
  );
};

export default Home;
