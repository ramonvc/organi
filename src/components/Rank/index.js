import Player from "../Player";
import "./Rank.css";

const Rank = (props) => {
	return (
		<section className="rank" style={{ backgroundColor: props.secundaryColor }}>
			<h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
			<div className="players">
				{props.players.map((player) => (
					<Player name={player.name} position={player.position} image={player.image} />
				))}
			</div>
		</section>
	);
};

export default Rank;
