function Input({
  type,
  id,
  inputname,
  value,
  placeholder,
  onChange,
  inputRef,
  onBlur,
  onFocus,
  hasErrors,
  errorMessage,
}) {
  return (
    <label className="popup__field">
      <input
        type={type}
        id={id}
        className={`popup__input ${hasErrors ? 'popup__input_invalid' : ''}`}
        name={inputname}
        value={value}
        placeholder={placeholder}
        required
        onChange={onChange}
        ref={inputRef}
        onBlur={onBlur}
        onFocus={onFocus}
      />
      <span className={`popup__input-error  ${hasErrors ? 'popup__input-error_active' : ''}`}>
        {errorMessage}
      </span>
    </label>
  );
}

export default Input;
