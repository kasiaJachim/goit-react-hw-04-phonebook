import PropTypes from 'prop-types';
import css from './filterContact.module.css';

const FilterContact = props => {
  const updateFilter = e => {
    props.onFilter(e.target.value);
  };

  return (
    <div>
      <label className={css.filterLabel} htmlFor="filter">
        Find contacts by name
      </label>
      <input
        className={css.filterInput}
        type="text"
        value={props.filter}
        onChange={updateFilter}
        placeholder="Search contacts"
      />
    </div>
  );
};
export default FilterContact;

FilterContact.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};
