import React from "react";
import { Container, Row, Col, Card, Form, Badge, Button } from "react-bootstrap";

export default function Incident(props) {
  return (
    <Container className="mt-3">
      {/* <Row>
        <Col>
          <h2 className="mt-3">New Incident</h2>
        </Col>
      </Row> */}
      <Row>
        <Col>
          <Card className="shadow">
            <Card.Body className='d-flex flex-row justify-content-between'>
              <h5>Incident</h5>
              <div>
              <Button className='mx-3'>Resolve</Button>
              <Button>Save Changes</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xl='3'>
            <Card className='mt-3 shadow'>
                <Card.Body>
                    <Card.Title>Customer Information</Card.Title>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Phone</Form.Label>
                        <Form.Control></Form.Control>
                    </Form.Group>
                    <div className='d-flex flex-row justify-content-evenly mt-3'>
                        <Button>Email</Button>
                        <Button>History</Button>
                        <Button>Link</Button>
                    </div>
                </Card.Body>
            </Card>
            
            <Card className='mt-3 shadow'>
            <Card.Body>
                <Card.Title>Process Information</Card.Title>
                <hr />
            <Form>
                <Form.Group>
                  <Form.Label>Status <Badge>New</Badge></Form.Label>
                  <Form.Select>
                    <option>New</option>
                    <option>Pending</option>
                    <option>Resolved</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Priority <Badge bg="danger">High</Badge></Form.Label>
                    <Form.Select>
                        <option>High</option>
                        <option>Normal</option>
                        <option>Low</option>
                    </Form.Select>
                </Form.Group>
              </Form>
              <h5 className='mt-3'>Ownership</h5>
              <hr />
              <Form>
                <Form.Group>
                    <Form.Label>Team Ownership</Form.Label>
                    <Form.Select>
                        <option>Help Desk</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Technician</Form.Label>
                    <Form.Select>
                        <option>Ryan S Werner</option>
                    </Form.Select>
                </Form.Group>
              </Form>
            </Card.Body>
            </Card></Col>
        <Col xl='6' className='d-flex flex-column'>
        <Card className='mt-3 shadow' style={{height: '100%'}}>
            <Card.Body>
                <div className='d-flex flex-column' style={{height: '100%'}}>
                <Card.Title>Incident Information</Card.Title>
                <Form style={{flexGrow: 1}} className='d-flex flex-column'>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control></Form.Control>
                    </Form.Group>
                    <Form.Group style={{height: '100%'}}>
                        <Form.Label>Description</Form.Label>
                        <Form.Control as='textarea' style={{height: '50%'}}></Form.Control>
                    </Form.Group>
                </Form>
                </div>
            </Card.Body>
        </Card>
        </Col>
        <Col xl='3'>
            <Card className='mt-3 shadow'>
                <Card.Body>
                    <Card.Title>History</Card.Title>
                    <Form>
                        <Form.Group>
                            <Form.Label>New Journal</Form.Label>
                            <Form.Control as='textarea'></Form.Control>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
        </Col>
      </Row>
    </Container>
  );
}
