import "./Player.css";

const Player = ({ name, position, image, backgroundColor }) => {
	return (
		<div className="player">
			<div className="header" style={{ backgroundColor: backgroundColor }}>
				<img src={image} alt={name} />
			</div>
			<div className="footer">
				<h4>{name}</h4>
				<h5>{position}</h5>
			</div>
		</div>
	);
};

export default Player;
