import { DataGrid } from '@mui/x-data-grid'
import React, { useState, useEffect } from 'react'
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import NewGuestModal from './NewGuestModal'

export default function Admin(props) {

    const [guests, setGuests] = useState([])
    const [newGuestModalOpen, setNewGuestModalOpen] = useState(false)

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
                const formattedRes = res.map(row => {
                    row.created_datetime = new Date(row.created_datetime)
                    return row
                })
                setGuests(formattedRes)
            })
            .catch(err => {
                console.log(err)
            })
        }
    }, [])

    const columnsDef = [
        {field: 'first_name', headerName: 'First Name'},
        {field: 'last_name', headerName: 'Last Name'},
        {field: 'phone_number', headerName: 'Phone Number'},
        {field: 'ceremony', headerName: 'Ceremony Invite', type: 'boolean'},
        {field: 'reception', headerName: 'Reception Invite', type: 'boolean'},
        {field: 'created_datetime', headerName: 'Created', type: 'dateTime'}
    ]

    

    return <Container>
        <Row><Col><h1>Wedding Administration</h1><p>Use this page to manage the guests and see the status of RSVP's to the event</p></Col></Row>
        <Row>
            <Col>
            <Card>
                <Card.Header>Guest List</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <p>All guests will appear in the list below.</p>
                        <Button className='mb-3' onClick={() => setNewGuestModalOpen(true)}>New Guest</Button>
                        <div style={{height: '33vh'}}>
                            <DataGrid rows={guests} columns={columnsDef} />
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
            </Col>
        </Row>
        <NewGuestModal open={newGuestModalOpen} onHide={() => {setNewGuestModalOpen(false)}} />
    </Container>
}