import {
  ChangeEvent, FC, FormEvent, useEffect, useRef,
} from 'react';
import Button from '../Button/Button';
import './PlayerNameModal.scss';

type NameInputProps = {
    value: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    placeholder: string,
    onSubmit: (e: FormEvent<HTMLFormElement>) => void
    closeForm: () => void,
}

const PlayerNameModal:FC<NameInputProps> = ({
  value, onChange, placeholder, onSubmit, closeForm,
}) => {
  const playerNameInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    playerNameInput.current?.focus();
  }, []);

  return (
    <div
      className="form__container"
      onClick={closeForm}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
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
            className="btn btn-start"
            title="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default PlayerNameModal;
