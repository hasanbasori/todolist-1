import ListItem from "./ListItem";

function Container(props) {
  //   console.log(props.List);
  return (
    <div>
      <ul>
        {props.list.map((item, index) => (
          <ListItem
            key={index}
            item={item}
            handleDelete={props.handleDelete}
            handleEdit={props.handleEdit}
            index={index}
          />
        ))}
      </ul>
    </div>
  );
}

export default Container;
