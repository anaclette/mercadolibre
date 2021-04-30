import MoreInfoButton from './MoreInfoButton';
import './InfoCard.scss';

const Detail = ({ cardDetail }) => {
	return (
		<div className="InfoCard">
			<div>
				<img src={cardDetail.thumbnail} />
			</div>
			<div>
				<h2>{cardDetail.title}</h2>
				<p>{cardDetail.price}</p>
				<MoreInfoButton />
			</div>
			<div>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempor eleifend nisl, in dictum ex
					vehicula sed. Pellentesque est dolor, lobortis ut enim et, fermentum placerat diam. Nunc urna
					lectus, auctor eu massa non, dignissim pretium nibh. Mauris vehicula varius metus, ac pharetra
					mauris aliquet ut. Fusce in leo quis enim lobortis sollicitudin nec et diam. Quisque nisl leo,
					dictum varius dignissim vitae, sollicitudin sit amet dolor. Vivamus egestas massa enim, at pharetra
					eros tempor sed. Nulla id est nisl. Proin suscipit lorem id tortor tincidunt tincidunt. Proin quis
					elit et ante gravida fringilla a mattis augue. Duis ac lacinia enim, non pulvinar ipsum.
				</p>
			</div>
		</div>
	);
};

export default Detail;
