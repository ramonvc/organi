import React, { useState } from "react";
import "./Form.css";
import TextField from "../TextField";
import Dropdown from "../Dropdown";
import Button from "../Button";

const Form = () => {
	const [name, setName] = useState("");
	const [position, setPosition] = useState("");
	const [image, setImage] = useState("");
	const [rank, setRank] = useState("");

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

	return (
		<section className="form">
			<form onSubmit={onSave}>
				<h2>Preenche os dados para criar o card do jogador</h2>
				<TextField
					label="Nome"
					placeholder="Digite seu nome"
					required={true}
					value={name}
					onInput={(value) => setName(value)}
				/>
				<TextField
					label="Cargo"
					placeholder="Digite seu cargo"
					required={true}
					value={position}
					onInput={(value) => setPosition(value)}
				/>
				<TextField
					label="Imagem"
					placeholder="Digite o endereço da imagem"
					value={image}
					onInput={(value) => setImage(value)}
				/>
				<Dropdown 
					label="Rank" 
					items={ranks} 
					value={rank} 
					onChanged={(value) => setRank(value)} 
				/>
				<Button>Criar Card</Button>
			</form>
		</section>
	);
};

export default Form;
