const MoreInfoButton = ({ handleClickInfo, id }) => {
	const handleClick = () => {
		handleClickInfo(id);
	};
	return (
		<button className="MoreInfoButton" onClick={handleClick}>
			Ver más
		</button>
	);
};

export default MoreInfoButton;
