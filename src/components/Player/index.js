import "./Player.css";

const Player = ({ name, position, image, primaryColor }) => {
	return (
		<div className="player">
			<div className="header" style={{ backgroundColor: primaryColor }}>
				<img src={image} alt={name} />
			</div>
			<div className="footer">
				<h4 className="name" style={{ color: primaryColor }}>{name}</h4>
				<h5 className="position">{position}</h5>
			</div>
		</div>
	);
};

export default Player;
