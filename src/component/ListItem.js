function ListItem({ item: { task, status }, handleDelete, handleEdit, index }) {
  //props.item.task, props.item.status

  return (
    <div>
      {" "}
      <li>
        <span
          style={{
            marginRight: "20px",
            textDecoration: status ? "line-through" : "none",
          }}
        >
          {task}
        </span>
        <button onClick={() => handleEdit(index)}>Edit</button>
        <button onClick={() => handleDelete(index)}> Delete </button>
      </li>
    </div>
  );
}

export default ListItem;
