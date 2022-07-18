import { useNavigate } from 'react-router-dom';
import { useListaParticipantes } from "../state/hooks/useListaParticipantes";
import { useSorteador } from '../state/hooks/useSorteador';
import './Rodape.css'

const Rodape = () => {

  const navegarPara = useNavigate()
	const participantes = useListaParticipantes();
	const sortear = useSorteador()
  const iniciar = () =>{
		sortear()
    navegarPara('/sorteio')
  }
	return (
		<footer className='rodape-configuracoes'>
			<button disabled={participantes.length < 3} onClick={iniciar}>Iniciar brincadeira</button>
			<img src="/imagens/sacolas.png" alt="Sacolas de compras" />
		</footer>
	);
};

export default Rodape;
