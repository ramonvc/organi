import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Form from "./components/Form";
import Rank from "./components/Rank";

function App() {
	const ranks = [
		{
			name: "Ferro",
			primaryColor: "#57C278",
			secondaryColor: "#D9F7E9",
		},
		{
			name: "Bronze",
			primaryColor: "#82CFFA",
			secondaryColor: "#E8F8FF",
		},
		{
			name: "Prata",
			primaryColor: "#A6D157",
			secondaryColor: "#F0F8E2",
		},
		{
			name: "Ouro",
			primaryColor: "#E06B69",
			secondaryColor: "#FDE7E8",
		},
		{
			name: "Platina",
			primaryColor: "#DB63BF",
			secondaryColor: "#FAE9F5",
		},
		{
			name: "Diamante",
			primaryColor: "#FF8A05",
			secondaryColor: "#FFF5D9",
		},
		{
			name: "Mestre",
			primaryColor: "#FF8A29",
			secondaryColor: "#FFEEDF",
		},
		{
			name: "Grão-mestre",
			primaryColor: "#DB6EBF",
			secondaryColor: "#FAE9F5",
		},
		{
			name: "Desafiante",
			primaryColor: "#82CFFA",
			secondaryColor: "#E8F8FF",
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
					<Form ranks={ranks} onPlayerRegistered={(player) => onNewPlayerAdded(player)} />
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
