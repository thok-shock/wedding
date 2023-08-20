import React, { useState } from 'react'
import { Row, Col, Container, Card, Form, Button } from 'react-bootstrap'
import './login.css'
import { toast } from 'react-toastify'



export default function Login(props) {

    function login() {
        fetch('/api/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then(res => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error('Incorrect username or password')
            }
        })
        .then(res => {
            window.location.href = '/'
        })
        .catch(err => {
            toast.error('Incorrect username or password')
        })
    }

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return <div className='login'>
        <Container>
        <Row>
            <Col sm='2'>
            </Col>
            <Col sm='8'>
                <Card className='m-5 shadow p-3'>
                    <Card.Title className='text-center'>IntraBurst Login</Card.Title>
                    <Form className='my-3'>
                        <Form.Group controlId='username'>
                            <Form.Label>Username</Form.Label>
                            <Form.Control onChange={e => setUsername(e.target.value)} value={username} type='username'></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' onChange={e => setPassword(e.target.value)} value={password}></Form.Control>
                        </Form.Group>
                    </Form>
                    <a href='/login/forgot-username'>Forgot Username</a>
                    <a href='/login/forgot-password'>Forgot Password</a>
                    <Button className='mt-3' onClick={login}>Sign In</Button>
                </Card>
                </Col>
                <Col sm='2'>
            </Col>
        </Row>
        </Container>
    </div>
}