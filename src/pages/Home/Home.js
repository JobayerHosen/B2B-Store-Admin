import React from "react";
import { Navigation } from "../../components";
import Overview from "./Overview";

const Home = () => {
  return (
    <div className="view">
      {/*-------------PAGE HEADER-------------*/}
      <header className="header">
        <div className="title-bar">
          <h3>B2B Store Admin</h3>
          <div></div>
          <div></div>
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
          <Overview />
        </div>
        {/* ------------------------------------ */}
      </main>
    </div>
  );
};

export default Home;
