function ImagePopup(props) {
  return (
    <div className={`popup popup_content_image ${props.isSelected ? 'popup_opened' : ''}`}>
      <div className="popup__box">
        <button type="button" className="popup__close-button" onClick={props.onClose}></button>
        <figure className="popup__image-box">
          <img className="popup__image" src={props.link} alt="картинка" />
          <figcaption className="popup__caption"></figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;
