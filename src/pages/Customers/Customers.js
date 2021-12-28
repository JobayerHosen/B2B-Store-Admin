import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addCustomers, getAllCustomers } from "../../app/slices/customerSlice";
import { CustomerCard, Navigation } from "../../components";
import { Spinner } from "react-bootstrap";
import customersApi from "../../services/customersApi";

const Customers = () => {
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
    <div className="view">
      {/*-------------PAGE HEADER-------------*/}
      <header className="header">
        <div className="title-bar">
          <div>
            <i className="bi bi-arrow-left fs-3"></i>
          </div>
          <h3>Customers</h3>
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
          {customers ? (
            customers.map((customer) => <CustomerCard key={customer.id} customer={customer} />)
          ) : (
            <Spinner animation="border" variant="primary" />
          )}
        </div>
        {/* ------------------------------------ */}
      </main>
    </div>
  );
};

export default Customers;
