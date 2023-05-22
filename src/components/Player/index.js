import "./Player.css";
import React, { useState } from 'react';  
  
const Player = ({ name, position, image, primaryColor }) => {  
	const [imageUrl, setImageUrl] = useState(image);  
	
	// Generate a random number between 1 and 10  
	const randomIconNumber = Math.floor(Math.random() * 10) + 1;  
  
	// Build the default icon path using the random number  
	const defaultImage = `${process.env.PUBLIC_URL}/icons/icon-${randomIconNumber}.webp`; 
  
	const handleImageError = () => {  
		setImageUrl(defaultImage);  
	};  
  
	return (  
		<div className="player">  
			<div className="header" style={{ backgroundColor: primaryColor }}>  
				<img src={imageUrl} alt={name} onError={handleImageError} />  
			</div>  
			<div className="footer">  
				<h4 className="name" style={{ color: primaryColor }}>{name}</h4>  
				<h5 className="position">{position}</h5>  
			</div>  
		</div>  
	);  
};  
  
export default Player;  

