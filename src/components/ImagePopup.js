function ImagePopup({ link, title }) {
  return (
    <figure className="popup__image-box">
      <img className="popup__image" src={link} alt="картинка" />
      <figcaption className="popup__caption">{title}</figcaption>
    </figure>
  );
}

export default ImagePopup;
