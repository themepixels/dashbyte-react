import React, { useEffect } from "react";
import Prism from "prismjs";
import { Card, Container, Nav } from "react-bootstrap";
import Footer from "../layouts/Footer";
import HeaderMobile from "../layouts/HeaderMobile";

export default function Dropdowns() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <React.Fragment>
      <HeaderMobile />
      <div className="main main-docs">
        <Container>
        <label className="main-title-label">Components</label>
        <h2 className="main-title">Dropdown</h2>
        <p className="main-title-text">Dropdowns are toggleable, contextual overlays for displaying lists of links and more. They're made interactive with the included Bootstrap dropdown javascript plugin.</p>

        <hr className="main-separator" />

        <h5 id="section1" className="main-subtitle">Basic Example</h5>
        <p>Wrap the dropdown's toggle (your button or link) and the dropdown menu within .dropdown, or another element that declares position relative. Dropdowns can be triggered from link or button elements to better fit your potential needs.</p>
        </Container>
      </div>
      <Footer />
    </React.Fragment>
  );
}