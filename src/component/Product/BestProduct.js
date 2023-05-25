import React from "react";
import wig_27 from "../../assets/photos/wig_27.webp";
import pony_31 from "../../assets/photos/pony_31.webp";
import singleclip_6 from "../../assets/photos/singleclip_6.webp";
import curly_15 from "../../assets/photos/curly_15.webp";
import clipbang_11 from "../../assets/photos/clipbang_11.webp";
import "./ProductItem.css";

function BestProduct() {
  return (
    <div className="best-section">
      <h4 className="best-section-heading">BEST SELLERS</h4>
      <div className="best-seller-products">
        <img src={wig_27} alt="wig" />
        <img src={pony_31} alt="long" />
        <img src={singleclip_6} alt="clip" />
        <img src={curly_15} alt="curly" />
        <img src={clipbang_11} alt="bang" />
      </div>
    </div>
  );
}
export default BestProduct;
