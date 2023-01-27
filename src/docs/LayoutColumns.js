import React, { useEffect } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import Prism from "prismjs";
import HeaderMobile from "../layouts/HeaderMobile";
import Footer from "../layouts/Footer";

export default function LayoutColumns() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <React.Fragment>
      <HeaderMobile />
      <div className="main main-docs">
        <Container>
          <label className="main-title-label">Getting Started</label>
          <h2 className="main-title">Columns</h2>
          <p className="main-title-text">Learn how to modify columns with a handful of options for alignment, ordering, and offsetting thanks to our flexbox grid system.</p>

          <hr className="main-separator" />

          <h5 id="section1" className="main-subtitle">Vertical Alignment</h5>
          <p>Use flexbox alignment utilities to vertically and horizontally align columns.</p>

          <Card className="card-example">
            <Card.Body>
              <Row className="g-2 row-example ht-150 align-items-center">
                <Col><span>1 of 3 Column</span></Col>
                <Col><span>2 of 3 Column</span></Col>
                <Col><span>3 of 3 Column</span></Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Row className="align-items-center">
  <Col><span>1 of 3 Column</span></Col>
  <Col><span>2 of 3 Column</span></Col>
  <Col><span>3 of 3 Column</span></Col>
</Row>`}</code></pre>
            </Card.Footer>
          </Card>
        </Container>
      </div>
      <Footer />
    </React.Fragment>
  );
}