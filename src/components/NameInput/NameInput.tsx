import {
  ChangeEvent, FC, FormEvent, useEffect, useRef,
} from 'react';
import Button from '../Button/Button';
import './NameInput.scss';

type NameInputProps = {
    value: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    placeholder: string,
    onSubmit: (e: FormEvent<HTMLFormElement>) => void
}

const NameInput:FC<NameInputProps> = ({
  value, onChange, placeholder, onSubmit,
}) => {
  const playerNameInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    playerNameInput.current?.focus();
  }, []);

  return (
    <div className="form__container">
      <form
        className="player-name__form"
        onSubmit={onSubmit}
      >
        <input
          className="form__input"
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          ref={playerNameInput}
        />
        <Button
          type="submit"
          className="btn form__button"
          title="Submit"
        />
      </form>
    </div>
  );
};

export default NameInput;
