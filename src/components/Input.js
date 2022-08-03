function Input({ type, id, inputname, value, placeholder, minLength, maxLength }) {
  return (
    <label className="popup__field">
      <input
        type={type}
        id={id}
        className={`popup__input popup__input_type_${inputname}`}
        name={inputname}
        value={value}
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
        required
      />
      <span className={`popup__input-error ${id}-error`}></span>
    </label>
  );
}
export default Input;
