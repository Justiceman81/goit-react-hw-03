import css from "./Contact.module.css";
const Contact = ({ data: { id, text }, onDelete }) => {
  return (
    <div className={css.container}>
      <p className={css.text}>{text}</p>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
