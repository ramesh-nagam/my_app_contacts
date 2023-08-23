import React, { useState, useEffect, createContext, useContext, useLayoutEffect } from 'react';
import { useTransition } from 'react';
import { useInsertionEffect } from 'react';
import '../styles/Contacts.css';
import AddContact from './AddContact';
import ContactDetails from './ContactDetails';
//import useFetch from './useFetch';
import useFetch from './useFetch2';

const ContactsContext = createContext();

export const useContacts = () => {
  return useContext(ContactsContext)
}

export default function Contacts() {
  const [isPending, startTransition] = useTransition();
  const contactsData = useFetch("https://jsonplaceholder.typicode.com/users", "GET");
  const todos = useFetch("https://jsonplaceholder.typicode.com/todos");
  const [contacts, setContacts] = useState(contactsData)
  const [contact, setContact] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(null)

  const addContact = () => {
    let updatedContacts = [...contacts];
    updatedContacts.push({ name: "Vivek", email: "abc@gmail.com" })
    //setContacts(updatedContacts);
  }
  const deleteContact = (index) => {
    if (window.confirm("Are you sure want to delete?")) {
      let updatedContacts = [...contacts];
      updatedContacts.splice(index, 1);
      setContacts(updatedContacts)
    }
  }

  useEffect(() => {
    console.log("use effect")
    setContacts(contactsData)
    //fetch("https://jsonplaceholder.typicode.com/users")
    //  .then(response => response.json())
    //  .then(data => {
    //    setContacts(data)
    //  })
    //  .catch(err => {
    //    console.log("Network error", err);
    //  })

    //fetch("https://jsonplaceholder.typicode.com/todos")
    //  .then(response => response.json())
    //  .then(data => {
    //    console.log("Todos", data)
    //  })
    //  .catch(err => {
    //    console.log("Network error", err);
    //  })
  }, [contactsData])

  useLayoutEffect(() => {
    console.log("layout effect")
  }, [])

  useInsertionEffect(() => {
    console.log("Insertion effect")
  }, [])

  return (
    <div className="container mt-4">
      <h1>Contacts Application</h1>
      <button type="button" className="add-contact btn text-white" data-bs-toggle="modal" data-bs-target="#addContact">
        +Add Contact
      </button>
      {isPending && <h1>Loading...</h1>}
      <ContactsContext.Provider value={{ contacts }}>
        <div className="row">
          <div className="col-md-6">
            <table className="table table-hover mt-5">
              <thead className="bg-light">
                <tr>
                  <th>Basic Info</th>
                  <th>Company</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {contacts !== undefined && contacts.length > 0 && contacts.map((contact, index) => (
                  <tr key={index}>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>
                      <i className="fa fa-eye m-2" onClick={() => {
                        startTransition(() => {
                          setContact(contact)
                        })
                      }
                      } />
                      <i className="fa fa-edit m-2" onClick={() => setSelectedIndex(index)} data-bs-toggle="modal" data-bs-target="#editContact" />
                      <i className="fa fa-trash m-2" onClick={() => deleteContact(index)} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ContactDetails contact={contact} handleClose={() => setContact(null)}
            handleUpdate={(data) => setContact(data)} />
          <AddContact setContacts={setContacts} />
          {/*<EditContact setContacts={setContacts} selectedIndex={selectedIndex} />*/}
        </div>
      </ContactsContext.Provider>
    </div>
  );
}
