import React, { useEffect, useState } from "react";
import Prism from "prismjs";
import { Card, Container } from "react-bootstrap";
import Footer from "../layouts/Footer";
import HeaderMobile from "../layouts/HeaderMobile";
import ReactQuill from "react-quill";

import 'react-quill/dist/quill.snow.css';

export default function FormEditors() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const [setValue] = useState('');
  
  return (
    <React.Fragment>
      <HeaderMobile />
      <div className="main main-docs">
        <Container>
          <label className="main-title-label">Forms</label>
          <h2 className="main-title">Editors (WYSIWYG)</h2>
          <p className="main-title-text">Quill is a free, open source WYSIWYG editor built for the modern web. With its modular architecture and expressive API, it is completely customizable to fit any need. </p>

          <hr className="main-separator" />

          <h5 id="section1" className="main-subtitle">Basic Format</h5>
          <p>By default all formats are enabled and allowed to exist within a Quill editor and can be configured with the formats option.</p>

          <Card className="card-example">
            <Card.Body>
              <ReactQuill theme="snow" value={"<strong>Quill</strong> is a free, open source WYSIWYG editor built for the modern web. With its modular architecture and expressive API, it is completely customizable to fit any need."} onChange={setValue} />
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<ReactQuill theme="snow" value={"<strong>Quill</strong> is a free, open source WYSIWYG editor built for the modern web. With its modular architecture and expressive API, it is completely customizable to fit any need."} onChange={setValue} />`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />
        </Container>
      </div>
      <Footer />
    </React.Fragment>
  );
}