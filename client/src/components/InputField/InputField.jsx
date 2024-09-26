import React from "react";

import s from "./InputField.module.css";

const InputField = ({
  name,
  id,
  type,
  value,
  label,
  placeholder,
  register,
  onChange,
  error,
}) => {
  return (
    <div className={s.wrap}>
      <label htmlFor={id} className={s.label}>
        {label}
      </label>
      <input
        id={id}
        className={s.input}
        {...register(`${name}`)}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        autoComplete="off"
      />
      {error && <span className={s.error}>{error}</span>}
    </div>
  );
};

export default InputField;
