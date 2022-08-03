function ImagePopup({ isSelected, onClose, link, title }) {
  return (
    <div className={`popup popup_content_image ${isSelected ? 'popup_opened' : ''}`}>
      <div className="popup__box">
        <button type="button" className="popup__close-button" onClick={onClose}></button>
        <figure className="popup__image-box">
          <img className="popup__image" src={link} alt="картинка" />
          <figcaption className="popup__caption">{title}</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;
