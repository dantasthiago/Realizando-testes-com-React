import React, { useRef, useState } from "react";
import { useAdicionarParticipante } from "../state/hooks/useAdicionarParticipante";
import { useMensagemDeErro } from "../state/hooks/useMensagemErro";
import "./Formulario.css";

const Formulario = () => {
	const [nome, setNome] = useState("");

	const inputRef = useRef<HTMLInputElement>(null);

	const adicionarNaLista = useAdicionarParticipante();

	const mensagemDeErro = useMensagemDeErro();

	const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
		evento.preventDefault();
		adicionarNaLista(nome);
		setNome("");
		inputRef.current?.focus();
	};

	return (
		<form onSubmit={adicionarParticipante}>
			<div className='grupo-input-btn'>
				<input
					ref={inputRef}
					value={nome}
					onChange={(evento) => setNome(evento.target.value)}
					type='text'
					placeholder='insira os nomes dos participantes'
				/>
				<button disabled={!nome}>Adicionar</button>
				{mensagemDeErro && <p role='alert'>{mensagemDeErro}</p>}
			</div>
		</form>
	);
};

export default Formulario;
