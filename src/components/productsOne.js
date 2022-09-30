import React, { Component } from "react";
import "../styles/products.css";

const ProductsOne = () => {
  return (
    <div class="products">
      <div class="productsHead">
        <div class="titleLine"></div>
        <div class="productsTitle">Nyheter</div>
        <div class="titleLine"></div>
      </div>
      <div class="productLinks">
        <img
          class="productImage"
          alt="ProductImage"
          src="https://us.balmain.com/dw/image/v2/BHGX_PRD/on/demandware.static/-/Sites-balmain-mastercatalog/default/dw5628ee63/images/hi-res/YF1R6005KB074AMF.png?sw=375&sh=530"
        ></img>
        <img
          class="productImage"
          alt="ProductImage"
          src="https://cdn.shopify.com/s/files/1/0563/8989/4284/products/D155WFW22GREEN_600x_crop_center.png?v=1653399590"
        ></img>
        <img
          class="productImage"
          alt="ProductImage"
          src="https://cdn.shopify.com/s/files/1/0412/1912/9497/products/dress2_Custom_View_1_9c184a1c-5c7b-4ae4-bf95-92a511086418_500x.png?v=1650880649"
        ></img>
        <img
          class="productImage"
          alt="ProductImage"
          src="https://cdn.shopify.com/s/files/1/0503/8125/8914/products/Nomad_dress-Dress-E1267-Black_512x769.png?v=1661778192"
        ></img>
      </div>
    </div>
  );
};

export default ProductsOne;
