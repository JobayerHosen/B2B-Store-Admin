import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addOrders, getAllOrders } from "../../app/slices/orderSlice";
import OrderCard from "../../components/OrderCard";
import ordersApi from "../../services/ordersApi";

const OrderContent = () => {
  const orders = useSelector(getAllOrders);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await ordersApi.get("/orders.json").catch((err) => {
        console.log(err);
      });
      dispatch(addOrders(response?.data));
    };

    fetchOrders();
  }, [dispatch]);

  return (
    <div className="mx-auto" style={{ maxWidth: "1000px" }}>
      {orders ? (
        orders.map((order) => <OrderCard kee={order?.id} order={order} />)
      ) : (
        <Spinner animation="border" variant="primary" />
      )}
    </div>
  );
};

export default OrderContent;
