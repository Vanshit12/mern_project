import "./App.css";
import { useEffect, useState } from "react";
import Header from "./component/layout/Header/Header.js";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
import Search from "./component/Product/Search";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";

function App() {
  return (
    <Router>
      <Header />
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product/:id" element ={ <ProductDetails />} />
        
        <Route exact path="/products" element={ <Products />} />
        <Route path="/products/:keyword" element={<Products />} />

        <Route exact path="/search" element={<Search />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
