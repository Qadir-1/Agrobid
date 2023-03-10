/** @format */

import { Routes, Route } from "react-router-dom";
import Login from "./components/forms/Login";
import Dashboard from "./components/pages/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Orders from "./components/pages/orders/Orders";
import ViewOrder from "./components/pages/orders/ViewOrder";
import Products from "./components/pages/products/Products";
import ViewProduct from "./components/pages/products/ViewProduct";
import Customers from "./components/pages/Customers/Customers";
import Service from "./components/pages/Services/Service";
import Payment from "./components/pages/Payment/Payment";
import Inventory from "./components/pages/Inventory/Inventory";
import Discount from "./components/pages/Discount/Discount";
import Cat from "./components/pages/Cat/Cat";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/orders" element={<Orders />} />
        <Route path="/viewOrder/:id" element={<ViewOrder />} />

        <Route path="/products" element={<Products />} />
        <Route path="/viewProduct/:id" element={<ViewProduct />} />

        <Route path="/customer" element={<Customers />} />

        <Route path="/service" element={<Service />} />

        <Route path="/payment" element={<Payment />} />

        <Route path="/inventory" element={<Inventory />} />

        <Route path="/discount" element={<Discount />} /> 

        <Route path="/cat" element={<Cat />} />

      </Routes>
    </>
  );
}

export default App;
