import { useEffect } from "react";
// import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import s from "./Modal.module.css";
// import { ReactComponent as Close } from "../../Icons/Close.svg";

const modalRoot = document.querySelector("#modal-root");

export function Modal({ toggleModal }) {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  // Escape keydown///
  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      toggleModal();
    }
  };

  const handleClose = (e) => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };

  // const handleCloseButton = () => {
  //   toggleModal();
  // };

  return createPortal(
    <div className={s.Overlay} onClick={handleClose}>
      <div className={s.Modal}>
        <form>
          <input type="text" />
          <input type="tel" />
          <button type="submit">confirm</button>
        </form>
      </div>
    </div>,
    modalRoot
  );
}

// Modal.propTypes = {
//   children: PropTypes.node,
// };
