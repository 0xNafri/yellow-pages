import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel'

function Forms() {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Text className="text-muted">
            Enter the necessary details of the contact
          </Form.Text>
          <FloatingLabel controlId="floatingname" label="Name" className='"mb-3'>
            <Form.Control type="email" placeholder="Enter email" />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <FloatingLabel controlId="floatingname" label="Phone Number" className='"mb-3'>
            <Form.Control type="password" placeholder="ex:0123456789" />
          </FloatingLabel>
        </Form.Group>
        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>
    </div>
  )
}

export default Forms