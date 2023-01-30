import React, { useEffect } from "react";
import { Card, Row, Col, Container, Nav } from "react-bootstrap";
import Prism from "prismjs";
import HeaderMobile from "../layouts/HeaderMobile";
import Footer from "../layouts/Footer";

export default function LayoutGrid() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <React.Fragment>
      <HeaderMobile />
      <div className="main main-docs">
        <Container>
          <label className="main-title-label">Getting Started</label>
          <h2 className="main-title">Grid System</h2>
          <p className="main-title-text">Use Bootstrap's powerful mobile-first flexbox grid to build layouts of all shapes and sizes.</p>

          <hr className="main-separator" />

          <h5 id="section1" className="main-subtitle">How It Works</h5>
          <p>Bootstrap's grid system uses a series of containers, rows, and columns to layout and align content. It's built with flexbox and is fully responsive. Below is an example and an in-depth look at how the grid comes together.</p>

          <Card className="card-example">
            <Card.Body>
              <Row className="g-2 row-example">
                <Col><span>1 of 3 Column</span></Col>
                <Col><span>2 of 3 Column</span></Col>
                <Col><span>3 of 3 Column</span></Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Row>
  <Col><span>1 of 3 Column</span></Col>
  <Col><span>2 of 3 Column</span></Col>
  <Col><span>3 of 3 Column</span></Col>
</Row>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br /><br />

          <h5 id="section2" className="main-subtitle">Setting One Column Width</h5>
          <p>Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it.</p>

          <Card className="card-example">
            <Card.Body>
              <Row className="g-2 row-example">
                <Col><span>1 of 3 Column</span></Col>
                <Col xs="5"><span>2 of 3 Column</span></Col>
                <Col><span>3 of 3 Column</span></Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Row>
  <Col><span>1 of 3 Column</span></Col>
  <Col xs="5"><span>2 of 3 Column</span></Col>
  <Col><span>3 of 3 Column</span></Col>
</Row>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section3" className="main-subtitle">Variable Width Content</h5>
          <p>Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it.</p>

          <Card className="card-example">
            <Card.Body>
              <Row className="g-2 row-example">
                <Col><span>1 of 3 Column</span></Col>
                <Col xs="auto"><span>Variable width content </span></Col>
                <Col><span>3 of 3 Column</span></Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Row>
  <Col><span>1 of 3 Column</span></Col>
  <Col xs="auto"><span>Variable width content </span></Col>
  <Col><span>3 of 3 Column</span></Col>
</Row>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section4" className="main-subtitle">Stacked To Horizontal</h5>
          <p>Using a single set of classes, you can create a basic grid system that starts out stacked and becomes horizontal at the small breakpoint.</p>

          <Card className="card-example">
            <Card.Body>
              <Row className="g-2 row-example">
                <Col sm="7"><span>1 of 2 Column</span></Col>
                <Col sm="5"><span>2 of 2 Column</span></Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Row>
  <Col sm="7"><span>1 of 2 Column</span></Col>
  <Col sm="5"><span>2 of 2 Column</span></Col>
</Row>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section5" className="main-subtitle">Row columns</h5>
          <p>Use these row columns classes to quickly create basic grid layouts or to control your card layouts.</p>

          <Card className="card-example">
            <Card.Body>
              <Row xs="2" className="g-2 row-example">
                <Col><span>1 of 4 Column</span></Col>
                <Col><span>2 of 4 Column</span></Col>
                <Col><span>3 of 4 Column</span></Col>
                <Col><span>4 of 4 Column</span></Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Row xs="2">
  <Col><span>1 of 4 Column</span></Col>
  <Col><span>2 of 4 Column</span></Col>
  <Col><span>3 of 4 Column</span></Col>
  <Col><span>4 of 4 Column</span></Col>
</Row>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

        </Container>

        <Nav id="navDocs" className="nav-docs">
          <label>On This Page</label>
          <a href="#section1" className="nav-link">How It Works</a>
          <a href="#section2" className="nav-link">Setting One Column Width</a>
          <a href="#section3" className="nav-link">Variable Width Content</a>
          <a href="#section4" className="nav-link">Stacked To Horizontal</a>
          <a href="#section5" className="nav-link">Row Columns</a>
        </Nav>
      </div>
      <Footer />
    </React.Fragment>
  )
}