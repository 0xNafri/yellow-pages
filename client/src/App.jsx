import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ContactsList from './pages/ContactsList/ContactsList'
import ManageContact from './pages/ManageContact/ManageContact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ContactsList/>} />
          <Route path="/contacts-list" element={<ContactsList/>} />
          <Route path="/manage-contact" element={<ManageContact/>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
