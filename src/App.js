import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Form from "./components/Form";
import Rank from "./components/Rank";
import Footer from "./components/Footer";

function App() {
	const ranks = [
		{
			name: "Ferro",
			primaryColor: "#51443F",
			secondaryColor: "#201B19",
		},
		{
			name: "Bronze",
			primaryColor: "#54382E",
			secondaryColor: "#211612",
		},
		{
			name: "Prata",
			primaryColor: "#2A363A",
			secondaryColor: "#111718",
		},
		{
			name: "Ouro",
			primaryColor: "#BC8538",
			secondaryColor: "#231809",
		},
		{
			name: "Platina",
			primaryColor: "#11453D",
			secondaryColor: "#061B17",
		},
		{
			name: "Diamante",
			primaryColor: "#3868CE",
			secondaryColor: "#091020",
		},
		{
			name: "Mestre",
			primaryColor: "#78378B",
			secondaryColor: "#190B1D",
		},
		{
			name: "Grão-mestre",
			primaryColor: "#9E2633",
			secondaryColor: "#2C080C",
		},
		{
			name: "Desafiante",
			primaryColor: "#80DDE8",
			secondaryColor: "#604013",
		},
	];

	const positions = [
		{
			name: "Topo",
		},
		{
			name: "Selva",
		},
		{
			name: "Meio",
		},
		{
			name: "Atirador",
		},
		{
			name: "Suporte",
		},
	];

	const [players, setPlayers] = useState([]);
	const onNewPlayerAdded = (player) => {
		setPlayers([...players, player]);
	};

	return (
		<div>
			<header>
				<Banner />
			</header>
			<main>
				<article>
					<Form
						ranks={ranks}
						positions={positions}
						onPlayerRegistered={(player) => onNewPlayerAdded(player)}
					/>
					{ranks.map((rank) => (
						<Rank
							key={rank.name}
							name={rank.name}
							primaryColor={rank.primaryColor}
							secondaryColor={rank.secondaryColor}
							players={players.filter((player) => player.rank === rank.name)}
						/>
					))}
				</article>
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default App;
