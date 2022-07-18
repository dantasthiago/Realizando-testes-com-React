import { useSetRecoilState } from "recoil";
import { resultadoAmigoSecreto } from "../atom";
import { RealizarSorteio } from '../helpers/RealizarSorteio';
import { useListaParticipantes } from "./useListaParticipantes";

export const useSorteador = () => {
	const participantes = useListaParticipantes();

	const setResultado = useSetRecoilState(resultadoAmigoSecreto);

	return () => {
		const resultado = RealizarSorteio(participantes)
		setResultado(resultado);
	};
};
