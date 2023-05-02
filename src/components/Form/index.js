import React from "react";
import "./Form.css";
import TextField from "../TextField";

class Form extends React.Component  {
    render() {
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
    }
};

export default Form;
