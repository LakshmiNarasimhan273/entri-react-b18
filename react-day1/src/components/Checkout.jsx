// BasicForm.js
import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

const BasicForm = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="p-4 shadow-sm rounded-4">
            <h3 className="text-center mb-4">Contact Us 📨</h3>
            <Form>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="Enter subject" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Write your message" />
              </Form.Group>

              <div className="d-grid">
                <Button variant="primary" size="lg" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BasicForm;
