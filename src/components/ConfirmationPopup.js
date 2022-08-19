import PopupWithForm from './PopupWithForm';

function ConfirmationPopup({ isOpen, onClose, onConfirmation, card }) {
  function handleSubmit(e) {
    e.preventDefault();
    onConfirmation(card);
  }
  return (
    <PopupWithForm
      name="confirmation"
      title="Вы уверены?"
      buttonContent="Да"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  );
}

export default ConfirmationPopup;
