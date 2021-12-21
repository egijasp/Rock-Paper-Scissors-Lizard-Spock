import { AiOutlineCloseCircle } from 'react-icons/all';
import { FC } from 'react';
import rulesImage from '../../assets/images/rules-image.png';
import './Rules.scss';

type RulesProps = {
  onClick: () => void
}

const Rules:FC<RulesProps> = ({ onClick }) => (
  <div
    className="rules__container"
  >
    <div className="rules__image-wrapper">
      <span
        className="rules__close"
        onClick={onClick}
      >
        <AiOutlineCloseCircle />
      </span>
      <img
        className="rules__image"
        src={rulesImage}
        alt="rules"
      />
    </div>
  </div>
);

export default Rules;
