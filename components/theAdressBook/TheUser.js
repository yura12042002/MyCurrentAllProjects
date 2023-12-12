import React, { useState } from "react";
import {
  editUser,
  editUserInList,
  onClickCheckBox,
  deleteUser,
} from "../../features/adressBook/adressBookSlice";
import { useDispatch } from "react-redux";
function TheUser({ user, check, id, edit }) {
  const [oldInformation, setNewInformation] = useState(user);
  const dispatch = useDispatch();
  const handleChangeInputData = (event, id, column) => {
    dispatch(
      editUserInList({ value: event.target.value, id: id, column: column })
    );
  };
  const itemsTd = ["name", "surname", "age", "addres", "email"];

  return (
    <tr>
      <td>
        <input
          type="checkbox"
          checked={check}
          onClick={() => dispatch(onClickCheckBox(id))}
        />
      </td>
      {itemsTd?.map((elem) => (
        <td>
          {user.edit ? (
            <input
              onChange={(event) => handleChangeInputData(event, id, elem)}
              value={user[elem]}
            />
          ) : (
            user[elem]
          )}
        </td>
      ))}
      <td>
        <button onClick={() => dispatch(editUser(id))}>
          {edit ? "Save" : "Edit"}
        </button>
        <button onClick={() => dispatch(deleteUser({ id: id, edit: edit, oldInformation}))}>
          {edit ? "Cancel" : "Delete"}
        </button>
      </td>
    </tr>
  );
}

export default TheUser;
