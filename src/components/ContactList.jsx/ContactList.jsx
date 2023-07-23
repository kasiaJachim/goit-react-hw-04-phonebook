import PropTypes from 'prop-types';
import css from './contactList.module.css';

const ContactList = ({ deleteContact, contacts }) => {
  return (
    <div>
      <ul className={css.list}>
        {contacts.map(contact => (
          <li className={css.item} key={contact.id}>
            <span>{contact.name}</span>
            <span>{contact.number}</span>
            <button
              className={css.deleteBtn}
              onClick={() => deleteContact(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
