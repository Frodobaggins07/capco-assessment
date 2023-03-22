import React, { useState } from "react";

/**
 * variable AddContact uses the onClick button onAddContact to handle the change
 * when users click on the add button that adds the new contact into the 
 * mock database contacts already in place.
 * 
 */

const AddContact = ({ onAddContact }) => {
  const [state, setState] = useState({
    name: "",
    phone: "",
    //email:""
  });

  const handleChange = (e) => {
    setState({...state,[e.target.name]: e.target.value,}); 
    // when button add is clicked it takes the current value from an object and includes it in the new object so it takes
    // the all the values from the Mockdabase and includes the new inputs by the user.
    
  };

  return (
    <div className="contact-list">
      <div className="contact">
        <input
          name="name"
          type="text"
          value={state?.name}
          placeholder="Full Name"
          onChange={handleChange} // Handle change is the const variable that performs the add after user clicks input into the 
          //text boxes in this case it adds the Full name into the contactList Container
        />
        <input
          name="phone"
          type="number"
          value={state?.phone}
          placeholder="Phone Number"
          onChange={handleChange}  // Handle change is the const variable that performs the add after user clicks input into the 
          //text boxes in this case it adds the Phone Number into the contactList Container
        />
        {/* <input
          name="email"
          type="text"
          value={state?.email}
          placeholder="Email Address"
          onChange={handleChange}
        /> */}
        <button
          className="contact-edit"
          onClick={() => {
            onAddContact(state);
            setState({
              name: "",
              phone: "",
            });
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddContact;