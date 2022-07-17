import shuffle from "just-shuffle";
import { useSetRecoilState } from 'recoil';
import { resultadoAmigoSecreto } from '../atom';
import { useListaParticipantes } from "./useListaParticipantes";

export const useSorteador = () => {
	const participantes = useListaParticipantes();

  const setResultado = useSetRecoilState(resultadoAmigoSecreto)

	return () => {
		const totalDeParticipantes = participantes.length;

		const embaralhado = shuffle(participantes);

    const resultado = new Map<string, string>();

		for (let index = 0; index < totalDeParticipantes; index++) {
			const indiceDoAmigo = index === totalDeParticipantes - 1 ? 0 : index + 1;
      resultado.set(embaralhado[index], embaralhado[indiceDoAmigo])
		}
    setResultado(resultado);
	};
};
