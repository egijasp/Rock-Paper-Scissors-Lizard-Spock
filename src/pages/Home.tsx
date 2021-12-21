import { useState } from 'react';
import atom from '../assets/images/atom.svg';
import WeaponsList from '../components/WeaponsList/WeaponsList';
import Button from '../components/Button/Button';
import Logo from '../components/Logo/Logo';
import './Home.scss';
import Game from './Game';
import Rules from '../components/Rules/Rules';

const Home = () => {
  const [startGame, setStartGame] = useState(false);
  const [rulesOpen, setRulesOpen] = useState(false);

  return (
    <div className="container">
      {rulesOpen && (
      <Rules
        onClick={() => setRulesOpen(false)}
      />
      )}
      {startGame ? (
        <Game />
      ) : (
        <div className="home__container">
          <Logo
            className="home__logo"
            src={atom}
            alt={atom}
          />
          <div className="home__list-wrapper">
            <WeaponsList />
          </div>
          <div className="home__btn-wrapper">
            <Button
              className="btn btn-start"
              title="start"
              type="button"
              clickHandler={() => {
                setStartGame(true);
              }}
            />
            <Button
              className="btn btn-rules"
              title="rules"
              type="button"
              clickHandler={() => {
                setRulesOpen(true);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
