import React from "react";

export default function product_card() {
  return (
    <div className="product_card">
      <a className="m-auto" target="_blank" href="#">
        <div>
          <img
            alt="Product Card"
            src="https://img.poorvika.com/cdn-cgi/image/width=450,height=450,quality=50/1600_JPG/Mobiles/Realme/Realme-9i-5G/Realme-9i-5G-Metallica-Gold-01.jpg"
          />
        </div>
      </a>

      <div className="product_card_descr">
        <b>Realme 9i 5G ( Metallica Golden,4GB-64GB )</b>
        <small className="product_card_subtitle">
          ( Metallica Golden,4GB-64GB )
        </small>
        <div className="product_card_price">
          <span>₹ 14,999</span>
        </div>
        <div className="product_card_discount">
          <s>₹ 17,999</s>
          <b>17% OFF</b>
        </div>
      </div>
    </div>
  );
}
