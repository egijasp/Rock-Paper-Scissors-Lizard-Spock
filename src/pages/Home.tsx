import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button/Button';
import './Home.scss';
import Rules from '../components/Rules/Rules';

const Home = () => {
  const [rulesOpen, setRulesOpen] = useState(false);

  const closeRulesModal = () => {
    setRulesOpen(false);
  };

  return (
    <div className="container">
      {rulesOpen && (
      <Rules
        close={closeRulesModal}
        onClick={closeRulesModal}
      />
      )}
      <div
        style={{ display: rulesOpen ? 'none' : 'grid' }}
        className="home__container"
      >
        <img
          className="gif"
          src="https://y.yarn.co/df4ffaf2-307c-443c-95a8-307169f1a554_text.gif"
          width="500"
            // src="https://i.gifer.com/2VxN.gif"
          alt=""
        />
        <div className="home__btn-wrapper">
          <Link to="/game">
            <Button
              className="btn btn-start"
              title="start"
              type="button"
            />
          </Link>
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
    </div>
  );
};

export default Home;
