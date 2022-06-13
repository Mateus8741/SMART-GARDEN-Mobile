import banana from '../../assets/plantation/banana.png';
import lettuce from '../../assets/plantation/lettuce.png';
import tomato from '../../assets/plantation/tomato.png';
import cilantro from '../../assets/plantation/cilantro.png';

export const products = [
  {
    id: 1,
    nome: 'Banana',
    categoria: 'Frutas',
    img: banana,
    colheita: '75 a 150 dias',
    progresso: '30',
  },
  {
    id: 2,
    nome: 'Alface',
    categoria: 'Verduras',
    img: lettuce,
    colheita: '80 a 90 dias',
    progresso: '25',
  },
  {
    id: 3,
    nome: 'Tomate',
    categoria: 'Frutas',
    img: tomato,
    colheita: '110 a 120 dias',
    progresso: '10',
  },
  {
    id: 4,
    nome: 'Coentro',
    categoria: 'Verduras',
    img: cilantro,
    colheita: '50 a 70 dias',
    progresso: '50',
  },
];
