import React, { useState, useEffect } from "react";
import "./style.css";
import Todo from "./Todo";
import { useSelector, useDispatch } from "react-redux";
import { getPosts, addPost } from "../../features/hardTodo/hardTodoSlice";

function TestRedux() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.hardTodo.todos);
  const handleClickAdd = () => {
    if (text.trim().length) {
      dispatch(addPost(text));
      setText("");
    }
  };

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="list">
      <p>TODO</p>
      <div>
        <input
          className="listInput"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <button onClick={() => handleClickAdd()} className="listButton">
          add
        </button>
      </div>
      {todos?.map((el) => (
        <Todo todo={el} id={el.id} task={el.task} completed={el.completed} />
      ))}
    </div>
  );
}

export default TestRedux;
