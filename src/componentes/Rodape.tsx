import { useNavigate } from 'react-router-dom';
import { useListaParticipantes } from "../state/hooks/useListaParticipantes";
import { useSorteador } from '../state/hooks/useSorteador';

const Rodape = () => {

  const navegarPara = useNavigate()
	const participantes = useListaParticipantes();
	const sortear = useSorteador()
  const iniciar = () =>{
		sortear()
    navegarPara('/sorteio')
  }
	return (
		<footer>
			<button disabled={participantes.length < 3} onClick={iniciar}>Iniciar brincadeira</button>
		</footer>
	);
};

export default Rodape;
