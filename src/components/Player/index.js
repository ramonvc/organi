import "./Player.css";

const Player = (props) => {
	return (
		<div className="player">
			<div className="header">
				<img src="https://github.com/ramonvc.png" alt="Ramon Victor" />
			</div>
			<div className="footer">
				<h4>Ramon Victor</h4>
				<h5>Jungle</h5>
			</div>
		</div>
	);
};

export default Player;
