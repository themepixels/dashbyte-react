import React from "react";
import { Col, Row } from "react-bootstrap";
//import { Link } from "react-router-dom";
//import { Card, Col, Nav, Row } from "react-bootstrap";
import Footer from "../layouts/Footer";
import HeaderMobile from "../layouts/HeaderMobile";

export default function People() {
  return (
    <React.Fragment>
      <HeaderMobile />
      <div className="main p-4 p-lg-5">
        <Row className="g-5">
          <Col xl>...</Col>
          <Col xl="4" xxl="3" className="d-none d-xl-block">
            ...
          </Col>
        </Row>

        <Footer />
      </div>
    </React.Fragment>
  );
}