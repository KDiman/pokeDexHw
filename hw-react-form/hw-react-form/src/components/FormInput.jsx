const FormInput = (props) => {
  const { pattern, errorMessage, label, onChange, id, ...inputProps } = props;
  return (
    <div className="formInput">
      <label>{label}</label>
      <input {...inputProps} onChange={onChange} />
      <span className="error-message">{errorMessage}</span>
    </div>
  );
};
export default FormInput;

