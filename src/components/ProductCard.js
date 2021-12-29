import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./styles/ProductCard.css";

const ProductCard = ({ product }) => {
  const { id, image, title, category, price } = product;
  return (
    <div className="product-card shadow rounded mb-3 p-2">
      <div className="img-wrapper">
        <img src={image} alt="product image" />
      </div>
      <div className="w-100">
        <h6 className="product-title">{title}</h6>
        <small>{category}</small>
        <h5 className="fw-bold">${price}</h5>
        <div className="d-flex w-100 justify-content-between">
          <span className="text-success">In Stock</span>
          <NavLink to={`/products/${id}`}>
            <Button className=" rounded-pill py-0 fw-bold" variant="outline-secondary">
              Details
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
