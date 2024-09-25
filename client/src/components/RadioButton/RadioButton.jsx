import React from "react";
import s from "./RadioButton.module.css";

const RadioButton = ({ name, id, defaultChecked, value, label, register }) => {
  return (
    <div className={s.wrap}>
      <input
        id={id}
        className={s.input}
        {...register(`${name}`)}
        name={name}
        value={value}
        type="radio"
        defaultChecked={defaultChecked}
      />
      <label htmlFor={id} className={s.label}>
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
