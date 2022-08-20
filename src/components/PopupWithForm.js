function PopupWithForm({ name, title, children, buttonContent, onSubmit, hasErrors }) {
  return (
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
  );
}

export default PopupWithForm;
