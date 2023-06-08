import React from "react";
import {useState,useEffect} from "react";
import "./TopCategory.css";

function TopCategory() {
  const [category,setCategory]=useState([]);
    const getData=async()=>{
      try {
        const response=await fetch("/api/categories");
        const data= await response.json();
        setCategory(data.categories); 
      } catch (error) {
        console.log(error);
      }
    }
  console.log(category);
  
  useEffect(()=>{
    getData();
  },[]);
  
  return (
    <div className="top-category">
      <h4 className="top-category-heading">TOP BEST CATEGORY</h4>
      <div className="top-category-products">
    {category?.map(({_id,categoryName,productImg})=>(
      <div className="top-category-item" key={_id}>
        <img src={productImg} alt="products"/>
        <p className="product-name">{categoryName}</p>
      </div>
    ))}
      </div>
    </div>
  );
}
export default TopCategory;
