import PropTypes from 'prop-types';
import { useState } from 'react';
import css from './contactForm.module.css';

const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onAddContact({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.nameLabel} htmlFor={'name'}>
          Name
        </label>
        <input
          className={css.input}
          id={'name'}
          type="text"
          name="name"
          pattern="[A-Z][a-z]+(([\`\s][A-Z][a-z]+)?){5}"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <label className={css.numberLabel} htmlFor={'number'}>
          Number
        </label>
        <input
          className={css.input}
          id={'number'}
          type="tel"
          name="number"
          pattern="(\+[0-9]{2}\s)?[0-9]{3}[\s\-]?[0-9]{3}[\s\-]?[0-9]{3}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={e => setNumber(e.target.value)}
          required
        />
        <button className={css.btn}>Add contact</button>
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};
export default ContactForm;
