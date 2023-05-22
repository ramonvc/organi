import Player from "../Player";
import "./Rank.css";

const Rank = ({ players, name, primaryColor, secondaryColor }) => {
	const hasPlayers = () => {
		return players.length > 0;
	};

	return (
		hasPlayers() && (
			<section className="rank" style={{ backgroundColor: secondaryColor }}>
				<h3 className="name" style={{ borderColor: primaryColor }}>{name}</h3>
				<div className="players">
					{players.map((player) => (
						<Player
							primaryColor={primaryColor}
							key={player.name}
							name={player.name}
							position={player.position}
							image={player.image}
						/>
					))}
				</div>
			</section>
		)
	);
};

export default Rank;
