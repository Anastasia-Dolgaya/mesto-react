function PopupWithForm({ name, isOpen, onClose, title, children, buttonContent }) {
  return (
    <div className={`popup popup_content_${name} ${isOpen ? 'popup_opened' : ''}`}>
      <div className={`popup__container popup__container_content_${name}`}>
        <button type="button" className="popup__close-button" onClick={onClose}></button>
        <form className="popup__form" name={`${name}`} noValidate>
          <h2 className="popup__title">{title}</h2>
          {children}
          <button type="submit" className={`popup__save-button popup__save-button_content_${name}`}>
            {buttonContent}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
