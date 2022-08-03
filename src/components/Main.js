import { useState, useEffect } from 'react';
import { api } from '../utils/Api';
import Card from './Card';

function Main({ onAddPlace, onCardClick, onEditAvatar, onEditProfile }) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .fetchUserData()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
  }, []);

  useEffect(() => {
    api
      .fetchInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
  }, []);

  const renderCards = cards.map((card) => (
    <Card
      key={card._id}
      name={card.name}
      link={card.link}
      likesNumber={card.likes.length}
      onCardClick={onCardClick}
      card={card}
    />
  ));

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__author">
          <div className="profile__avatar-container">
            <img className="profile__avatar" src={userAvatar} alt="Аватар пользователя" />
            <button
              type="button"
              className="profile__avatar-button"
              onClick={onEditAvatar}
            ></button>
          </div>
          <div className="profile__info">
            <div className="profile__info-edit">
              <h1 className="profile__name">{userName}</h1>
              <button
                type="button"
                className="profile__edit-button"
                onClick={onEditProfile}
              ></button>
            </div>
            <p className="profile__job">{userDescription}</p>
          </div>
        </div>
        <button type="button" className="profile__add-button" onClick={onAddPlace}></button>
      </section>

      <section className="elements">{renderCards}</section>
    </main>
  );
}

export default Main;
