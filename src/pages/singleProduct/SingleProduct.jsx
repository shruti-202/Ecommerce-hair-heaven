import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SingleProduct() {
  const { productId } = useParams();
  const [singleProduct, setSingleProduct] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(`/api/products/${productId}`);
      const data = await response.json();
      setSingleProduct(data.product);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(singleProduct);

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div>
      <h1>{singleProduct.description}</h1>
    </div>
  );
}

export default SingleProduct;
