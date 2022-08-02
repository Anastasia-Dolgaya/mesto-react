import React from 'react';
import Footer from './Footer';
import Header from './Header';
import ImagePopup from './ImagePopup';
import Input from './Input';
import Main from './Main';
import PopupWithForm from './PopupWithForm';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({ selected: false, card: {} });

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard({ selected: false, card: {} });
  }

  function handleCardClick(card) {
    setSelectedCard({ selected: true, card: card });
  }

  return (
    <>
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
      </div>

      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        buttonContent="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <Input
          type="text"
          id="name-input"
          inputname="name"
          // value=""
          placeholder="Имя"
          minLength="2"
          maxLength="40"
        />
        <Input
          type="text"
          id="about-input"
          inputname="about"
          // value=""
          placeholder="О себе"
          minLength="2"
          maxLength="200"
        />
      </PopupWithForm>

      <PopupWithForm
        name="card"
        title="Новое место"
        buttonContent="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <Input
          type="text"
          id="card-name-input"
          inputname="name"
          // value=""
          placeholder="Название"
          minLength="2"
          maxLength="30"
        />
        <Input
          type="url"
          id="link-input"
          inputname="link"
          // value=""
          placeholder="Ссылка на картинку"
        />
      </PopupWithForm>

      <PopupWithForm name="confirmation" title="Вы уверены?" buttonContent="Да" />

      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        buttonContent="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <Input
          type="url"
          id="avatar-input"
          inputname="link"
          // value=""
          placeholder="Ссылка на картинку"
          onClose={closeAllPopups}
        />
      </PopupWithForm>

      <ImagePopup
        isSelected={selectedCard.selected}
        onClose={closeAllPopups}
        link={selectedCard.card.link}
      />
    </>
  );
}

export default App;
