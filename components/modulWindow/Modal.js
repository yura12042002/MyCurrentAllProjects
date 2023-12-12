import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../features/modal/modalSlice";

function Modal() {
  const modalActive = useSelector((state) => state.content.isOpen);
  const contentModal = useSelector((state) => state.content.content);
  const dispatch = useDispatch();

  return (
    <div
      className={modalActive ? "modal active" : "modal"}
      onClick={() => dispatch(closeModal())}
    >
      <div
        className={modalActive ? "modalBlock active" : "modalBlock"}
        onClick={(e) => e.stopPropagation()}
      >
        {contentModal}
        <button onClick={() => dispatch(closeModal())}>закрыть</button>
      </div>
    </div>
  );
}

export default Modal;
