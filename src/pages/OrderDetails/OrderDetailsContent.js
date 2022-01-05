import React, { useEffect } from "react";
import { Button, Spinner, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addOrders, getAllOrders } from "../../app/slices/orderSlice";
import { OrderItem } from "../../components";
import { fetchOrders } from "../../services/ordersApi";

const OrderDetailsContent = ({ id }) => {
  const orders = useSelector(getAllOrders);
  const dispatch = useDispatch();
  const order = orders.filter((order) => order.id == id)[0];

  useEffect(() => {
    fetchOrders().then((response) => dispatch(addOrders(response?.data)));
  }, [dispatch]);

  return (
    <div className="mx-auto" style={{ maxWidth: "1000px" }}>
      {/* ORDER ITEMS  */}
      <section className="mx-auto overview mb-3 border-bottom" style={{ maxWidth: "1000px" }}>
        <div className="d-flex text-muted text-uppercase justify-content-between">
          <h5>Items ({order?.items?.length})</h5>
        </div>
        {order ? (
          order.items?.map((item) => <OrderItem key={item?.id} item={item} />)
        ) : (
          <Spinner animation="border" variant="primary" />
        )}
      </section>

      {/* PRICING  */}
      <section className="mx-auto overview mb-3 border-bottom" style={{ maxWidth: "1000px" }}>
        <div className="d-flex justify-content-between">
          <h6>Total:</h6>
          <h5>${order?.total}</h5>
        </div>
        <div className="d-flex justify-content-between">
          <h6>Shipping:</h6>
          <h5>${order?.shipping}</h5>
        </div>
        <div className="d-flex justify-content-between">
          <h6>Grand Total:</h6>
          <h5>${order?.grandTotal}</h5>
        </div>

        <div className="d-flex text-muted text-uppercase justify-content-between align-items-center">
          <h5>Payment Method:</h5>
          <span className="alert-warning d-inline-block p-0 px-2 rounded-pill fw-bold text-secondary">
            {order?.paymentMethod}
          </span>
        </div>
      </section>

      {/* CUSTOMER DETAILS  */}
      <section className="mx-auto overview mb-3 border-bottom" style={{ maxWidth: "1000px" }}>
        <div className="d-flex text-muted text-uppercase justify-content-between">
          <h5>Customer Details</h5>
        </div>
        <Table borderless>
          <tbody>
            <tr>
              <th>Name: </th>
              <td>{order?.customer?.name}</td>
            </tr>
            <tr>
              <th>Mobile: </th>
              <td>{order?.customer?.phone}</td>
            </tr>
            <tr>
              <th>Email: </th>
              <td>{order?.customer?.email}</td>
            </tr>
            <tr>
              <th>Address: </th>
              <td>{`${order?.customer?.address?.suite}, ${order?.customer?.address?.street}, ${order?.customer?.address?.city} `}</td>
            </tr>
            <tr>
              <th>Zip Code: </th>
              <td>{order?.customer?.address?.zipcode}</td>
            </tr>
            <tr></tr>
          </tbody>
        </Table>
      </section>

      <div className="d-flex w-100 justify-content-end align-items-center pt-1">
        <Button className="fw-bold bg-secondary me-3" variant="danger">
          Reject
        </Button>
        <Button className="fw-bold bg-success me-3" variant="success">
          Accept
        </Button>
      </div>
    </div>
  );
};

export default OrderDetailsContent;
