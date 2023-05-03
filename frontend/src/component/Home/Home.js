import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import ProductCard from "./ProductCard";
import "./Home.css";
import Loader from "../layout/Loader/Loader";
import { useSelector, useDispatch } from "react-redux";
import { getProduct, clearErrors } from "../../actions/productAction";
import { useAlert } from "react-alert";

const product = {
    name: "Blue Shirt",
    images: [{ url: "https://i.ibb.co/DRST11n/1.webp"}],
    price: 1200,
    _id: "my"
}
const Home = () => {
  
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, products, productsCount, error } = useSelector((state) => state.product);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct())
  }, [dispatch])
    return (
      <Fragment>
      {loading ? (
        <Loader />
      ) : (
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
              
              {products && products.map((product) => <ProductCard key={product._id} product={product} />  )}
                  {/* <ProductCard key={product._id} product={product} />
                  <ProductCard key={product._id} product={product} />
                  <ProductCard key={product._id} product={product} />
                  <ProductCard key={product._id} product={product} />
                  <ProductCard key={product._id} product={product} />
                  <ProductCard key={product._id} product={product} />
                  <ProductCard key={product._id} product={product} /> */}
              </div>
          </Fragment>
        )};
     </Fragment>
  )
  };
  export default Home;