import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addCustomers, getAllCustomers } from "../../app/slices/customerSlice";
import { CustomerCard } from "../../components";
import { Spinner } from "react-bootstrap";
import customersApi from "../../services/customersApi";

const CustomerContent = () => {
  const customers = useSelector(getAllCustomers);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCustomers = async () => {
      const response = await customersApi.get("/customers.json").catch((err) => {
        console.log(err);
      });
      dispatch(addCustomers(response?.data));
    };

    fetchCustomers();
  }, [dispatch]);

  return (
    <div className="mx-auto" style={{ maxWidth: "1000px" }}>
      {customers ? (
        customers.map((customer) => <CustomerCard key={customer.id} customer={customer} />)
      ) : (
        <Spinner animation="border" variant="primary" />
      )}
    </div>
  );
};

export default CustomerContent;
