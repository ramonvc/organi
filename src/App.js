import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Form from "./components/Form";
import Rank from "./components/Rank";

function App() {
	const ranks = [
		{
			name: "Ferro",
			primaryColor: "#51443F",
			secondaryColor: "#D9F7E9",
		},
		{
			name: "Bronze",
			primaryColor: "#54382E",
			secondaryColor: "#E8F8FF",
		},
		{
			name: "Prata",
			primaryColor: "#2A363A",
			secondaryColor: "#F0F8E2",
		},
		{
			name: "Ouro",
			primaryColor: "#BC8538",
			secondaryColor: "#FDE7E8",
		},
		{
			name: "Platina",
			primaryColor: "#11453D",
			secondaryColor: "#FAE9F5",
		},
		{
			name: "Diamante",
			primaryColor: "#3868CE",
			secondaryColor: "#FFF5D9",
		},
		{
			name: "Mestre",
			primaryColor: "#78378B",
			secondaryColor: "#FFEEDF",
		},
		{
			name: "Grão-mestre",
			primaryColor: "#9E2633",
			secondaryColor: "#FAE9F5",
		},
		{
			name: "Desafiante",
			primaryColor: "#80DDE8",
			secondaryColor: "#E8F8FF",
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
		</div>
	);
}

export default App;
