import React from "react";
import { useState } from "react";
import "./Todo.css";
import { addTodo } from "../../features/simpleTodo/simpleTodoSlice";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import TheTodo from "./TheTodo";

function Todo() {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.simpleTodo.todos);

  const [text, setText] = useState("");

  const onclickButton = () => {
    if (text.trim().length > 0) {
      const newItem = {
        id: v4(),
        task: text,
        completed: false
      };
      dispatch(addTodo(newItem));
      setText("");
    }
  };

  console.log(todos);

  return (
    <div className="cont">
      <div className="contBlock">
        <p className="contBlockTodo">Todo List</p>
        <form className="contBlockEnter">
          <input
            className="contBlockEnterInp"
            onChange={(e) => setText(e.target.value)}
            value={text}
            placeholder="your task..."
            maxlength="16"
          />
          <button
            type="button"
            className="contBlockEnterBut"
            onClick={() => onclickButton()}
          >
            Add task
          </button>
        </form>
        {todos?.map((el) => (
          <TheTodo id={el.id} text={el.task} completed={el.completed}/>
        ))}
      </div>
    </div>
  );
}

export default Todo;
