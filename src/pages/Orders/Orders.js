import React from "react";
import { Avatar, Navigation } from "../../components";
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
          <OrderContent />
        </div>
        {/* ------------------------------------ */}
      </main>
    </div>
  );
};

export default Orders;
