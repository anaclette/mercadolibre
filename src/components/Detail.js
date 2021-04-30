const Detail = ({ cardDetail }) => {
	return (
		<div className="Card">
			<div>
				<img src={cardDetail.thumbnail} />
			</div>
			<h2>{cardDetail.title}</h2>
			<p>{cardDetail.price}</p>
			<button>Ver mas</button>
		</div>
	);
};

export default Detail;
