import s from "components/ContactList/ContactList.module.css";

const ContactList = ({ data, onDeleteItem }) => {
  const { contacts } = data;
  const filtered = contacts.filter((item) => {
    return item.name
      .toLowerCase()
      .trim()
      .includes(data.filter.toLowerCase().trim());
  });
  return (
    <ul className={s.list}>
      {filtered.map(({ id, name, number }) => {
        return (
          <li key={id} className={s.item}>
            {name}: {number}
            <button
              className={s.deleteBtn}
              type="button"
              name="delete"
              onClick={() => onDeleteItem(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
