import rock from '../images/rock.png';
import paper from '../images/paper.png';
import scissors from '../images/scissors.png';
import lizard from '../images/lizard.png';
import spock from '../images/spock.png';

const gameData = [
  {
    name: 'rock',
    image: rock,
    beats: ['lizard', 'scissors'],
  },
  {
    name: 'paper',
    image: paper,
    beats: ['rock, spock'],
  },
  {
    name: 'scissors',
    image: scissors,
    beats: ['paper', 'lizard'],
  },
  {
    name: 'lizard',
    image: lizard,
    beats: ['spock', 'paper'],
  },
  {
    name: 'spock',
    image: spock,
    beats: ['scissors', 'rock'],
  },
];

export default gameData;
