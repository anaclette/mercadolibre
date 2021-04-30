import Card from './ProductCard';

const Results = ({ products, handleClickInfo, description }) => {
	return (
		<section className="App">
			{products.map((product) => (
				<Card
					description={description}
					product={product}
					id={product.id}
					key={product.id}
					handleClickInfo={handleClickInfo}
				/>
			))}
		</section>
	);
};

export default Results;
