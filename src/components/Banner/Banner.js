import "./Banner.css";

function Banner() {
	return (
		<div className="banner">
			<img src={process.env.PUBLIC_URL + "/img/banner.svg"} alt="Banner com logo Organi e frase" />
		</div>
	);
}

export default Banner;
