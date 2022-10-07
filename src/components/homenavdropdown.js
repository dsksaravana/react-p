import React from "react";
import { Col, Row } from "react-bootstrap";

export default function homenavdropdown() {
  return (
    <div className="nav__submenu">
      <Row>
        <Col className="submenu bgdark" lg={3}>
          <a href="https://poorvika.com/oppo-reno-8-pro-12gb-256gb-glazed-green/p">
            <p className="submenuhead">Mobile</p>
          </a>
          <a href="https://poorvika.com/oppo-reno-8-pro-12gb-256gb-glazed-green/p">
            <p className="submenuval">Apple</p>
          </a>
          <a href="https://poorvika.com/oppo-reno-8-pro-12gb-256gb-glazed-green/p">
            <p className="submenuval">Samsung</p>
          </a>
          <a href="https://poorvika.com/oppo-reno-8-pro-12gb-256gb-glazed-green/p">
            <p className="submenuval">Redmi</p>
          </a>
          <a href="https://poorvika.com/oppo-reno-8-pro-12gb-256gb-glazed-green/p">
            <p className="submenuval">Oppo</p>
          </a>
        </Col>
        <Col className="submenu" lg={3}></Col>
        <Col className="submenubanner" lg={6}>
          <a href="https://poorvika.com/oppo-reno-8-pro-12gb-256gb-glazed-green/p">
            <img src="https://img.poorvika.com/HomePage-Banner/Top-Navigation-Banner/july-2022/Mobile-Security-1.jpg" />
          </a>
          <a href="https://poorvika.com/s?categories_slug=categories_slug%3A%3D%5B%60mobile-security%60%5D">
            <img src="https://img.poorvika.com/HomePage-Banner/Top-Navigation-Banner/july-2022/Oppo-Reno-8-Pro.jpg" />
          </a>
        </Col>
      </Row>
    </div>
  );
}
