import React from 'react'
import Header from '../../components/Header/Header'
import Forms from '../../components/Forms/Forms'

function ManageContact({onAddContact, setFormData, formData}) {
    return (
        <div>
            <Header />
            <div className='container'>
                <Forms/>
            </div>
        </div>
    )
}

export default ManageContact