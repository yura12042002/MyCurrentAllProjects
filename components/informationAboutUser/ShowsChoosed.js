import React from "react";

function ShowsChoosed({ data, items }) {
  const filtredItems = items.filter((el) => el.checked);
  return (
    <table>
      <tr>
        {filtredItems.map((el) => (
          <th>{el.name}</th>
        ))}
      </tr>
      {data.map((element) => (
        <tr>
          {filtredItems.map((el) => (
            <td>{element[el.name]}</td>
          ))}
        </tr>
      ))}
    </table>
  );
}

export default ShowsChoosed;
