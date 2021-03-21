import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact, getContact } from "../../JS/actions/contact";
import { toggleEdit } from "../../JS/actions/edit";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  handleEdit = (id) => {
    dispatch(toggleEdit());
    dispatch(getContact());
  };
  return (
    <div>
      <h2> {contact.name} </h2>
      <h2> {contact.email} </h2>
      <h2> {contact.phone} </h2>
      <Link to="/edit">
        {" "}
        <button onClick={() => handleEdit(contact._id)}>Edit</button>
      </Link>
      <button onClick={() => dispatch(deleteContact(contact._id))}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
