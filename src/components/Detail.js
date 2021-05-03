import MoreInfoButton from './MoreInfoButton';
import './InfoCard.scss';

const Detail = ({ cardDetail, description }) => {
	return (
		<div className="InfoCard">
			<div>
				<img src={cardDetail.thumbnail} />
			</div>
			<div>
				<h2>{cardDetail.title}</h2>
				<p>${cardDetail.price}</p>
				<MoreInfoButton />
			</div>
			<div>
				<p>{description.plain_text}</p>
			</div>
		</div>
	);
};

export default Detail;
