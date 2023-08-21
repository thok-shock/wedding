import React, {useState} from "react";
import { Alert, Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import Admin from "./Admin";

export default function Main(props) {

  const [lastName, setLastName] = useState('')
  const [last4, setLast4] = useState('')
  const [admin, setAdmin] = useState(false)
  const [guest, setGuest] = useState(null)

  function getUser() {
    fetch(`/api/guest?lastName=${lastName}&lastFour=${last4}`)
    .then(res => {
      if (res.ok) {
        return res.json()
      } else {
        if (res.status === 400) {
          return res
        } else {
          toast('An unexpected error occurred connecting to the server')
        }
        
      }
    })
    .then(res => {
      if (res && res.length > 0) {
        setGuest(res[0])
      } else {
        toast('No guest found matching the information entered')
      }
    })
    .catch(err => {
      //console.log(err)
    })
  }

  if (!guest) {return (
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
            <Card style={{ backgroundColor: '#f5f5f5' }} className='m-auto mb-3'>
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
                    <Form.Group controlId='lastName'>
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control value={lastName} onChange={e => setLastName(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='phoneNumber'>
                      <Form.Label>Phone Number (Last 4 digits)</Form.Label>
                      <Form.Control value={last4} onChange={e => {setLast4(e.target.value)}}></Form.Control>
                    </Form.Group>
                  </Form>

                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button onClick={getUser}>Search</Button>
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
        <Row><Col lg='6'><img style={{ width: '100%' }} src='/file/touyer.jpg' alt='Touyer standing on the beach of lake mendota near Eagle Heights'></img></Col><Col lg='6'></Col></Row>
      </Container>
    </div>
  );}
  else if (guest && guest.admin === 1) {
    return <Admin guest={guest} />
  } else {
    return <div>you are a guest</div>
  }
}
