import rock from '../icons/hand_rock.svg';
import paper from '../icons/hand-paper.svg';
import scissors from '../icons/hand-scissors.svg';
import lizard from '../icons/hand-lizard.svg';
import spock from '../icons/hand-spock.svg';

type GameData = {
  name: string,
  image: string,
  beats: string[];
}

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
export type { GameData };
