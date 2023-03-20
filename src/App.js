import { useState } from 'react';
import './App.css';
import ContactList from './components/ContactList/ContactList';
import AddContact from './components/AddContact/AddContact';
import EditContact from './components/EditContact/EditContact';

const MockDatabase = [
  {
    id: 1,
    name: 'John Doe',
    phone: '+13456789947'
   
  },
  {
    id: 2,
    name: 'Caroline Smith',
    phone: '+234434543545'
  },
  {
    id: 3,
    name: 'Vanessa Morgan',
    phone: '+44898797893'
  },
  {
    id: 4,
    name: 'Tom Gold',
    phone: '+7785435435345'
  },
]


function App() {

 
  const [contacts, setContacts] = useState(MockDatabase);
  const [edit, setEdit] = useState(undefined);

  const handleNewContact = (contact) => {
    setContacts([...contacts, contact]);
  }

  const handleUpdateContact = (contact) => {
    const index = contacts.findIndex(e => e.id === contact.id)

    const data = contacts;
    data.splice(index, 1, contact)
    setContacts([...data])

  }

  const handleDelete = (contact) => {
    const index = contacts.findIndex(e => e.id === contact.id)

    const data = contacts;
    data.splice(index, 1,)
    setContacts([...data])

  }


  return (
    <div className="App">
      <div className='container'>
        <ContactList data={contacts} onEdit={setEdit} onDelete={handleDelete} />
        {!edit ? (
          <AddContact onAddContact={handleNewContact} />
        ) : (
          <EditContact data={edit} onUpdateContact={handleUpdateContact} onCancel={() => setEdit(undefined)} />
        )
        }
      </div>
    </div>
  );
}

export default App;