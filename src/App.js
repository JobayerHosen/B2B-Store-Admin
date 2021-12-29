import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Customers from "./pages/Customers/Customers";
import Home from "./pages/Home/Home";
import Manage from "./pages/Manage/Manage";
import OrderDetails from "./pages/OrderDetails/OrderDetails";
import Orders from "./pages/Orders/Orders";
import Products from "./pages/Products/Products";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/products" element={<Products />} />
          <Route path="/manage" element={<Manage />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/order-details/:id" element={<OrderDetails />} />

          <Route
            path="*"
            element={
              <main style={{ padding: "1rem", color: "#000" }}>
                <h1>Page Not Found!</h1>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
