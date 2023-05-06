import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Form from "./components/Form";
import Rank from "./components/Rank";

function App() {
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
					<Rank name="Ferro"/>
					<Rank name="Bronze"/>
					<Rank name="Prata"/>
					<Rank name="Ouro"/>
					<Rank name="Platina"/>
					<Rank name="Diamante"/>
					<Rank name="Mestre"/>
					<Rank name="Grão-mestre"/>
					<Rank name="Desafiante"/>
				</article>
			</main>
		</div>
	);
}

export default App;
