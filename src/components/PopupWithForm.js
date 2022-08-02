function PopupWithForm(props) {
  return (
    <div className={`popup popup_content_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className={`popup__container popup__container_content_${props.name}`}>
        <button type="button" className="popup__close-button" onClick={props.onClose}></button>
        <form className="popup__form" name={`${props.name}`} noValidate>
          <h2 className="popup__title">{props.title}</h2>
          {props.children}
          <button
            type="submit"
            className={`popup__save-button popup__save-button_content_${props.name}`}
          >
            {props.buttonContent}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
