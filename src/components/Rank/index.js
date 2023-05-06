import Player from "../Player";
import "./Rank.css";

const Rank = (props) => {
	return (
		<section className="rank" style={{ backgroundColor: props.secundaryColor }}>
			<h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
			<Player/>
		</section>
	);
};

export default Rank;
