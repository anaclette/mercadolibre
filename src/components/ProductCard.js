import FreeShipping from './FreeShipping';
import FreeShippingLogo from './Free-shipping.png';
import './FreeShipping.scss';

const Card = ({ product, handleClickInfo, id }) => {
	const handleClick = () => {
		handleClickInfo(id);
	};

	return (
		<div className="Card">
			<div>
				<img alt={product.title} src={product.thumbnail} />
				{product.shipping.free_shipping === true && <FreeShipping logo={FreeShippingLogo} />}
			</div>
			<h2>{product.title}</h2>
			<p>${product.price}</p>
			<button onClick={handleClick}>Ver más</button>
		</div>
	);
};

export default Card;
