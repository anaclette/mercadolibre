const Card = ({ product }) => {
	return (
		<div className="Card">
			<div>
				<img src={product.thumbnail} />
			</div>
			<h2>{product.title}</h2>
			<p>${product.price}</p>
			<button>Ver más</button>
		</div>
	);
};

export default Card;
