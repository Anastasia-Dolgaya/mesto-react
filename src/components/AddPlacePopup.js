import PopupWithForm from './PopupWithForm';
import Input from './Input';
import { validateCard } from 'utils/utils';
import useField from './useField';
import useForm from './useForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace, buttonContent, onOverlayClick }) {
  const form = useForm({ name: '', link: '' }, onAddPlace, validateCard);
  const titleField = useField('name', '', form);
  const linkField = useField('link', '', form);

  let buttonNotActive;
  if (titleField.value === '' || linkField.value === '' || form.noErrors === false) {
    buttonNotActive = true;
  }

  return (
    <PopupWithForm
      name="card"
      title="Новое место"
      buttonContent={buttonContent}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={form.handleSubmit}
      hasErrors={buttonNotActive}
      onOverlayClick={onOverlayClick}
    >
      <Input
        type="text"
        id="card-name-input"
        inputname="name"
        value={titleField.value}
        placeholder="Название"
        onChange={titleField.handleChange}
        onBlur={titleField.handleBlur}
        onFocus={titleField.handleFocus}
        hasErrors={titleField.error}
        errorMessage={titleField.error}
      />
      <Input
        type="url"
        id="link-input"
        inputname="link"
        value={linkField.value}
        placeholder="Ссылка на картинку"
        onChange={linkField.handleChange}
        onBlur={linkField.handleBlur}
        onFocus={linkField.handleFocus}
        hasErrors={linkField.error}
        errorMessage={linkField.error}
      />
    </PopupWithForm>
  );
}

// function AddPlacePopup({ isOpen, onClose, onAddPlace, buttonContent }) {
//   const [title, setTitle] = useState('');
//   const [link, setLink] = useState('');

//   function handleTitleChange(e) {
//     setTitle(e.target.value);
//   }
//   function handleLinkChange(e) {
//     setLink(e.target.value);
//   }

//   function handleSubmit(e) {
//     e.preventDefault();

//     onAddPlace({
//       name: title,
//       link: link,
//     });
//     setTitle('');
//     setLink('');
//   }

//   return (
//     <PopupWithForm
//       name="card"
//       title="Новое место"
//       buttonContent={buttonContent}
//       isOpen={isOpen}
//       onClose={onClose}
//       onSubmit={handleSubmit}
//     >
//       <Input
//         type="text"
//         id="card-name-input"
//         inputname="name"
//         value={title}
//         placeholder="Название"
//         minLength="2"
//         maxLength="30"
//         onChange={handleTitleChange}
//       />
//       <Input
//         type="url"
//         id="link-input"
//         inputname="link"
//         value={link}
//         placeholder="Ссылка на картинку"
//         onChange={handleLinkChange}
//       />
//     </PopupWithForm>
//   );
// }

export default AddPlacePopup;
