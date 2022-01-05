import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./styles/ProductCard.css";

const ProductCard = ({ product }) => {
  const { id, image, title, category, price } = product;
  return (
    <div className="list-item">
      <NavLink to={`/products/${id}`}>
        <div className="list-item-left">
          <div className="list-item-img">
            <img src={image} alt="product image" />
          </div>
          <div className="list-main-info">
            <small className="product-title">{title}</small>
            <h6 className="fw-bold">${price}</h6>
          </div>
        </div>
      </NavLink>

      {/* LIST RIGHT SIDE  */}
      <div className="list-item-right">
        <div className="list-item-details">
          <small className="shade-success p-0 px-2 rounded-pill fw-bold  ">In Stock</small>
        </div>

        <i className="bi bi-three-dots-vertical ms-2"></i>
      </div>
    </div>
  );
};

export default ProductCard;
