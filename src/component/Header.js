import { useState } from "react";

function Header(props) {
  const [text, setText] = useState("");
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmitForm = (e) => {
    console.log(props.setList);
    e.preventDefault();
    props.setList([...props.list, { task: text, status: false }]);
    setText("");
  };

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <input type="text" value={text} onChange={handleTextChange} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Header;
