import React from 'react'

export default function ContactDetails({ contact, handleClose, handleUpdate }) {
  if (contact !== null) {
    return (
      <div className="col-md-4 mt-5">
        <h1>User Details</h1>
        Name: {contact.name}<br />
        Email: {contact.email}
        <br />
        <button className='btn btn-danger' onClick={() => handleClose()}>Close</button>
        <button className='btn btn-danger' onClick={() => handleUpdate({ name: "Vivek 1", email: "sample@gmail.com" })}>Update</button>
      </div>
    )
  } else {
    return null;
  }
}
