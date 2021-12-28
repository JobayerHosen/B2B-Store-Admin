import React from "react";
import { useNavigate } from "react-router";
import { Navigation } from "../../components";
import OrderContent from "./OrderContent";

const Orders = () => {
  const navigate = useNavigate();

  return (
    <div className="view">
      {/*-------------PAGE HEADER-------------*/}
      <header className="header">
        <div className="title-bar">
          <div>
            <i onClick={() => navigate(-1)} className="bi bi-arrow-left fs-3"></i>
          </div>
          <h3>Orders</h3>
          <div>
            <i className="bi bi-search fs-3"></i>
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
