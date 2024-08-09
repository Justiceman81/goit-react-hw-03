import css from "./SearchBox.module.css";
const SearchBox = ({ value, onFilter }) => {
  return (
    <div className={css.searchBox}>
      <p className={css.searchBoxLabel}>Find contacts by name</p>
      <input
        className={css.searchBoxInput}
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
