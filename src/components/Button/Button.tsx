import { FC } from 'react';
import './Button.scss';

type ButtonProps = {
    title?: string,
    clickHandler?: () => void,
    type: 'button' | 'submit',
    className?: string,
}

const Button:FC<ButtonProps> = ({
  title, clickHandler, type, className,
}) => (
  <div>
    <button
      className={className}
      type={type}
      onClick={clickHandler}
    >
      {title}
    </button>
  </div>
);

export default Button;
