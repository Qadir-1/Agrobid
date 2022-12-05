/** @format */

import { Routes, Route } from "react-router-dom";
import Login from "./components/forms/Login";
import Dashboard from "./components/pages/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Orders from "./components/pages/orders/Orders";
import ViewOrder from "./components/pages/orders/ViewOrder";
import DeleteOrder from "./components/pages/orders/DeleteOrder";
import Products from "./components/pages/products/Products";
import AddProduct from "./components/pages/products/AddProduct";
import ViewProduct from "./components/pages/products/ViewProduct";
import EditProduct from "./components/pages/products/EditProduct";
import Customers from "./components/pages/Customers/Customers";
import DeleteProduct from "./components/pages/products/DeleteProduct";
import Service from "./components/pages/Services/Service";
import EditService from "./components/pages/Services/EditService";
import ViewService from "./components/pages/Services/ViewService";
import AddService from "./components/pages/Services/AddService";
import Payment from "./components/pages/Payment/Payment";
import Inventory from "./components/pages/Inventory/Inventory";
import DetailPayment from "./components/pages/Inventory/DetailPayment";
import Discount from "./components/pages/Discount/Discount";
import AddDiscount from "./components/pages/Discount/AddDiscount";
import AddInventory from "./components/pages/Inventory/AddInventory";
import BulkAdd from "./components/pages/Inventory/BulkAdd";
import Cat from "./components/pages/Cat/Cat";
import Editcat from "./components/pages/Cat/Editcat";
import AddCat from "./components/pages/Cat/AddCat";
import AddSubCat from "./components/pages/Cat/AddSubCat";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/orders" element={<Orders />} />
        <Route path="/viewOrder/:id" element={<ViewOrder />} />
        <Route path="/deleteOrder/:id" element={<DeleteOrder />} />

        <Route path="/products" element={<Products />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/viewProduct/:id" element={<ViewProduct />} />
        <Route path="/editProduct/:id" element={<EditProduct />} />
        <Route path="/deleteProduct/:id" element={<DeleteProduct />} />

        <Route path="/customer" element={<Customers />} />

        <Route path="/service" element={<Service />} />
        <Route path="/editService/:id" element={<EditService />} />
        <Route path="/viewService/:id" element={<ViewService />} />
        <Route path="/addService" element={<AddService />} />
        
        <Route path="/payment" element={<Payment />} />
        {/*----------------------------------------------------------------- */}

        {/*-------------------------  Inventory  ------------------------------ */}
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/inven/:id" element={<DetailPayment />} />
        <Route path="/addInventory" element={<AddInventory />} />
        <Route path="/bulk" element={<BulkAdd />} />
        {/*----------------------------------------------------------------- */}

        {/*-------------------------  Inventory  ------------------------------ */}
        <Route path="/discount" element={<Discount />} />
        <Route path="/addDiscount" element={<AddDiscount />} />
        {/*----------------------------------------------------------------- */}

        {/*-------------------------  Inventory  ------------------------------ */}
        <Route path="/cat" element={<Cat />} />
        <Route path="/editCat/:id" element={<Editcat />} />
        <Route path="/addCat" element={<AddCat />} />
        <Route path="/addSubCat/:id" element={<AddSubCat />} />
        {/*---------------------------------------------------------------- */}
      </Routes>
    </>
  );
}

export default App;
