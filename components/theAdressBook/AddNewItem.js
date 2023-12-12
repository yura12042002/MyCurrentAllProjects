import React from "react";
import { useState } from "react";
import { addUser } from "../../features/adressBook/adressBookSlice";
import { useDispatch } from "react-redux";

function AddNewItem() {
  const dispatch = useDispatch();
  const [newItem, setNewItem] = useState({
    id: Date.now(),
    check: false,
    name: "",
    surname: "",
    age: "",
    addres: "",
    email: "",
    edit: false,
  });
  const handleChangeNewItem = (event, column) => {
    setNewItem({ ...newItem, [column]: event.target.value });
  };

  const handleClickAdd = (event) => {
    event.preventDefault();
    const itemIsFilled = Object.values(newItem)
      .filter(
        (el, index) => index !== 0 && index !== 1 && index !== 7 && index !== 8
      )
      .every((el) => el.trim().length > 0);
    if (itemIsFilled) {
      dispatch(addUser(newItem));
      setNewItem({
        id: Date.now(),
        check: false,
        name: "",
        surname: "",
        age: "",
        addres: "",
        email: "",
        edit: false,
      });
    }
  };

  const newItemKeys = Object.keys(newItem).slice(2, 7);
  return (
    <form>
      <p>Add a Contact</p>
      {newItemKeys?.map((el) => (
        <input
          onChange={(event) => handleChangeNewItem(event, el)}
          value={newItem[el]}
        />
      ))}
      <button onClick={(e) => handleClickAdd(e)}>Add</button>
    </form>
  );
}

export default AddNewItem;
