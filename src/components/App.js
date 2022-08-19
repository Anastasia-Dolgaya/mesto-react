import { useState, useEffect } from 'react';
import { api } from 'utils/Api';
import Footer from './Footer';
import Header from './Header';
import ImagePopup from './ImagePopup';
import Main from './Main';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ConfirmationPopup from './ConfirmationPopup';
import { CurrentUserContext } from 'contexts/CurrentUserContext';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isConfirmationPopupOpen, setConfirmationPopupOpen] = useState({
    open: false,
    card: {},
  });
  const [selectedCard, setSelectedCard] = useState({
    selected: false,
    card: {},
  });
  const [currentUser, setCurrentUser] = useState({ name: '', about: '' });
  const [cards, setCards] = useState([]);
  const [buttonContent, setButtonContent] = useState('Сохранить');
  const [addButtonContent, setAddButtonContent] = useState('Создать');
  const [isLoading, setIsLoading] = useState(true);

  // fetch initial data
  useEffect(() => {
    api
      .fetchUserData()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => console.log(`Ошибка: ${err}`))
      .finally(() => {
        setIsLoading(false);
      });

    api
      .fetchInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
  }, []);

  // open popups
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
    document.addEventListener('keydown', handleEscClose);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
    document.addEventListener('keydown', handleEscClose);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
    document.addEventListener('keydown', handleEscClose);
  }

  function handleConfirmationPopupClick(card) {
    setConfirmationPopupOpen({ open: true, card: card });
    document.addEventListener('keydown', handleEscClose);
  }

  // close popups
  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard({ selected: false, card: {} });
    setConfirmationPopupOpen({ open: false, card: {} });
    document.removeEventListener('keydown', handleEscClose);
  }

  function handleEscClose(e) {
    if (e.key === 'Escape') {
      closeAllPopups();
    }
  }

  function handleOverlayClick(e) {
    if (e.currentTarget === e.target) {
      closeAllPopups();
    }
  }

  // update profile
  function handleUpdateUser(data) {
    setButtonContent('Сохранение');
    api
      .updateUserData(data)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => console.log(`Ошибка: ${err}`))
      .finally(() => {
        setButtonContent('Сохранить');
      });
    closeAllPopups();
  }

  function handleUpdateAvatar(data) {
    setButtonContent('Сохранение');
    api
      .updateUserAvatar(data)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => console.log(`Ошибка: ${err}`))
      .finally(() => {
        setButtonContent('Сохранить');
      });
    closeAllPopups();
  }

  // add new card and card functions
  function handleAddPlaceSubmit(data) {
    setAddButtonContent('Сохранение');
    api
      .addNewCard(data)
      .then((res) => {
        setCards([res, ...cards]);
      })
      .catch((err) => console.log(`Ошибка: ${err}`))
      .finally(() => {
        setAddButtonContent('Создать');
      });
    closeAllPopups();
  }

  function handleCardClick(card) {
    setSelectedCard({ selected: true, card: card });
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api
      .fetchLikes(card._id, isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
    closeAllPopups();
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onDeleteClick={handleConfirmationPopupClick}
          cards={cards}
          onCardLike={handleCardLike}
        />
        <Footer />
      </div>

      {!isLoading && isEditProfilePopupOpen && (
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
          buttonContent={buttonContent}
          onOverlayClick={handleOverlayClick}
        />
      )}

      {isAddPlacePopupOpen && (
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
          buttonContent={addButtonContent}
          onOverlayClick={handleOverlayClick}
        />
      )}

      {isConfirmationPopupOpen && (
        <ConfirmationPopup
          isOpen={isConfirmationPopupOpen.open}
          onClose={closeAllPopups}
          onConfirmation={handleCardDelete}
          card={isConfirmationPopupOpen.card}
          onOverlayClick={handleOverlayClick}
        />
      )}

      {isEditAvatarPopupOpen && (
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
          buttonContent={buttonContent}
          onOverlayClick={handleOverlayClick}
        />
      )}

      <ImagePopup
        isSelected={selectedCard.selected}
        onClose={closeAllPopups}
        link={selectedCard.card.link}
        title={selectedCard.card.name}
        onOverlayClick={handleOverlayClick}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;
