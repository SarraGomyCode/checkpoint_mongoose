import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Add = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const contact = useSelector((state) => state.contactReducer.contact);
  const edit = useSelector((state) => state.contactReducer.edit);

  useEffect(() => {
    edit
      ? () => {
          setName(contact.name);
          setEmail(contact.email);
          setPhone(contact.phone);
        }
      : () => {
          setName("");
          setEmail("");
          setPhone("");
        };
  }, [contact]);
  return (
    <div>
      <form>
        <label>name</label>
        <input value={contact.name} />
        <label>email</label>
        <input value={contact.email} />
        <label>phone</label>
        <input value={contact.phone} />
      </form>
    </div>
  );
};

export default Add;
