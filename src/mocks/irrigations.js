import bananas from '../../assets/irrigation/bananas.jpg';
import pumpkins from '../../assets/irrigation/pumpkins.jpg';
import lettuce from '../../assets/irrigation/lettuce.jpg';
import cilandro from '../../assets/irrigation/cilandro.jpg';

export const irrigations = [
  {
    id: 1,
    nome: 'Bananas',
    horario: '7:30am',
    img: bananas,
    area: '6m²',
    estado: 'Irrigado',
  },
  {
    id: 3,
    nome: 'Coentro',
    horario: '03:30pm',
    img: cilandro,
    area: '6m²',
    estado: 'Não irrigado',
  },
  {
    id: 2,
    nome: 'Abóboras',
    horario: '11:00am',
    img: pumpkins,
    area: '6m²',
    estado: 'Irrigado',
  },
  {
    id: 4,
    nome: 'Alface',
    horario: '05:00pm',
    img: lettuce,
    area: '6m²',
    estado: 'Irrigado',
  },
];
