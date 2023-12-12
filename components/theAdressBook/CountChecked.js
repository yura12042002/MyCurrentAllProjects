import React from "react";
import { deleteSelectedItems } from "../../features/adressBook/adressBookSlice";
import { useDispatch, useSelector } from "react-redux";

function CountChecked() {
  const items = useSelector((state) => state.books.users);
  const dispatch = useDispatch();
  const selectedCount = items.reduce(
    (acc, el) => (el.check ? acc + 1 : acc),
    0
  );

  return (
    <div>
      <button
        style={{ marginTop: 10 }}
        onClick={() => dispatch(deleteSelectedItems())}
      >
        удалить {selectedCount} выбранных{" "}
      </button>
    </div>
  );
}

export default CountChecked;
