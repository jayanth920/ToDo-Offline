import React, { Component } from "react";
import ToDoItem from "./ToDoItem/ToDoItem";

class ToDoItems extends Component {
  render = () => {
    return this.props.toDoItems.map((toDoItem, index) => {
      return (
        <ToDoItem
          toDoItem={toDoItem}
          index={index}
          toggleComplete={this.props.toggleComplete}
        />
      );
    });
  };
}

export default ToDoItems;
