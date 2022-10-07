import React from "react";
import { Row,Col } from "react-bootstrap";

export default function footer() {
  return (
    <footer className="footer">
      <Row>
        <Col lg={2}>
          <a
            className="flex items-center justify-center p-3"
            target="_blank"
            href="#"
          >
            <p className="capitalize text-sm font-medium p-1 ml-2 text-gray-800 socialbtnbg">
              WhatsApp us
            </p>
          </a>
        </Col>
      </Row>
    </footer>
  );
}
