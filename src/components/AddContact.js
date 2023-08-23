import React, { useState, useRef } from 'react'
import { ContactForm } from './ContactForm'
import { useContacts } from './Contacts'
import PopupModal from './PopupModal'

export default function AddContact({ setContacts }) {
  let contactsData = useContacts();
  let contacts = contactsData.contacts;
  const [contactForm, setContactForm] = useState({
    name: "",
    email: ""
  })
  const closeRef = useRef();
  const handleChange = (name, value) => {
    let updatedForm = { ...contactForm };
    updatedForm[name] = value;
    setContactForm(updatedForm)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    let updatedContacts = [...contacts];
    updatedContacts.push(contactForm);
    console.log(updatedContacts)
    setContacts(updatedContacts);
    setContactForm({
      name: "",
      email: ""
    })
    closeRef.current.click();
    //console.log(closeRef.current.closeRef())
  }
  //<PopupModal title="Add Contact" id="addContact" ref={closeRef} closeRef={closeRef}>
  return (
    <PopupModal title="Add Contact" id="addContact" closeRef={closeRef}>
      <form onSubmit={handleSubmit}>
        <ContactForm
          label="Full Name"
          max={20}
          type="text"
          name="name"
          value={contactForm.name}
          setValue={(name, data) => handleChange(name, data)}
        />
        <ContactForm
          label="Email"
          max={20}
          type="email"
          name="email"
          value={contactForm.email}
          setValue={(name, data) => handleChange(name, data)}
        />
        <button type="submit" className='btn btn-primary'>Submit</button>
      </form>
    </PopupModal>
  )
}
