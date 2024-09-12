function SearchInput(props) {
  return (
    <div className="searchBar-container">
      <h3>Monster</h3>
      <input
        type="text"
        value={props.searchInput}
        onChange={props.handleChange}
      />
      <button onClick={props.handleSubmit}>Search</button>
    </div>
  );
}

export default SearchInput;
