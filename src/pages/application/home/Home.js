import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";

export default function Home(props) {
  return (
    <Container className='mt-3'>
        <Row>
            <Col>
            <h2 className='my-3'>Home</h2>
            </Col>
        </Row>
      <Row>
        <Col>
          <Card className='shadow'>
            <Card.Body><Card.Title>My Incidents <Badge>15</Badge></Card.Title>
            <Card.Text>Incidents that I own</Card.Text></Card.Body>
          </Card>
        </Col>
        <Col>
        <Card className='shadow'>
            <Card.Body>
                <Card.Title>My Team's Incidents <Badge>15</Badge></Card.Title>
                <Card.Text>Incidents that my team(s) own</Card.Text>
            </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card className='shadow'>
            <Card.Body>
                <Card.Title>My Closed Incidents <Badge>15</Badge></Card.Title>
                <Card.Text>Incidents that I have resolved</Card.Text>
            </Card.Body>
        </Card>
        </Col>
      </Row>
      <Row>
        <Col>
        <h2 className='my-3'>Breakdown</h2>
        </Col>
      </Row>
      <Row>
        <Col>
        <Card className='shadow'>
            <Card.Body>
                <Card.Title>My Incidents List</Card.Title>
                <Card.Text>A list of all incidents that I own.</Card.Text>
            </Card.Body>
        </Card>
        </Col>
      </Row>
    </Container>
  );
}
