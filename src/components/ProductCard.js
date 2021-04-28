const Card = ({ product, handleClickInfo }) => {
	return (
		<div className="Card">
			<div>
				<img alt={product.title} src={product.thumbnail} />
			</div>
			<h2>{product.title}</h2>
			<p>${product.price}</p>
			<button onClick={handleClickInfo}>Ver más</button>
		</div>
	);
};

export default Card;
