import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import { useParams } from "react-router-dom";
import "./update.css";

function Update() {
  const { id } = useParams();
  const [formData, setFormData] = useState({ name: "", number: "" });
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    // Fetch the existing contact details and update the state
    axios.get(`/view_contacts/${id}`).then((res) => {
      const contactDetails = res.data;
      setFormData({
        name: contactDetails.name,
        number: contactDetails.phone_number,
      });
    });
  }, [id]);

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
        .put(`/update_contact/${id}`, formData)
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
        <p>Edit Contact</p>
        <Form.Text className="text-muted">
          Update the necessary details of the contact
        </Form.Text>
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
          Contact updated successfully!
        </Alert>
      )}
    </div>
  );
}

export default Update;
