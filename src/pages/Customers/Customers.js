import React from "react";
import { useNavigate } from "react-router";
import { Avatar, Navigation } from "../../components";
import CustomerContent from "./CustomerContent";

const Customers = () => {
  const navigate = useNavigate();

  return (
    <div className="view">
      {/*-------------PAGE HEADER-------------*/}
      <header className="header">
        <div className="title-bar">
          <div>
            <i onClick={() => navigate(-1)} className="bi bi-arrow-left fs-3"></i>
          </div>
          <h3>Customers</h3>
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
          <CustomerContent />
        </div>
        {/* ------------------------------------ */}
      </main>
    </div>
  );
};

export default Customers;
