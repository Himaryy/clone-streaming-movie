const Search = ({ searchTerms, setSearchTerms }) => {
  return (
    <div className="search">
      <div>
        <img src="search.svg" alt="Search" />

        <input
          type="text"
          placeholder="Search through thousands of movies"
          value={searchTerms}
          onChange={(e) => setSearchTerms(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
