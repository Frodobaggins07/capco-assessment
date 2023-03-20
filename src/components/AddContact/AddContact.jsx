import React, { useState } from "react";

/**
 * variable AddContact uses the onClick button onAddContact to handle the change
 * when users click on the add button that adds the new contact into the 
 * mock database already in place.
 * 
 */
const AddContact = ({ onAddContact }) => {
  const [state, setState] = useState({
    name: "",
    phone: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="contact-list">
      <div className="contact">
        <input
          name="name"
          type="text"
          value={state?.name}
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          name="phone"
          type="number"
          value={state?.phone}
          placeholder="Phone Number"
          onChange={handleChange}
        />
        <button className="contact-edit" onClick={() => onAddContact(state)}>
          Add
        </button>
      </div>
    </div>
  );
};

export default AddContact;