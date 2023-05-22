import React, { useState } from "react";
import "./Form.css";
import TextField from "../TextField";
import Dropdown from "../Dropdown";
import Button from "../Button";

const Form = (props) => {
	const [name, setName] = useState("");
	const [position, setPosition] = useState("");
	const [image, setImage] = useState("");
	const [rank, setRank] = useState("");

	const onSave = (event) => {
		event.preventDefault();
		props.onPlayerRegistered({
			name,
			position,
			image,
			rank,
		});
		clearInputs();
	};

	const clearInputs = () => {
		setName("");
		setPosition("");
		setImage("");
		setRank("");
	};

	return (
		<section className="form-container">
			<form onSubmit={onSave}>
				<h2 className="form-title">Preenche os dados para criar o card do jogador</h2>
				<TextField
					label="Nome"
					placeholder="Digite seu nome"
					required={true}
					value={name}
					onChanged={(value) => setName(value)}
				/>
				<Dropdown
					label="Posição"
					items={props.positions}
					value={position}
					onChanged={(value) => setPosition(value)}
				/>
				<TextField
					label="Imagem"
					placeholder="Digite o endereço da imagem"
					value={image}
					onChanged={(value) => setImage(value)}
				/>
				<Dropdown
					label="Rank"
					items={props.ranks}
					value={rank}
					onChanged={(value) => setRank(value)}
				/>
				<Button>Criar Card</Button>
			</form>
		</section>
	);
};

export default Form;
