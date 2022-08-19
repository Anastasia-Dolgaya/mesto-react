import PopupWithForm from './PopupWithForm';
import Input from './Input';
import useField from './useField';
import useForm from './useForm';
import { validateProfile } from 'utils/utils';
import { useContext } from 'react';
import { CurrentUserContext } from 'contexts/CurrentUserContext';

function EditProfilePopup({ isOpen, onClose, onUpdateUser, buttonContent, onOverlayClick }) {
  const currentUser = useContext(CurrentUserContext);
  const { name, about } = currentUser;
  const form = useForm({ name, about }, onUpdateUser, validateProfile);
  const nameField = useField('name', name, form);
  const aboutField = useField('about', about, form);

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      buttonContent={buttonContent}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={form.handleSubmit}
      hasErrors={!form.noErrors}
      onOverlayClick={onOverlayClick}
    >
      <Input
        type="text"
        id="name-input"
        inputname="name"
        value={nameField.value}
        placeholder="Имя"
        onChange={nameField.handleChange}
        onBlur={nameField.handleBlur}
        onFocus={nameField.handleFocus}
        hasErrors={nameField.error}
        errorMessage={nameField.error}
      />
      <Input
        type="text"
        id="about-input"
        inputname="about"
        value={aboutField.value}
        placeholder="О себе"
        onChange={aboutField.handleChange}
        onBlur={aboutField.handleBlur}
        onFocus={aboutField.handleFocus}
        hasErrors={aboutField.error}
        errorMessage={aboutField.error}
      />
    </PopupWithForm>
  );
}

export default EditProfilePopup;
