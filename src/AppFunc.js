import { useState } from "react";

function AppFunc() {
  const [list, setList] = useState([
    {
      task: "To do 1  ",
      status: true,
    },
    {
      task: "To do 2",
      status: true,
    },
    {
      task: "To do 3 ",
      status: true,
    },
  ]);

  const [text, setText] = useState("");
  const handleTextChange = (e) => {
    setText(e.target.value);
    console.log(e);
  };
  //   const handleAdd = () => {
  //     setList([...list, { task: text, status: false }]);
  //   };

  const handleSubmitAddForm = (e) => {
    e.preventDefault();
    setList([...list, { task: text, status: false }]);
    setText("");
  };
  const handleDelete = (indexToDelete) => {
    setList(list.filter((item, index) => index !== indexToDelete));
  };

  const handleEdit = (indexToEdit) => {
    const textToEdit = prompt("Enter task");
    setList(
      list.map((item, index) =>
        indexToEdit === index ? { ...item, task: textToEdit } : item
      )
    );
  };

  const handleToggleStatus = (indexToToggle) => {
    setList(
      list.map((item, index) =>
        indexToToggle === index ? { ...item, status: !item.status } : item
      )
    );
  };
  return (
    <div>
      <form onSubmit={handleSubmitAddForm}>
        <input type="text" value={text} onChange={handleTextChange} />
        <button>Add</button>

        {/* onClick={handleAdd} */}
      </form>
      <ul>
        {list.map(({ task, status }, index) => (
          <li key={index}>
            <span
              style={{
                marginRight: "20px",
                textDecoration: status ? "line-through" : "none",
              }}
              onClick={() => handleToggleStatus(index)}
            >
              {task}
            </span>
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}> Delete </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppFunc;
