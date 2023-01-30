import React from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <div className="page-sign">
      <Card className="card-sign">
        <Card.Header>
          <Link to="/" className="header-logo mb-4">dashbyte</Link>
          <Card.Title>Sign In</Card.Title>
          <Card.Text>Welcome back! Please signin to continue.</Card.Text>
        </Card.Header>
        <Card.Body>
          <div className="mb-4">
            <Form.Label >Email address</Form.Label>
            <Form.Control type="text" placeholder="Enter your email address" />
          </div>
          <div className="mb-4">
            <Form.Label className="d-flex justify-content-between">Password <Link to="">Forgot password?</Link></Form.Label>
            <Form.Control type="password" placeholder="Enter your password" />
          </div>
          <Button variant="primary" className="btn-sign">Sign In</Button>

          <div className="divider"><span>or sign in with</span></div>

          <Row className="gx-2">
            <Col><Button variant="" className="btn-facebook"><i className="ri-facebook-fill"></i> Facebook</Button></Col>
            <Col><Button variant="" className="btn-google"><i className="ri-google-fill"></i> Google</Button></Col>
          </Row>
        </Card.Body>
        <Card.Footer>
          Don't have an account? <Link to="/pages/signup">Create an Account</Link>
        </Card.Footer>
      </Card>
    </div>
  )
}