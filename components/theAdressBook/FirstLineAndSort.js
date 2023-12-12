import React from "react";
import { useState } from "react";
import { FaSortAmountDownAlt } from "@react-icons/all-files/fa/FaSortAmountDownAlt";
import { FaSortAmountDown } from "@react-icons/all-files/fa/FaSortAmountDown";
import { FaSort } from "@react-icons/all-files/fa/FaSort";
import { useDispatch, useSelector } from "react-redux";
import {
  allCheckBox,
  sortDown,
  sortHight,
} from "../../features/adressBook/adressBookSlice";

function FirstLineAndSort() {
  
  const items = useSelector((state) => state.books.users);
  const dispatch = useDispatch();
  const [sort, setSort] = useState({
    selected: "",
    name: "withoutSort",
    surname: "withoutSort",
    age: "withoutSort",
    addres: "withoutSort",
    email: "withoutSort",
    actions: "",
  });
  const firstLine = Object.keys(sort);
  const handleClickSort = (el) => {
    let newSortOrder;
    if (sort[el] === "withoutSort") {
      newSortOrder = "ascending";
    } else if (sort[el] === "ascending") {
      dispatch(sortDown(el));
      newSortOrder = "descending";
    } else {
      dispatch(sortHight(el));
      newSortOrder = "withoutSort";
    }
    const newSort = firstLine.reduce((acc, item) => {
      if (item === el) {
        acc[item] = newSortOrder;
      } else {
        acc[item] = "withoutSort";
      }
      return acc;
    }, {});
    setSort(newSort);
  };
  const itemsAllChecked = items.every((el) => el.check);
  return (
    <tr>
      {firstLine?.map((el, index) => (
        <td className="firstLine">
          <div className="cellContent">
            {index !== 0 ? (
              el
            ) : (
              <input
                type="checkbox"
                checked={itemsAllChecked}
                onClick={() => dispatch(allCheckBox())}
              />
            )}
            {!(el === "selected" || el === "actions") && (
              <button
                onClick={() => handleClickSort(el)}
                className="sortButton"
              >
                {sort[el] === "withoutSort" ? (
                  <FaSort />
                ) : sort[el] === "ascending" ? (
                  <FaSortAmountDownAlt />
                ) : (
                  <FaSortAmountDown />
                )}
              </button>
            )}
          </div>
        </td>
      ))}
    </tr>
  );
}

export default FirstLineAndSort;
