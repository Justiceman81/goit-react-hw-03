import css from "./SearchBox.module.css";
const SearchBox = ({ value, onFilter }) => {
  return (
    <div>
      <p className={css.label}>Search by name</p>
      <input
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
