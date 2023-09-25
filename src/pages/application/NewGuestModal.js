import React from 'react'
import { Modal, Button, Form, Col, Row } from 'react-bootstrap'

export default function NewGuestModal(props) {
    return <Modal show={props.open} onHide={props.onHide}>
        <Modal.Header closeButton>
            <Modal.Title>Create New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
            This is where you create a new user
            <Form>
                <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control></Form.Control>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control></Form.Control>
                </Form.Group>
                </Form.Row>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
    </Modal>
}