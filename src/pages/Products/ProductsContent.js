import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addProducts, getAllProducts } from "../../app/slices/productSlice";
import { ProductCard } from "../../components";
import { fetchProducts } from "../../services/productsApi";

const ProductsContent = () => {
  const products = useSelector(getAllProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProducts().then((response) => dispatch(addProducts(response?.data)));
  }, [dispatch]);

  return (
    <div className="mx-auto" style={{ maxWidth: "1000px" }}>
      {products ? (
        products.map((product) => <ProductCard key={product?.id} product={product} />)
      ) : (
        <Spinner animation="border" variant="primary" />
      )}
    </div>
  );
};

export default ProductsContent;
