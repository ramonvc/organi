import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Form from "./components/Form";

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
				</article>
			</main>
		</div>
	);
}

export default App;
