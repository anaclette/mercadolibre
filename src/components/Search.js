const Search = ({ handleSubmit, inputValue, handleClick, handleOnChange }) => {
	return (
		<form onSubmit={handleSubmit} className="Search">
			<input type="text" value={inputValue} onChange={handleOnChange} />
			<button onClick={handleClick}>Buscar</button>
		</form>
	);
};

export default Search;
