import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Form from "./components/Form";
import Rank from "./components/Rank";

function App() {
	const ranks = [
		{
			name: "Ferro",
			primaryColor: "#57C278",
			secundaryColor: "#D9F7E9",
		},
		{
			name: "Bronze",
			primaryColor: "#82CFFA",
			secundaryColor: "#E8F8FF",
		},
		{
			name: "Prata",
			primaryColor: "#A6D157",
			secundaryColor: "#F0F8E2",
		},
		{
			name: "Ouro",
			primaryColor: "#E06B69",
			secundaryColor: "#FDE7E8",
		},
		{
			name: "Platina",
			primaryColor: "#DB63BF",
			secundaryColor: "#FAE9F5",
		},
		{
			name: "Diamante",
			primaryColor: "#FF8A05",
			secundaryColor: "#FFF5D9",
		},
		{
			name: "Mestre",
			primaryColor: "#FF8A29",
			secundaryColor: "#FFEEDF",
		},
		{
			name: "Grão-mestre",
			primaryColor: "#DB6EBF",
			secundaryColor: "#FAE9F5",
		},
		{
			name: "Desafiante",
			primaryColor: "#82CFFA",
			secundaryColor: "#E8F8FF",
		},
	];

	const [collaborators, setCollaborators] = useState([]);
	const onNewCollaboratorAdded = (collaborator) => {
		setCollaborators([...collaborators, collaborator]);
	};

	return (
		<div>
			<header>
				<Banner />
			</header>
			<main>
				<article>
					<Form onCollaboratorRegistered={(collaborator) => onNewCollaboratorAdded(collaborator)} />
					{ranks.map((rank) => (
						<Rank
							key={rank.name}
							name={rank.name}
							primaryColor={rank.primaryColor}
							secundaryColor={rank.secundaryColor}
						/>
					))}
				</article>
			</main>
		</div>
	);
}

export default App;
