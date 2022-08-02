function Input(props) {
  return (
    <label className="popup__field">
      <input
        type={props.type}
        id={props.id}
        className={`popup__input popup__input_type_${props.inputname}`}
        name={props.inputname}
        value={props.value}
        placeholder={props.placeholder}
        minLength={props.minLength}
        maxLength={props.maxLength}
        required
      />
      <span className={`popup__input-error ${props.id}-error`}></span>
    </label>
  );
}
export default Input;
