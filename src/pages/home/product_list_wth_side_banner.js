import React from "react";

import ProductCard from "../../components/product_list";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function product_list_wth_side_banner(props) {
  return (
    <div className="home_product_grid">
      <Row>
        {props.showleft ? (
          <Col md={2} className="d-none d-md-block">
            <div className="side_banner">
              <img src="https://img.poorvika.com/HomePage-Banner/Side-Banner/Sep-2022/realme-9i-5g-web-banner.jpg" />
            </div>
          </Col>
        ) : (
          ""
        )}

        <Col md={10}>
          <ProductCard />
        </Col>

        {!props.showleft ? (
          <Col md={2} className="d-none d-md-block">
            <div className="side_banner">
              <img src="https://img.poorvika.com/HomePage-Banner/Side-Banner/Sep-2022/realme-9i-5g-web-banner.jpg" />
            </div>
          </Col>
        ) : (
          ""
        )}
        
      </Row>
    </div>
  );
}
