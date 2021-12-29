import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addOrders, getAllOrders } from "../../app/slices/orderSlice";
import { OrderCard } from "../../components";
import { fetchOrders } from "../../services/ordersApi";

const OrderContent = ({ filter }) => {
  const orders = useSelector(getAllOrders);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchOrders().then((response) => dispatch(addOrders(response?.data)));
  }, [dispatch]);

  return (
    <div className="mx-auto" style={{ maxWidth: "1000px" }}>
      {orders ? (
        filter ? (
          orders
            .filter((order) => order.status === filter.status)
            .map((order) => <OrderCard key={order?.id} order={order} />)
        ) : (
          orders.map((order) => <OrderCard key={order?.id} order={order} />)
        )
      ) : (
        <Spinner animation="border" variant="primary" />
      )}
    </div>
  );
};

export default OrderContent;
