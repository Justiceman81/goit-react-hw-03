import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <div className={css.container}>
      <div className={css.contactContainer}>
        <FaUser size="20" />
        <p className={css.contactText}>{name}</p>
      </div>
      <div className={css.contactContainer}>
        <FaPhoneAlt size="20" />
        <p className={css.contactText}>{number}</p>
      </div>
      <button className={css.contactBtn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
