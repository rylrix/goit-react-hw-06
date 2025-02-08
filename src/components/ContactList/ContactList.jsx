import { useSelector } from "react-redux";

import Contact from "../Contact/Contact";

import s from "./ContactList.module.css";

import { selectContacts } from "../../redux/contactsSlice";
import { nanoid } from "nanoid";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  return (
    <div>
      <ul className={s.list}>
        {contacts.map(({ id, name, number }) => (
          <Contact key={nanoid()} id={id} name={name} number={number} />
        ))}
      </ul>
    </div>
  );
};
export default ContactList;
