import logo from "./logo.svg";
import "./App.css";
import AddToDo from "./components/AddToDo";
import ToDoItems from "./components/ToDoItems";
import { toDoItems } from "./data/toDoItem";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      toDoItems,
      newToDoItemTitle: "",
    };
  }

  addToDoItem = (toDoItem) => {
    this.state.toDoItems.push(toDoItem);
    this.setState({ toDoItems: toDoItems, newToDoItemTitle: "" });
  };

  updateToDoItemTitle = (newToDoItemTitle) => {
    this.setState({ newToDoItemTitle: newToDoItemTitle });
  };

  toggleComplete = (index) => {
    let toDoItems = this.state.toDoItems;
    toDoItems[index].complete = !toDoItems[index].complete;
    this.setState({ toDoItems: toDoItems });
  };

  render = () => {
    return (
      <div className="appContainer">
        <AddToDo
          addToDoItem={this.addToDoItem}
          newToDoItemTitle={this.state.newToDoItemTitle}
          updateToDoItemTitle={this.updateToDoItemTitle}
        />
        <ToDoItems
          toDoItems={this.state.toDoItems}
          toggleComplete={this.toggleComplete}
        />
      </div>
    );
  };
}

export default App;
