import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import ProductCard from "./ProductCard";
import "./Home.css";

const product = {
    name: "Blue Shirt",
    images: [{ url: "https://i.ibb.co/DRST11n/1.webp"}],
    price: 1200,
    _id: "my"
}
const Home = () => {
  
    return (
          <Fragment>
            {/* <MetaData title="ECOMMERCE" />s */}
  
            <div className="banner">
              <p>Welcome to Ecommerce</p>
              <h1>FIND AMAZING PRODUCTS BELOW</h1>
  
              <a href="#container">
                <button>
                  Scroll <CgMouse />
                </button>
              </a>
            </div>
  
            <h2 className="homeHeading">Featured Products</h2>
  
            <div className="container" id="container">
              
                  <ProductCard key={product._id} product={product} />
                  <ProductCard key={product._id} product={product} />
                  <ProductCard key={product._id} product={product} />
                  <ProductCard key={product._id} product={product} />
                  <ProductCard key={product._id} product={product} />
                  <ProductCard key={product._id} product={product} />
                  <ProductCard key={product._id} product={product} />
                  <ProductCard key={product._id} product={product} />
              </div>
          </Fragment>
        )};
  
  export default Home;