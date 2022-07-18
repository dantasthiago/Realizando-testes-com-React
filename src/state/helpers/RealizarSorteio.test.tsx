import React from 'react';
import { RealizarSorteio } from './RealizarSorteio';

describe('dado um sorteio de amigo secreto', ()=> {
  test('cada participante não sorteie o próprio nome', ()=>{ 
    const participantes = [
      'thiago',
      'aline',
      'coraline',
      'icaro',
      'gisa',
      'joca'
    ]

    const sorteio = RealizarSorteio(participantes)
    participantes.forEach(participante =>{
      const amigoSecreto = sorteio.get(participante);
      expect(amigoSecreto).not.toEqual(participante);
    })
  })
})