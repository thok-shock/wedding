import React, { useState, useEffect } from 'react'
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap'

export default function Admin(props) {

    const [guests, setGuests] = useState([])

    useEffect(() => {
        if (props.guest.admin) {
            fetch('/api/guest/all')
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    toast('An error occurred while communicating with the server')
                }
            })
            .then(res => {
                setGuests(res)
            })
            .catch(err => {
                console.log(err)
            })
        }
    }, [])

    return <Container>
        <Row><Col><h1>Wedding Administration</h1><p>Use this page to manage the guests and see the status of RSVP's to the event</p></Col></Row>
        <Row>
            <Col>
            <Card>
                <Card.Header>Guest List</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <p>All guests will appear in the list below.</p>
                        <Button>New Guest</Button>
                        <ListGroup>
                            {guests && guests.map(guest => {return <ListGroup.Item>{guest.first_name} {guest.last_name}</ListGroup.Item>})}
                        </ListGroup>
                    </Card.Text>
                </Card.Body>
            </Card>
            </Col>
        </Row>
    </Container>
}