import React, { Component } from "react";

class App extends Component {
  state = {
    list: [
      { task: "to do1", status: false },
      { task: "to do 2", status: true },
      { task: "to do 3", status: true },
    ],
    text: "",
  };

  // name = "sun";
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     list: [],
  //   };
  //   console.log(this.name);
  // }

  handleAddChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleDeleteChange = (indexToDelete) => {
    this.setState({
      list: this.state.list.filter((item, index) => index !== indexToDelete),
    });
  };
  handleEditChange = (indexToEdit) => {
    const textToEdit = prompt("Enter task");
    const newList = [...this.state.list];
    newList[indexToEdit].task = textToEdit;
    this.setState({
      list: newList,
    });
  };

  handleAdd = () => {
    // const newList = [this.state.list];
    // this.setState({ text: this.state.text, status: false });
    this.setState({
      list: [...this.state.list, { task: this.state.text, status: false }],
      text: "",
    });
  };
  render() {
    console.log(this.props);

    return (
      <div>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleAddChange}
        />
        <button onClick={this.handleAdd}>Add</button>

        {this.state.list.map((item, index) => (
          <ul>
            <li>
              <span
                style={{
                  marginRight: "20px",
                  textDecoration: item.status ? "line-through" : "none",
                }}
              >
                {item.task}{" "}
              </span>
              <button onClick={() => this.handleEditChange(index)}>Edit</button>
              <button onClick={() => this.handleDeleteChange(index)}>
                Delete
              </button>
            </li>
          </ul>
        ))}
      </div>
    );
  }
}

export default App;
