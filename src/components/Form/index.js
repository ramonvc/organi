import React from "react";
import "./Form.css";
import TextField from "../TextField";
import Dropdown from "../Dropdown";
import Button from "../Button";

const ranks = [
	"Ferro",
	"Bronze",
	"Prata",
	"Ouro",
	"Platina",
	"Diamante",
	"Mestre",
	"Grão-mestre",
	"Desafiante",
];

const onSave = (event) => {
	event.preventDefault();
};

class Form extends React.Component {
	render() {
		return (
			<section className="form">
				<form onSubmit={onSave}>
					<h2>Preenche os dados para criar o card do jogador</h2>
					<TextField label="Nome" placeholder="Digite seu nome" required={true} />
					<TextField label="Cargo" placeholder="Digite seu cargo" required={true} />
					<TextField label="Imagem" placeholder="Digite o endereço da imagem" />
					<Dropdown label="Rank" items={ranks} />
					<Button>Criar Card</Button>
				</form>
			</section>
		);
	}
}

export default Form;
