import React from 'react'
import Header from '../../components/Header/Header'
import Update from '../../components/Update/Update'

function UpdateContact({contacts}) {
    return (
        <div>
            <Header />
            <div className='container'>
                <Update/>
            </div>
        </div>
    )
}

export default UpdateContact