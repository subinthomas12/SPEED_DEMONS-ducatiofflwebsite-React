import React from 'react'
import { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



function Bikedetails({ bikespec }) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (

    <div className='text-center'>
      <Button className='mt-3 ' variant="primary" onClick={handleShow}>
        READ MORE
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>DETAILS</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <ListGroup className='mt-3' >
            <ListGroup.Item>ENGINE: <strong>{bikespec.type}</strong></ListGroup.Item>
            <ListGroup.Item>DISPLACEMENT: <strong>{bikespec.DISPLACEMENT}</strong></ListGroup.Item>
            <ListGroup.Item>SEATHEIGHT: <strong>{bikespec.SEATHEIGHT}</strong></ListGroup.Item>

          </ListGroup>

        </Modal.Body>

      </Modal>
    </div>
  )
}

export default Bikedetails