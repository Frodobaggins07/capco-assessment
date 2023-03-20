import React, { useEffect, useState } from "react";

const EditContact = ({ data, onUpdateContact, onCancel }) => {
  const [state, setState] = useState(data);

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    setState(data);
  }, [data]);

  return (
    <div className="contact-list">
      <div className="contact-edit-header">
      <strong>Edit Contact </strong>
        <button onClick={onCancel}>Cancel Edit</button>
      </div>

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
        <button className="contact-edit" onClick={() => onUpdateContact(state)}>
          Add
        </button>
      </div>
    </div>
  );
};

export default EditContact;