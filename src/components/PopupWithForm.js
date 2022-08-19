function PopupWithForm({
  name,
  isOpen,
  onClose,
  title,
  children,
  buttonContent,
  onSubmit,
  hasErrors,
  onOverlayClick,
}) {
  return (
    <div
      className={`popup popup_content_${name} ${isOpen ? 'popup_opened' : ''}`}
      onClick={onOverlayClick}
    >
      <div className={`popup__container popup__container_content_${name}`}>
        <button type="button" className="popup__close-button" onClick={onClose}></button>
        <form className="popup__form" name={`${name}`} noValidate onSubmit={onSubmit}>
          <h2 className="popup__title">{title}</h2>
          {children}
          <button
            type="submit"
            className={`popup__save-button popup__save-button_content_${name} ${
              hasErrors ? 'popup__save-button_disabled' : ''
            }`}
            disabled={hasErrors}
          >
            {buttonContent}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
