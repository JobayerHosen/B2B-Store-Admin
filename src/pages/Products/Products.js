import React from "react";
import { useNavigate } from "react-router";
import { Navigation } from "../../components";
import ProductsContent from "./ProductsContent";

const Products = () => {
  const navigate = useNavigate();
  return (
    <div className="view">
      {/*-------------PAGE HEADER-------------*/}
      <header className="header">
        <div className="title-bar">
          <div>
            <i onClick={() => navigate(-1)} className="bi bi-arrow-left fs-3"></i>
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
          <ProductsContent />
        </div>
        {/* ------------------------------------ */}
      </main>
    </div>
  );
};

export default Products;
