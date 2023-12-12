import FirstLineAndSort from "./FirstLineAndSort";
import { useSelector } from "react-redux";
import TheUser from "./TheUser";

function ShowAllContact() {
  const items = useSelector((state) => state.books.users);

  return (
    <table>
      <FirstLineAndSort />
      {items?.map((el) => (
        <TheUser user={el}check={el.check} id={el.id} edit={el.edit}/>
      ))}
    </table>
  );
}

export default ShowAllContact;
