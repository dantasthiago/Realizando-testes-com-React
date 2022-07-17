import { useListaParticipantes } from '../state/hooks/useListaParticipantes';

const Sorteio = () => {

  const participantes = useListaParticipantes(
    
  )
	return (
		<section>
			<form>
				<select name='participanteDaVez' id='participanteDaVez'>
          {participantes.map(participante =>  <option key={participante}>{participante}</option>)}
					
				</select>
			</form>
		</section>
	);
};

export default Sorteio;
