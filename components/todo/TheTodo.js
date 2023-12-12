import {
  deleteTodo,
  completedTodo,
} from "../../features/simpleTodo/simpleTodoSlice";
import { useDispatch } from "react-redux";

function TheTodo({ id, text, completed }) {
  const dispatch = useDispatch();
  

  return (
    <div className="contBlockDoing" key={id}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(completedTodo(id))}
      />
      <p className={completed ? "textCompleted" : "textInput"}>{text}</p>
      <button className="basket" onClick={() => dispatch(deleteTodo(id))}>
        <img
          className="iconka"
          src="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-39-256.png"
          alt="icon"
        ></img>
      </button>
    </div>
  );
}

export default TheTodo;
