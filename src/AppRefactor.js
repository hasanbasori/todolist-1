import { useState } from "react";
import Container from "./component/Container";
import Header from "./component/Header";

function AppRefactor() {
  const [list, setList] = useState([
    {
      task: "kkkk",
      status: true,
    },
  ]);

  const handleDelete = (indexToDelete) => {
    setList(list.filter((item, index) => index !== indexToDelete));
    console.log("kdfhid");
  };

  const handleEdit = (indexToEdit) => {
    const textToEdit = prompt("Enter task");
    setList(
      list.map((item, index) =>
        indexToEdit === index ? { ...item, task: textToEdit } : item
      )
    );
  };

  return (
    <div>
      <Header list={list} setList={setList} />
      <Container
        list={list}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default AppRefactor;
