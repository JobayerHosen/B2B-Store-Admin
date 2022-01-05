import React from "react";

const OrderItem = ({ item }) => {
  const { title, image, quantity, price } = item;
  return (
    <div className="list-item">
      <div className="list-item-left">
        <div className="list-item-img">
          <img src={[item?.image]} alt="order image" />
        </div>
        <div className="list-main-info">
          <small className="text-muted">{item?.title}</small>
          <div className="d-flex w-100 justify-content-between align-items-center pt-1">
            <h6 className="fw-bold">
              <span className="border px-1 rounded text-primary border-primary">{item?.quantity}</span> x ${item?.price}
            </h6>
          </div>
        </div>
        <p className="fs-5 fw-bolder text-secondary"></p>
      </div>

      <div className="list-item-right">
        <h5>${item?.quantity * item?.price}</h5>
      </div>
    </div>
  );
};

export default OrderItem;
