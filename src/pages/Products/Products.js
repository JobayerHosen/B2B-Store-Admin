import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addProducts, getAllProducts } from "../../app/slices/productSlice";
import { Navigation, ProductCard } from "../../components";
import productsApi from "../../services/productsApi";

const Products = () => {
  const products = useSelector(getAllProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await productsApi.get("/products.json").catch((err) => {
        console.log(err);
      });
      dispatch(addProducts(response?.data));
    };

    fetchProducts();
  }, [dispatch]);

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
          {products ? (
            products.map((product) => <ProductCard key={product?.id} product={product} />)
          ) : (
            <Spinner animation="border" variant="primary" />
          )}
        </div>
        {/* ------------------------------------ */}
      </main>
    </div>
  );
};

export default Products;
