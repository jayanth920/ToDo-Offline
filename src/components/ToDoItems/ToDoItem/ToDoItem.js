import React, { Component } from "react";
import "./ToDoItem.css";

class ToDoItem extends Component {
  toggleComplete = () => {
    this.props.toggleComplete(this.props.index);
  };

  render() {
    return (
      <div className="toDoItemContainer">
        <h3
          className={
            this.props.toDoItem.complete
              ? "toDoItemComplete toDoItemTitle"
              : "toDoItemInComplete toDoItemTitle"
          }
        >
          {this.props.toDoItem.title}
        </h3>
        <div className="toDoToggle" onClick={this.toggleComplete}>
          Mark as {this.props.toDoItem.complete ? "Incomplete" : "Complete"}
        </div>
      </div>
    );
  }
}

export default ToDoItem;
