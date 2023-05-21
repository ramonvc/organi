import "./Banner.css";

function Banner() {
	return (
		<div className="banner">
			<img
				className="background-img"
				src={process.env.PUBLIC_URL + "/img/banner.jpg"}
				alt="Imagem de fundo do banner"
			/>
			<img className="logo" src={process.env.PUBLIC_URL + "/logo.png"} alt="Logo Organi" />
		</div>
	);
}

export default Banner;
