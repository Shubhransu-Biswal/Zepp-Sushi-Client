import style from "./Header.module.css";
import { useState } from "react";
import HeaderBtn from "./HeaderBtn";
import logoThree from "../../assets/logo3Png.gif";
import { Form } from "react-router-dom";

const Header = (props) => {
  const [userName, setUserName] = useState("");
  const getUserData = (data) => {
    const firstLetter = data.slice(0, 1).toUpperCase();
    const name = firstLetter + data.slice(1).toLowerCase();
    setUserName(name);
  };
  return (
    <>
      <header className={style.header}>
        <div className={style.logo3}>
          <img src={logoThree} alt="" />
        </div>
        <div className={style.user}>{`Welcome, ${userName}! 👋`}</div>
        <HeaderBtn
          onClick={props.onOpenCart}
          sendData={getUserData}
        ></HeaderBtn>

        <Form action="/logout" method="POST" className={style.Form}>
          <button className={style.Header_logout}>Log Out</button>
        </Form>
      </header>
    </>
  );
};

export default Header;
