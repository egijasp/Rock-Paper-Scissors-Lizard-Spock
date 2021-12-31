import { useState } from 'react';
import gameData from '../assets/data/gameData';
import UserSelectionIcon from '../components/UserSelectionIcon/UserSelectionIcon';
import Header from '../components/Header/Header';
import './Game.scss';
import Sheldon from '../assets/images/you-win-bazzinga.jpg';

type UserSelection = {
  name: string,
  image: string,
  beats: string[],
}

const winMessage = <img className="win" src={Sheldon} alt="" />;

const message = {
  tie: "It's a draw",
  win: winMessage,
  lost: 'You lost!',
};

const Game = () => {
  const [userSelect, setUserSelect] = useState({ name: '', image: '', beats: [''] });
  const [computerSelect, setComputerSelect] = useState({ name: '', image: '' });

  const player = userSelect.name;
  const computer = computerSelect.name;

  const results = () => {
    if (!player || !computer) {
      return null;
    }
    if (player === computer) {
      return message.tie;
    }
    if (userSelect.beats.includes(computer)) {
      return message.win;
    }
    return message.lost;
  };

  const randomComputerSelect = () => {
    const randomSelect = gameData[Math.floor(Math.random() * gameData.length)];
    setComputerSelect(randomSelect);
  };

  const clickHandler = (value: UserSelection) => {
    setUserSelect(value);
    randomComputerSelect();
  };

  return (
    <div>
      <Header />
      <div className="players-container">
        <div className="player-1">
          <h2 className="heading2">
            You
            :
            <br />
            <img
              className="game__icon"
              src={userSelect.image}
              alt={userSelect.name}
            />
          </h2>
        </div>
        <div>
          <h2
            className="heading2"
          >
            {results()}
          </h2>
        </div>
        <div className="player-2">
          <h2 className="heading2">
            Computer:
            <br />
            <img
              className="game__icon"
              src={computerSelect.image}
              alt={computerSelect.name}
            />
          </h2>
        </div>
      </div>
      <div className="icon__wrapper">
        {gameData.map((select) => (
          <UserSelectionIcon
            key={select.name}
            onClick={() => clickHandler(select)}
            imgSrc={select.image}
            alt={select.name}
            title={select.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Game;
