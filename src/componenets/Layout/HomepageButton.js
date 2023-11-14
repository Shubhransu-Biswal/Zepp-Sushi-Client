import React from "react";
import style from "./HomepageButton.module.css";
const HomepageButton = (props) => {
  let allClass = `${style.button} ${
    style[props.className ? props.className : ""]
  }`;
  return (
    <button type={props.type} className={allClass}>
      {props.children}
    </button>
  );
};

export default HomepageButton;
