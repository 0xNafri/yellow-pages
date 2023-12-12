import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "./contacts.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Contacts({ contacts }) {
  const handleEdit = () => { };

  const handleDelete = (contactId) => {
    axios
      .delete(`/delete_contact/${contactId}`)
      .then((res) => { })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="text-center">
      <p>Contacts List</p>
      {contacts.length === 0 ? (
        <div>
          <p>You have no contacts. Add them now</p>
          <Link to="/add-contact">
            <Button variant="primary">Add Contact</Button>
          </Link>
        </div>
      ) : (
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
                  <Link to={`/edit-contact/${contact.id}`}>
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
      )}

      <Link to="/add-contact">
        <Button variant="primary">Add Contact</Button>
      </Link>

    </div>
  );
}

export default Contacts;
