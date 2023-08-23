export const ContactForm = ({ size, label, index, type, value, pattern, max, setValue, name }) => {
  return (
    <div className={"col-md-" + size + " mb-3"}>
      <label htmlFor={"validationCustom0" + index}>{label}</label>
      {type !== "textarea" && (
        <input
          type={type}
            
          id={"validationCustom0" + index}
          placeholder={"Enter " + label}
          value={value}
          onChange={(e) => setValue(name, e.target.value)}
          pattern={pattern}
          maxLength={max}
          required
        />
      )}
      {type === "textarea" && (
        <textarea
          className="form-control"
          id={"validationCustom0" + index}
          placeholder={"Enter " + label}
          value={value}
          onChange={(e) => setValue(name, e.target.value)}
          pattern={pattern}
          maxLength={max}
          required
        />
      )}
      <div className="invalid-feedback">Please Enter Valid {label}</div>

      
    </div>
  );
};
