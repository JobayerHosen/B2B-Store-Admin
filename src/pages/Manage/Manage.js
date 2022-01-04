import React from "react";
import { useNavigate } from "react-router";
import { Avatar, Navigation } from "../../components";
import ManageContent from "./ManageContent";

const Manage = () => {
  const navigate = useNavigate();
  return (
    <div className="view">
      {/*-------------PAGE HEADER-------------*/}
      <header className="header">
        <div className="title-bar">
          <h3>Manage</h3>
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
          {/* OVERVIEW SECTION  */}
          <ManageContent />
        </div>
        {/* ------------------------------------ */}
      </main>
    </div>
  );
};

export default Manage;
