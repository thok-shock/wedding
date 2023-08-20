import React from "react";
import { Alert, Button, Card, Col, Container, Form, Row } from "react-bootstrap";

export default function Main(props) {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1 className="text-center mt-5 display-4">Ryan & Touyer</h1>
            <p className="text-center m-0 text-muted">November 4th, 2023</p>
            <p className="text-center text-muted">Madison, WI</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <img
              className="w-100 mb-3"
              src="/file/ryanandtouyer.jpg"
              alt="Ryan and Touyer sitting in front of the fireplace at their apartment"
            ></img>
          </Col>
        </Row>
        <Row>
            <Col lg='3'></Col>
          <Col lg='6'>
            <h1 className="text-center display-4">RSVP</h1>
            <p className='text-center'>Please RSVP by October 1st, 2023</p>
            <Card style={{backgroundColor: '#f5f5f5'}} className='m-auto mb-3'>  
            <Card.Header>Respond</Card.Header>
            <Card.Body>
            <Card.Text>
            <Alert className='m-auto mb-3'>
                <Alert.Heading>Invitees</Alert.Heading>
              If you have been invited to the ceremony or reception, please RSVP
              using this system. If you do not respond using our website, we will assume
              that you are not coming to see us on our special day.
            </Alert>
            <Form>
                <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Phone Number (Last 4 digits)</Form.Label>
                    <Form.Control></Form.Control>
                </Form.Group>
            </Form>
            
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <Button>Search</Button>
            </Card.Footer>
            </Card>
          </Col>
          <Col lg='3'></Col>
        </Row>
        <Row>
            <Col>
            <h1 className='text-center display-4'>Our Story</h1><p className='text-center'>Ryan and Touyer met in April of 2020 through their mutual friend, Aaraf. Their first date was a group trip to Noodles and Company on University Avenue in Madison.</p>
            </Col>
        </Row>
        <Row><Col lg='6'><img style={{width:'100%'}} src='/file/touyer.jpg' alt='Touyer standing on the beach of lake mendota near Eagle Heights'></img></Col><Col lg='6'></Col></Row>
      </Container>
    </div>
  );
}
