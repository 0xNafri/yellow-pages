import React from "react";
import Header from "../../components/Header/Header";
import Contacts from "../../components/Contacts/Contacts";
import "./contactslist.css";

function ContactsList({ contacts }) {
  return (
    <div>
      <Header />
      <div className="container">
        <Contacts contacts={contacts} />
      </div>
    </div>
  );
}

export default ContactsList;
