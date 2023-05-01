import "./Form.css";
import TextField from "../TextField";

const form = () => {
	return (
		<section className="form">
			<form>
                <h2>Preenche os dados para criar o card do jogador</h2>
				<TextField label="Nome" placeholder="Digite seu nome" />
				<TextField label="Cargo" placeholder="Digite seu cargo" />
				<TextField label="Imagem" placeholder="Digite o endereço da imagem" />
			</form>
		</section>
	);
};

export default form;
