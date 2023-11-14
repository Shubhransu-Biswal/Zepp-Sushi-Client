import ReactDom from "react-dom";
import style from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={style.backdrop} onClick={props.onClick} />;
};
const ModalWindow = (props) => {
  return (
    <div className={style.modal}>
      <div className={style.content}>{props.children}</div>
    </div>
  );
};
const Modal = (props) => {
  const overlay = document.querySelector("#overlay");
  return (
    <>
      {ReactDom.createPortal(<Backdrop onClick={props.onClick} />, overlay)}
      {ReactDom.createPortal(
        <ModalWindow>{props.children}</ModalWindow>,
        overlay
      )}
    </>
  );
};

export default Modal;
