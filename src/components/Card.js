function Card({ card, onCardClick, link, name, likesNumber }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <div className="element">
      <button className="element__delete-button"></button>
      <div className="element__image-container">
        <img className="element__image" src={link} alt={name} onClick={handleClick} />
      </div>
      <div className="element__title-container">
        <h2 className="element__title">{name}</h2>
        <div className="element__like-container">
          <button type="button" className="element__like-button"></button>
          <span className="element__like-number">{likesNumber}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
