import css from './SearchBox.module.css';

const SearchBox = ({ value, onFilter }) => {
  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Find contacts by name</h2>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={e => onFilter(e.target.value)}
        placeholder="Find by name"
      />
    </div>
  );
};

export default SearchBox;
