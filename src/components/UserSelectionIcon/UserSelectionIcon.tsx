import { FC } from 'react';
import './UserSelectionIcon.scss';

type UserSelectionIconProps = {
    onClick: () => void,
    imgSrc: string,
    alt: string,
    title: string
}

const UserSelectionIcon:FC<UserSelectionIconProps> = ({
  onClick, imgSrc, alt, title,
}) => (
  <>
    <button className="icon__button" type="button" onClick={onClick} title={title}>
      <img className="icon" src={imgSrc} alt={alt} />
    </button>
  </>
);

export default UserSelectionIcon;
