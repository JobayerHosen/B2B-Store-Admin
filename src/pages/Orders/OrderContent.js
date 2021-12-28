import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addOrders, getAllOrders } from "../../app/slices/orderSlice";
import OrderCard from "../../components/OrderCard";
import { fetchOrders } from "../../services/ordersApi";

const OrderContent = () => {
  const orders = useSelector(getAllOrders);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchOrders().then((response) => dispatch(addOrders(response?.data)));
  }, [dispatch]);

  return (
    <div className="mx-auto" style={{ maxWidth: "1000px" }}>
      {orders ? (
        orders.map((order) => <OrderCard key={order?.id} order={order} />)
      ) : (
        <Spinner animation="border" variant="primary" />
      )}
    </div>
  );
};

export default OrderContent;
