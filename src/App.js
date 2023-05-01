import Banner from "./components/Banner/Banner";
import TextField from "./components/TextField";

function App() {
	return (
		<div>
			<header>
				<Banner />
			</header>
			<main>
				<TextField label="Nome" placeholder="Digite seu nome" />
				<TextField label="Cargo" placeholder="Digite seu cargo" />
				<TextField label="Imagem" placeholder="Digite o endereço da imagem" />
			</main>
		</div>
	);
}

export default App;
