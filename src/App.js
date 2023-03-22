import { useState } from 'react';
import './App.css';
import ContactList from './components/ContactList/ContactList';
import AddContact from './components/AddContact/AddContact';
import EditContact from './components/EditContact/EditContact';
import Caption from './Caption'
/**
 * MockDatabase takes the value of some constant value of the contact manager 
 * made use of the splice() function that changes the contents of an 
 * array by removing or replacing existing elements and/or adding new elements in 
 * its place as used with index and contacts
 */
const MockDatabase = [
  {
    id: 1,
    name: 'John Doe',
    phone: '+13456789947',
    //email: 'johndoe1@outlook.ca'
   
  },
  {
    id: 2,
    name: 'Caroline Smith',
    phone: '+234434543545',
    //email: 'CaroSmith@outlook.ca'
  },
  {
    id: 3,
    name: 'Vanessa Morgan',
    phone: '+44898797893',
    //email: 'VanessaM@icloud.com'
  },
  {
    id: 4,
    name: 'Tom Gold',
    phone: '+7785435435345',
    //email: 'Tgold890@yahoo.ca'
  },
  {
    id: 5,
    name: 'James Gordon',
    phone: '+18795367290',
    //email: 'jamesGordon@gmail.com'
  },
]


function App() {

 
  const [contacts, setContacts] = useState(MockDatabase);
  const [edit, setEdit] = useState(undefined);

  const handleNewContact = (contact) => {
    setContacts([...contacts, contact]);
  }

  const handleUpdateContact = (contact) => {
    console.log(contact);
    const index = contacts.findIndex(e => e.id === contact.id) 
    // this finds the index or position of the contacts so the splice() 
    //function can use when updating existing contacts

    const data = contacts;
    data.splice(index, 1, contact) 
    setContacts([...data])

  }

  const handleDelete = (contact) => {
    const index = contacts.findIndex(e => e.id === contact.id) // this finds the index or position of the contacts so the splice() 
    //function can use when deleting

    const data = contacts;
    data.splice(index, 1,)
    setContacts([...data])

  }

/**
 * Contact List- takes the onClick buttons as arguement as they are imported into the App.js
 * it takes values of the contacts, the Onclick button onEdit and the onDelete button and performs all the actions
 * 
 * AddContact- takes the onAddContact button and perfoms the function
 * 
 * Edit Contact- this edit an already existing contact in the database and updates the information. and takes the cancel 
 * edit button if user decides not to update
 */

  return (
    
    
    <div className="App"> 
    <nav className='nav'>
      <button className="btn-success"><h1>Homepage</h1></button>
      <div className='container'>
        <ContactList data={contacts} onEdit={setEdit} onDelete={handleDelete} /> 
        {!edit ? (
          <AddContact onAddContact={handleNewContact} />
        ) : (
          <EditContact data={edit} onUpdateContact={handleUpdateContact} onCancel={() => setEdit(undefined)} />
        )
        }
      </div>
      </nav>
      <Caption />
    </div>
  );
}

export default App;