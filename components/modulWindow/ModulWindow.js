import "./style.css";
import Modal from "./Modal";
import { openModal } from "../../features/modal/modalSlice";
import { useDispatch } from "react-redux";

function ModulWindow() {
  const dispatch = useDispatch();

  const modalContent = (
    <div className="modalContent">
      <input className="modalContentInput" />
      <input className="modalContentInput" />
      <button>send</button>
    </div>
  );

  return (
    <div className="main">
      <button
        className="buttonOpen"
        onClick={() => dispatch(openModal(modalContent))}
      >
        open modal
      </button>
      <Modal />
    </div>
  );
}

export default ModulWindow;
