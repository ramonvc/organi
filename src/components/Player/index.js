import "./Player.css";
import React, { useState } from "react";

const Player = ({ name, position, image, primaryColor }) => {
	const [imageUrl, setImageUrl] = useState(image);

	// Generate a random number between 1 and 10
	const randomIconNumber = Math.floor(Math.random() * 10) + 1;

	// Build the default icon path using the random number
	const defaultImagePath = `${process.env.PUBLIC_URL}/icons/profile/icon-${randomIconNumber}.webp`;

	const handleImageError = () => {
		setImageUrl(defaultImagePath);
	};

	const positionIconPath = `${process.env.PUBLIC_URL}/icons/position/position-${position}.png`;

	return (
		<div
			className="player border-effect"
			style={{
				"--borderColor": primaryColor,
			}}>
			<div className="header" style={{ backgroundColor: primaryColor }}>
				<img src={imageUrl} alt={name} onError={handleImageError} />
			</div>
			<div className="footer">
				<h4 className="name" style={{ color: primaryColor }}>
					{name}
				</h4>
				<img
					className="position-icon"
					src={positionIconPath}
					alt={position}
					title={position}
				/>
			</div>
		</div>
	);
};

export default Player;
