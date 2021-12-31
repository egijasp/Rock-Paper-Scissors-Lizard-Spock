import { AiOutlineCloseCircle } from 'react-icons/all';
import { FC } from 'react';
import './Rules.scss';

type RulesProps = {
  onClick: () => void
  close: () => void
}

const Rules:FC<RulesProps> = ({ onClick, close }) => (
  <div
    className="rules"
    onClick={close}
  >
    <div
      className="rules__image-wrapper"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <span
        className="rules__close"
        onClick={onClick}
      >
        <AiOutlineCloseCircle />
      </span>
      <img
        className="rules__image"
        src="https://i.gifer.com/1zq5.gif"
        // src={rulesImage}
        alt="rules"
      />
    </div>
  </div>
);

export default Rules;
