import Popup from './Popup';
import PopupWithForm from './PopupWithForm';

function ConfirmationPopup({ isOpen, onClose, onConfirmation, card }) {
  function handleSubmit(e) {
    e.preventDefault();
    onConfirmation(card);
  }
  return (
    <Popup isOpen={isOpen} onClose={onClose} type="form" name="confirmation">
      <PopupWithForm
        name="confirmation"
        title="Вы уверены?"
        buttonContent="Да"
        onSubmit={handleSubmit}
      />
    </Popup>
  );
}

export default ConfirmationPopup;
