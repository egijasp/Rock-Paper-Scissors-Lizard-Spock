import { useState } from 'react';
import Button from '../components/Button/Button';
import './Home.scss';
import Rules from '../components/Rules/Rules';
import NameInput from '../components/NameInput/NameInput';
import Game from './Game';

const Home = () => {
  const [rulesOpen, setRulesOpen] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [startGame, setStartGame] = useState(false);
  const [playerNameModal, setPlayerNameModal] = useState(false);

  const closeRulesModal = () => {
    setRulesOpen(false);
  };

  return (
    <div className="container">
      {playerNameModal && (
      <NameInput
        value={playerName}
        onChange={(e) => {
          setPlayerName(e.target.value);
        }}
        placeholder="Write your name..."
        onSubmit={(e) => {
          e.preventDefault();
          if (!playerName) {
            return alert('You must enter a name to start the game!');
          }
          setStartGame(true);
          setPlayerNameModal(false);
          return undefined;
        }}
      />
      )}
      {rulesOpen && (
      <Rules
        close={closeRulesModal}
        onClick={closeRulesModal}
      />
      )}
      {
        startGame ? (
          <Game
            name={playerName}
          />
        ) : (
          <div
            style={{ display: rulesOpen ? 'none' : 'grid' }}
            className="home"
          >
            <img
              className="gif"
              src="https://y.yarn.co/df4ffaf2-307c-443c-95a8-307169f1a554_text.gif"
              width="500"
              alt=""
            />
            <div className="home__btn-wrapper">
              <Button
                className="btn btn-start margin-right"
                title="start"
                type="button"
                clickHandler={() => {
                  setPlayerNameModal(true);
                }}
              />
              <Button
                className="btn btn-rules margin-left"
                title="rules"
                type="button"
                clickHandler={() => {
                  setRulesOpen(true);
                }}
              />
            </div>
          </div>
        )
}
    </div>
  );
};

export default Home;
