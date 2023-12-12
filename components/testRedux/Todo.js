import React from "react";
import { useState } from "react";
import { AiFillDelete } from "@react-icons/all-files/ai/AiFillDelete";
import { AiFillEdit } from "@react-icons/all-files/ai/AiFillEdit";
import { GrStatusGood } from "@react-icons/all-files/gr/GrStatusGood";
import { GiCancel } from "@react-icons/all-files/gi/GiCancel";
import {
  completedPost,
  todoDelete,
  todoEdit,
} from "../../features/hardTodo/hardTodoSlice";
import { useDispatch } from "react-redux";

function Todo({ todo, id, task, completed }) {
  const dispatch = useDispatch();
  const [newTitle, setNewTitle] = useState(task);
  const [edit, setEdit] = useState(false);

  const handleClickEdit = (id) => {
    dispatch(todoEdit({ id, newTitle }));
    setEdit(!edit);
  };

  const handleClickCancel = () => {
    setEdit(!edit);
    setNewTitle(task);
  };

  return (
    <div className="listTodo" key={id}>
      <input
        type="checkbox"
        className="listTodoChecked"
        checked={completed}
        onClick={() => dispatch(completedPost({ id, todo }))}
      />
      {completed ? (
        <s>
          <p>{task}</p>
        </s>
      ) : (
        <>
          {edit ? (
            <input
              onChange={(e) => setNewTitle(e.target.value)}
              value={newTitle}
            />
          ) : (
            <p>{task}</p>
          )}
        </>
      )}
      {edit ? (
        <>
          <button
            className="listTodoDelete"
            onClick={() => handleClickEdit(id)}
          >
            <GrStatusGood />
          </button>
          <button
            style={{ border: 0, background: 0, fontSize: 20 }}
            onClick={() => handleClickCancel()}
          >
            <GiCancel />
          </button>
        </>
      ) : (
        <>
          <button
            className="listTodoDelete"
            onClick={() => dispatch(todoDelete(id))}
          >
            <AiFillDelete />
          </button>
          <button
            style={{ border: 0, background: 0, fontSize: 20 }}
            onClick={() => setEdit(!edit)}
          >
            <AiFillEdit />
          </button>
        </>
      )}
    </div>
  );
}

export default Todo;
