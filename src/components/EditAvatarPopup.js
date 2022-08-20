import Popup from './Popup';
import PopupWithForm from './PopupWithForm';
import Input from './Input';
import { useRef } from 'react';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, buttonContent }) {
  const avatarInput = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarInput.current.value,
    });
    avatarInput.current.value = '';
  }

  return (
    <Popup isOpen={isOpen} onClose={onClose} type="form" name="avatar">
      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        buttonContent={buttonContent}
        onSubmit={handleSubmit}
      >
        <Input
          type="url"
          id="avatar-input"
          inputname="avatar"
          placeholder="Ссылка на картинку"
          inputRef={avatarInput}
        />
      </PopupWithForm>
    </Popup>
  );
}

export default EditAvatarPopup;
