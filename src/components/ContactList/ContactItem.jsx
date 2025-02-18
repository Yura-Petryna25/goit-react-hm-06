import styles from "./ContactList.module.css";
const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <li className={styles.item} key={id}>
      <p>
        {name}: {number}
      </p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
};

export default ContactItem;
