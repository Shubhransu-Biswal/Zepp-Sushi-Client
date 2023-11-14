import style from "./Input.module.css";
import React from "react";

const Input = React.forwardRef((props, ref) => {
  let classes = `${style.input} ${props.className ? props.className : "else"}`;
  return (
    <div className={classes}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} ref={ref} />
    </div>
  );
});

export default Input;
