import React from "react";
import { useState, useEffect } from "react";
import "./Product.css";
import Footer from "../../component/Footer/Footer";

function Product() {
  const [allProduct, setAllProduct] = useState([]);
  const getData = async () => {
    try {
      const response = await fetch("/api/products");
      const data = await response.json();
      setAllProduct(data.products);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="all-product">
      <div className="filter-container"><h1>Filters</h1></div>
        <div className="product-container">
        <h4 className="all-product-heading">Showing All Products</h4>
        <div className="all-product-view">
        {allProduct?.map(({ _id, productImg, subtitle,orignalPrice,rating }) => (
          <div className="products-view" key={_id}>
            <div className="product-img">
              <img src={productImg} alt="products" />
            </div>
            <div>
              <p>{subtitle}</p>
              <p>{orignalPrice}</p>
              <p>{rating}</p>
            </div>
            <div className="product_card_btns">
              <button className="addtocart_btn">Add to Cart</button>
            </div>
          </div>
        ))}
        </div>
      </div>
     
        
       
      </div>
      <Footer />
    </>
  );
}

export default Product;
