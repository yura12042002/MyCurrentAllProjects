import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeNotification } from "../../features/natification/natificationSlice";

function Notification({ id, text, type, timeOut }) {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(removeNotification(id));
    }, timeOut);
  });

  return (
    <div>
      <p style={{ color: type }}>{text}</p>
    </div>
  );
}

export default Notification;
