import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addOrders, getAllOrders } from "../../app/slices/orderSlice";
import { Navigation } from "../../components";
import OrderCard from "../../components/OrderCard";
import ordersApi from "../../services/ordersApi";

const Orders = () => {
  const orders = useSelector(getAllOrders);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    <div className="view">
      {/*-------------PAGE HEADER-------------*/}
      <header className="header">
        <div className="title-bar">
          <div>
            <i onClick={() => navigate(-1)} className="bi bi-arrow-left fs-3"></i>
          </div>
          <h3>Orders</h3>
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
          {orders ? (
            orders.map((order) => <OrderCard kee={order?.id} order={order} />)
          ) : (
            <Spinner animation="border" variant="primary" />
          )}
        </div>
        {/* ------------------------------------ */}
      </main>
    </div>
  );
};

export default Orders;
