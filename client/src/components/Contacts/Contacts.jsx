import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "./contacts.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Contacts({  }) {
  const handleEdit = () => {
    
  };

  const handleDelete = (contactId) => {
    axios
      .delete(`/delete_contact/${contactId}`)
      .then((res) => {})
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <p>Contacts List</p>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{contact.name}</td>
              <td>{contact.phone_number}</td>
              <td>
                <Link to="/edit-contact">
                  <Button
                    variant="primary"
                    className="me-2"
                    onClick={() => handleEdit()}
                  >
                    Edit
                  </Button>
                </Link>
                <Button
                  variant="danger"
                  className="me-2"
                  onClick={() => handleDelete(contact.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Contacts;
