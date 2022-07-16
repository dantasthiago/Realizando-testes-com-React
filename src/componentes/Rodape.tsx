import { useNavigate } from 'react-router-dom';
import { useListaParticipantes } from "../state/hooks/useListaParticipantes";

const Rodape = () => {

  const navegarPara = useNavigate()
	const participantes = useListaParticipantes();
  const iniciar = () =>{
    navegarPara('/sorteio')
  }
	return (
		<footer>
			<button disabled={participantes.length < 3} onClick={iniciar}>Iniciar brincadeira</button>
		</footer>
	);
};

export default Rodape;
