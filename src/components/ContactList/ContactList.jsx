import React from "react";

/**
 * const ContactList serves a variable that takes the value data, onEdit and onDelete, 
 * the data value is the data value of what users are going to write and refers to the default
 * value in the MockDatabase
 * the onEdit and onDelete buttons are considered onClick buttons that perfom various events task
 * when users click on the button
 */

const ContactList = ({ data, onEdit, onDelete }) => {
  return (
   
              <><div className="directory">
          <h1>Contact Manager</h1>
      </div><div className="contact-list">
              {data !== undefined && data.length > 0 ? (
                  data.map((contact, index) => (
                      <div className="contact" key={index}>
                          <div className="contact-num">#{index + 1}.</div>

                          <div>{contact.name}</div>
                          <div>{contact.phone}</div>
                          <div>{contact.email}</div>
                          <button className="contact-edit" onClick={() => onEdit(contact)}>
                              Edit
                          </button>
                          <button className="contact-delete" onClick={() => onDelete(contact)}>
                              Delete
                          </button>
                      </div>
                  ))
              ) : (
                  <div className="contact"> <strong>No Contacts to Display!</strong></div>
              )}
          </div></>
  );
};

export default ContactList;