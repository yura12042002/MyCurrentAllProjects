import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNotification } from "../../features/natification/natificationSlice";
import Notification from "./Notification";

function Natification() {
  const list = useSelector((state) => state.strings.list);
  const dispatch = useDispatch();

  const data = {
    success: {
      id: Date.now(),
      text: "успешно",
      type: "green",
      timeOut: 5000,
    },
    warning: {
      id: Date.now(),
      text: "внимние",
      type: "yellow",
      timeOut: 2000,
    },
    error: {
      id: Date.now(),
      text: "ошибка",
      type: "red",
      timeOut: 1000,
    },
  };
  console.log(list);
  return (
    <div>
      {list?.map((el) => (
        <Notification id = {el.id} text={el.text} type={el.type} timeOut={el.timeOut} />
      ))}
      <button onClick={() => dispatch(addNotification(data.success))}>
        success
      </button>
      <button onClick={() => dispatch(addNotification(data.warning))}>
        warning
      </button>
      <button onClick={() => dispatch(addNotification(data.error))}>
        error
      </button>
    </div>
  );
}

export default Natification;
