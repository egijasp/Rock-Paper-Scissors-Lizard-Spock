import './Results.scss';
import { FC } from 'react';

type ResultsProps = {
    clickHandler: () => void,
}

const Results:FC<ResultsProps> = ({ clickHandler }) => (
  <div className="results-container">
    <div className="results">
      <button
        className="btn btn-start"
        onClick={clickHandler}
      >
        PlAY AGAIN
      </button>
    </div>
  </div>
);

export default Results;
