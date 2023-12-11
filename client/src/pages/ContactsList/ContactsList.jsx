import React from 'react'
import Header from '../../components/Header/Header'
import Contacts from '../../components/Contacts/Contacts'
import './contactslist.css'



function ContactsList() {
    return (
        <div>
            <Header />
            <div className='container'>

            <Contacts />
            </div>
        </div>
    )
}

export default ContactsList