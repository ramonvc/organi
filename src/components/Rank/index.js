import "./Rank.css";

const Rank = (props) => {
	return (
		<section className="rank" style={{ backgroundColor: props.secundaryColor }}>
			<h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
		</section>
	);
};

export default Rank;
