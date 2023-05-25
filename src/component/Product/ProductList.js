import React from "react";
import "./ProductItem.css";
import pony_34 from "../../assets/photos/pony_34.webp";
import clip_9 from "../../assets/photos/clip_9.webp";
import wig_26 from "../../assets/photos/wig_26.webp";
import singleclip_3 from "../../assets/photos/singleclip_3.webp";
import wig_25 from "../../assets/photos/wig_25.webp";
import clip_7 from "../../assets/photos/clip_7.webp";
import clipbang_10 from "../../assets/photos/clipbang_10.webp";
import clip_8 from "../../assets/photos/clip_8.webp";
import pony_29 from "../../assets/photos/pony_29.jpg";
import singleclip_5 from "../../assets/photos/singleclip_5.webp";
// import pony_32 from "../../assets/photos/pony_32.webp";
// import wig_24 from "../../assets/photos/wig_24.webp";

function ProductList() {
  return (
    <>
    <div className="product-list">
      <h4 className="product-list-heading">Hi Gorgeous!</h4>
      <p>Solve All Your Hair Issues❤️</p>
    </div>
    <div className="product-list-view">
            <img  src={pony_34} alt="pony"/>
            <img  src={clip_7} alt="bangs"/>
            <img  src={singleclip_3} alt="clip"/>
            <img  src={wig_26} alt="wig"/>
            <img  src={wig_25} alt="wig"/>
            <img  src={clip_9} alt="pony"/>
            <img  src={clipbang_10} alt="pony"/>
            <img  src={clip_8} alt="pony"/>
            <img  src={pony_29} alt="pony"/>
            <img  src={singleclip_5} alt="pony"/>
            {/* <img  src={pony_32} alt="pony"/>
            <img  src={wig_24} alt="pony"/>  */}
    </div>
    </>
  );
}

export default ProductList;
