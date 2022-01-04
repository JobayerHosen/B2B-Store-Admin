import React from "react";
import { useNavigate, useParams } from "react-router";
import { Avatar, Navigation } from "../../components";
import OrderDetailsContent from "./OrderDetailsContent";

const OrderDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="view">
      {/*-------------PAGE HEADER-------------*/}
      <header className="header">
        <div className="title-bar">
          <div>
            <i onClick={() => navigate(-1)} className="bi bi-arrow-left fs-3"></i>
          </div>
          <h3>Order #{id}</h3>
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
        <div className="content">{<OrderDetailsContent id={id} />}</div>
        {/* ------------------------------------ */}
      </main>
    </div>
  );
};

export default OrderDetails;
