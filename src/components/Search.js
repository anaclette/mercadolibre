const Search = ({ inputValue, handleClick, handleOnChange }) => {
	return (
		<form className="Search">
			<input type="text" value={inputValue} onChange={handleOnChange} />
			<button onClick={handleClick}>Buscar</button>
		</form>
	);
};

export default Search;
