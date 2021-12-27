import React from "react";
import { Navigation } from "../../components";

const Products = () => {
  return (
    <div className="view">
      {/*-------------PAGE HEADER-------------*/}
      <header className="header">
        <div className="title-bar">
          <div>
            <i className="bi bi-arrow-left fs-3"></i>
          </div>
          <h3>Products</h3>
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
          <h1>Products</h1>
        </div>
        {/* ------------------------------------ */}
      </main>
    </div>
  );
};

export default Products;
