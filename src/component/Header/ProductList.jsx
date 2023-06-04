import React from "react";
import {useState,useEffect} from "react";
import "./ProductList.css";


function ProductList() {
  const [product,setProduct]=useState([]);
  const getData=async()=>{
    try {
      const response=await fetch("/api/products");
      const data= await response.json();
      setProduct(data.products)
    } catch (error) {
      console.log(error); 
    }
  }
  console.log(product);
  
  useEffect(()=>{
    getData();
  },[]);

  const showProduct = product?.filter((item=>item.id<=10));
  console.log(showProduct);

  return (
    <>
    <div className="product-list">
      <h4 className="product-list-heading">Hi Gorgeous!</h4>
      <p>Solve All Your Hair Issues❤️</p>
    </div>
    <div className="product-list-view">
            {showProduct?.map(({_id,productImg})=>(
              <div className="product-view" key={_id}>
                <img src={productImg} alt="products"/>
              </div>
            ))}
    </div>
    </>
  );
}

export default ProductList;
