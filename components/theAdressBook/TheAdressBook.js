import "./style.css";
import ShowAllContact from "./ShowAllContact";
import AddNewItem from "./AddNewItem";
import CountChecked from "./CountChecked";

function TheAdressBook() {
  return (
    <div>
      <ShowAllContact />
      <CountChecked />
      <AddNewItem />
    </div>
  );
}

export default TheAdressBook;
