import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import "./update.css";

function Update() {
  const [formData, setFormData] = useState({ name: "", number: "" });
  const [showAlert, setShowAlert] = useState(false);
  const [id, setID] = useState(null);

  const handleChange = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      axios
        .post("/add_contact", formData)
        .then((res) => {
          console.log(res);
          setShowAlert((prevAlert) => !prevAlert);
        })
        .catch((err) => {
          console.error(err);
        }); 
    } catch (err) {
      console.error(err);
    }
    setFormData({ name: "", number: "" });
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };



  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <p>Add Contact</p>
        <Form.Text className="text-muted">
          Enter the necessary details of the contact
        </Form.Text>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="John Doe"
            onChange={handleChange}
            name="name"
            value={formData}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="0123456789"
            onChange={handleChange}
            name="number"
            value={formData}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update Contact
        </Button>
      </Form>

      {showAlert && (
        <Alert
          variant="success"
          onClose={() => setShowAlert(false)}
          dismissible
          className="mt-3 alert-custom"
        >
          Contact added successfully!
        </Alert>
      )}
    </div>
  );
}

export default Update;
