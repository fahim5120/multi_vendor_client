import React from "react";
import Navbar from "../customer/Navbar/Navbar";
import { Route, Routes } from "react-router";
import Home from "../customer/pages/Home/Home";
import Products from "../customer/pages/Products/Products";
import ProductDeatails from "../customer/pages/Products/ProductDetails/ProductDeatails";
import Cart from "../customer/pages/Cart/Cart";
import Checkout from "../customer/pages/Checkout/Checkout";
import Profile from "../customer/pages/Order/Profile";
import Footer from "../customer/Footer/Footer";
import PaymentSuccessHandler from "../customer/payment/PaymentSuccessHandler";


const CustomerRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products/:categoryId" element={<Products />}></Route>
        <Route
          path="/product-details/:categoryId/:name/:productId"
          element={<ProductDeatails />}
        ></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkout/address" element={<Checkout />}>
        </Route>
        <Route path="/account/*" element={<Profile />}></Route>
        <Route
          path="/payment-success/:orderId"
          element={<PaymentSuccessHandler />}
        ></Route>
      </Routes>

      <Footer />
    </div>
  );
};

export default CustomerRoutes;
