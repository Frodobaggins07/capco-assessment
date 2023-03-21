import React, { useEffect, useState } from "react";


/**
 * Used the useState hook here for the functional operations
 * the useState takes the initial state value as a arguement and returns
 * an updated state value when the setter function is called this tracks of what users types in
 * also made use of the spread syntax(...), which takes the old values from an
 * object or array and include it in a new array.
 *
 */

const EditContact = ({ data, onUpdateContact, onCancel }) => {
  const [state, setState] = useState("");

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    }); // when button is clicked it takes the current value from an object and includes it in the new object
  }; 

  // useEffect(() => {
  //   setState(data);
  // }, [data]); // the useEffect function tells react that your component needs to do something after rendering

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
          onChange={handleChange} // This is the const Variable that handles the change in data inputted by users.
        />
        <input
          name="phone"
          type="text"
          value={state?.phone}
          placeholder="Phone Number"
          onChange={handleChange}  // This is the const Variable that handles the change in data inputted by users.
          
        />
        {/* <input
          name="email"
          type="text"
          value={state?.email}
          placeholder="Email Address"
          onChange={handleChange}
        /> */}
        <button className="contact-edit" onClick={() => onUpdateContact(state)}>
          Add
        </button>
      </div>
    </div>
  );
};

export default EditContact;