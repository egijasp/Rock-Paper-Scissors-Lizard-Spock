import { FC, useEffect, useState } from 'react';
import ReactConfetti from 'react-confetti';
import gameData, { GameData } from '../assets/data/gameData';
import UserSelectionIcon from '../components/UserSelectionIcon/UserSelectionIcon';
import './Game.scss';
import Results from '../components/Results/Results';

const initialState = {
  name: '',
  image: '',
  beats: [''],
};

type GameProps = {
  name: string,
}

const Game:FC<GameProps> = ({ name }) => {
  const [userSelect, setUserSelect] = useState(initialState);
  const [computerSelect, setComputerSelect] = useState(initialState);
  const [score, setScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [message, setMessage] = useState('');
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const player = userSelect.name;
    const computer = computerSelect.name;

    if (!player || !computer) {
      setMessage('Choose you weapon!');
    } else if (player === computer) {
      setMessage('It is a tie!');
    } else if (userSelect.beats.includes(computer)) {
      setMessage('Point to you!');
      setScore(score + 1);
    } else {
      setMessage('Point for computer!');
      setComputerScore(computerScore + 1);
    }
  }, [userSelect]);

  const restartGame = () => {
    setScore(0);
    setComputerScore(0);
    setMessage('');
    setUserSelect(initialState);
    setComputerSelect(initialState);
    setGameOver(false);
  };

  useEffect(() => {
    if (score === 3) {
      setMessage('YES, YOU WIN GAME!!!');
      setGameOver(true);
    } else if (computerScore === 3) {
      setMessage('Oh, no, You lost game!');
      setGameOver(true);
    }
  }, [score, computerScore]);

  const randomComputerSelect = () => {
    const randomSelect = gameData[Math.floor(Math.random() * gameData.length)];
    setComputerSelect(randomSelect);
  };

  const clickHandler = (value: GameData) => {
    setUserSelect(value);
    randomComputerSelect();
  };

  return (
    <div className="game">
      {gameOver && (
        <Results
          clickHandler={() => {
            restartGame();
          }}
        />
      )}
      {score === 3
        && (
        <ReactConfetti
          width={1500}
          height={700}
          numberOfPieces={300}
        />
        )}
      <header className="game__header">
        <span className="header__text">Rock, Paper, Scissors, Lizard, Spock</span>
      </header>
      <div className="game__message">
        <h2 className="heading2">{message}</h2>
      </div>
      <div className="game__field">
        <div className="player-field">
          <div
            className="icon-container"
            style={{ backgroundColor: userSelect.name && 'white' }}
          >
            <img
              className="game__icon"
              src={userSelect?.image}
              alt={userSelect?.name}
            />
          </div>
        </div>
        <div className="game__score">
          <span className="player1">{name}</span>
          <div className="game__score-box">
            <span className="score">
              {score}
              :
              {computerScore}
            </span>
          </div>
          <span className="player2 computer">Computer</span>
        </div>
        <div className="player-field">
          <div
            className="icon-container"
            style={{ backgroundColor: computerSelect.name && 'white' }}
          >
            <img
              className="game__icon"
              src={computerSelect?.image}
              alt={computerSelect?.name}
            />
          </div>
        </div>
      </div>
      <div className="weapon-wrapper">
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
