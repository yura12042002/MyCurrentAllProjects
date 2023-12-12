import React from "react";
import { useState, useEffect } from "react";
import { AiOutlineEnter } from "@react-icons/all-files/ai/AiOutlineEnter";
import { AiFillDelete } from "@react-icons/all-files/ai/AiFillDelete";
import dayjs from "dayjs";

function Comment({ film }) {
  require("dayjs/locale/ru");
  const [comments, setComments] = useState({});
  const [text, setText] = useState("");

  const handleClickNewComment = (id) => {
    if (text.trim().length > 0) {
      const newComment = {
        idComment: Date.now(),
        comment: text,
        time: dayjs().locale("ru").format("HH:mm (DD MMMM YYYY)"),
      };
      if (!comments[id]) {
        comments[id] = [];
      }
      comments[id].push(newComment);
      const updatedComments = { ...comments };
      setComments(updatedComments);
      localStorage.setItem("comments", JSON.stringify(updatedComments));
      setText("");
    }
  };

  const handleClickDeleteComment = (idComment) => {
    const updatedFilmComments = comments[film?.id].filter(
      (el) => el.idComment !== idComment
    );
    const updatedComments = { ...comments, [film?.id]: updatedFilmComments };
    setComments(updatedComments);
    localStorage.setItem("comments", JSON.stringify(updatedComments));
  };

  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem("comments"));
    if (savedComments) {
      setComments(savedComments);
    }
  }, []);

  return (
    <div className="filmInformationComments">
      <p className="filmInformationCommentsName">Comments</p>
      {comments[film?.id]?.map((el) => (
        <div className="comment" key={el.idComment}>
          <p className="commentText">{el?.comment}</p>

          <button
            className="commentDelete"
            onClick={() => handleClickDeleteComment(el.idComment)}
          >
            <AiFillDelete />
            <p className="commentTime">{el?.time}</p>
          </button>
        </div>
      ))}
      <div className="filmInformationCommentsNew">
        <input
          className="filmInformationCommentsInput"
          placeholder="Leave a comment"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <button
          className="filmInformationCommentsButton"
          onClick={() => handleClickNewComment(film.id)}
        >
          <AiOutlineEnter />
        </button>
      </div>
    </div>
  );
}

export default Comment;
