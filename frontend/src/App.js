import "./App.css";
import { useEffect, useState } from "react";
import Header from "./component/layout/Header/Header.js";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
import Search from "./component/Product/Search";
import LoginSignUp from "./component/User/LoginSignUp";
import Profile from "./component/User/Profile"
import UpdateProfile from "./component/User/UpdateProfile";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";
import store from './store';
import { loadUser } from "./actions/userAction";
import { useSelector } from "react-redux";
import UserOptions from "./component/layout/Header/UserOptions";
import ProtectedRoute from "./component/Route/ProtectedRoute";

function App() {
  
  const { isAuthenticated, user } = useSelector((state) => state.user);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());

  }, []);

  return (
    <Router>
      <Header />
        {isAuthenticated && <UserOptions user={user} />}
        <Routes>

        <Route exact path="/" element={<Home />} />
        <Route exact path="/product/:id" element ={ <ProductDetails />} />
        
        <Route exact path="/products" element={ <Products />} />
        <Route path="/products/:keyword" element={<Products />} />

        <Route  path="/account" element={ <ProtectedRoute> <Profile /> </ProtectedRoute>  } />
        <Route  path="/me/update" element={ <ProtectedRoute> <UpdateProfile /> </ProtectedRoute>  } />


        {/* <Route exact path="/account" element={<Profile />} /> */}

        <Route exact path="/search" element={<Search />} />

        <Route exact path="/login" element={ <LoginSignUp />} />

        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
