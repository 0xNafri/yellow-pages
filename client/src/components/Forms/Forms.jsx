import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import './form.css';

function Forms() {
  const [formData, setFormData] = useState({ name: '', number: '' });
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post('/add_contact', formData);
      console.log(res);
      setShowAlert(true);
      // Navigate to ContactsList after adding the contact
      navigate('/view-contacts');
    } catch (err) {
      console.error(err);
    }
    setFormData({ name: '', number: '' });
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <p>Add Contact</p>
        <Form.Text className="text-muted">Enter the necessary details of the contact</Form.Text>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="John Doe"
            onChange={handleChange}
            name="name"
            value={formData.name}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="0123456789"
            onChange={handleChange}
            name="number"
            value={formData.number}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Contact
        </Button>
      </Form>

      {showAlert && (
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible className="mt-3 alert-custom">
          Contact added successfully!
        </Alert>
      )}
    </div>
  );
}

export default Forms;
