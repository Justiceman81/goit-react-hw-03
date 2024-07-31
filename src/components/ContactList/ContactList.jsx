import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
const ContactList = ({ tasks, onDelete }) => {
  return (
    <ul className={css.list}>
      {tasks.map((task) => (
        <li className={css.item} key={task.id}>
          <Contact data={task} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
