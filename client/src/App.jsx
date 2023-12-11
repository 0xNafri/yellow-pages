import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import axios from 'axios'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ContactsList from './pages/ContactsList/ContactsList'
import ManageContact from './pages/ManageContact/ManageContact'
import UpdateContact from './pages/UpdateContact/UpdateContact'


function App() {
  const [contacts, setContacts] = useState([{}])

  useEffect(() => {
    axios.get('/view_contacts')
      .then(res => {
        const data = res.data
        const contacts = data.contacts
        setContacts(contacts)
      })
      .catch(err => {
        console.error(err)
      })
  }, [contacts])


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ContactsList contacts={contacts}/>} />
          <Route path="/view-contacts" element={<ContactsList contacts={contacts}/>} />
          <Route path="/add-contact" element={<ManageContact/>}/>
          <Route path="/edit-contact/:id" element={<UpdateContact/>}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
